import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSpiritTypeFieldUpdateOperationsInput } from "../inputs/EnumSpiritTypeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IngredientUpdateManyWithoutSpiritInput } from "../inputs/IngredientUpdateManyWithoutSpiritInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SpiritClassificationUpdateEnvelopeInput } from "../inputs/SpiritClassificationUpdateEnvelopeInput";
import { SpiritDescriptionUpdateEnvelopeInput } from "../inputs/SpiritDescriptionUpdateEnvelopeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SpiritUpdateInput", {
  isAbstract: true
})
export class SpiritUpdateInput {
  @TypeGraphQL.Field(_type => SpiritClassificationUpdateEnvelopeInput, {
    nullable: true
  })
  classification?: SpiritClassificationUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => SpiritDescriptionUpdateEnvelopeInput, {
    nullable: true
  })
  description?: SpiritDescriptionUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  alcoholContent?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ingredients?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nameLong?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sugar?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  volume?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  volumeType?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumSpiritTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumSpiritTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IngredientUpdateManyWithoutSpiritInput, {
    nullable: true
  })
  Ingredient?: IngredientUpdateManyWithoutSpiritInput | undefined;
}
