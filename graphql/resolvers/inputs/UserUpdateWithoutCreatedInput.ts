import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateManyWithoutFavorittedByInput } from "../inputs/DrinkUpdateManyWithoutFavorittedByInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReviewUpdateManyWithoutRaterInput } from "../inputs/ReviewUpdateManyWithoutRaterInput";

@TypeGraphQL.InputType("UserUpdateWithoutCreatedInput", {
  isAbstract: true
})
export class UserUpdateWithoutCreatedInput {
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

  @TypeGraphQL.Field(_type => ReviewUpdateManyWithoutRaterInput, {
    nullable: true
  })
  review?: ReviewUpdateManyWithoutRaterInput | undefined;
}
