import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateNestedOneWithoutIngredientMeasureInput } from "../inputs/IngredientCreateNestedOneWithoutIngredientMeasureInput";

@TypeGraphQL.InputType("IngredientMeasureCreateWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureCreateWithoutDrinkInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  measure?: string | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateNestedOneWithoutIngredientMeasureInput, {
    nullable: true
  })
  ingredient?: IngredientCreateNestedOneWithoutIngredientMeasureInput | undefined;
}
