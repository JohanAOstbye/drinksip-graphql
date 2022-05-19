import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureListRelationFilter } from "../inputs/IngredientMeasureListRelationFilter";
import { SpiritRelationFilter } from "../inputs/SpiritRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IngredientWhereInput", {
  isAbstract: true
})
export class IngredientWhereInput {
  @TypeGraphQL.Field(_type => [IngredientWhereInput], {
    nullable: true
  })
  AND?: IngredientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereInput], {
    nullable: true
  })
  OR?: IngredientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereInput], {
    nullable: true
  })
  NOT?: IngredientWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => SpiritRelationFilter, {
    nullable: true
  })
  spirit?: SpiritRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  spiritId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureListRelationFilter, {
    nullable: true
  })
  ingredientMeasure?: IngredientMeasureListRelationFilter | undefined;
}
