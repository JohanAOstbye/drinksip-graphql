import * as TypeGraphQL from "type-graphql";

export enum ReviewScalarFieldEnum {
  id = "id",
  rating = "rating",
  userId = "userId",
  drinkId = "drinkId"
}
TypeGraphQL.registerEnumType(ReviewScalarFieldEnum, {
  name: "ReviewScalarFieldEnum",
  description: undefined,
});
