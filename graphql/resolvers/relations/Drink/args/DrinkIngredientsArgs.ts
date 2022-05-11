import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureOrderByWithRelationInput } from "../../../inputs/IngredientMeasureOrderByWithRelationInput";
import { IngredientMeasureWhereInput } from "../../../inputs/IngredientMeasureWhereInput";
import { IngredientMeasureWhereUniqueInput } from "../../../inputs/IngredientMeasureWhereUniqueInput";
import { IngredientMeasureScalarFieldEnum } from "../../../../enums/IngredientMeasureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class DrinkIngredientsArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  where?: IngredientMeasureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IngredientMeasureOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureWhereUniqueInput, {
    nullable: true
  })
  cursor?: IngredientMeasureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "measure" | "ingredientId" | "drinkId"> | undefined;
}
