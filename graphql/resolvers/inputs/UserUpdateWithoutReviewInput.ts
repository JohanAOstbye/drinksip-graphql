import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateManyWithoutCreatedByInput } from "../inputs/DrinkUpdateManyWithoutCreatedByInput";
import { DrinkUpdateManyWithoutFavorittedByInput } from "../inputs/DrinkUpdateManyWithoutFavorittedByInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutReviewInput", {
  isAbstract: true
})
export class UserUpdateWithoutReviewInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateManyWithoutFavorittedByInput, {
    nullable: true
  })
  favorites?: DrinkUpdateManyWithoutFavorittedByInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateManyWithoutCreatedByInput, {
    nullable: true
  })
  created?: DrinkUpdateManyWithoutCreatedByInput | undefined;
}
