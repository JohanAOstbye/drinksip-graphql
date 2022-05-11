import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkWhereUniqueInput } from "../../../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;
}
