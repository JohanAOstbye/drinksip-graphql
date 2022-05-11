import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritClassificationCreateEnvelopeInput } from "../inputs/SpiritClassificationCreateEnvelopeInput";
import { SpiritDescriptionCreateEnvelopeInput } from "../inputs/SpiritDescriptionCreateEnvelopeInput";
import { SpiritType } from "../../enums/SpiritType";

@TypeGraphQL.InputType("SpiritCreateManyInput", {
  isAbstract: true
})
export class SpiritCreateManyInput {
  @TypeGraphQL.Field(_type => SpiritClassificationCreateEnvelopeInput, {
    nullable: false
  })
  classification!: SpiritClassificationCreateEnvelopeInput;

  @TypeGraphQL.Field(_type => SpiritDescriptionCreateEnvelopeInput, {
    nullable: false
  })
  description!: SpiritDescriptionCreateEnvelopeInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  alcoholContent!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ingredients!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nameLong!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sugar!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  volume!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeType?: string | undefined;

  @TypeGraphQL.Field(_type => SpiritType, {
    nullable: false
  })
  type!: "WINE" | "BEER" | "SPIRIT";
}
