import * as TypeGraphQL from "type-graphql";
import { Ingredient } from "../../../models/Ingredient";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { Spirit } from "../../../models/Spirit";
import { IngredientIngredientMeasureArgs } from "./args/IngredientIngredientMeasureArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ingredient)
export class IngredientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Spirit, {
    nullable: true
  })
  async spirit(@TypeGraphQL.Root() ingredient: Ingredient, @TypeGraphQL.Ctx() ctx: any): Promise<Spirit | null> {
    return getPrismaFromContext(ctx).ingredient.findUnique({
      where: {
        id: ingredient.id,
      },
    }).spirit({});
  }

  @TypeGraphQL.FieldResolver(_type => [IngredientMeasure], {
    nullable: false
  })
  async ingredientMeasure(@TypeGraphQL.Root() ingredient: Ingredient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: IngredientIngredientMeasureArgs): Promise<IngredientMeasure[]> {
    return getPrismaFromContext(ctx).ingredient.findUnique({
      where: {
        id: ingredient.id,
      },
    }).ingredientMeasure(args);
  }
}
