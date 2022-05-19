import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyDrinkInput } from "../inputs/ReviewCreateManyDrinkInput";

@TypeGraphQL.InputType("ReviewCreateManyDrinkInputEnvelope", {
  isAbstract: true
})
export class ReviewCreateManyDrinkInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyDrinkInput], {
    nullable: false
  })
  data!: ReviewCreateManyDrinkInput[];
}
