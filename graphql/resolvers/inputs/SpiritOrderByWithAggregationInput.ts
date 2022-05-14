import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritAvgOrderByAggregateInput } from "../inputs/SpiritAvgOrderByAggregateInput";
import { SpiritCountOrderByAggregateInput } from "../inputs/SpiritCountOrderByAggregateInput";
import { SpiritMaxOrderByAggregateInput } from "../inputs/SpiritMaxOrderByAggregateInput";
import { SpiritMinOrderByAggregateInput } from "../inputs/SpiritMinOrderByAggregateInput";
import { SpiritSumOrderByAggregateInput } from "../inputs/SpiritSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpiritOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpiritOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SpiritCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpiritCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpiritAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SpiritAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpiritMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpiritMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpiritMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpiritMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpiritSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SpiritSumOrderByAggregateInput | undefined;
}
