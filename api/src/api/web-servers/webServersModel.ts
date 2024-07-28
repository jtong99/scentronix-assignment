import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type WebServers = z.infer<typeof WebServers>;
export const WebServers = z.object({
  id: z.number(),
  url: z.string(),
  priority: z.number(),
});

// Input Validation for 'GET users/:id' endpoint
export const GetWebServersSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
