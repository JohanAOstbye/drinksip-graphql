import * as TypeGraphQL from "type-graphql";
import { Drink } from "../../../models/Drink";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { DrinkIngredientsArgs } from "./args/DrinkIngredientsArgs";
import { DrinkReviewsArgs } from "./args/DrinkReviewsArgs";
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

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async createdBy(@TypeGraphQL.Root() drink: Drink, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).drink.findUnique({
      where: {
        id: drink.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async favorittedBy(@TypeGraphQL.Root() drink: Drink, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).drink.findUnique({
      where: {
        id: drink.id,
      },
    }).favorittedBy({});
  }

  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() drink: Drink, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DrinkReviewsArgs): Promise<Review[]> {
    return getPrismaFromContext(ctx).drink.findUnique({
      where: {
        id: drink.id,
      },
    }).reviews(args);
  }
}
