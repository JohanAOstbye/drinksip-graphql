import { ObjectType, Field } from 'type-graphql';
import { CombiScalarFieldEnum } from './enums';

@ObjectType('Combi', {
  isAbstract: true,
})
export class Combi {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  image?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @Field((_type) => CombiScalarFieldEnum, {
    nullable: false,
  })
  type!: CombiScalarFieldEnum;
}
