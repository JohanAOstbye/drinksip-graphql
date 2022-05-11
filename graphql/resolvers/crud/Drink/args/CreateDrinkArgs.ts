import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkCreateInput } from "../../../inputs/DrinkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkCreateInput, {
    nullable: false
  })
  data!: DrinkCreateInput;
}
