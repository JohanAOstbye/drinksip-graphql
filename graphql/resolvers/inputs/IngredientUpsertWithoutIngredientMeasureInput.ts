import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateWithoutIngredientMeasureInput } from "../inputs/IngredientCreateWithoutIngredientMeasureInput";
import { IngredientUpdateWithoutIngredientMeasureInput } from "../inputs/IngredientUpdateWithoutIngredientMeasureInput";

@TypeGraphQL.InputType("IngredientUpsertWithoutIngredientMeasureInput", {
  isAbstract: true
})
export class IngredientUpsertWithoutIngredientMeasureInput {
  @TypeGraphQL.Field(_type => IngredientUpdateWithoutIngredientMeasureInput, {
    nullable: false
  })
  update!: IngredientUpdateWithoutIngredientMeasureInput;

  @TypeGraphQL.Field(_type => IngredientCreateWithoutIngredientMeasureInput, {
    nullable: false
  })
  create!: IngredientCreateWithoutIngredientMeasureInput;
}
