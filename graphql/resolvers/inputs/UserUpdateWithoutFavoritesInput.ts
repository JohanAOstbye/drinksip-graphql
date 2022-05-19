import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateManyWithoutCreatedByInput } from "../inputs/DrinkUpdateManyWithoutCreatedByInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReviewUpdateManyWithoutRaterInput } from "../inputs/ReviewUpdateManyWithoutRaterInput";

@TypeGraphQL.InputType("UserUpdateWithoutFavoritesInput", {
  isAbstract: true
})
export class UserUpdateWithoutFavoritesInput {
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

  @TypeGraphQL.Field(_type => DrinkUpdateManyWithoutCreatedByInput, {
    nullable: true
  })
  created?: DrinkUpdateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpdateManyWithoutRaterInput, {
    nullable: true
  })
  review?: ReviewUpdateManyWithoutRaterInput | undefined;
}
