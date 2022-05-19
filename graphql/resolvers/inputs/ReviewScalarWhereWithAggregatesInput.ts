import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rating?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  drinkId?: StringWithAggregatesFilter | undefined;
}
