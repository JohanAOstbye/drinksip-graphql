import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureScalarWhereInput } from "../inputs/IngredientMeasureScalarWhereInput";
import { IngredientMeasureUpdateManyMutationInput } from "../inputs/IngredientMeasureUpdateManyMutationInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateManyWithWhereWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateManyWithWhereWithoutIngredientInput {
  @TypeGraphQL.Field(_type => IngredientMeasureScalarWhereInput, {
    nullable: false
  })
  where!: IngredientMeasureScalarWhereInput;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateManyMutationInput, {
    nullable: false
  })
  data!: IngredientMeasureUpdateManyMutationInput;
}
