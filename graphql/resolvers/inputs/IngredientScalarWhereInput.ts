import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IngredientScalarWhereInput", {
  isAbstract: true
})
export class IngredientScalarWhereInput {
  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true
  })
  AND?: IngredientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true
  })
  OR?: IngredientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true
  })
  NOT?: IngredientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  spiritId?: StringNullableFilter | undefined;
}
