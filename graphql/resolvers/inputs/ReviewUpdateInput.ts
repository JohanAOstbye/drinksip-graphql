import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateOneRequiredWithoutReviewsInput } from "../inputs/DrinkUpdateOneRequiredWithoutReviewsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneWithoutReviewInput } from "../inputs/UserUpdateOneWithoutReviewInput";

@TypeGraphQL.InputType("ReviewUpdateInput", {
  isAbstract: true
})
export class ReviewUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutReviewInput, {
    nullable: true
  })
  rater?: UserUpdateOneWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  drink?: DrinkUpdateOneRequiredWithoutReviewsInput | undefined;
}
