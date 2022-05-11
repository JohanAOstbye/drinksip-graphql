import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByIngredientMeasureArgs } from "./args/GroupByIngredientMeasureArgs";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { IngredientMeasureGroupBy } from "../../outputs/IngredientMeasureGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class GroupByIngredientMeasureResolver {
  @TypeGraphQL.Query(_returns => [IngredientMeasureGroupBy], {
    nullable: false
  })
  async groupByIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIngredientMeasureArgs): Promise<IngredientMeasureGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
