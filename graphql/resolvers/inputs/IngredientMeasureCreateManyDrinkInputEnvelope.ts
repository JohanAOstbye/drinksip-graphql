import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateManyDrinkInput } from "../inputs/IngredientMeasureCreateManyDrinkInput";

@TypeGraphQL.InputType("IngredientMeasureCreateManyDrinkInputEnvelope", {
  isAbstract: true
})
export class IngredientMeasureCreateManyDrinkInputEnvelope {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateManyDrinkInput], {
    nullable: false
  })
  data!: IngredientMeasureCreateManyDrinkInput[];
}
