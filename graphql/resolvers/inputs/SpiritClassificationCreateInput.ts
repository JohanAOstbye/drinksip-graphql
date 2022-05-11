import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SpiritClassificationCreateInput", {
  isAbstract: true
})
export class SpiritClassificationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mainProductType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subProductType!: string;
}
