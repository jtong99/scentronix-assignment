import type { WebServers } from "@/api/web-servers/webServersModel";
import { findLowestPriorityOnlineServer } from "../findServer";

describe("WebServersService", () => {

  const givenMockServers: WebServers[] = [
    {
      id: 1,
      url: "https://does-not-work.perfume.new",
      priority: 1
    },
    {
      id: 2,
      url: "https://gitlab.com",
      priority: 4
    },
    {
      id: 3,
      url: "http://app.scnt.me",
      priority: 3
    },
    {
      id: 4,
      url: "https://offline.scentronix.com",
      priority: 2
    }
  ];

  const notWorkingServers: WebServers[] = [
    {
      id: 1,
      url: "https://not-working1.net",
      priority: 1
    },
    {
      id: 2,
      url: "https://not-working2.net",
      priority: 4
    },
    {
      id: 3,
      url: "https://not-working3.net",
      priority: 3
    },
    {
      id: 4,
      url: "https://not-working4.net",
      priority: 2
    }
  ];

  const workedServers: WebServers[] = [
    {
      id: 1,
      url: "https://google.com",
      priority: 3
    },
    {
      id: 2,
      url: "https://gitlab.com",
      priority: 4
    },
    {
      id: 3,
      url: "https://facebook.com",
      priority: 2
    },
    {
      id: 4,
      url: "https://github.com",
      priority: 1
    },
    {
      id: 5,
      url: "https://not-working3.net",
      priority: 5
    },
    {
      id: 6,
      url: "https://not-working4.net",
      priority: 6
    }
  ];

  describe("Test with no working servers", () => {
    it("should returns null because there are no online servers", async () => {
      // Act
      const result = await findLowestPriorityOnlineServer(notWorkingServers);
      // Assert
      expect(result).toEqual(null);
    });
  });

  describe("Test with random servers", () => {
    it("should returns Github server because it has the lowest priority", async () => {
      // Act
      const result = await findLowestPriorityOnlineServer(workedServers);
      // Assert
      expect(result).toEqual({
        id: 4,
        url: "https://github.com",
        priority: 1
      });
    });
  });

  describe("Test with given data from assignment", () => {
    it("should return app.scnt.me becaust it is the online server with the lowest priority(test at the dev time)", async () => {

      // Act
      const result = await findLowestPriorityOnlineServer(givenMockServers);
      const lowestPriorityServer = {
        id: 3,
        url: "http://app.scnt.me",
        priority: 3
      }
      // Assert
      expect(result).toEqual(lowestPriorityServer);
    });
  });

  
});