import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { WebServers } from "@/api/web-servers/webServersModel";
import { webServersServiceInstance } from "@/api/web-servers/webServersService";
import { handleServiceResponse, validateRequest } from "@/common/utils/httpHandlers";
import { logger } from "@/server";

export const webServersRegistry = new OpenAPIRegistry();
export const webServersRouter: Router = express.Router();

webServersRegistry.register("WebServers", WebServers);

webServersRegistry.registerPath({
  method: "get",
  path: "/web-servers",
  tags: ["WebServers"],
  responses: createApiResponse(z.array(WebServers), "Success"),
});

webServersRouter.get("/", async (_req: Request, res: Response) => {
  const serviceResponse = await webServersServiceInstance.findAll();
  return handleServiceResponse(serviceResponse, res);
});

webServersRegistry.registerPath({
    method: "get",
    path: "/web-servers/find-server",
    tags: ["WebServers"],
    responses: createApiResponse(WebServers, "Success"),
  });
  
  webServersRouter.get("/find-server", async (_req: Request, res: Response) => {
    const serviceResponse = await webServersServiceInstance.findServer();
    return handleServiceResponse(serviceResponse, res);
  });