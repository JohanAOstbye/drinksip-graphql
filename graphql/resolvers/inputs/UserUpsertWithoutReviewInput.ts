import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReviewInput } from "../inputs/UserCreateWithoutReviewInput";
import { UserUpdateWithoutReviewInput } from "../inputs/UserUpdateWithoutReviewInput";

@TypeGraphQL.InputType("UserUpsertWithoutReviewInput", {
  isAbstract: true
})
export class UserUpsertWithoutReviewInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReviewInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReviewInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReviewInput, {
    nullable: false
  })
  create!: UserCreateWithoutReviewInput;
}
