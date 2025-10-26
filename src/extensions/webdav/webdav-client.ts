import axios, { AxiosInstance } from 'axios';

export interface WebDAVConnectionInfo {
    url: string;
    username?: string;
    password?: string;
}

export interface WebDAVResource {
    href: string;
    displayName: string;
    isDirectory: boolean;
    contentType?: string;
    contentLength?: number;
    lastModified?: Date;
    etag?: string;
}

export class WebDAVClient {
    private axios: AxiosInstance;
    private baseUrl: string;

    constructor(connectionInfo: WebDAVConnectionInfo) {
        this.baseUrl = connectionInfo.url;
        
        const config: any = {
            baseURL: connectionInfo.url,
            headers: {
                'Content-Type': 'application/xml',
            },
            maxRedirects: 5  // Follow redirects
        };
        
        // Include auth if username is provided (password can be empty for public shares)
        if (connectionInfo.username !== undefined) {
            config.auth = {
                username: connectionInfo.username,
                password: connectionInfo.password || ''
            };
        }
        
        this.axios = axios.create(config);
    }

    async propfind(path: string, depth: number = 1): Promise<WebDAVResource[]> {
        const requestBody = `<?xml version="1.0" encoding="UTF-8"?>
            <d:propfind xmlns:d="DAV:">
                <d:prop>
                    <d:displayname/>
                    <d:resourcetype/>
                    <d:getcontenttype/>
                    <d:getcontentlength/>
                    <d:getlastmodified/>
                    <d:getetag/>
                </d:prop>
            </d:propfind>`;

        const response = await this.axios.request({
            method: 'PROPFIND',
            url: path,
            headers: {
                'Depth': depth.toString()
            },
            data: requestBody
        });

        return this.parseMultiStatus(response.data);
    }

    async getFile(path: string): Promise<ArrayBuffer> {
        const response = await this.axios.get(path, {
            responseType: 'arraybuffer'
        });
        return response.data;
    }

    async putFile(path: string, content: string | Blob | ArrayBuffer): Promise<void> {
        await this.axios.put(path, content, {
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        });
    }

    async deleteResource(path: string): Promise<void> {
        await this.axios.delete(path);
    }

    async createDirectory(path: string): Promise<void> {
        await this.axios.request({
            method: 'MKCOL',
            url: path
        });
    }

    async moveResource(fromPath: string, toPath: string): Promise<void> {
        const destination = new URL(toPath, this.baseUrl).href;
        await this.axios.request({
            method: 'MOVE',
            url: fromPath,
            headers: {
                'Destination': destination,
                'Overwrite': 'F'
            }
        });
    }

    async copyResource(fromPath: string, toPath: string): Promise<void> {
        const destination = new URL(toPath, this.baseUrl).href;
        await this.axios.request({
            method: 'COPY',
            url: fromPath,
            headers: {
                'Destination': destination,
                'Overwrite': 'F'
            }
        });
    }

    private parseMultiStatus(xml: string): WebDAVResource[] {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, 'text/xml');
        const responses = doc.querySelectorAll('response');
        
        const resources: WebDAVResource[] = [];
        responses.forEach(response => {
            const href = response.querySelector('href')?.textContent || '';
            const displayName = response.querySelector('displayname')?.textContent || '';
            const resourceType = response.querySelector('resourcetype');
            const isDirectory = !!resourceType?.querySelector('collection');
            const contentType = response.querySelector('getcontenttype')?.textContent || undefined;
            const contentLengthStr = response.querySelector('getcontentlength')?.textContent;
            const contentLength = contentLengthStr ? parseInt(contentLengthStr) : undefined;
            const lastModifiedStr = response.querySelector('getlastmodified')?.textContent;
            const lastModified = lastModifiedStr ? new Date(lastModifiedStr) : undefined;
            const etag = response.querySelector('getetag')?.textContent || undefined;

            resources.push({
                href,
                displayName: displayName || href.split('/').filter(Boolean).pop() || '',
                isDirectory,
                contentType,
                contentLength,
                lastModified,
                etag
            });
        });

        return resources;
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }
}


