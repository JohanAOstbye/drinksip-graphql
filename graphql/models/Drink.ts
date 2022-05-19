import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IngredientMeasure } from "../models/IngredientMeasure";
import { Review } from "../models/Review";
import { User } from "../models/User";
import { DrinkCount } from "../resolvers/outputs/DrinkCount";

@TypeGraphQL.ObjectType("Drink", {
  isAbstract: true
})
export class Drink {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  IBA?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  alcoholic!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  category!: string[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dateModified!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  glass!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  ingredients?: IngredientMeasure[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  instructions!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  tags!: string[];

  createdBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  favorittedBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  favUserId?: string | null;

  reviews?: Review[];

  @TypeGraphQL.Field(_type => DrinkCount, {
    nullable: true
  })
  _count?: DrinkCount | null;
}
