import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateOrConnectWithoutReviewsInput } from "../inputs/DrinkCreateOrConnectWithoutReviewsInput";
import { DrinkCreateWithoutReviewsInput } from "../inputs/DrinkCreateWithoutReviewsInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateNestedOneWithoutReviewsInput", {
  isAbstract: true
})
export class DrinkCreateNestedOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => DrinkCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: DrinkCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput | undefined;
}
