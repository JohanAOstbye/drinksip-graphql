import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateWithoutSpiritInput } from "../inputs/IngredientCreateWithoutSpiritInput";
import { IngredientUpdateWithoutSpiritInput } from "../inputs/IngredientUpdateWithoutSpiritInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientUpsertWithWhereUniqueWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientUpsertWithWhereUniqueWithoutSpiritInput {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientUpdateWithoutSpiritInput, {
    nullable: false
  })
  update!: IngredientUpdateWithoutSpiritInput;

  @TypeGraphQL.Field(_type => IngredientCreateWithoutSpiritInput, {
    nullable: false
  })
  create!: IngredientCreateWithoutSpiritInput;
}
