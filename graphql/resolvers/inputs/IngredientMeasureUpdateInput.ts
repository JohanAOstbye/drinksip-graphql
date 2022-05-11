import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateOneWithoutIngredientsInput } from "../inputs/DrinkUpdateOneWithoutIngredientsInput";
import { IngredientUpdateOneWithoutIngredientMeasureInput } from "../inputs/IngredientUpdateOneWithoutIngredientMeasureInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  measure?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IngredientUpdateOneWithoutIngredientMeasureInput, {
    nullable: true
  })
  ingredient?: IngredientUpdateOneWithoutIngredientMeasureInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateOneWithoutIngredientsInput, {
    nullable: true
  })
  Drink?: DrinkUpdateOneWithoutIngredientsInput | undefined;
}
