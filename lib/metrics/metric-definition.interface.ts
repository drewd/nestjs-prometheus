import type { Provider } from "@nestjs/common";

export interface MetricDefinition {
  KEY: string;
  asProvider: () => Provider;
}
