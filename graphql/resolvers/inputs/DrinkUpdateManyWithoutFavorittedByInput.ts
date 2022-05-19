import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateManyFavorittedByInputEnvelope } from "../inputs/DrinkCreateManyFavorittedByInputEnvelope";
import { DrinkCreateOrConnectWithoutFavorittedByInput } from "../inputs/DrinkCreateOrConnectWithoutFavorittedByInput";
import { DrinkCreateWithoutFavorittedByInput } from "../inputs/DrinkCreateWithoutFavorittedByInput";
import { DrinkScalarWhereInput } from "../inputs/DrinkScalarWhereInput";
import { DrinkUpdateManyWithWhereWithoutFavorittedByInput } from "../inputs/DrinkUpdateManyWithWhereWithoutFavorittedByInput";
import { DrinkUpdateWithWhereUniqueWithoutFavorittedByInput } from "../inputs/DrinkUpdateWithWhereUniqueWithoutFavorittedByInput";
import { DrinkUpsertWithWhereUniqueWithoutFavorittedByInput } from "../inputs/DrinkUpsertWithWhereUniqueWithoutFavorittedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpdateManyWithoutFavorittedByInput", {
  isAbstract: true
})
export class DrinkUpdateManyWithoutFavorittedByInput {
  @TypeGraphQL.Field(_type => [DrinkCreateWithoutFavorittedByInput], {
    nullable: true
  })
  create?: DrinkCreateWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkCreateOrConnectWithoutFavorittedByInput], {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkUpsertWithWhereUniqueWithoutFavorittedByInput], {
    nullable: true
  })
  upsert?: DrinkUpsertWithWhereUniqueWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateManyFavorittedByInputEnvelope, {
    nullable: true
  })
  createMany?: DrinkCreateManyFavorittedByInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [DrinkUpdateWithWhereUniqueWithoutFavorittedByInput], {
    nullable: true
  })
  update?: DrinkUpdateWithWhereUniqueWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkUpdateManyWithWhereWithoutFavorittedByInput], {
    nullable: true
  })
  updateMany?: DrinkUpdateManyWithWhereWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrinkScalarWhereInput[] | undefined;
}
