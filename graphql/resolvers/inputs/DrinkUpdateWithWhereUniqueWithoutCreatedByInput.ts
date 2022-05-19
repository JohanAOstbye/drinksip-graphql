import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateWithoutCreatedByInput } from "../inputs/DrinkUpdateWithoutCreatedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpdateWithWhereUniqueWithoutCreatedByInput", {
  isAbstract: true
})
export class DrinkUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: DrinkUpdateWithoutCreatedByInput;
}
