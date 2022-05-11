import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateManyIngredientInputEnvelope } from "../inputs/IngredientMeasureCreateManyIngredientInputEnvelope";
import { IngredientMeasureCreateOrConnectWithoutIngredientInput } from "../inputs/IngredientMeasureCreateOrConnectWithoutIngredientInput";
import { IngredientMeasureCreateWithoutIngredientInput } from "../inputs/IngredientMeasureCreateWithoutIngredientInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureCreateNestedManyWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureCreateNestedManyWithoutIngredientInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateWithoutIngredientInput], {
    nullable: true
  })
  create?: IngredientMeasureCreateWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureCreateOrConnectWithoutIngredientInput], {
    nullable: true
  })
  connectOrCreate?: IngredientMeasureCreateOrConnectWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateManyIngredientInputEnvelope, {
    nullable: true
  })
  createMany?: IngredientMeasureCreateManyIngredientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereUniqueInput], {
    nullable: true
  })
  connect?: IngredientMeasureWhereUniqueInput[] | undefined;
}
