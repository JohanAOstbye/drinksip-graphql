import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritCreateOrConnectWithoutIngredientInput } from "../inputs/SpiritCreateOrConnectWithoutIngredientInput";
import { SpiritCreateWithoutIngredientInput } from "../inputs/SpiritCreateWithoutIngredientInput";
import { SpiritUpdateWithoutIngredientInput } from "../inputs/SpiritUpdateWithoutIngredientInput";
import { SpiritUpsertWithoutIngredientInput } from "../inputs/SpiritUpsertWithoutIngredientInput";
import { SpiritWhereUniqueInput } from "../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.InputType("SpiritUpdateOneWithoutIngredientInput", {
  isAbstract: true
})
export class SpiritUpdateOneWithoutIngredientInput {
  @TypeGraphQL.Field(_type => SpiritCreateWithoutIngredientInput, {
    nullable: true
  })
  create?: SpiritCreateWithoutIngredientInput | undefined;

  @TypeGraphQL.Field(_type => SpiritCreateOrConnectWithoutIngredientInput, {
    nullable: true
  })
  connectOrCreate?: SpiritCreateOrConnectWithoutIngredientInput | undefined;

  @TypeGraphQL.Field(_type => SpiritUpsertWithoutIngredientInput, {
    nullable: true
  })
  upsert?: SpiritUpsertWithoutIngredientInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: true
  })
  connect?: SpiritWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SpiritUpdateWithoutIngredientInput, {
    nullable: true
  })
  update?: SpiritUpdateWithoutIngredientInput | undefined;
}
