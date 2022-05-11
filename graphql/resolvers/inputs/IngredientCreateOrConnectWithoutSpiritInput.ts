import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateWithoutSpiritInput } from "../inputs/IngredientCreateWithoutSpiritInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientCreateOrConnectWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientCreateOrConnectWithoutSpiritInput {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientCreateWithoutSpiritInput, {
    nullable: false
  })
  create!: IngredientCreateWithoutSpiritInput;
}
