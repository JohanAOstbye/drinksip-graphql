import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutDrinkInput } from "../inputs/ReviewCreateWithoutDrinkInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewCreateOrConnectWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewCreateOrConnectWithoutDrinkInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutDrinkInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutDrinkInput;
}
