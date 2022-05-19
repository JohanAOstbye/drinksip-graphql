import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyDrinkInputEnvelope } from "../inputs/ReviewCreateManyDrinkInputEnvelope";
import { ReviewCreateOrConnectWithoutDrinkInput } from "../inputs/ReviewCreateOrConnectWithoutDrinkInput";
import { ReviewCreateWithoutDrinkInput } from "../inputs/ReviewCreateWithoutDrinkInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewCreateNestedManyWithoutDrinkInput", {
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutDrinkInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutDrinkInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutDrinkInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutDrinkInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyDrinkInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyDrinkInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
