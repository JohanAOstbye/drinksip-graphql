import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritOrderByWithRelationInput } from "../../../inputs/SpiritOrderByWithRelationInput";
import { SpiritWhereInput } from "../../../inputs/SpiritWhereInput";
import { SpiritWhereUniqueInput } from "../../../inputs/SpiritWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSpiritArgs {
  @TypeGraphQL.Field(_type => SpiritWhereInput, {
    nullable: true
  })
  where?: SpiritWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpiritOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpiritOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SpiritWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpiritWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
