import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCountOrderByAggregateInput } from "../inputs/DrinkCountOrderByAggregateInput";
import { DrinkMaxOrderByAggregateInput } from "../inputs/DrinkMaxOrderByAggregateInput";
import { DrinkMinOrderByAggregateInput } from "../inputs/DrinkMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DrinkOrderByWithAggregationInput", {
  isAbstract: true
})
export class DrinkOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  IBA?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alcoholic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dateModified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  glass?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  instructions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  favUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DrinkCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DrinkCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DrinkMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DrinkMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DrinkMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DrinkMinOrderByAggregateInput | undefined;
}
