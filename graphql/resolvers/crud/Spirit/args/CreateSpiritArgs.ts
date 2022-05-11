import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritCreateInput } from "../../../inputs/SpiritCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSpiritArgs {
  @TypeGraphQL.Field(_type => SpiritCreateInput, {
    nullable: false
  })
  data!: SpiritCreateInput;
}
