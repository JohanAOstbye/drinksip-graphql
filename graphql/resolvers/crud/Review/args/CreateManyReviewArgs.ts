import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewCreateManyInput } from "../../../inputs/ReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReviewArgs {
  @TypeGraphQL.Field(_type => [ReviewCreateManyInput], {
    nullable: false
  })
  data!: ReviewCreateManyInput[];
}
