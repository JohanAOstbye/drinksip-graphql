import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkOrderByWithRelationInput } from "../inputs/DrinkOrderByWithRelationInput";
import { IngredientOrderByWithRelationInput } from "../inputs/IngredientOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IngredientMeasureOrderByWithRelationInput", {
  isAbstract: true
})
export class IngredientMeasureOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  measure?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IngredientOrderByWithRelationInput, {
    nullable: true
  })
  ingredient?: IngredientOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ingredientId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DrinkOrderByWithRelationInput, {
    nullable: true
  })
  drink?: DrinkOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  drinkId?: "asc" | "desc" | undefined;
}
