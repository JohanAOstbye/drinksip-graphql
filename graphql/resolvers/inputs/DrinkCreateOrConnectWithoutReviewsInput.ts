import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutReviewsInput } from "../inputs/DrinkCreateWithoutReviewsInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateOrConnectWithoutReviewsInput", {
  isAbstract: true
})
export class DrinkCreateOrConnectWithoutReviewsInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutReviewsInput;
}
