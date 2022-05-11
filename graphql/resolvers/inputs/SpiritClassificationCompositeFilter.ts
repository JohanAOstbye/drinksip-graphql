import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiritClassificationObjectEqualityInput } from "../inputs/SpiritClassificationObjectEqualityInput";
import { SpiritClassificationWhereInput } from "../inputs/SpiritClassificationWhereInput";

@TypeGraphQL.InputType("SpiritClassificationCompositeFilter", {
  isAbstract: true
})
export class SpiritClassificationCompositeFilter {
  @TypeGraphQL.Field(_type => SpiritClassificationObjectEqualityInput, {
    nullable: true
  })
  equals?: SpiritClassificationObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => SpiritClassificationWhereInput, {
    nullable: true
  })
  is?: SpiritClassificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpiritClassificationWhereInput, {
    nullable: true
  })
  isNot?: SpiritClassificationWhereInput | undefined;
}
