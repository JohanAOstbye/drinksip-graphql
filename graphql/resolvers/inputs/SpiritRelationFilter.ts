import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritWhereInput } from "../inputs/SpiritWhereInput";

@TypeGraphQL.InputType("SpiritRelationFilter", {
  isAbstract: true
})
export class SpiritRelationFilter {
  @TypeGraphQL.Field(_type => SpiritWhereInput, {
    nullable: true
  })
  is?: SpiritWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpiritWhereInput, {
    nullable: true
  })
  isNot?: SpiritWhereInput | undefined;
}
