import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientUpdateOneWithoutIngredientMeasureInput } from "../inputs/IngredientUpdateOneWithoutIngredientMeasureInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateWithoutDrinkInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  measure?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IngredientUpdateOneWithoutIngredientMeasureInput, {
    nullable: true
  })
  ingredient?: IngredientUpdateOneWithoutIngredientMeasureInput | undefined;
}
