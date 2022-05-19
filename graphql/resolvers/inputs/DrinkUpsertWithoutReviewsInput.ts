import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutReviewsInput } from "../inputs/DrinkCreateWithoutReviewsInput";
import { DrinkUpdateWithoutReviewsInput } from "../inputs/DrinkUpdateWithoutReviewsInput";

@TypeGraphQL.InputType("DrinkUpsertWithoutReviewsInput", {
  isAbstract: true
})
export class DrinkUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => DrinkUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: DrinkUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutReviewsInput;
}
