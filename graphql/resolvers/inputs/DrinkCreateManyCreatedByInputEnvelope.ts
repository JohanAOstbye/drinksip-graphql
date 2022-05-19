import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateManyCreatedByInput } from "../inputs/DrinkCreateManyCreatedByInput";

@TypeGraphQL.InputType("DrinkCreateManyCreatedByInputEnvelope", {
  isAbstract: true
})
export class DrinkCreateManyCreatedByInputEnvelope {
  @TypeGraphQL.Field(_type => [DrinkCreateManyCreatedByInput], {
    nullable: false
  })
  data!: DrinkCreateManyCreatedByInput[];
}
