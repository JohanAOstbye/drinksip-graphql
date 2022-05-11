import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SpiritDescriptionWhereInput", {
  isAbstract: true
})
export class SpiritDescriptionWhereInput {
  @TypeGraphQL.Field(_type => [SpiritDescriptionWhereInput], {
    nullable: true
  })
  AND?: SpiritDescriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritDescriptionWhereInput], {
    nullable: true
  })
  OR?: SpiritDescriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritDescriptionWhereInput], {
    nullable: true
  })
  NOT?: SpiritDescriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  colour?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  odour?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taste?: StringFilter | undefined;
}
