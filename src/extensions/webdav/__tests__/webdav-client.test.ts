/**
 * Unit tests for WebDAV client functionality
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { WebDAVClient } from '../webdav-client';
import type { WebDAVConnectionInfo } from '../webdav-client';
import axios from 'axios';

// Mock axios
vi.mock('axios');
const mockedAxios = axios as any;

describe('WebDAVClient', () => {
    let client: WebDAVClient;
    let connectionInfo: WebDAVConnectionInfo;

    beforeEach(() => {
        connectionInfo = {
            url: 'https://cloud.example.com/remote.php/dav/files/testuser/',
            username: 'testuser',
            password: 'testpass'
        };

        // Mock axios.create to return a mock instance
        mockedAxios.create = vi.fn().mockReturnValue({
            request: vi.fn(),
            get: vi.fn(),
            put: vi.fn(),
            delete: vi.fn()
        });

        client = new WebDAVClient(connectionInfo);
    });

    describe('constructor', () => {
        it('should create client with correct configuration', () => {
            expect(mockedAxios.create).toHaveBeenCalledWith({
                baseURL: connectionInfo.url,
                auth: {
                    username: connectionInfo.username,
                    password: connectionInfo.password
                },
                headers: {
                    'Content-Type': 'application/xml'
                }
            });
        });
    });

    describe('propfind', () => {
        it('should list directory contents', async () => {
            const mockResponse = `<?xml version="1.0"?>
                <d:multistatus xmlns:d="DAV:">
                    <d:response>
                        <d:href>/remote.php/dav/files/testuser/</d:href>
                        <d:propstat>
                            <d:prop>
                                <d:displayname>testuser</d:displayname>
                                <d:resourcetype><d:collection/></d:resourcetype>
                            </d:prop>
                        </d:propstat>
                    </d:response>
                    <d:response>
                        <d:href>/remote.php/dav/files/testuser/test.txt</d:href>
                        <d:propstat>
                            <d:prop>
                                <d:displayname>test.txt</d:displayname>
                                <d:resourcetype/>
                                <d:getcontenttype>text/plain</d:getcontenttype>
                                <d:getcontentlength>100</d:getcontentlength>
                            </d:prop>
                        </d:propstat>
                    </d:response>
                </d:multistatus>`;

            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockResolvedValue({ data: mockResponse });

            const resources = await client.propfind('/');

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'PROPFIND',
                url: '/',
                headers: { 'Depth': '1' },
                data: expect.stringContaining('propfind')
            });

            expect(resources).toHaveLength(2);
            expect(resources[0].isDirectory).toBe(true);
            expect(resources[1].displayName).toBe('test.txt');
            expect(resources[1].isDirectory).toBe(false);
        });

        it('should handle empty directory', async () => {
            const mockResponse = `<?xml version="1.0"?>
                <d:multistatus xmlns:d="DAV:">
                    <d:response>
                        <d:href>/remote.php/dav/files/testuser/emptydir/</d:href>
                        <d:propstat>
                            <d:prop>
                                <d:displayname>emptydir</d:displayname>
                                <d:resourcetype><d:collection/></d:resourcetype>
                            </d:prop>
                        </d:propstat>
                    </d:response>
                </d:multistatus>`;

            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockResolvedValue({ data: mockResponse });

            const resources = await client.propfind('/emptydir/');

            expect(resources).toHaveLength(1);
            expect(resources[0].isDirectory).toBe(true);
        });
    });

    describe('getFile', () => {
        it('should download file contents', async () => {
            const fileContent = new ArrayBuffer(10);
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.get.mockResolvedValue({ data: fileContent });

            const result = await client.getFile('/test.txt');

            expect(mockAxiosInstance.get).toHaveBeenCalledWith('/test.txt', {
                responseType: 'arraybuffer'
            });
            expect(result).toBe(fileContent);
        });

        it('should handle large files', async () => {
            const largeContent = new ArrayBuffer(1024 * 1024 * 10); // 10MB
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.get.mockResolvedValue({ data: largeContent });

            const result = await client.getFile('/large-file.bin');

            expect(result.byteLength).toBe(1024 * 1024 * 10);
        });
    });

    describe('putFile', () => {
        it('should upload string content', async () => {
            const content = 'Hello, World!';
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.put.mockResolvedValue({});

            await client.putFile('/test.txt', content);

            expect(mockAxiosInstance.put).toHaveBeenCalledWith('/test.txt', content, {
                headers: { 'Content-Type': 'application/octet-stream' }
            });
        });

        it('should upload blob content', async () => {
            const blob = new Blob(['test data']);
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.put.mockResolvedValue({});

            await client.putFile('/test.bin', blob);

            expect(mockAxiosInstance.put).toHaveBeenCalledWith('/test.bin', blob, {
                headers: { 'Content-Type': 'application/octet-stream' }
            });
        });
    });

    describe('deleteResource', () => {
        it('should delete a file', async () => {
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.delete.mockResolvedValue({});

            await client.deleteResource('/test.txt');

            expect(mockAxiosInstance.delete).toHaveBeenCalledWith('/test.txt');
        });
    });

    describe('createDirectory', () => {
        it('should create a new directory', async () => {
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockResolvedValue({});

            await client.createDirectory('/newdir/');

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'MKCOL',
                url: '/newdir/'
            });
        });
    });

    describe('moveResource', () => {
        it('should move/rename a file', async () => {
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockResolvedValue({});

            await client.moveResource('/old.txt', '/new.txt');

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'MOVE',
                url: '/old.txt',
                headers: {
                    'Destination': expect.stringContaining('/new.txt'),
                    'Overwrite': 'F'
                }
            });
        });
    });

    describe('copyResource', () => {
        it('should copy a file', async () => {
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockResolvedValue({});

            await client.copyResource('/source.txt', '/dest.txt');

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'COPY',
                url: '/source.txt',
                headers: {
                    'Destination': expect.stringContaining('/dest.txt'),
                    'Overwrite': 'F'
                }
            });
        });
    });

    describe('error handling', () => {
        it('should handle authentication errors', async () => {
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockRejectedValue({
                response: { status: 401 }
            });

            await expect(client.propfind('/')).rejects.toMatchObject({
                response: { status: 401 }
            });
        });

        it('should handle network errors', async () => {
            const mockAxiosInstance = mockedAxios.create();
            mockAxiosInstance.request.mockRejectedValue(new Error('Network Error'));

            await expect(client.propfind('/')).rejects.toThrow('Network Error');
        });
    });
});


