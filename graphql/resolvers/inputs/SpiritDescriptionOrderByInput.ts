import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpiritDescriptionOrderByInput", {
  isAbstract: true
})
export class SpiritDescriptionOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  colour?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  odour?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taste?: "asc" | "desc" | undefined;
}
