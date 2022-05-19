import * as TypeGraphQL from "type-graphql";
import { Drink } from "../../../models/Drink";
import { Ingredient } from "../../../models/Ingredient";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class IngredientMeasureRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Ingredient, {
    nullable: true
  })
  async ingredient(@TypeGraphQL.Root() ingredientMeasure: IngredientMeasure, @TypeGraphQL.Ctx() ctx: any): Promise<Ingredient | null> {
    return getPrismaFromContext(ctx).ingredientMeasure.findUnique({
      where: {
        id: ingredientMeasure.id,
      },
    }).ingredient({});
  }

  @TypeGraphQL.FieldResolver(_type => Drink, {
    nullable: true
  })
  async drink(@TypeGraphQL.Root() ingredientMeasure: IngredientMeasure, @TypeGraphQL.Ctx() ctx: any): Promise<Drink | null> {
    return getPrismaFromContext(ctx).ingredientMeasure.findUnique({
      where: {
        id: ingredientMeasure.id,
      },
    }).drink({});
  }
}
