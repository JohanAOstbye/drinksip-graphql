import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateOrConnectWithoutIngredientMeasureInput } from "../inputs/IngredientCreateOrConnectWithoutIngredientMeasureInput";
import { IngredientCreateWithoutIngredientMeasureInput } from "../inputs/IngredientCreateWithoutIngredientMeasureInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientCreateNestedOneWithoutIngredientMeasureInput", {
  isAbstract: true
})
export class IngredientCreateNestedOneWithoutIngredientMeasureInput {
  @TypeGraphQL.Field(_type => IngredientCreateWithoutIngredientMeasureInput, {
    nullable: true
  })
  create?: IngredientCreateWithoutIngredientMeasureInput | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateOrConnectWithoutIngredientMeasureInput, {
    nullable: true
  })
  connectOrCreate?: IngredientCreateOrConnectWithoutIngredientMeasureInput | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: true
  })
  connect?: IngredientWhereUniqueInput | undefined;
}
