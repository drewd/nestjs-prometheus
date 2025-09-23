import { Module, type DynamicModule } from "@nestjs/common";
import { metrics } from "@opentelemetry/api";
import { MeterSymbol } from "./constants";
import type { MetricDefinition } from "./metrics/metric-definition.interface";

@Module({
  providers: [
    {
      provide: MeterSymbol,
      useFactory() {
        return metrics.getMeter("nestjs-prom");
      },
    },
  ],
})
export class PrometheusModule {
  static forFeature(metrics: MetricDefinition[]): DynamicModule {
    return {
      module: PrometheusModule,
      providers: metrics.map(metric => metric.asProvider()),
      exports: metrics.map(metric => metric.KEY),
    };
  }
}
