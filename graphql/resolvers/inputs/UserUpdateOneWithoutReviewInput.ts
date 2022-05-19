import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReviewInput } from "../inputs/UserCreateOrConnectWithoutReviewInput";
import { UserCreateWithoutReviewInput } from "../inputs/UserCreateWithoutReviewInput";
import { UserUpdateWithoutReviewInput } from "../inputs/UserUpdateWithoutReviewInput";
import { UserUpsertWithoutReviewInput } from "../inputs/UserUpsertWithoutReviewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutReviewInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutReviewInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReviewInput, {
    nullable: true
  })
  create?: UserCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReviewInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReviewInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutReviewInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReviewInput | undefined;
}
