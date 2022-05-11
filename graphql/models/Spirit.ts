import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Ingredient } from "../models/Ingredient";
import { SpiritClassification } from "../models/SpiritClassification";
import { SpiritDescription } from "../models/SpiritDescription";
import { SpiritType } from "../enums/SpiritType";
import { SpiritCount } from "../resolvers/outputs/SpiritCount";

@TypeGraphQL.ObjectType("Spirit", {
  isAbstract: true
})
export class Spirit {
  @TypeGraphQL.Field(_type => SpiritClassification, {
    nullable: false
  })
  classification!: SpiritClassification;

  @TypeGraphQL.Field(_type => SpiritDescription, {
    nullable: false
  })
  description!: SpiritDescription;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  alcoholContent!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ingredients!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nameLong!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sugar!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  volume!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeType?: string | null;

  @TypeGraphQL.Field(_type => SpiritType, {
    nullable: false
  })
  type!: "WINE" | "BEER" | "SPIRIT";

  Ingredient?: Ingredient[];

  @TypeGraphQL.Field(_type => SpiritCount, {
    nullable: true
  })
  _count?: SpiritCount | null;
}
