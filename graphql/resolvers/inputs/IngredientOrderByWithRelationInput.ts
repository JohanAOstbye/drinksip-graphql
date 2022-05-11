import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureOrderByRelationAggregateInput } from "../inputs/IngredientMeasureOrderByRelationAggregateInput";
import { SpiritOrderByWithRelationInput } from "../inputs/SpiritOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IngredientOrderByWithRelationInput", {
  isAbstract: true
})
export class IngredientOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => SpiritOrderByWithRelationInput, {
    nullable: true
  })
  spirit?: SpiritOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  spiritId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureOrderByRelationAggregateInput, {
    nullable: true
  })
  IngredientMeasure?: IngredientMeasureOrderByRelationAggregateInput | undefined;
}
