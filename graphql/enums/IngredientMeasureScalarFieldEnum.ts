import * as TypeGraphQL from "type-graphql";

export enum IngredientMeasureScalarFieldEnum {
  id = "id",
  measure = "measure",
  ingredientId = "ingredientId",
  drinkId = "drinkId"
}
TypeGraphQL.registerEnumType(IngredientMeasureScalarFieldEnum, {
  name: "IngredientMeasureScalarFieldEnum",
  description: undefined,
});
