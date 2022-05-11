import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateManyIngredientInput } from "../inputs/IngredientMeasureCreateManyIngredientInput";

@TypeGraphQL.InputType("IngredientMeasureCreateManyIngredientInputEnvelope", {
  isAbstract: true
})
export class IngredientMeasureCreateManyIngredientInputEnvelope {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateManyIngredientInput], {
    nullable: false
  })
  data!: IngredientMeasureCreateManyIngredientInput[];
}
