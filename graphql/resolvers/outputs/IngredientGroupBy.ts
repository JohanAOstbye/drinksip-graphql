import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IngredientCountAggregate } from "../outputs/IngredientCountAggregate";
import { IngredientMaxAggregate } from "../outputs/IngredientMaxAggregate";
import { IngredientMinAggregate } from "../outputs/IngredientMinAggregate";

@TypeGraphQL.ObjectType("IngredientGroupBy", {
  isAbstract: true
})
export class IngredientGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  spiritId!: string | null;

  @TypeGraphQL.Field(_type => IngredientCountAggregate, {
    nullable: true
  })
  _count!: IngredientCountAggregate | null;

  @TypeGraphQL.Field(_type => IngredientMinAggregate, {
    nullable: true
  })
  _min!: IngredientMinAggregate | null;

  @TypeGraphQL.Field(_type => IngredientMaxAggregate, {
    nullable: true
  })
  _max!: IngredientMaxAggregate | null;
}
