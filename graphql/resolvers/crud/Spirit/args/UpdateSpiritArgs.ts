import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritUpdateInput } from "../../../inputs/SpiritUpdateInput";
import { SpiritWhereUniqueInput } from "../../../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSpiritArgs {
  @TypeGraphQL.Field(_type => SpiritUpdateInput, {
    nullable: false
  })
  data!: SpiritUpdateInput;

  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: false
  })
  where!: SpiritWhereUniqueInput;
}
