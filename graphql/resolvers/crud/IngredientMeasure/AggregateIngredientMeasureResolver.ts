import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIngredientMeasureArgs } from "./args/AggregateIngredientMeasureArgs";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { AggregateIngredientMeasure } from "../../outputs/AggregateIngredientMeasure";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class AggregateIngredientMeasureResolver {
  @TypeGraphQL.Query(_returns => AggregateIngredientMeasure, {
    nullable: false
  })
  async aggregateIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIngredientMeasureArgs): Promise<AggregateIngredientMeasure> {
    return getPrismaFromContext(ctx).ingredientMeasure.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
