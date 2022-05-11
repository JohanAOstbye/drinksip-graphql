import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IngredientMeasureUpdateManyMutationInput } from "../../../inputs/IngredientMeasureUpdateManyMutationInput";
import { IngredientMeasureWhereInput } from "../../../inputs/IngredientMeasureWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIngredientMeasureArgs {
  @TypeGraphQL.Field(_type => IngredientMeasureUpdateManyMutationInput, {
    nullable: false
  })
  data!: IngredientMeasureUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IngredientMeasureWhereInput, {
    nullable: true
  })
  where?: IngredientMeasureWhereInput | undefined;
}
