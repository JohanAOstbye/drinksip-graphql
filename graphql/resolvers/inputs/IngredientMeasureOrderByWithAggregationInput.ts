import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCountOrderByAggregateInput } from "../inputs/IngredientMeasureCountOrderByAggregateInput";
import { IngredientMeasureMaxOrderByAggregateInput } from "../inputs/IngredientMeasureMaxOrderByAggregateInput";
import { IngredientMeasureMinOrderByAggregateInput } from "../inputs/IngredientMeasureMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IngredientMeasureOrderByWithAggregationInput", {
  isAbstract: true
})
export class IngredientMeasureOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  measure?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ingredientId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  drinkId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IngredientMeasureCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IngredientMeasureMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IngredientMeasureMinOrderByAggregateInput | undefined;
}
