import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyDrinkInputEnvelope } from "../inputs/ReviewCreateManyDrinkInputEnvelope";
import { ReviewCreateOrConnectWithoutDrinkInput } from "../inputs/ReviewCreateOrConnectWithoutDrinkInput";
import { ReviewCreateWithoutDrinkInput } from "../inputs/ReviewCreateWithoutDrinkInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutDrinkInput } from "../inputs/ReviewUpdateManyWithWhereWithoutDrinkInput";
import { ReviewUpdateWithWhereUniqueWithoutDrinkInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutDrinkInput";
import { ReviewUpsertWithWhereUniqueWithoutDrinkInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutDrinkInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpdateManyWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewUpdateManyWithoutDrinkInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutDrinkInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutDrinkInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutDrinkInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyDrinkInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyDrinkInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  set?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutDrinkInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutDrinkInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
