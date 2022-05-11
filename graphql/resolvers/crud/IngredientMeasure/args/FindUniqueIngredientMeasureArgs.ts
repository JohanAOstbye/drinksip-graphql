import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureWhereUniqueInput } from "../../../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;
}
