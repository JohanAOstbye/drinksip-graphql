import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIngredientArgs } from "./args/AggregateIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";
import { AggregateIngredient } from "../../outputs/AggregateIngredient";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ingredient)
export class AggregateIngredientResolver {
  @TypeGraphQL.Query(_returns => AggregateIngredient, {
    nullable: false
  })
  async aggregateIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIngredientArgs): Promise<AggregateIngredient> {
    return getPrismaFromContext(ctx).ingredient.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
