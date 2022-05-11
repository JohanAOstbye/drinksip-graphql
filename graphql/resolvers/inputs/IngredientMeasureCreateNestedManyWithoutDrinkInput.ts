import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateManyDrinkInputEnvelope } from "../inputs/IngredientMeasureCreateManyDrinkInputEnvelope";
import { IngredientMeasureCreateOrConnectWithoutDrinkInput } from "../inputs/IngredientMeasureCreateOrConnectWithoutDrinkInput";
import { IngredientMeasureCreateWithoutDrinkInput } from "../inputs/IngredientMeasureCreateWithoutDrinkInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureCreateNestedManyWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureCreateNestedManyWithoutDrinkInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateWithoutDrinkInput], {
    nullable: true
  })
  create?: IngredientMeasureCreateWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureCreateOrConnectWithoutDrinkInput], {
    nullable: true
  })
  connectOrCreate?: IngredientMeasureCreateOrConnectWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateManyDrinkInputEnvelope, {
    nullable: true
  })
  createMany?: IngredientMeasureCreateManyDrinkInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereUniqueInput], {
    nullable: true
  })
  connect?: IngredientMeasureWhereUniqueInput[] | undefined;
}
