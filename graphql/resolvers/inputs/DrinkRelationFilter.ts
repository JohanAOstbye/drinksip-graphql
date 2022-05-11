import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkWhereInput } from "../inputs/DrinkWhereInput";

@TypeGraphQL.InputType("DrinkRelationFilter", {
  isAbstract: true
})
export class DrinkRelationFilter {
  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  is?: DrinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  isNot?: DrinkWhereInput | undefined;
}
