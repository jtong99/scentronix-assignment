import { StatusCodes } from "http-status-codes";

import type { WebServers } from "@/api/web-servers/webServersModel";
import { webServersRepository } from "@/api/web-servers/webServersRepository";
import { ServiceResponse } from "@/common/models/serviceResponse";
import {findLowestPriorityOnlineServer} from "@/api/web-servers/findServer"
import { logger } from "@/server";

export class webServersService {
  private webServersRepository: webServersRepository;

  constructor(repository: webServersRepository = new webServersRepository()) {
    this.webServersRepository = repository;
  }

  // Retrieves all users from the database
  async findAll(): Promise<ServiceResponse<WebServers[] | null>> {
    try {
      const webServers = await this.webServersRepository.findAllAsync();
      if (!webServers || webServers.length === 0) {
        return ServiceResponse.failure("No web servers found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<WebServers[]>("Web servers found", webServers);
    } catch (ex) {
      const errorMessage = `Error finding web servers: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving web servers.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findServer(): Promise<ServiceResponse<WebServers | null>> {
    try {
      const servers = await this.webServersRepository.findAllAsync();
      
      if (!servers || servers.length === 0) {
        return ServiceResponse.failure<WebServers>(
          "No web servers found", 
          { id: 0, url: "", priority: 0 },
          StatusCodes.NOT_FOUND
        );
      }

      const lowestPriorityOnlineServer = await findLowestPriorityOnlineServer(servers);

      if (!lowestPriorityOnlineServer) {
        return ServiceResponse.failure<WebServers>(
          "No online web servers found", 
          { id: 0, url: "", priority: 0 },
          StatusCodes.NOT_FOUND
        );
      }

      return ServiceResponse.success<WebServers>(
        "Web server found", 
        lowestPriorityOnlineServer
      );
      
    } catch (error) {
      return ServiceResponse.failure<WebServers>(
        "An error occurred while finding servers",
        { id: 0, url: "", priority: 0 },
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export const webServersServiceInstance = new webServersService();
