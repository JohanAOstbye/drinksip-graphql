import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSpiritTypeFilter } from "../inputs/NestedEnumSpiritTypeFilter";
import { NestedEnumSpiritTypeWithAggregatesFilter } from "../inputs/NestedEnumSpiritTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { SpiritType } from "../../enums/SpiritType";

@TypeGraphQL.InputType("EnumSpiritTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumSpiritTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSpiritTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSpiritTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiritTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumSpiritTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiritTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumSpiritTypeFilter | undefined;
}
