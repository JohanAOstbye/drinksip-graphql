import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateWithoutIngredientInput } from "../inputs/IngredientMeasureCreateWithoutIngredientInput";
import { IngredientMeasureUpdateWithoutIngredientInput } from "../inputs/IngredientMeasureUpdateWithoutIngredientInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateWithoutIngredientInput, {
    nullable: false
  })
  update!: IngredientMeasureUpdateWithoutIngredientInput;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateWithoutIngredientInput, {
    nullable: false
  })
  create!: IngredientMeasureCreateWithoutIngredientInput;
}
