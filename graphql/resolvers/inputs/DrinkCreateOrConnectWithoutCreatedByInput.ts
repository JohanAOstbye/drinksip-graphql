import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutCreatedByInput } from "../inputs/DrinkCreateWithoutCreatedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateOrConnectWithoutCreatedByInput", {
  isAbstract: true
})
export class DrinkCreateOrConnectWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutCreatedByInput;
}
