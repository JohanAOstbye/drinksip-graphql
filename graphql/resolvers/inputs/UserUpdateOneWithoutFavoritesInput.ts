import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFavoritesInput } from "../inputs/UserCreateOrConnectWithoutFavoritesInput";
import { UserCreateWithoutFavoritesInput } from "../inputs/UserCreateWithoutFavoritesInput";
import { UserUpdateWithoutFavoritesInput } from "../inputs/UserUpdateWithoutFavoritesInput";
import { UserUpsertWithoutFavoritesInput } from "../inputs/UserUpsertWithoutFavoritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFavoritesInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavoritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFavoritesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFavoritesInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFavoritesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFavoritesInput | undefined;
}
