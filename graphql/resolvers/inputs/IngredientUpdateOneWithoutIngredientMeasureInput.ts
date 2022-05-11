import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCreateOrConnectWithoutIngredientMeasureInput } from "../inputs/IngredientCreateOrConnectWithoutIngredientMeasureInput";
import { IngredientCreateWithoutIngredientMeasureInput } from "../inputs/IngredientCreateWithoutIngredientMeasureInput";
import { IngredientUpdateWithoutIngredientMeasureInput } from "../inputs/IngredientUpdateWithoutIngredientMeasureInput";
import { IngredientUpsertWithoutIngredientMeasureInput } from "../inputs/IngredientUpsertWithoutIngredientMeasureInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType("IngredientUpdateOneWithoutIngredientMeasureInput", {
  isAbstract: true
})
export class IngredientUpdateOneWithoutIngredientMeasureInput {
  @TypeGraphQL.Field(_type => IngredientCreateWithoutIngredientMeasureInput, {
    nullable: true
  })
  create?: IngredientCreateWithoutIngredientMeasureInput | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateOrConnectWithoutIngredientMeasureInput, {
    nullable: true
  })
  connectOrCreate?: IngredientCreateOrConnectWithoutIngredientMeasureInput | undefined;

  @TypeGraphQL.Field(_type => IngredientUpsertWithoutIngredientMeasureInput, {
    nullable: true
  })
  upsert?: IngredientUpsertWithoutIngredientMeasureInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: true
  })
  connect?: IngredientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IngredientUpdateWithoutIngredientMeasureInput, {
    nullable: true
  })
  update?: IngredientUpdateWithoutIngredientMeasureInput | undefined;
}
