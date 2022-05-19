import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutFavorittedByInput } from "../inputs/DrinkCreateWithoutFavorittedByInput";
import { DrinkUpdateWithoutFavorittedByInput } from "../inputs/DrinkUpdateWithoutFavorittedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpsertWithWhereUniqueWithoutFavorittedByInput", {
  isAbstract: true
})
export class DrinkUpsertWithWhereUniqueWithoutFavorittedByInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkUpdateWithoutFavorittedByInput, {
    nullable: false
  })
  update!: DrinkUpdateWithoutFavorittedByInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutFavorittedByInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutFavorittedByInput;
}
