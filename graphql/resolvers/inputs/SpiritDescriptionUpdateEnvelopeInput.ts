import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritDescriptionCreateInput } from "../inputs/SpiritDescriptionCreateInput";
import { SpiritDescriptionUpdateInput } from "../inputs/SpiritDescriptionUpdateInput";

@TypeGraphQL.InputType("SpiritDescriptionUpdateEnvelopeInput", {
  isAbstract: true
})
export class SpiritDescriptionUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => SpiritDescriptionCreateInput, {
    nullable: true
  })
  set?: SpiritDescriptionCreateInput | undefined;

  @TypeGraphQL.Field(_type => SpiritDescriptionUpdateInput, {
    nullable: true
  })
  update?: SpiritDescriptionUpdateInput | undefined;
}
