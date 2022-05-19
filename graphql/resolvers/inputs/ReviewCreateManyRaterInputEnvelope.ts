import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyRaterInput } from "../inputs/ReviewCreateManyRaterInput";

@TypeGraphQL.InputType("ReviewCreateManyRaterInputEnvelope", {
  isAbstract: true
})
export class ReviewCreateManyRaterInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyRaterInput], {
    nullable: false
  })
  data!: ReviewCreateManyRaterInput[];
}
