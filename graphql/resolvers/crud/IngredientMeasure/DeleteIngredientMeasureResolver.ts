import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteIngredientMeasureArgs } from "./args/DeleteIngredientMeasureArgs";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class DeleteIngredientMeasureResolver {
  @TypeGraphQL.Mutation(_returns => IngredientMeasure, {
    nullable: true
  })
  async deleteIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteIngredientMeasureArgs): Promise<IngredientMeasure | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
