import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientWhereInput } from "../inputs/IngredientWhereInput";

@TypeGraphQL.InputType("IngredientRelationFilter", {
  isAbstract: true
})
export class IngredientRelationFilter {
  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  is?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  isNot?: IngredientWhereInput | undefined;
}
