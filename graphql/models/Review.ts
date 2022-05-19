import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Drink } from "../models/Drink";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Review", {
  isAbstract: true
})
export class Review {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  rater?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  drink?: Drink;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  drinkId!: string;
}
