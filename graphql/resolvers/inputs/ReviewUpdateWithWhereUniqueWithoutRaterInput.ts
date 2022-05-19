import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateWithoutRaterInput } from "../inputs/ReviewUpdateWithoutRaterInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutRaterInput", {
  isAbstract: true
})
export class ReviewUpdateWithWhereUniqueWithoutRaterInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutRaterInput, {
    nullable: false
  })
  data!: ReviewUpdateWithoutRaterInput;
}
