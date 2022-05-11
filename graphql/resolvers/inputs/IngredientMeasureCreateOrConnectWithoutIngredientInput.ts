import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateWithoutIngredientInput } from "../inputs/IngredientMeasureCreateWithoutIngredientInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureCreateOrConnectWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureCreateOrConnectWithoutIngredientInput {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateWithoutIngredientInput, {
    nullable: false
  })
  create!: IngredientMeasureCreateWithoutIngredientInput;
}
