import { z } from "zod";

const AppConfigSchema = z.object({
  API_GATEWAY_URL: z.string(),
});
export type Config = z.infer<typeof AppConfigSchema>;

export class AppConfig {
  private static instance: AppConfig;
  private config: Config;

  private constructor() {
    this.config = AppConfigSchema.parse({
      API_GATEWAY_URL: "http://localhost:8000",
    });
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public get<K extends keyof Config>(key: K): Config[K] {
    return this.config[key];
  }

  public getAll(): Config {
    return this.config;
  }
}

export const config = AppConfig.getInstance();
