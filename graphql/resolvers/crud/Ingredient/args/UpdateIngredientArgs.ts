import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientUpdateInput } from "../../../inputs/IngredientUpdateInput";
import { IngredientWhereUniqueInput } from "../../../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientUpdateInput, {
    nullable: false
  })
  data!: IngredientUpdateInput;

  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientWhereUniqueInput;
}
