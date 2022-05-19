import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateWithoutDrinkInput } from "../inputs/ReviewUpdateWithoutDrinkInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewUpdateWithWhereUniqueWithoutDrinkInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutDrinkInput, {
    nullable: false
  })
  data!: ReviewUpdateWithoutDrinkInput;
}
