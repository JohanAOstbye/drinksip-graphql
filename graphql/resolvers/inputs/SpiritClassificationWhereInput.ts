import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SpiritClassificationWhereInput", {
  isAbstract: true
})
export class SpiritClassificationWhereInput {
  @TypeGraphQL.Field(_type => [SpiritClassificationWhereInput], {
    nullable: true
  })
  AND?: SpiritClassificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritClassificationWhereInput], {
    nullable: true
  })
  OR?: SpiritClassificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpiritClassificationWhereInput], {
    nullable: true
  })
  NOT?: SpiritClassificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mainProductType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subProductType?: StringFilter | undefined;
}
