import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReviewInput } from "../inputs/UserCreateOrConnectWithoutReviewInput";
import { UserCreateWithoutReviewInput } from "../inputs/UserCreateWithoutReviewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReviewInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutReviewInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReviewInput, {
    nullable: true
  })
  create?: UserCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
