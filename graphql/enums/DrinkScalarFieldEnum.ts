import * as TypeGraphQL from "type-graphql";

export enum DrinkScalarFieldEnum {
  IBA = "IBA",
  alcoholic = "alcoholic",
  category = "category",
  dateModified = "dateModified",
  glass = "glass",
  id = "id",
  image = "image",
  instructions = "instructions",
  name = "name",
  tags = "tags",
  userId = "userId",
  favUserId = "favUserId"
}
TypeGraphQL.registerEnumType(DrinkScalarFieldEnum, {
  name: "DrinkScalarFieldEnum",
  description: undefined,
});
