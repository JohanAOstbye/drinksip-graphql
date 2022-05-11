import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateManySpiritInputEnvelope } from "../inputs/IngredientCreateManySpiritInputEnvelope";
import { IngredientCreateOrConnectWithoutSpiritInput } from "../inputs/IngredientCreateOrConnectWithoutSpiritInput";
import { IngredientCreateWithoutSpiritInput } from "../inputs/IngredientCreateWithoutSpiritInput";
import { IngredientScalarWhereInput } from "../inputs/IngredientScalarWhereInput";
import { IngredientUpdateManyWithWhereWithoutSpiritInput } from "../inputs/IngredientUpdateManyWithWhereWithoutSpiritInput";
import { IngredientUpdateWithWhereUniqueWithoutSpiritInput } from "../inputs/IngredientUpdateWithWhereUniqueWithoutSpiritInput";
import { IngredientUpsertWithWhereUniqueWithoutSpiritInput } from "../inputs/IngredientUpsertWithWhereUniqueWithoutSpiritInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientUpdateManyWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientUpdateManyWithoutSpiritInput {
  @TypeGraphQL.Field(_type => [IngredientCreateWithoutSpiritInput], {
    nullable: true
  })
  create?: IngredientCreateWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientCreateOrConnectWithoutSpiritInput], {
    nullable: true
  })
  connectOrCreate?: IngredientCreateOrConnectWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientUpsertWithWhereUniqueWithoutSpiritInput], {
    nullable: true
  })
  upsert?: IngredientUpsertWithWhereUniqueWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateManySpiritInputEnvelope, {
    nullable: true
  })
  createMany?: IngredientCreateManySpiritInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true
  })
  set?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true
  })
  delete?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true
  })
  connect?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientUpdateWithWhereUniqueWithoutSpiritInput], {
    nullable: true
  })
  update?: IngredientUpdateWithWhereUniqueWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientUpdateManyWithWhereWithoutSpiritInput], {
    nullable: true
  })
  updateMany?: IngredientUpdateManyWithWhereWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IngredientScalarWhereInput[] | undefined;
}
