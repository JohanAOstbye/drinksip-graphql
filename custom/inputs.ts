import { Field, InputType } from 'type-graphql';
import { SortOrder } from '../graphql';
import {
  StringFilter,
  StringNullableFilter,
} from '../graphql/resolvers/inputs';

@InputType('CombiWhereInput', {
  isAbstract: true,
})
export class CombiWhereInput {
  @Field((_type) => [CombiWhereInput], {
    nullable: true,
  })
  AND?: CombiWhereInput[] | undefined;

  @Field((_type) => [CombiWhereInput], {
    nullable: true,
  })
  OR?: CombiWhereInput[] | undefined;

  @Field((_type) => [CombiWhereInput], {
    nullable: true,
  })
  NOT?: CombiWhereInput[] | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  image?: StringNullableFilter | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  instructions?: StringFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;
}

@InputType('CombiOrderByWithRelationInput', {
  isAbstract: true,
})
export class CombiOrderByWithRelationInput {
  @Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;
}
