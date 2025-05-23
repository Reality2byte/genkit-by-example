/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { z, MessageSchema, PartSchema } from "genkit";
import { ToolRequestPartSchema, ToolResponsePartSchema } from "genkit/model";

export const GenerateRequestSchema = z.object({
  system: z.array(PartSchema).optional(),
  messages: z.array(MessageSchema).optional(),
  prompt: z.array(PartSchema).optional(),
  resume: z
    .object({
      respond: z.array(ToolResponsePartSchema).optional(),
      restart: z.array(ToolRequestPartSchema).optional(),
    })
    .optional(),
});
export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;
