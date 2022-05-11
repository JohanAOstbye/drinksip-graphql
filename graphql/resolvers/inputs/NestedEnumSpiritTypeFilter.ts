import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritType } from "../../enums/SpiritType";

@TypeGraphQL.InputType("NestedEnumSpiritTypeFilter", {
  isAbstract: true
})
export class NestedEnumSpiritTypeFilter {
  @TypeGraphQL.Field(_type => SpiritType, {
    nullable: true
  })
  equals?: "WINE" | "BEER" | "SPIRIT" | undefined;

  @TypeGraphQL.Field(_type => [SpiritType], {
    nullable: true
  })
  in?: Array<"WINE" | "BEER" | "SPIRIT"> | undefined;

  @TypeGraphQL.Field(_type => [SpiritType], {
    nullable: true
  })
  notIn?: Array<"WINE" | "BEER" | "SPIRIT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiritTypeFilter, {
    nullable: true
  })
  not?: NestedEnumSpiritTypeFilter | undefined;
}
