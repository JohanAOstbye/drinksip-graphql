import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrinkOrderByWithRelationInput } from "../../../inputs/DrinkOrderByWithRelationInput";
import { DrinkWhereInput } from "../../../inputs/DrinkWhereInput";
import { DrinkWhereUniqueInput } from "../../../inputs/DrinkWhereUniqueInput";
import { DrinkScalarFieldEnum } from "../../../../enums/DrinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDrinkArgs {
  @TypeGraphQL.Field(_type => DrinkWhereInput, {
    nullable: true
  })
  where?: DrinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrinkOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DrinkOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DrinkWhereUniqueInput, {
    nullable: true
  })
  cursor?: DrinkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DrinkScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"IBA" | "alcoholic" | "category" | "dateModified" | "glass" | "id" | "image" | "instructions" | "name" | "tags" | "userId" | "favUserId"> | undefined;
}
