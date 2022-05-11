import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkOrderByWithAggregationInput } from "../../../inputs/DrinkOrderByWithAggregationInput";
import { DrinkScalarWhereWithAggregatesInput } from "../../../inputs/DrinkScalarWhereWithAggregatesInput";
import { DrinkWhereInput } from "../../../inputs/DrinkWhereInput";
import { DrinkScalarFieldEnum } from "../../../../enums/DrinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  where?: DrinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrinkOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DrinkOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"IBA" | "alcoholic" | "category" | "dateModified" | "glass" | "id" | "image" | "instructions" | "name" | "tags">;

  @TypeGraphQL.Field(_type => DrinkScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DrinkScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
