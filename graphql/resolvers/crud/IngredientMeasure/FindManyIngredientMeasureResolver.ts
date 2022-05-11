import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyIngredientMeasureArgs } from "./args/FindManyIngredientMeasureArgs";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class FindManyIngredientMeasureResolver {
  @TypeGraphQL.Query(_returns => [IngredientMeasure], {
    nullable: false
  })
  async ingredientMeasures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIngredientMeasureArgs): Promise<IngredientMeasure[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
