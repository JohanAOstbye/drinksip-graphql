import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpiritOrderByWithRelationInput } from "../../../inputs/SpiritOrderByWithRelationInput";
import { SpiritWhereInput } from "../../../inputs/SpiritWhereInput";
import { SpiritWhereUniqueInput } from "../../../inputs/SpiritWhereUniqueInput";
import { SpiritScalarFieldEnum } from "../../../../enums/SpiritScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSpiritArgs {
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

  @TypeGraphQL.Field(_type => [SpiritScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"alcoholContent" | "id" | "ingredients" | "name" | "nameLong" | "sugar" | "volume" | "volumeType" | "type"> | undefined;
}
