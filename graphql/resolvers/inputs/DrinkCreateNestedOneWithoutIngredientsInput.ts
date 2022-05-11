import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateOrConnectWithoutIngredientsInput } from "../inputs/DrinkCreateOrConnectWithoutIngredientsInput";
import { DrinkCreateWithoutIngredientsInput } from "../inputs/DrinkCreateWithoutIngredientsInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateNestedOneWithoutIngredientsInput", {
  isAbstract: true
})
export class DrinkCreateNestedOneWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => DrinkCreateWithoutIngredientsInput, {
    nullable: true
  })
  create?: DrinkCreateWithoutIngredientsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateOrConnectWithoutIngredientsInput, {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutIngredientsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput | undefined;
}
