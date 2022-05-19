import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateManyFavorittedByInput } from "../inputs/DrinkCreateManyFavorittedByInput";

@TypeGraphQL.InputType("DrinkCreateManyFavorittedByInputEnvelope", {
  isAbstract: true
})
export class DrinkCreateManyFavorittedByInputEnvelope {
  @TypeGraphQL.Field(_type => [DrinkCreateManyFavorittedByInput], {
    nullable: false
  })
  data!: DrinkCreateManyFavorittedByInput[];
}
