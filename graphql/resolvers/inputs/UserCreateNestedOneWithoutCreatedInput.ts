import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedInput } from "../inputs/UserCreateOrConnectWithoutCreatedInput";
import { UserCreateWithoutCreatedInput } from "../inputs/UserCreateWithoutCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
