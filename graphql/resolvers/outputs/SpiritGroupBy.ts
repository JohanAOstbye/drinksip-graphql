import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritAvgAggregate } from "../outputs/SpiritAvgAggregate";
import { SpiritCountAggregate } from "../outputs/SpiritCountAggregate";
import { SpiritMaxAggregate } from "../outputs/SpiritMaxAggregate";
import { SpiritMinAggregate } from "../outputs/SpiritMinAggregate";
import { SpiritSumAggregate } from "../outputs/SpiritSumAggregate";
import { SpiritType } from "../../enums/SpiritType";

@TypeGraphQL.ObjectType("SpiritGroupBy", {
  isAbstract: true
})
export class SpiritGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  alcoholContent!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ingredients!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nameLong!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sugar!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  volume!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeType!: string | null;

  @TypeGraphQL.Field(_type => SpiritType, {
    nullable: false
  })
  type!: "WINE" | "BEER" | "SPIRIT";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

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
