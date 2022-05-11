import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritAvgAggregate } from "../outputs/SpiritAvgAggregate";
import { SpiritCountAggregate } from "../outputs/SpiritCountAggregate";
import { SpiritMaxAggregate } from "../outputs/SpiritMaxAggregate";
import { SpiritMinAggregate } from "../outputs/SpiritMinAggregate";
import { SpiritSumAggregate } from "../outputs/SpiritSumAggregate";

@TypeGraphQL.ObjectType("AggregateSpirit", {
  isAbstract: true
})
export class AggregateSpirit {
  @TypeGraphQL.Field(_type => SpiritCountAggregate, {
    nullable: true
  })
  _count!: SpiritCountAggregate | null;

  @TypeGraphQL.Field(_type => SpiritAvgAggregate, {
    nullable: true
  })
  _avg!: SpiritAvgAggregate | null;

  @TypeGraphQL.Field(_type => SpiritSumAggregate, {
    nullable: true
  })
  _sum!: SpiritSumAggregate | null;

  @TypeGraphQL.Field(_type => SpiritMinAggregate, {
    nullable: true
  })
  _min!: SpiritMinAggregate | null;

  @TypeGraphQL.Field(_type => SpiritMaxAggregate, {
    nullable: true
  })
  _max!: SpiritMaxAggregate | null;
}
