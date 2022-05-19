import { GraphQLResolveInfo } from 'graphql';
import {
  Args,
  Ctx,
  FieldResolver,
  Info,
  Int,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { Drink } from '../graphql';
import { getPrismaFromContext } from '../graphql/helpers';
import { FindManyCombiArgs } from './args';
import { CombiScalarFieldEnum } from './enums';
import { maptoSimple } from './helpers';
import { Combi } from './models';

@Resolver()
export class CustomAllResolver {
  @Query((returns) => [Combi], { nullable: true })
  async getAll(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindManyCombiArgs
  ): Promise<Combi[] | null> {
    const spirits = await getPrismaFromContext(ctx).spirit.findMany(args);
    const drinks = await getPrismaFromContext(ctx).drink.findMany(args);
    const ingredients = await getPrismaFromContext(ctx).ingredient.findMany(
      args
    );
    return [
      ...maptoSimple(spirits, CombiScalarFieldEnum.SPIRIT),
      ...maptoSimple(drinks, CombiScalarFieldEnum.DRINK),
      ...maptoSimple(ingredients, CombiScalarFieldEnum.INGREDIENT),
    ];
  }
}

@Resolver((of) => Drink)
export class CustomDrinkResolver {
  @FieldResolver((type) => Int, { nullable: true })
  async rating(
    @Root() drink: Drink,
    @Ctx() { prisma }: any
  ): Promise<number | undefined> {
    const reviews = (
      await prisma.drink.findUnique({
        where: { id: drink.id },
        select: { reviews: { select: { rating: true } } },
      })
    ).reviews;

    if (reviews.length == 0) {
      return 0;
    }

    const rating =
      reviews.reduce(
        (total: number, rating: { rating: number }) => total + rating.rating,
        0
      ) / reviews.length;

    return rating;
  }
}
