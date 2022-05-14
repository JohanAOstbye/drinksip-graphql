import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSpiritTypeWithAggregatesFilter } from "../inputs/EnumSpiritTypeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SpiritScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SpiritScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SpiritScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SpiritScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SpiritScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SpiritScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  alcoholContent?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ingredients?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nameLong?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  sugar?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  volume?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  volumeType?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSpiritTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumSpiritTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  image?: StringNullableWithAggregatesFilter | undefined;
}
