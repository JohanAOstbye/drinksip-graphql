import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrinkCountAggregate } from "../outputs/DrinkCountAggregate";
import { DrinkMaxAggregate } from "../outputs/DrinkMaxAggregate";
import { DrinkMinAggregate } from "../outputs/DrinkMinAggregate";

@TypeGraphQL.ObjectType("DrinkGroupBy", {
  isAbstract: true
})
export class DrinkGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  IBA!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  alcoholic!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  category!: string[] | null;

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
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  instructions!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  tags!: string[] | null;

  @TypeGraphQL.Field(_type => DrinkCountAggregate, {
    nullable: true
  })
  _count!: DrinkCountAggregate | null;

  @TypeGraphQL.Field(_type => DrinkMinAggregate, {
    nullable: true
  })
  _min!: DrinkMinAggregate | null;

  @TypeGraphQL.Field(_type => DrinkMaxAggregate, {
    nullable: true
  })
  _max!: DrinkMaxAggregate | null;
}
