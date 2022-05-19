import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateNestedOneWithoutReviewsInput } from "../inputs/DrinkCreateNestedOneWithoutReviewsInput";

@TypeGraphQL.InputType("ReviewCreateWithoutRaterInput", {
  isAbstract: true
})
export class ReviewCreateWithoutRaterInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => DrinkCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  drink!: DrinkCreateNestedOneWithoutReviewsInput;
}
