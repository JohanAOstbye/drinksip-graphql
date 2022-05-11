import * as TypeGraphQL from "type-graphql";
import { Ingredient } from "../../../models/Ingredient";
import { Spirit } from "../../../models/Spirit";
import { SpiritIngredientArgs } from "./args/SpiritIngredientArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Spirit)
export class SpiritRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Ingredient], {
    nullable: false
  })
  async Ingredient(@TypeGraphQL.Root() spirit: Spirit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SpiritIngredientArgs): Promise<Ingredient[]> {
    return getPrismaFromContext(ctx).spirit.findUnique({
      where: {
        id: spirit.id,
      },
    }).Ingredient(args);
  }
}
