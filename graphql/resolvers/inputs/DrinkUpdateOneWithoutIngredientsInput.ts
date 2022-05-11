import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateOrConnectWithoutIngredientsInput } from "../inputs/DrinkCreateOrConnectWithoutIngredientsInput";
import { DrinkCreateWithoutIngredientsInput } from "../inputs/DrinkCreateWithoutIngredientsInput";
import { DrinkUpdateWithoutIngredientsInput } from "../inputs/DrinkUpdateWithoutIngredientsInput";
import { DrinkUpsertWithoutIngredientsInput } from "../inputs/DrinkUpsertWithoutIngredientsInput";
import { DrinkWhereUniqueInput } from "../inputs/DrinkWhereUniqueInput";

@TypeGraphQL.InputType("DrinkUpdateOneWithoutIngredientsInput", {
  isAbstract: true
})
export class DrinkUpdateOneWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => DrinkCreateWithoutIngredientsInput, {
    nullable: true
  })
  create?: DrinkCreateWithoutIngredientsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateOrConnectWithoutIngredientsInput, {
    nullable: true
  })
  connectOrCreate?: DrinkCreateOrConnectWithoutIngredientsInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpsertWithoutIngredientsInput, {
    nullable: true
  })
  upsert?: DrinkUpsertWithoutIngredientsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: true
  })
  connect?: DrinkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DrinkUpdateWithoutIngredientsInput, {
    nullable: true
  })
  update?: DrinkUpdateWithoutIngredientsInput | undefined;
}
