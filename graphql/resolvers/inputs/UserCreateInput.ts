import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreateNestedManyWithoutCreatedByInput } from "../inputs/DrinkCreateNestedManyWithoutCreatedByInput";
import { DrinkCreateNestedManyWithoutFavorittedByInput } from "../inputs/DrinkCreateNestedManyWithoutFavorittedByInput";
import { ReviewCreateNestedManyWithoutRaterInput } from "../inputs/ReviewCreateNestedManyWithoutRaterInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateNestedManyWithoutFavorittedByInput, {
    nullable: true
  })
  favorites?: DrinkCreateNestedManyWithoutFavorittedByInput | undefined;

  @TypeGraphQL.Field(_type => DrinkCreateNestedManyWithoutCreatedByInput, {
    nullable: true
  })
  created?: DrinkCreateNestedManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutRaterInput, {
    nullable: true
  })
  review?: ReviewCreateNestedManyWithoutRaterInput | undefined;
}
