import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Drink } from "../models/Drink";
import { Ingredient } from "../models/Ingredient";

@TypeGraphQL.ObjectType("IngredientMeasure", {
  isAbstract: true
})
export class IngredientMeasure {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  measure?: string | null;

  ingredient?: Ingredient | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ingredientId?: string | null;

  drink?: Drink | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  drinkId?: string | null;
}
