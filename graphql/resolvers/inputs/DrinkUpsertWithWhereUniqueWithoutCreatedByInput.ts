import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutCreatedByInput } from "../inputs/DrinkCreateWithoutCreatedByInput";
import { DrinkUpdateWithoutCreatedByInput } from "../inputs/DrinkUpdateWithoutCreatedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpsertWithWhereUniqueWithoutCreatedByInput", {
  isAbstract: true
})
export class DrinkUpsertWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkUpdateWithoutCreatedByInput, {
    nullable: false
  })
  update!: DrinkUpdateWithoutCreatedByInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutCreatedByInput;
}
