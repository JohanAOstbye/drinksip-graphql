import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureUpdateInput } from "../../../inputs/IngredientMeasureUpdateInput";
import { IngredientMeasureWhereUniqueInput } from "../../../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureUpdateInput, {
    nullable: false
  })
  data!: IngredientMeasureUpdateInput;

  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;
}
