import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCreatecategoryInput } from "../inputs/DrinkCreatecategoryInput";
import { DrinkCreatetagsInput } from "../inputs/DrinkCreatetagsInput";

@TypeGraphQL.InputType("DrinkCreateManyInput", {
  isAbstract: true
})
export class DrinkCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  IBA?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alcoholic?: string | undefined;

  @TypeGraphQL.Field(_type => DrinkCreatecategoryInput, {
    nullable: true
  })
  category?: DrinkCreatecategoryInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dateModified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  glass!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  instructions!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => DrinkCreatetagsInput, {
    nullable: true
  })
  tags?: DrinkCreatetagsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  favUserId?: string | undefined;
}
