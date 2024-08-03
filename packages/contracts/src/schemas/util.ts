import { z, ZodString } from "zod";

export const StringNumberSchema = z
  .string()
  .regex(/^\d+$/)
  .describe('number wrapped as string, e.g. "10"');

export type StringNumber = z.infer<typeof StringNumberSchema>;

export const token = (): ZodString => z.string().regex(/^[a-zA-Z0-9_]+$/);

export const IdSchema = token();
export type Id = z.infer<typeof IdSchema>;

export const TagSchema = token().max(50);
export type Tag = z.infer<typeof TagSchema>;

export const LanguageSchema = z
  .string()
  .max(50)
  .regex(/^[a-zA-Z0-9_+]+$/);
export type Language = z.infer<typeof LanguageSchema>;
