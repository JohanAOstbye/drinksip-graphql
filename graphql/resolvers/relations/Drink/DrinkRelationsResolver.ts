import * as TypeGraphQL from "type-graphql";
import { Drink } from "../../../models/Drink";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { DrinkIngredientsArgs } from "./args/DrinkIngredientsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drink)
export class DrinkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [IngredientMeasure], {
    nullable: false
  })
  async ingredients(@TypeGraphQL.Root() drink: Drink, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DrinkIngredientsArgs): Promise<IngredientMeasure[]> {
    return getPrismaFromContext(ctx).drink.findUnique({
      where: {
        id: drink.id,
      },
    }).ingredients(args);
  }
}
