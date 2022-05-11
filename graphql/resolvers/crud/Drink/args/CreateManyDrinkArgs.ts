import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkCreateManyInput } from "../../../inputs/DrinkCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDrinkArgs {
  @TypeGraphQL.Field(_type => [DrinkCreateManyInput], {
    nullable: false
  })
  data!: DrinkCreateManyInput[];
}
