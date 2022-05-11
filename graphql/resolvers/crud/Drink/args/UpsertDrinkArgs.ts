import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkCreateInput } from "../../../inputs/DrinkCreateInput";
import { DrinkUpdateInput } from "../../../inputs/DrinkUpdateInput";
import { DrinkWhereUniqueInput } from "../../../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkCreateInput, {
    nullable: false
  })
  create!: DrinkCreateInput;

  @TypeGraphQL.Field(_type => DrinkUpdateInput, {
    nullable: false
  })
  update!: DrinkUpdateInput;
}
