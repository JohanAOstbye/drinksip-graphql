import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateManyCreatedByInputEnvelope } from "../inputs/DrinkCreateManyCreatedByInputEnvelope";
import { DrinkCreateOrConnectWithoutCreatedByInput } from "../inputs/DrinkCreateOrConnectWithoutCreatedByInput";
import { DrinkCreateWithoutCreatedByInput } from "../inputs/DrinkCreateWithoutCreatedByInput";
import { DrinkScalarWhereInput } from "../inputs/DrinkScalarWhereInput";
import { DrinkUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/DrinkUpdateManyWithWhereWithoutCreatedByInput";
import { DrinkUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/DrinkUpdateWithWhereUniqueWithoutCreatedByInput";
import { DrinkUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/DrinkUpsertWithWhereUniqueWithoutCreatedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpdateManyWithoutCreatedByInput", {
  isAbstract: true
})
export class DrinkUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [DrinkCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: DrinkCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: DrinkUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: DrinkCreateManyCreatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DrinkWhereUniqueInput], {
    nullable: true
  })
  set?: DrinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DrinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkWhereUniqueInput], {
    nullable: true
  })
  delete?: DrinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkWhereUniqueInput], {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: DrinkUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: DrinkUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrinkScalarWhereInput[] | undefined;
}
