# WebDAV Extension

This extension enables WebDAV folder support in geo!space, allowing users to connect to cloud storage providers like Nextcloud and ownCloud as workspace folders.

## Features

- ☁️ **Cloud Storage Integration** - Connect to Nextcloud, ownCloud, and other WebDAV servers
- 🔄 **Full CRUD Operations** - Create, read, update, and delete files and directories
- 🔐 **Secure Authentication** - Basic authentication with app password support
- 🎯 **Seamless Integration** - Works with existing workspace API without code changes
- 📱 **Cross-Platform** - Works on all modern browsers
- 🔌 **Contribution-Based** - Registers as a workspace contribution for clean extensibility

## Files

### Core Implementation

- **`webdav-client.ts`** - Low-level WebDAV HTTP client
  - Implements all WebDAV methods (PROPFIND, GET, PUT, DELETE, MKCOL, MOVE, COPY)
  - Handles XML parsing for WebDAV responses
  - Manages authentication

- **`webdav-filesys.ts`** - File and Directory implementations
  - `WebDAVFileResource` - Implements File interface for WebDAV
  - `WebDAVDirectoryResource` - Implements Directory interface for WebDAV

- **`webdav-workspace-service.ts`** - Extended workspace service
  - Supports both File System Access API and WebDAV
  - Handles connection persistence
  - Manages workspace lifecycle

### UI Components

- **`k-webdav-connect.ts`** - Connection dialog component
  - Form for URL, username, password
  - Built-in help text
  - Validation and error handling

### Commands

- **`webdav-commands.ts`** - Command palette integration
  - `workspace.connect.webdav` - Connect to WebDAV
  - `workspace.connect.nextcloud` - Quick Nextcloud connection
  - `workspace.info` - Show workspace info
  - `workspace.disconnect` - Disconnect workspace

### Entry Point

- **`webdav-extension.ts`** - Main extension file
  - Exports all public APIs
  - Registers components and commands

### Tests

- **`__tests__/webdav-client.test.ts`** - Comprehensive unit tests

## Architecture

This extension uses the **contribution-based workspace architecture**:

```
WorkspaceService
    ├── 'filesystem' contribution (default)
    └── 'webdav' contribution (this extension) ⭐
```

When the extension is loaded, it automatically registers itself as a workspace contribution. The WorkspaceService then handles routing connection requests to the appropriate contribution.

## Usage

### Basic Usage

```typescript
// Import to enable WebDAV support
import './extensions/webdav/webdav-extension.ts';

// Now WebDAV is automatically available as a workspace type
```

### Connecting to Nextcloud

```typescript
import { WebDAVClient, WebDAVConnectionInfo } from './extensions/webdav/webdav-extension.ts';

const connectionInfo: WebDAVConnectionInfo = {
    url: 'https://cloud.example.com/remote.php/dav/files/username/',
    username: 'username',
    password: 'app-password'
};

// Then use workspaceService.connectWorkspace(connectionInfo)
```

### Using the Workspace

Once connected, the workspace works exactly like the local filesystem:

```typescript
const workspace = await workspaceService.getWorkspace();

// Read file
const file = await workspace.getResource('file.txt');
const contents = await file.getContents();

// Write file
const newFile = await workspace.getResource('newfile.txt', { create: true });
await newFile.saveContents('Hello, WebDAV!');

// List directory
const children = await workspace.listChildren();
```

## Server Setup

### Nextcloud CORS Configuration

Add to `.htaccess` in Nextcloud root:

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE"
    Header set Access-Control-Allow-Headers "Authorization, Content-Type, Depth, Destination, If-Match, Overwrite"
    Header set Access-Control-Expose-Headers "ETag, Content-Length"
    Header set Access-Control-Max-Age "3600"
</IfModule>
```

### App Passwords (for 2FA)

If 2FA is enabled:
1. Go to account settings
2. Find "Security" or "App passwords"
3. Generate new app password
4. Use that password instead of regular password

## Architecture

```
WebDAV Extension
├── webdav-client.ts          (HTTP client)
├── webdav-filesys.ts         (File/Directory impl)
├── webdav-workspace-service.ts (Service extension)
├── k-webdav-connect.ts       (UI component)
├── webdav-commands.ts        (Commands)
├── webdav-extension.ts       (Entry point)
└── __tests__/
    └── webdav-client.test.ts (Tests)
```

## API Reference

### WebDAVClient

```typescript
class WebDAVClient {
    constructor(connectionInfo: WebDAVConnectionInfo)
    propfind(path: string, depth?: number): Promise<WebDAVResource[]>
    getFile(path: string): Promise<ArrayBuffer>
    putFile(path: string, content: string | Blob | ArrayBuffer): Promise<void>
    deleteResource(path: string): Promise<void>
    createDirectory(path: string): Promise<void>
    moveResource(fromPath: string, toPath: string): Promise<void>
    copyResource(fromPath: string, toPath: string): Promise<void>
}
```

### WebDAVConnectionInfo

```typescript
interface WebDAVConnectionInfo {
    url: string;        // WebDAV endpoint URL
    username: string;   // Username
    password: string;   // Password or app password
}
```

## Testing

Run tests:

```bash
npm run test -- webdav-client
```

## Security Considerations

- ✅ Always use HTTPS in production
- ✅ Use app passwords for 2FA-enabled accounts
- ✅ Credentials stored in IndexedDB (not localStorage)
- ⚠️ Validate SSL certificates
- ⚠️ Implement rate limiting if needed

## Known Limitations

1. **CORS Required** - Server must have proper CORS configuration
2. **Network Dependency** - Requires internet connection
3. **No Push Notifications** - Cannot detect external changes automatically
4. **Basic Auth Only** - OAuth2 not yet supported

## Future Enhancements

- [ ] Caching with ETags
- [ ] Offline support with queue
- [ ] Conflict resolution
- [ ] File watching/polling
- [ ] OAuth2 authentication
- [ ] Progress indicators for large files

## Documentation

See `docs/` folder in project root for:
- **webdav-integration-investigation.md** - Technical investigation
- **webdav-integration-README.md** - User guide
- **webdav-architecture-diagram.md** - Architecture diagrams
- **webdav-implementation-checklist.md** - Implementation guide

## Support

For issues or questions, check the documentation or raise an issue.

## License

Same as geo!space project.

