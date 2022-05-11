import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientWhereInput } from "../inputs/IngredientWhereInput";

@TypeGraphQL.InputType("IngredientListRelationFilter", {
  isAbstract: true
})
export class IngredientListRelationFilter {
  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  every?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  some?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  none?: IngredientWhereInput | undefined;
}
