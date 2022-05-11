import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureCreateInput } from "../../../inputs/IngredientMeasureCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureCreateInput, {
    nullable: false
  })
  data!: IngredientMeasureCreateInput;
}
