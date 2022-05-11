import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCountAggregate } from "../outputs/IngredientMeasureCountAggregate";
import { IngredientMeasureMaxAggregate } from "../outputs/IngredientMeasureMaxAggregate";
import { IngredientMeasureMinAggregate } from "../outputs/IngredientMeasureMinAggregate";

@TypeGraphQL.ObjectType("IngredientMeasureGroupBy", {
  isAbstract: true
})
export class IngredientMeasureGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  measure!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ingredientId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  drinkId!: string | null;

  @TypeGraphQL.Field(_type => IngredientMeasureCountAggregate, {
    nullable: true
  })
  _count!: IngredientMeasureCountAggregate | null;

  @TypeGraphQL.Field(_type => IngredientMeasureMinAggregate, {
    nullable: true
  })
  _min!: IngredientMeasureMinAggregate | null;

  @TypeGraphQL.Field(_type => IngredientMeasureMaxAggregate, {
    nullable: true
  })
  _max!: IngredientMeasureMaxAggregate | null;
}
