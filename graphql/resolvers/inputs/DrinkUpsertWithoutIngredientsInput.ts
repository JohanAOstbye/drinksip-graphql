import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutIngredientsInput } from "../inputs/DrinkCreateWithoutIngredientsInput";
import { DrinkUpdateWithoutIngredientsInput } from "../inputs/DrinkUpdateWithoutIngredientsInput";

@TypeGraphQL.InputType("DrinkUpsertWithoutIngredientsInput", {
  isAbstract: true
})
export class DrinkUpsertWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => DrinkUpdateWithoutIngredientsInput, {
    nullable: false
  })
  update!: DrinkUpdateWithoutIngredientsInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutIngredientsInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutIngredientsInput;
}
