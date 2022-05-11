import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientOrderByWithRelationInput } from "../../../inputs/IngredientOrderByWithRelationInput";
import { IngredientWhereInput } from "../../../inputs/IngredientWhereInput";
import { IngredientWhereUniqueInput } from "../../../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true
  })
  where?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IngredientOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IngredientOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: true
  })
  cursor?: IngredientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}