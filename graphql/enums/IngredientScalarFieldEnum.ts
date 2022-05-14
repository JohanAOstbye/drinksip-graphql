import * as TypeGraphQL from "type-graphql";

export enum IngredientScalarFieldEnum {
  id = "id",
  name = "name",
  type = "type",
  image = "image",
  spiritId = "spiritId"
}
TypeGraphQL.registerEnumType(IngredientScalarFieldEnum, {
  name: "IngredientScalarFieldEnum",
  description: undefined,
});
