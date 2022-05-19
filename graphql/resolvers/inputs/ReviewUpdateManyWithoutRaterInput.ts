import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyRaterInputEnvelope } from "../inputs/ReviewCreateManyRaterInputEnvelope";
import { ReviewCreateOrConnectWithoutRaterInput } from "../inputs/ReviewCreateOrConnectWithoutRaterInput";
import { ReviewCreateWithoutRaterInput } from "../inputs/ReviewCreateWithoutRaterInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutRaterInput } from "../inputs/ReviewUpdateManyWithWhereWithoutRaterInput";
import { ReviewUpdateWithWhereUniqueWithoutRaterInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutRaterInput";
import { ReviewUpsertWithWhereUniqueWithoutRaterInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutRaterInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpdateManyWithoutRaterInput", {
  isAbstract: true
})
export class ReviewUpdateManyWithoutRaterInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutRaterInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutRaterInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutRaterInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyRaterInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyRaterInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutRaterInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutRaterInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
