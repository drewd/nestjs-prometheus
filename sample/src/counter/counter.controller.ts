import { Controller, Get, Inject } from "@nestjs/common";
import type { Counter } from "@opentelemetry/api";
import hitCounter from "./hit.counter";

@Controller("counter")
export class CounterController {
  constructor(@Inject(hitCounter.KEY) private readonly metric: Counter) {}

  @Get("")
  basic() {
    this.metric.add(1);
  }
}
