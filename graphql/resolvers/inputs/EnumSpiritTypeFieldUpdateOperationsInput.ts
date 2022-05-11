import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritType } from "../../enums/SpiritType";

@TypeGraphQL.InputType("EnumSpiritTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumSpiritTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SpiritType, {
    nullable: true
  })
  set?: "WINE" | "BEER" | "SPIRIT" | undefined;
}
