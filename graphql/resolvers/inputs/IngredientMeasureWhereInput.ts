import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkRelationFilter } from "../inputs/DrinkRelationFilter";
import { IngredientRelationFilter } from "../inputs/IngredientRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IngredientMeasureWhereInput", {
  isAbstract: true
})
export class IngredientMeasureWhereInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureWhereInput], {
    nullable: true
  })
  AND?: IngredientMeasureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereInput], {
    nullable: true
  })
  OR?: IngredientMeasureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereInput], {
    nullable: true
  })
  NOT?: IngredientMeasureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  measure?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IngredientRelationFilter, {
    nullable: true
  })
  ingredient?: IngredientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ingredientId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DrinkRelationFilter, {
    nullable: true
  })
  drink?: DrinkRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  drinkId?: StringNullableFilter | undefined;
}
