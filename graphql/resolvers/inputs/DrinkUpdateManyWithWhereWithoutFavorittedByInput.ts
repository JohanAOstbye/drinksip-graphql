import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkScalarWhereInput } from "../inputs/DrinkScalarWhereInput";
import { DrinkUpdateManyMutationInput } from "../inputs/DrinkUpdateManyMutationInput";

@TypeGraphQL.InputType("DrinkUpdateManyWithWhereWithoutFavorittedByInput", {
  isAbstract: true
})
export class DrinkUpdateManyWithWhereWithoutFavorittedByInput {
  @TypeGraphQL.Field(_type => DrinkScalarWhereInput, {
    nullable: false
  })
  where!: DrinkScalarWhereInput;

  @TypeGraphQL.Field(_type => DrinkUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrinkUpdateManyMutationInput;
}
