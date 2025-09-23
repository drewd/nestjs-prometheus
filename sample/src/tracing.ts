import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";
import { NodeSDK } from "@opentelemetry/sdk-node";

export const otelSDK = new NodeSDK({
  metricReader: new PrometheusExporter(),
});
