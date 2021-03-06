import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("DrinkMinAggregate", {
  isAbstract: true
})
export class DrinkMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  IBA!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alcoholic!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dateModified!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  glass!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instructions!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  favUserId!: string | null;
}
