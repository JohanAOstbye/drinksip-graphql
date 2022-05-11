import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritClassificationCreateInput } from "../inputs/SpiritClassificationCreateInput";
import { SpiritClassificationUpdateInput } from "../inputs/SpiritClassificationUpdateInput";

@TypeGraphQL.InputType("SpiritClassificationUpdateEnvelopeInput", {
  isAbstract: true
})
export class SpiritClassificationUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => SpiritClassificationCreateInput, {
    nullable: true
  })
  set?: SpiritClassificationCreateInput | undefined;

  @TypeGraphQL.Field(_type => SpiritClassificationUpdateInput, {
    nullable: true
  })
  update?: SpiritClassificationUpdateInput | undefined;
}
