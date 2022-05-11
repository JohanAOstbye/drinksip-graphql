import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientOrderByRelationAggregateInput } from "../inputs/IngredientOrderByRelationAggregateInput";
import { SpiritClassificationOrderByInput } from "../inputs/SpiritClassificationOrderByInput";
import { SpiritDescriptionOrderByInput } from "../inputs/SpiritDescriptionOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpiritOrderByWithRelationInput", {
  isAbstract: true
})
export class SpiritOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SpiritClassificationOrderByInput, {
    nullable: true
  })
  classification?: SpiritClassificationOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SpiritDescriptionOrderByInput, {
    nullable: true
  })
  description?: SpiritDescriptionOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alcoholContent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ingredients?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nameLong?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sugar?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  volume?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  volumeType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IngredientOrderByRelationAggregateInput, {
    nullable: true
  })
  Ingredient?: IngredientOrderByRelationAggregateInput | undefined;
}
