import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIngredientMeasureArgs } from "./args/AggregateIngredientMeasureArgs";
import { CreateIngredientMeasureArgs } from "./args/CreateIngredientMeasureArgs";
import { CreateManyIngredientMeasureArgs } from "./args/CreateManyIngredientMeasureArgs";
import { DeleteIngredientMeasureArgs } from "./args/DeleteIngredientMeasureArgs";
import { DeleteManyIngredientMeasureArgs } from "./args/DeleteManyIngredientMeasureArgs";
import { FindFirstIngredientMeasureArgs } from "./args/FindFirstIngredientMeasureArgs";
import { FindManyIngredientMeasureArgs } from "./args/FindManyIngredientMeasureArgs";
import { FindUniqueIngredientMeasureArgs } from "./args/FindUniqueIngredientMeasureArgs";
import { GroupByIngredientMeasureArgs } from "./args/GroupByIngredientMeasureArgs";
import { UpdateIngredientMeasureArgs } from "./args/UpdateIngredientMeasureArgs";
import { UpdateManyIngredientMeasureArgs } from "./args/UpdateManyIngredientMeasureArgs";
import { UpsertIngredientMeasureArgs } from "./args/UpsertIngredientMeasureArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { IngredientMeasure } from "../../../models/IngredientMeasure";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIngredientMeasure } from "../../outputs/AggregateIngredientMeasure";
import { IngredientMeasureGroupBy } from "../../outputs/IngredientMeasureGroupBy";

@TypeGraphQL.Resolver(_of => IngredientMeasure)
export class IngredientMeasureCrudResolver {
  @TypeGraphQL.Query(_returns => IngredientMeasure, {
    nullable: true
  })
  async ingredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIngredientMeasureArgs): Promise<IngredientMeasure | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IngredientMeasure, {
    nullable: true
  })
  async findFirstIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIngredientMeasureArgs): Promise<IngredientMeasure | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => IngredientMeasure, {
    nullable: false
  })
  async createIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateIngredientMeasureArgs): Promise<IngredientMeasure> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIngredientMeasureArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIngredientMeasureArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIngredientMeasureArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ingredientMeasure.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateIngredientMeasure, {
    nullable: false
  })
  async aggregateIngredientMeasure(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIngredientMeasureArgs): Promise<AggregateIngredientMeasure> {
    return getPrismaFromContext(ctx).ingredientMeasure.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
