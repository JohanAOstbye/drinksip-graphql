import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertIngredientMeasureArgs } from "./args/UpsertIngredientMeasureArgs";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class UpsertIngredientMeasureResolver {
  @TypeGraphQL.Mutation(_returns => IngredientMeasure, {
    nullable: false
  })
  async upsertIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertIngredientMeasureArgs): Promise<IngredientMeasure> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
