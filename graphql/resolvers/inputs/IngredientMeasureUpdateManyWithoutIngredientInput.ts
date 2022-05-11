import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientMeasureCreateManyIngredientInputEnvelope } from "../inputs/IngredientMeasureCreateManyIngredientInputEnvelope";
import { IngredientMeasureCreateOrConnectWithoutIngredientInput } from "../inputs/IngredientMeasureCreateOrConnectWithoutIngredientInput";
import { IngredientMeasureCreateWithoutIngredientInput } from "../inputs/IngredientMeasureCreateWithoutIngredientInput";
import { IngredientMeasureScalarWhereInput } from "../inputs/IngredientMeasureScalarWhereInput";
import { IngredientMeasureUpdateManyWithWhereWithoutIngredientInput } from "../inputs/IngredientMeasureUpdateManyWithWhereWithoutIngredientInput";
import { IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput } from "../inputs/IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput";
import { IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput } from "../inputs/IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput";
import { IngredientMeasureWhereUniqueInput } from "../inputs/IngredientMeasureWhereUniqueInput";

@TypeGraphQL.InputType("IngredientMeasureUpdateManyWithoutIngredientInput", {
  isAbstract: true
})
export class IngredientMeasureUpdateManyWithoutIngredientInput {
  @TypeGraphQL.Field(_type => [IngredientMeasureCreateWithoutIngredientInput], {
    nullable: true
  })
  create?: IngredientMeasureCreateWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureCreateOrConnectWithoutIngredientInput], {
    nullable: true
  })
  connectOrCreate?: IngredientMeasureCreateOrConnectWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput], {
    nullable: true
  })
  upsert?: IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientMeasureCreateManyIngredientInputEnvelope, {
    nullable: true
  })
  createMany?: IngredientMeasureCreateManyIngredientInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput], {
    nullable: true
  })
  update?: IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureUpdateManyWithWhereWithoutIngredientInput], {
    nullable: true
  })
  updateMany?: IngredientMeasureUpdateManyWithWhereWithoutIngredientInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientMeasureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IngredientMeasureScalarWhereInput[] | undefined;
}
