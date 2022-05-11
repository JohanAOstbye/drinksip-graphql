import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkUpdateInput } from "../../../inputs/DrinkUpdateInput";
import { DrinkWhereUniqueInput } from "../../../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkUpdateInput, {
    nullable: false
  })
  data!: DrinkUpdateInput;

  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;
}
