import * as TypeGraphQL from "type-graphql";

export enum SpiritType {
  WINE = "WINE",
  BEER = "BEER",
  SPIRIT = "SPIRIT"
}
TypeGraphQL.registerEnumType(SpiritType, {
  name: "SpiritType",
  description: undefined,
});
