# API assignment interview

This is a NodeJS project which is developed with the requirements that find the lowest priority online server with the given servers.

This project was developed with:
- NodeJS
- Express
- Typescript
- Swagger UI
- Vitest (simple unit testing)

# Solution
Path: `src/api/web-servers/findServer.ts`

```typescript
function findServer(servers: WebServers[]):Promise<WebServers | null> {
  if (!servers || servers.length === 0) {
    return null;
  }

  const checkServer = async (server: WebServers): Promise<WebServers | null> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(server.url, { 
        method: "GET", 
        signal: controller.signal 
      });

      if (response.status >= 200 && response.status < 300) {
        return server;
      }
    } catch (error) {
      // Request failed or timed out
    } finally {
      clearTimeout(timeoutId);
    }
    return null;
  };

  // Run all checks in parallel
  const results = await Promise.all(servers.map(checkServer));

  const onlineServers = results.filter((server): server is WebServers => server !== null);

  if (onlineServers.length === 0) {
    return null;
  }

  // Sort the online servers by priority and return the lowest
  return onlineServers.sort((a, b) => a.priority - b.priority)[0];
}
```
- The function receives an input which is the list of servers.
- checkServer will run checking all given servers in parallel. Additionally, the request will be timed out after 5 seconds with no response.
- Finally, sort the result and return the lowest priority online server.

# Run the project

```
# Prerequisites

- Node.js (version 14.x or later recommended)
- npm (usually comes with Node.js)
```

```
# install dependencies
npm ci

# Environment Configuration
cp .env.template .env

# Running the Project in development mode
npm run dev

The server will be run at http://localhost:9000.

Check the API that I implemented at: http://localhost:9000/#/WebServers/get_web_servers_find_server

# Production build

npm run build

Production Mode: Set .env to NODE_ENV="production" then npm run build && npm run start

```

# Unit testing

My test file is located at: `src/api/web-servers/__tests__/webServers.test.ts`

```
npm run test
```

The unit testing covers 3 cases:

- Testing with given servers
- Testing with no online servers
- Testing with random servers (online and offline servers)