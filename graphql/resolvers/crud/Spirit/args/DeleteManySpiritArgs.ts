import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritWhereInput } from "../../../inputs/SpiritWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpiritArgs {
  @TypeGraphQL.Field(_type => SpiritWhereInput, {
    nullable: true
  })
  where?: SpiritWhereInput | undefined;
}
