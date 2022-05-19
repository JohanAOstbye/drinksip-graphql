import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutFavorittedByInput } from "../inputs/DrinkCreateWithoutFavorittedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateOrConnectWithoutFavorittedByInput", {
  isAbstract: true
})
export class DrinkCreateOrConnectWithoutFavorittedByInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutFavorittedByInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutFavorittedByInput;
}
