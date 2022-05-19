import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DrinkUpdatecategoryInput } from "../inputs/DrinkUpdatecategoryInput";
import { DrinkUpdatetagsInput } from "../inputs/DrinkUpdatetagsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReviewUpdateManyWithoutDrinkInput } from "../inputs/ReviewUpdateManyWithoutDrinkInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCreatedInput } from "../inputs/UserUpdateOneWithoutCreatedInput";
import { UserUpdateOneWithoutFavoritesInput } from "../inputs/UserUpdateOneWithoutFavoritesInput";

@TypeGraphQL.InputType("DrinkUpdateWithoutIngredientsInput", {
  isAbstract: true
})
export class DrinkUpdateWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  IBA?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  alcoholic?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdatecategoryInput, {
    nullable: true
  })
  category?: DrinkUpdatecategoryInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dateModified?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  glass?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  instructions?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdatetagsInput, {
    nullable: true
  })
  tags?: DrinkUpdatetagsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCreatedInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneWithoutCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFavoritesInput, {
    nullable: true
  })
  favorittedBy?: UserUpdateOneWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpdateManyWithoutDrinkInput, {
    nullable: true
  })
  reviews?: ReviewUpdateManyWithoutDrinkInput | undefined;
}
