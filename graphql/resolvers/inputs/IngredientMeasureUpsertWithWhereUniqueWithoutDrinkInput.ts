import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateWithoutDrinkInput } from "../inputs/IngredientMeasureCreateWithoutDrinkInput";
import { IngredientMeasureUpdateWithoutDrinkInput } from "../inputs/IngredientMeasureUpdateWithoutDrinkInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateWithoutDrinkInput, {
    nullable: false
  })
  update!: IngredientMeasureUpdateWithoutDrinkInput;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateWithoutDrinkInput, {
    nullable: false
  })
  create!: IngredientMeasureCreateWithoutDrinkInput;
}
