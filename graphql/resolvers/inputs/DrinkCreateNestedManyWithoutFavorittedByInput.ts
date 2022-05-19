import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateManyFavorittedByInputEnvelope } from "../inputs/DrinkCreateManyFavorittedByInputEnvelope";
import { DrinkCreateOrConnectWithoutFavorittedByInput } from "../inputs/DrinkCreateOrConnectWithoutFavorittedByInput";
import { DrinkCreateWithoutFavorittedByInput } from "../inputs/DrinkCreateWithoutFavorittedByInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateNestedManyWithoutFavorittedByInput", {
  isAbstract: true
})
export class DrinkCreateNestedManyWithoutFavorittedByInput {
  @TypeGraphQL.Field(_type => [DrinkCreateWithoutFavorittedByInput], {
    nullable: true
  })
  create?: DrinkCreateWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrinkCreateOrConnectWithoutFavorittedByInput], {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutFavorittedByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateManyFavorittedByInputEnvelope, {
    nullable: true
  })
  createMany?: DrinkCreateManyFavorittedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DrinkWhereUniqueInput], {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput[] | undefined;
}
