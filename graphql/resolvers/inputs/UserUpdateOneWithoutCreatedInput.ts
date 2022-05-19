import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedInput } from "../inputs/UserCreateOrConnectWithoutCreatedInput";
import { UserCreateWithoutCreatedInput } from "../inputs/UserCreateWithoutCreatedInput";
import { UserUpdateWithoutCreatedInput } from "../inputs/UserUpdateWithoutCreatedInput";
import { UserUpsertWithoutCreatedInput } from "../inputs/UserUpsertWithoutCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCreatedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCreatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedInput | undefined;
}
