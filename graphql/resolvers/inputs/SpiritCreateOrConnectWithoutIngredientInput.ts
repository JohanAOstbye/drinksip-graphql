import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritCreateWithoutIngredientInput } from "../inputs/SpiritCreateWithoutIngredientInput";
import { SpiritWhereUniqueInput } from "../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.InputType("SpiritCreateOrConnectWithoutIngredientInput", {
  isAbstract: true
})
export class SpiritCreateOrConnectWithoutIngredientInput {
  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: false
  })
  where!: SpiritWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpiritCreateWithoutIngredientInput, {
    nullable: false
  })
  create!: SpiritCreateWithoutIngredientInput;
}
