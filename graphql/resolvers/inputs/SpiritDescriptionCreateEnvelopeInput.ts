import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritDescriptionCreateInput } from "../inputs/SpiritDescriptionCreateInput";

@TypeGraphQL.InputType("SpiritDescriptionCreateEnvelopeInput", {
  isAbstract: true
})
export class SpiritDescriptionCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => SpiritDescriptionCreateInput, {
    nullable: true
  })
  set?: SpiritDescriptionCreateInput | undefined;
}
