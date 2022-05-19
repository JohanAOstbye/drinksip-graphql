import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedInput } from "../inputs/UserCreateWithoutCreatedInput";
import { UserUpdateWithoutCreatedInput } from "../inputs/UserUpdateWithoutCreatedInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatedInput", {
  isAbstract: true
})
export class UserUpsertWithoutCreatedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedInput;
}
