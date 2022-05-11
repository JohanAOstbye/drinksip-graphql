import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureCreateManyInput } from "../../../inputs/IngredientMeasureCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateManyInput], {
    nullable: false
  })
  data!: IngredientMeasureCreateManyInput[];
}
