import { registerEnumType } from 'type-graphql';

export enum CombiScalarFieldEnum {
  SPIRIT = 'Spirit',
  INGREDIENT = 'Ingredient',
  DRINK = 'Drink',
}

registerEnumType(CombiScalarFieldEnum, {
  name: 'CombiScalarFieldEnum',
  description: undefined,
});
