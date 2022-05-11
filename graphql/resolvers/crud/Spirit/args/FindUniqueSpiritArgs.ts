import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritWhereUniqueInput } from "../../../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSpiritArgs {
  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: false
  })
  where!: SpiritWhereUniqueInput;
}
