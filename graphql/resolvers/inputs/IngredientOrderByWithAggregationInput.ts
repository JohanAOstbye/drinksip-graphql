import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCountOrderByAggregateInput } from "../inputs/IngredientCountOrderByAggregateInput";
import { IngredientMaxOrderByAggregateInput } from "../inputs/IngredientMaxOrderByAggregateInput";
import { IngredientMinOrderByAggregateInput } from "../inputs/IngredientMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IngredientOrderByWithAggregationInput", {
  isAbstract: true
})
export class IngredientOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  spiritId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IngredientCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IngredientCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IngredientMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IngredientMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IngredientMinOrderByAggregateInput | undefined;
}
