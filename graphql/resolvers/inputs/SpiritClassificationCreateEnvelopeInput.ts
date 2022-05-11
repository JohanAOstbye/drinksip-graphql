import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritClassificationCreateInput } from "../inputs/SpiritClassificationCreateInput";

@TypeGraphQL.InputType("SpiritClassificationCreateEnvelopeInput", {
  isAbstract: true
})
export class SpiritClassificationCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => SpiritClassificationCreateInput, {
    nullable: true
  })
  set?: SpiritClassificationCreateInput | undefined;
}
