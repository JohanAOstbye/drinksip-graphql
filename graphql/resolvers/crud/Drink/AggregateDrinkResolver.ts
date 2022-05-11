import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrinkArgs } from "./args/AggregateDrinkArgs";
import { Drink } from "../../../models/Drink";
import { AggregateDrink } from "../../outputs/AggregateDrink";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drink)
export class AggregateDrinkResolver {
  @TypeGraphQL.Query(_returns => AggregateDrink, {
    nullable: false
  })
  async aggregateDrink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrinkArgs): Promise<AggregateDrink> {
    return getPrismaFromContext(ctx).drink.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
