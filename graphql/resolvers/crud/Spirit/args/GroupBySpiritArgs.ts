import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritOrderByWithAggregationInput } from "../../../inputs/SpiritOrderByWithAggregationInput";
import { SpiritScalarWhereWithAggregatesInput } from "../../../inputs/SpiritScalarWhereWithAggregatesInput";
import { SpiritWhereInput } from "../../../inputs/SpiritWhereInput";
import { SpiritScalarFieldEnum } from "../../../../enums/SpiritScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySpiritArgs {
  @TypeGraphQL.Field(_type => SpiritWhereInput, {
    nullable: true
  })
  where?: SpiritWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpiritOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpiritOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"alcoholContent" | "id" | "ingredients" | "name" | "nameLong" | "sugar" | "volume" | "volumeType" | "type">;

  @TypeGraphQL.Field(_type => SpiritScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpiritScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
