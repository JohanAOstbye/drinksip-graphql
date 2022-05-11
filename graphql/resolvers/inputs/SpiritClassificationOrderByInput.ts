import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpiritClassificationOrderByInput", {
  isAbstract: true
})
export class SpiritClassificationOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mainProductType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subProductType?: "asc" | "desc" | undefined;
}
