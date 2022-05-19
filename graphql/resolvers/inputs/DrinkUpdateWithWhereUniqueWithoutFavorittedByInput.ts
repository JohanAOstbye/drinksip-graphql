import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateWithoutFavorittedByInput } from "../inputs/DrinkUpdateWithoutFavorittedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpdateWithWhereUniqueWithoutFavorittedByInput", {
  isAbstract: true
})
export class DrinkUpdateWithWhereUniqueWithoutFavorittedByInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkUpdateWithoutFavorittedByInput, {
    nullable: false
  })
  data!: DrinkUpdateWithoutFavorittedByInput;
}
