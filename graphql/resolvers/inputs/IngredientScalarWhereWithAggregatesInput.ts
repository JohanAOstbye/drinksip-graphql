import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IngredientScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IngredientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IngredientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IngredientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IngredientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IngredientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  spiritId?: StringNullableWithAggregatesFilter | undefined;
}
