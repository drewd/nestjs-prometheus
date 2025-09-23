import { PrometheusModule } from "@drewd/nestjs-prometheus";
import { Module } from "@nestjs/common";
import { CounterController } from "./counter.controller";
import hitCounter from "./hit.counter";

@Module({
  imports: [PrometheusModule.forFeature([hitCounter])],
  controllers: [CounterController],
})
export class CounterModule {}
