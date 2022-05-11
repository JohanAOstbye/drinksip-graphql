import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritUpdateManyMutationInput } from "../../../inputs/SpiritUpdateManyMutationInput";
import { SpiritWhereInput } from "../../../inputs/SpiritWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpiritArgs {
  @TypeGraphQL.Field(_type => SpiritUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpiritUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SpiritWhereInput, {
    nullable: true
  })
  where?: SpiritWhereInput | undefined;
}
