import * as TypeGraphQL from "type-graphql";
import { Drink } from "../../../models/Drink";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { UserCreatedArgs } from "./args/UserCreatedArgs";
import { UserFavoritesArgs } from "./args/UserFavoritesArgs";
import { UserReviewArgs } from "./args/UserReviewArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Drink], {
    nullable: false
  })
  async favorites(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFavoritesArgs): Promise<Drink[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).favorites(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Drink], {
    nullable: false
  })
  async created(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedArgs): Promise<Drink[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).created(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async review(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReviewArgs): Promise<Review[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).review(args);
  }
}
