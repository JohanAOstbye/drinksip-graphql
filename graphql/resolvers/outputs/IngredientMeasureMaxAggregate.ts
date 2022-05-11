import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("IngredientMeasureMaxAggregate", {
  isAbstract: true
})
export class IngredientMeasureMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  measure!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ingredientId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  drinkId!: string | null;
}
