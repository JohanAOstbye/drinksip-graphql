import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateOneWithoutIngredientsInput } from "../inputs/DrinkUpdateOneWithoutIngredientsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateWithoutIngredientInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  measure?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateOneWithoutIngredientsInput, {
    nullable: true
  })
  Drink?: DrinkUpdateOneWithoutIngredientsInput | undefined;
}
