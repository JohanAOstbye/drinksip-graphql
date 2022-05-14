import * as TypeGraphQL from "type-graphql";

export enum SpiritScalarFieldEnum {
  alcoholContent = "alcoholContent",
  id = "id",
  ingredients = "ingredients",
  name = "name",
  nameLong = "nameLong",
  sugar = "sugar",
  volume = "volume",
  volumeType = "volumeType",
  type = "type",
  image = "image"
}
TypeGraphQL.registerEnumType(SpiritScalarFieldEnum, {
  name: "SpiritScalarFieldEnum",
  description: undefined,
});
