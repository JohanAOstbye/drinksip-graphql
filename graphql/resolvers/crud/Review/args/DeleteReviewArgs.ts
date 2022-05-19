import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReviewArgs {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;
}
