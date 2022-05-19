import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReviewInput } from "../inputs/UserCreateNestedOneWithoutReviewInput";

@TypeGraphQL.InputType("ReviewCreateWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewCreateWithoutDrinkInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReviewInput, {
    nullable: true
  })
  rater?: UserCreateNestedOneWithoutReviewInput | undefined;
}
