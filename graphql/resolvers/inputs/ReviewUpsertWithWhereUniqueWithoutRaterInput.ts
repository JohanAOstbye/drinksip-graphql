import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutRaterInput } from "../inputs/ReviewCreateWithoutRaterInput";
import { ReviewUpdateWithoutRaterInput } from "../inputs/ReviewUpdateWithoutRaterInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutRaterInput", {
  isAbstract: true
})
export class ReviewUpsertWithWhereUniqueWithoutRaterInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutRaterInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutRaterInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutRaterInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutRaterInput;
}
