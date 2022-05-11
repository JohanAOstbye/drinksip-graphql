import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritCreateInput } from "../../../inputs/SpiritCreateInput";
import { SpiritUpdateInput } from "../../../inputs/SpiritUpdateInput";
import { SpiritWhereUniqueInput } from "../../../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSpiritArgs {
  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: false
  })
  where!: SpiritWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpiritCreateInput, {
    nullable: false
  })
  create!: SpiritCreateInput;

  @TypeGraphQL.Field(_type => SpiritUpdateInput, {
    nullable: false
  })
  update!: SpiritUpdateInput;
}
