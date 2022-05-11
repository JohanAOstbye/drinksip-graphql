import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IngredientMeasureScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IngredientMeasureScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IngredientMeasureScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IngredientMeasureScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IngredientMeasureScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  measure?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ingredientId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  drinkId?: StringNullableWithAggregatesFilter | undefined;
}
