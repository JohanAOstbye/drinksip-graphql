import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureUpdateManyWithoutIngredientInput } from "../inputs/IngredientMeasureUpdateManyWithoutIngredientInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IngredientUpdateWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientUpdateWithoutSpiritInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateManyWithoutIngredientInput, {
    nullable: true
  })
  IngredientMeasure?: IngredientMeasureUpdateManyWithoutIngredientInput | undefined;
}
