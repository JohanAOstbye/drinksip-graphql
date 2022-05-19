import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyRaterInputEnvelope } from "../inputs/ReviewCreateManyRaterInputEnvelope";
import { ReviewCreateOrConnectWithoutRaterInput } from "../inputs/ReviewCreateOrConnectWithoutRaterInput";
import { ReviewCreateWithoutRaterInput } from "../inputs/ReviewCreateWithoutRaterInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewCreateNestedManyWithoutRaterInput", {
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutRaterInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutRaterInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutRaterInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutRaterInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyRaterInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyRaterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
