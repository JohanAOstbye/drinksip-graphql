import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientOrderByWithAggregationInput } from "../../../inputs/IngredientOrderByWithAggregationInput";
import { IngredientScalarWhereWithAggregatesInput } from "../../../inputs/IngredientScalarWhereWithAggregatesInput";
import { IngredientWhereInput } from "../../../inputs/IngredientWhereInput";
import { IngredientScalarFieldEnum } from "../../../../enums/IngredientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  where?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IngredientOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IngredientOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "type" | "spiritId">;

  @TypeGraphQL.Field(_type => IngredientScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IngredientScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
