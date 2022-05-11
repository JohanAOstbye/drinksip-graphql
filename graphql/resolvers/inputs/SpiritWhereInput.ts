import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSpiritTypeFilter } from "../inputs/EnumSpiritTypeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IngredientListRelationFilter } from "../inputs/IngredientListRelationFilter";
import { SpiritClassificationCompositeFilter } from "../inputs/SpiritClassificationCompositeFilter";
import { SpiritDescriptionCompositeFilter } from "../inputs/SpiritDescriptionCompositeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SpiritWhereInput", {
  isAbstract: true
})
export class SpiritWhereInput {
  @TypeGraphQL.Field(_type => [SpiritWhereInput], {
    nullable: true
  })
  AND?: SpiritWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritWhereInput], {
    nullable: true
  })
  OR?: SpiritWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritWhereInput], {
    nullable: true
  })
  NOT?: SpiritWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => SpiritClassificationCompositeFilter, {
    nullable: true
  })
  classification?: SpiritClassificationCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => SpiritDescriptionCompositeFilter, {
    nullable: true
  })
  description?: SpiritDescriptionCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  alcoholContent?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ingredients?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nameLong?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sugar?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  volume?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  volumeType?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSpiritTypeFilter, {
    nullable: true
  })
  type?: EnumSpiritTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IngredientListRelationFilter, {
    nullable: true
  })
  Ingredient?: IngredientListRelationFilter | undefined;
}
