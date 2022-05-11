import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureUpdateWithoutDrinkInput } from "../inputs/IngredientMeasureUpdateWithoutDrinkInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateWithoutDrinkInput, {
    nullable: false
  })
  data!: IngredientMeasureUpdateWithoutDrinkInput;
}
