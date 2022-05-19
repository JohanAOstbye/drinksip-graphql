import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateNestedManyWithoutIngredientInput } from "../inputs/IngredientMeasureCreateNestedManyWithoutIngredientInput";

@TypeGraphQL.InputType("IngredientCreateWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientCreateWithoutSpiritInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateNestedManyWithoutIngredientInput, {
    nullable: true
  })
  ingredientMeasure?: IngredientMeasureCreateNestedManyWithoutIngredientInput | undefined;
}
