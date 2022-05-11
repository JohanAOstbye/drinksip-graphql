import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritCreateWithoutIngredientInput } from "../inputs/SpiritCreateWithoutIngredientInput";
import { SpiritUpdateWithoutIngredientInput } from "../inputs/SpiritUpdateWithoutIngredientInput";

@TypeGraphQL.InputType("SpiritUpsertWithoutIngredientInput", {
  isAbstract: true
})
export class SpiritUpsertWithoutIngredientInput {
  @TypeGraphQL.Field(_type => SpiritUpdateWithoutIngredientInput, {
    nullable: false
  })
  update!: SpiritUpdateWithoutIngredientInput;

  @TypeGraphQL.Field(_type => SpiritCreateWithoutIngredientInput, {
    nullable: false
  })
  create!: SpiritCreateWithoutIngredientInput;
}
