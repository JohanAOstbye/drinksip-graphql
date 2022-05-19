import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateManyCreatedByInputEnvelope } from "../inputs/DrinkCreateManyCreatedByInputEnvelope";
import { DrinkCreateOrConnectWithoutCreatedByInput } from "../inputs/DrinkCreateOrConnectWithoutCreatedByInput";
import { DrinkCreateWithoutCreatedByInput } from "../inputs/DrinkCreateWithoutCreatedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateNestedManyWithoutCreatedByInput", {
  isAbstract: true
})
export class DrinkCreateNestedManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [DrinkCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: DrinkCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: DrinkCreateManyCreatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DrinkWhereUniqueInput], {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput[] | undefined;
}
