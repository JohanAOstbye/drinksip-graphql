import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IngredientMeasureScalarWhereInput", {
  isAbstract: true
})
export class IngredientMeasureScalarWhereInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereInput], {
    nullable: true
  })
  AND?: IngredientMeasureScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereInput], {
    nullable: true
  })
  OR?: IngredientMeasureScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereInput], {
    nullable: true
  })
  NOT?: IngredientMeasureScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  measure?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ingredientId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  drinkId?: StringNullableFilter | undefined;
}
