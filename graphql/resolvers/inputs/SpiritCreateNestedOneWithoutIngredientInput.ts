import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritCreateOrConnectWithoutIngredientInput } from "../inputs/SpiritCreateOrConnectWithoutIngredientInput";
import { SpiritCreateWithoutIngredientInput } from "../inputs/SpiritCreateWithoutIngredientInput";
import { SpiritWhereUniqueInput } from "../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.InputType("SpiritCreateNestedOneWithoutIngredientInput", {
  isAbstract: true
})
export class SpiritCreateNestedOneWithoutIngredientInput {
  @TypeGraphQL.Field(_type => SpiritCreateWithoutIngredientInput, {
    nullable: true
  })
  create?: SpiritCreateWithoutIngredientInput | undefined;

  @TypeGraphQL.Field(_type => SpiritCreateOrConnectWithoutIngredientInput, {
    nullable: true
  })
  connectOrCreate?: SpiritCreateOrConnectWithoutIngredientInput | undefined;

  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: true
  })
  connect?: SpiritWhereUniqueInput | undefined;
}
