import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneWithoutReviewInput } from "../inputs/UserUpdateOneWithoutReviewInput";

@TypeGraphQL.InputType("ReviewUpdateWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewUpdateWithoutDrinkInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutReviewInput, {
    nullable: true
  })
  rater?: UserUpdateOneWithoutReviewInput | undefined;
}
