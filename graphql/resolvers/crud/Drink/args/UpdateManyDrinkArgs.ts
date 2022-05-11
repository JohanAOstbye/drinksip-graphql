import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkUpdateManyMutationInput } from "../../../inputs/DrinkUpdateManyMutationInput";
import { DrinkWhereInput } from "../../../inputs/DrinkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrinkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  where?: DrinkWhereInput | undefined;
}
