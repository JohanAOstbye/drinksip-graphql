import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureUpdateWithoutIngredientInput } from "../inputs/IngredientMeasureUpdateWithoutIngredientInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateWithoutIngredientInput, {
    nullable: false
  })
  data!: IngredientMeasureUpdateWithoutIngredientInput;
}
