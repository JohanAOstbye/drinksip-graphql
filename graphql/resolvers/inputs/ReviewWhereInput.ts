import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkRelationFilter } from "../inputs/DrinkRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReviewWhereInput", {
  isAbstract: true
})
export class ReviewWhereInput {
  @TypeGraphQL.Field(_type => [ReviewWhereInput], {
    nullable: true
  })
  AND?: ReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereInput], {
    nullable: true
  })
  OR?: ReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereInput], {
    nullable: true
  })
  NOT?: ReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  rater?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DrinkRelationFilter, {
    nullable: true
  })
  drink?: DrinkRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  drinkId?: StringFilter | undefined;
}
