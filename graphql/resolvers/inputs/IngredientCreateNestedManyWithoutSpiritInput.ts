import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateManySpiritInputEnvelope } from "../inputs/IngredientCreateManySpiritInputEnvelope";
import { IngredientCreateOrConnectWithoutSpiritInput } from "../inputs/IngredientCreateOrConnectWithoutSpiritInput";
import { IngredientCreateWithoutSpiritInput } from "../inputs/IngredientCreateWithoutSpiritInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientCreateNestedManyWithoutSpiritInput", {
  isAbstract: true
})
export class IngredientCreateNestedManyWithoutSpiritInput {
  @TypeGraphQL.Field(_type => [IngredientCreateWithoutSpiritInput], {
    nullable: true
  })
  create?: IngredientCreateWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientCreateOrConnectWithoutSpiritInput], {
    nullable: true
  })
  connectOrCreate?: IngredientCreateOrConnectWithoutSpiritInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateManySpiritInputEnvelope, {
    nullable: true
  })
  createMany?: IngredientCreateManySpiritInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true
  })
  connect?: IngredientWhereUniqueInput[] | undefined;
}
