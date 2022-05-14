import { GraphQLResolveInfo } from 'graphql';
import {
  Args,
  ArgsType,
  Ctx,
  Field,
  Info,
  InputType,
  Int,
  ObjectType,
  Query,
  registerEnumType,
  Resolver,
} from 'type-graphql';
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
