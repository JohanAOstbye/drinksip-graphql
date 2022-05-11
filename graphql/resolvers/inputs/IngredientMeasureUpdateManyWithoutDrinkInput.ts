import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateManyDrinkInputEnvelope } from "../inputs/IngredientMeasureCreateManyDrinkInputEnvelope";
import { IngredientMeasureCreateOrConnectWithoutDrinkInput } from "../inputs/IngredientMeasureCreateOrConnectWithoutDrinkInput";
import { IngredientMeasureCreateWithoutDrinkInput } from "../inputs/IngredientMeasureCreateWithoutDrinkInput";
import { IngredientMeasureScalarWhereInput } from "../inputs/IngredientMeasureScalarWhereInput";
import { IngredientMeasureUpdateManyWithWhereWithoutDrinkInput } from "../inputs/IngredientMeasureUpdateManyWithWhereWithoutDrinkInput";
import { IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput } from "../inputs/IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput";
import { IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput } from "../inputs/IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateManyWithoutDrinkInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateManyWithoutDrinkInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateWithoutDrinkInput], {
    nullable: true
  })
  create?: IngredientMeasureCreateWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureCreateOrConnectWithoutDrinkInput], {
    nullable: true
  })
  connectOrCreate?: IngredientMeasureCreateOrConnectWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput], {
    nullable: true
  })
  upsert?: IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateManyDrinkInputEnvelope, {
    nullable: true
  })
  createMany?: IngredientMeasureCreateManyDrinkInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereUniqueInput], {
    nullable: true
  })
  set?: IngredientMeasureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IngredientMeasureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereUniqueInput], {
    nullable: true
  })
  delete?: IngredientMeasureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureWhereUniqueInput], {
    nullable: true
  })
  connect?: IngredientMeasureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput], {
    nullable: true
  })
  update?: IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureUpdateManyWithWhereWithoutDrinkInput], {
    nullable: true
  })
  updateMany?: IngredientMeasureUpdateManyWithWhereWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IngredientMeasureScalarWhereInput[] | undefined;
}
