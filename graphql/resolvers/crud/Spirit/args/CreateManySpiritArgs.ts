import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritCreateManyInput } from "../../../inputs/SpiritCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpiritArgs {
  @TypeGraphQL.Field(_type => [SpiritCreateManyInput], {
    nullable: false
  })
  data!: SpiritCreateManyInput[];
}
