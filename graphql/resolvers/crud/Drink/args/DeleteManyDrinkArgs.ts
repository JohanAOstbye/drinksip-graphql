import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkWhereInput } from "../../../inputs/DrinkWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  where?: DrinkWhereInput | undefined;
}
