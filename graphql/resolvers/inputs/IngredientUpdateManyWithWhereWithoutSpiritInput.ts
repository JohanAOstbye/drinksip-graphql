import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientScalarWhereInput } from "../inputs/IngredientScalarWhereInput";
import { IngredientUpdateManyMutationInput } from "../inputs/IngredientUpdateManyMutationInput";

@TypeGraphQL.InputType("IngredientUpdateManyWithWhereWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientUpdateManyWithWhereWithoutSpiritInput {
  @TypeGraphQL.Field(_type => IngredientScalarWhereInput, {
    nullable: false
  })
  where!: IngredientScalarWhereInput;

  @TypeGraphQL.Field(_type => IngredientUpdateManyMutationInput, {
    nullable: false
  })
  data!: IngredientUpdateManyMutationInput;
}
