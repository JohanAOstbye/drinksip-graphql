import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateWithoutIngredientsInput } from "../inputs/DrinkCreateWithoutIngredientsInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkCreateOrConnectWithoutIngredientsInput", {
  isAbstract: true
})
export class DrinkCreateOrConnectWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: false
  })
  where!: DrinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrinkCreateWithoutIngredientsInput, {
    nullable: false
  })
  create!: DrinkCreateWithoutIngredientsInput;
}
