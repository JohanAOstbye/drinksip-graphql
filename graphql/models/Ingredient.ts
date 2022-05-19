import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IngredientMeasure } from "../models/IngredientMeasure";
import { Spirit } from "../models/Spirit";
import { IngredientCount } from "../resolvers/outputs/IngredientCount";

@TypeGraphQL.ObjectType("Ingredient", {
  isAbstract: true
})
export class Ingredient {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  spirit?: Spirit | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  spiritId?: string | null;

  ingredientMeasure?: IngredientMeasure[];

  @TypeGraphQL.Field(_type => IngredientCount, {
    nullable: true
  })
  _count?: IngredientCount | null;
}
