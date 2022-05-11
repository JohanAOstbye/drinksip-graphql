import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateWithoutDrinkInput } from "../inputs/IngredientMeasureCreateWithoutDrinkInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureCreateOrConnectWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureCreateOrConnectWithoutDrinkInput {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateWithoutDrinkInput, {
    nullable: false
  })
  create!: IngredientMeasureCreateWithoutDrinkInput;
}
