import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSpiritArgs } from "./args/AggregateSpiritArgs";
import { Spirit } from "../../../models/Spirit";
import { AggregateSpirit } from "../../outputs/AggregateSpirit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Spirit)
export class AggregateSpiritResolver {
  @TypeGraphQL.Query(_returns => AggregateSpirit, {
    nullable: false
  })
  async aggregateSpirit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSpiritArgs): Promise<AggregateSpirit> {
    return getPrismaFromContext(ctx).spirit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
