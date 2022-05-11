import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritUpdateOneWithoutIngredientInput } from "../inputs/SpiritUpdateOneWithoutIngredientInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IngredientUpdateWithoutIngredientMeasureInput", {
  isAbstract: true
})
export class IngredientUpdateWithoutIngredientMeasureInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SpiritUpdateOneWithoutIngredientInput, {
    nullable: true
  })
  spirit?: SpiritUpdateOneWithoutIngredientInput | undefined;
}
