import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateManySpiritInput } from "../inputs/IngredientCreateManySpiritInput";

@TypeGraphQL.InputType("IngredientCreateManySpiritInputEnvelope", {
  isAbstract: true
})
export class IngredientCreateManySpiritInputEnvelope {
  @TypeGraphQL.Field(_type => [IngredientCreateManySpiritInput], {
    nullable: false
  })
  data!: IngredientCreateManySpiritInput[];
}
