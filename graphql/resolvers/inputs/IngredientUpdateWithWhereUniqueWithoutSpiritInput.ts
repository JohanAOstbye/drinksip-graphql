import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientUpdateWithoutSpiritInput } from "../inputs/IngredientUpdateWithoutSpiritInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientUpdateWithWhereUniqueWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientUpdateWithWhereUniqueWithoutSpiritInput {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientUpdateWithoutSpiritInput, {
    nullable: false
  })
  data!: IngredientUpdateWithoutSpiritInput;
}
