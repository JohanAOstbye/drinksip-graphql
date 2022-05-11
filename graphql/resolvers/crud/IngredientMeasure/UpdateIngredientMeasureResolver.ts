import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateIngredientMeasureArgs } from "./args/UpdateIngredientMeasureArgs";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class UpdateIngredientMeasureResolver {
  @TypeGraphQL.Mutation(_returns => IngredientMeasure, {
    nullable: true
  })
  async updateIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateIngredientMeasureArgs): Promise<IngredientMeasure | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
