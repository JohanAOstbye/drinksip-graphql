import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutRaterInput } from "../inputs/ReviewCreateWithoutRaterInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewCreateOrConnectWithoutRaterInput", {
  isAbstract: true
})
export class ReviewCreateOrConnectWithoutRaterInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutRaterInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutRaterInput;
}
