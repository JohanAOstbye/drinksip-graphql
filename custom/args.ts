import { ArgsType, Field, Int } from 'type-graphql';
import { CombiScalarFieldEnum } from './enums';
import { CombiWhereInput, CombiOrderByWithRelationInput } from './inputs';

@ArgsType()
export class FindManyCombiArgs {
  @Field((_type) => CombiWhereInput, {
    nullable: true,
  })
  where?: CombiWhereInput | undefined;

  @Field((_type) => [CombiOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CombiOrderByWithRelationInput[] | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @Field((_type) => [CombiScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'image' | 'name' | 'type'> | undefined;
}
