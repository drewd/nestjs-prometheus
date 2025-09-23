import type { Meter, MetricOptions } from "@opentelemetry/api";
import { MeterSymbol } from "../constants";
import type { MetricDefinition } from "./metric-definition.interface";
import { getToken } from "./token";

export function registerHistogram(name: string, options?: MetricOptions): MetricDefinition {
  const key = getToken(name);
  return {
    KEY: key,
    asProvider: () => ({
      provide: key,
      useFactory(meter: Meter) {
        return meter.createHistogram(name, options);
      },
      inject: [MeterSymbol],
    }),
  };
}
