import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkUpdateOneRequiredWithoutReviewsInput } from "../inputs/DrinkUpdateOneRequiredWithoutReviewsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReviewUpdateWithoutRaterInput", {
  isAbstract: true
})
export class ReviewUpdateWithoutRaterInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  drink?: DrinkUpdateOneRequiredWithoutReviewsInput | undefined;
}
