import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateNestedOneWithoutIngredientsInput } from "../inputs/DrinkCreateNestedOneWithoutIngredientsInput";

@TypeGraphQL.InputType("IngredientMeasureCreateWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureCreateWithoutIngredientInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  measure?: string | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateNestedOneWithoutIngredientsInput, {
    nullable: true
  })
  Drink?: DrinkCreateNestedOneWithoutIngredientsInput | undefined;
}
