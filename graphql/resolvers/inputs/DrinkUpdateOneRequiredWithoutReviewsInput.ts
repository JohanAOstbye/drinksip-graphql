import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateOrConnectWithoutReviewsInput } from "../inputs/DrinkCreateOrConnectWithoutReviewsInput";
import { DrinkCreateWithoutReviewsInput } from "../inputs/DrinkCreateWithoutReviewsInput";
import { DrinkUpdateWithoutReviewsInput } from "../inputs/DrinkUpdateWithoutReviewsInput";
import { DrinkUpsertWithoutReviewsInput } from "../inputs/DrinkUpsertWithoutReviewsInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpdateOneRequiredWithoutReviewsInput", {
  isAbstract: true
})
export class DrinkUpdateOneRequiredWithoutReviewsInput {
  @TypeGraphQL.Field(_type => DrinkCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: DrinkCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: DrinkUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateWithoutReviewsInput, {
    nullable: true
  })
  update?: DrinkUpdateWithoutReviewsInput | undefined;
}
