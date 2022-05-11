import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritType } from "../../enums/SpiritType";

@TypeGraphQL.ObjectType("SpiritMinAggregate", {
  isAbstract: true
})
export class SpiritMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  alcoholContent!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ingredients!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nameLong!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sugar!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  volume!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeType!: string | null;

  @TypeGraphQL.Field(_type => SpiritType, {
    nullable: true
  })
  type!: "WINE" | "BEER" | "SPIRIT" | null;
}
