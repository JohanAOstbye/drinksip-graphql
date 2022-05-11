import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IngredientMeasureCreateManyDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureCreateManyDrinkInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  measure?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ingredientId?: string | undefined;
}
