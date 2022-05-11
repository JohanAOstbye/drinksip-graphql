import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientCreateManyInput } from "../../../inputs/IngredientCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIngredientArgs {
  @TypeGraphQL.Field(_type => [IngredientCreateManyInput], {
    nullable: false
  })
  data!: IngredientCreateManyInput[];
}
