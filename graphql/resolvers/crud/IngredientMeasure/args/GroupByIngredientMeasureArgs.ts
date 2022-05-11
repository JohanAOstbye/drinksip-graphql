import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureOrderByWithAggregationInput } from "../../../inputs/IngredientMeasureOrderByWithAggregationInput";
import { IngredientMeasureScalarWhereWithAggregatesInput } from "../../../inputs/IngredientMeasureScalarWhereWithAggregatesInput";
import { IngredientMeasureWhereInput } from "../../../inputs/IngredientMeasureWhereInput";
import { IngredientMeasureScalarFieldEnum } from "../../../../enums/IngredientMeasureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  where?: IngredientMeasureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IngredientMeasureOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "measure" | "ingredientId" | "drinkId">;

  @TypeGraphQL.Field(_type => IngredientMeasureScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IngredientMeasureScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
