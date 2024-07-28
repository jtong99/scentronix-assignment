import { WebServers } from './webServersModel';

export async function findLowestPriorityOnlineServer(servers: WebServers[]): Promise<WebServers | null> {
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