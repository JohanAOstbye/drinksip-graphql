import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureWhereInput } from "../inputs/IngredientMeasureWhereInput";

@TypeGraphQL.InputType("IngredientMeasureListRelationFilter", {
  isAbstract: true
})
export class IngredientMeasureListRelationFilter {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  every?: IngredientMeasureWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  some?: IngredientMeasureWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  none?: IngredientMeasureWhereInput | undefined;
}
