import { CombiScalarFieldEnum } from './enums';
import { Combi } from './models';

export const maptoSimple = (
  array: { id: string; name: string; image: string }[],
  type: CombiScalarFieldEnum
): Combi[] => {
  return array.map((item) => ({ ...item, type: type }));
};
