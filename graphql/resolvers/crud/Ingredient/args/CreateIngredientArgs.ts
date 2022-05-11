import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientCreateInput } from "../../../inputs/IngredientCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientCreateInput, {
    nullable: false
  })
  data!: IngredientCreateInput;
}
