import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByIngredientArgs } from "./args/GroupByIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";
import { IngredientGroupBy } from "../../outputs/IngredientGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ingredient)
export class GroupByIngredientResolver {
  @TypeGraphQL.Query(_returns => [IngredientGroupBy], {
    nullable: false
  })
  async groupByIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIngredientArgs): Promise<IngredientGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredient.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
