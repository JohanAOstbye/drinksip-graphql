import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IngredientMeasureCreateManyInput", {
  isAbstract: true
})
export class IngredientMeasureCreateManyInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  drinkId?: string | undefined;
}
