import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SpiritDescriptionObjectEqualityInput", {
  isAbstract: true
})
export class SpiritDescriptionObjectEqualityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  colour!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  odour!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taste!: string;
}
