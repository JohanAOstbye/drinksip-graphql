import * as TypeGraphQL from "type-graphql";
import { Drink } from "../../../models/Drink";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Review)
export class ReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async rater(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).rater({});
  }

  @TypeGraphQL.FieldResolver(_type => Drink, {
    nullable: false
  })
  async drink(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<Drink> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).drink({});
  }
}
