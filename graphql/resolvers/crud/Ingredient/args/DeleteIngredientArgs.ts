import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientWhereUniqueInput } from "../../../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientWhereUniqueInput;
}
