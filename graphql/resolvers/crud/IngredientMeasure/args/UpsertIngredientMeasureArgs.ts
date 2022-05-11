import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureCreateInput } from "../../../inputs/IngredientMeasureCreateInput";
import { IngredientMeasureUpdateInput } from "../../../inputs/IngredientMeasureUpdateInput";
import { IngredientMeasureWhereUniqueInput } from "../../../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: false
  })
  where!: IngredientMeasureWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateInput, {
    nullable: false
  })
  create!: IngredientMeasureCreateInput;

  @TypeGraphQL.Field(_type => IngredientMeasureUpdateInput, {
    nullable: false
  })
  update!: IngredientMeasureUpdateInput;
}
