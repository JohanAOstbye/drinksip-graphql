import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkWhereInput } from "../inputs/DrinkWhereInput";

@TypeGraphQL.InputType("DrinkListRelationFilter", {
  isAbstract: true
})
export class DrinkListRelationFilter {
  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  every?: DrinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  some?: DrinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  none?: DrinkWhereInput | undefined;
}
