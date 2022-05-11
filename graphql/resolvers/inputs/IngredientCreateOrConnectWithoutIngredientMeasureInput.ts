import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateWithoutIngredientMeasureInput } from "../inputs/IngredientCreateWithoutIngredientMeasureInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientCreateOrConnectWithoutIngredientMeasureInput", {
  isAbstract: true
})
export class IngredientCreateOrConnectWithoutIngredientMeasureInput {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientCreateWithoutIngredientMeasureInput, {
    nullable: false
  })
  create!: IngredientCreateWithoutIngredientMeasureInput;
}
