import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutDrinkInput } from "../inputs/ReviewCreateWithoutDrinkInput";
import { ReviewUpdateWithoutDrinkInput } from "../inputs/ReviewUpdateWithoutDrinkInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewUpsertWithWhereUniqueWithoutDrinkInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutDrinkInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutDrinkInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutDrinkInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutDrinkInput;
}
