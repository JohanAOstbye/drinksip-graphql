import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCountAggregate } from "../outputs/DrinkCountAggregate";
import { DrinkMaxAggregate } from "../outputs/DrinkMaxAggregate";
import { DrinkMinAggregate } from "../outputs/DrinkMinAggregate";

@TypeGraphQL.ObjectType("AggregateDrink", {
  isAbstract: true
})
export class AggregateDrink {
  @TypeGraphQL.Field(_type => DrinkCountAggregate, {
    nullable: true
  })
  _count!: DrinkCountAggregate | null;

  @TypeGraphQL.Field(_type => DrinkMinAggregate, {
    nullable: true
  })
  _min!: DrinkMinAggregate | null;

  @TypeGraphQL.Field(_type => DrinkMaxAggregate, {
    nullable: true
  })
  _max!: DrinkMaxAggregate | null;
}
