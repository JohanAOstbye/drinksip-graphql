import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritDescriptionObjectEqualityInput } from "../inputs/SpiritDescriptionObjectEqualityInput";
import { SpiritDescriptionWhereInput } from "../inputs/SpiritDescriptionWhereInput";

@TypeGraphQL.InputType("SpiritDescriptionCompositeFilter", {
  isAbstract: true
})
export class SpiritDescriptionCompositeFilter {
  @TypeGraphQL.Field(_type => SpiritDescriptionObjectEqualityInput, {
    nullable: true
  })
  equals?: SpiritDescriptionObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => SpiritDescriptionWhereInput, {
    nullable: true
  })
  is?: SpiritDescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpiritDescriptionWhereInput, {
    nullable: true
  })
  isNot?: SpiritDescriptionWhereInput | undefined;
}
