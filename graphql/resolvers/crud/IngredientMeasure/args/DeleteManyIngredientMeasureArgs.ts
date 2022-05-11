import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureWhereInput } from "../../../inputs/IngredientMeasureWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  where?: IngredientMeasureWhereInput | undefined;
}
