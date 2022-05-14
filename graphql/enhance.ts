import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Drink: crudResolvers.DrinkCrudResolver,
  IngredientMeasure: crudResolvers.IngredientMeasureCrudResolver,
  Spirit: crudResolvers.SpiritCrudResolver,
  Ingredient: crudResolvers.IngredientCrudResolver
};
const actionResolversMap = {
  Drink: {
    drink: actionResolvers.FindUniqueDrinkResolver,
    findFirstDrink: actionResolvers.FindFirstDrinkResolver,
    drinks: actionResolvers.FindManyDrinkResolver,
    createDrink: actionResolvers.CreateDrinkResolver,
    createManyDrink: actionResolvers.CreateManyDrinkResolver,
    deleteDrink: actionResolvers.DeleteDrinkResolver,
    updateDrink: actionResolvers.UpdateDrinkResolver,
    deleteManyDrink: actionResolvers.DeleteManyDrinkResolver,
    updateManyDrink: actionResolvers.UpdateManyDrinkResolver,
    upsertDrink: actionResolvers.UpsertDrinkResolver,
    aggregateDrink: actionResolvers.AggregateDrinkResolver,
    groupByDrink: actionResolvers.GroupByDrinkResolver
  },
  IngredientMeasure: {
    ingredientMeasure: actionResolvers.FindUniqueIngredientMeasureResolver,
    findFirstIngredientMeasure: actionResolvers.FindFirstIngredientMeasureResolver,
    ingredientMeasures: actionResolvers.FindManyIngredientMeasureResolver,
    createIngredientMeasure: actionResolvers.CreateIngredientMeasureResolver,
    createManyIngredientMeasure: actionResolvers.CreateManyIngredientMeasureResolver,
    deleteIngredientMeasure: actionResolvers.DeleteIngredientMeasureResolver,
    updateIngredientMeasure: actionResolvers.UpdateIngredientMeasureResolver,
    deleteManyIngredientMeasure: actionResolvers.DeleteManyIngredientMeasureResolver,
    updateManyIngredientMeasure: actionResolvers.UpdateManyIngredientMeasureResolver,
    upsertIngredientMeasure: actionResolvers.UpsertIngredientMeasureResolver,
    aggregateIngredientMeasure: actionResolvers.AggregateIngredientMeasureResolver,
    groupByIngredientMeasure: actionResolvers.GroupByIngredientMeasureResolver
  },
  Spirit: {
    spirit: actionResolvers.FindUniqueSpiritResolver,
    findFirstSpirit: actionResolvers.FindFirstSpiritResolver,
    spirits: actionResolvers.FindManySpiritResolver,
    createSpirit: actionResolvers.CreateSpiritResolver,
    createManySpirit: actionResolvers.CreateManySpiritResolver,
    deleteSpirit: actionResolvers.DeleteSpiritResolver,
    updateSpirit: actionResolvers.UpdateSpiritResolver,
    deleteManySpirit: actionResolvers.DeleteManySpiritResolver,
    updateManySpirit: actionResolvers.UpdateManySpiritResolver,
    upsertSpirit: actionResolvers.UpsertSpiritResolver,
    aggregateSpirit: actionResolvers.AggregateSpiritResolver,
    groupBySpirit: actionResolvers.GroupBySpiritResolver
  },
  Ingredient: {
    ingredient: actionResolvers.FindUniqueIngredientResolver,
    findFirstIngredient: actionResolvers.FindFirstIngredientResolver,
    ingredients: actionResolvers.FindManyIngredientResolver,
    createIngredient: actionResolvers.CreateIngredientResolver,
    createManyIngredient: actionResolvers.CreateManyIngredientResolver,
    deleteIngredient: actionResolvers.DeleteIngredientResolver,
    updateIngredient: actionResolvers.UpdateIngredientResolver,
    deleteManyIngredient: actionResolvers.DeleteManyIngredientResolver,
    updateManyIngredient: actionResolvers.UpdateManyIngredientResolver,
    upsertIngredient: actionResolvers.UpsertIngredientResolver,
    aggregateIngredient: actionResolvers.AggregateIngredientResolver,
    groupByIngredient: actionResolvers.GroupByIngredientResolver
  }
};
const crudResolversInfo = {
  Drink: ["drink", "findFirstDrink", "drinks", "createDrink", "createManyDrink", "deleteDrink", "updateDrink", "deleteManyDrink", "updateManyDrink", "upsertDrink", "aggregateDrink", "groupByDrink"],
  IngredientMeasure: ["ingredientMeasure", "findFirstIngredientMeasure", "ingredientMeasures", "createIngredientMeasure", "createManyIngredientMeasure", "deleteIngredientMeasure", "updateIngredientMeasure", "deleteManyIngredientMeasure", "updateManyIngredientMeasure", "upsertIngredientMeasure", "aggregateIngredientMeasure", "groupByIngredientMeasure"],
  Spirit: ["spirit", "findFirstSpirit", "spirits", "createSpirit", "createManySpirit", "deleteSpirit", "updateSpirit", "deleteManySpirit", "updateManySpirit", "upsertSpirit", "aggregateSpirit", "groupBySpirit"],
  Ingredient: ["ingredient", "findFirstIngredient", "ingredients", "createIngredient", "createManyIngredient", "deleteIngredient", "updateIngredient", "deleteManyIngredient", "updateManyIngredient", "upsertIngredient", "aggregateIngredient", "groupByIngredient"]
};
const argsInfo = {
  FindUniqueDrinkArgs: ["where"],
  FindFirstDrinkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDrinkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDrinkArgs: ["data"],
  CreateManyDrinkArgs: ["data"],
  DeleteDrinkArgs: ["where"],
  UpdateDrinkArgs: ["data", "where"],
  DeleteManyDrinkArgs: ["where"],
  UpdateManyDrinkArgs: ["data", "where"],
  UpsertDrinkArgs: ["where", "create", "update"],
  AggregateDrinkArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDrinkArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueIngredientMeasureArgs: ["where"],
  FindFirstIngredientMeasureArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIngredientMeasureArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateIngredientMeasureArgs: ["data"],
  CreateManyIngredientMeasureArgs: ["data"],
  DeleteIngredientMeasureArgs: ["where"],
  UpdateIngredientMeasureArgs: ["data", "where"],
  DeleteManyIngredientMeasureArgs: ["where"],
  UpdateManyIngredientMeasureArgs: ["data", "where"],
  UpsertIngredientMeasureArgs: ["where", "create", "update"],
  AggregateIngredientMeasureArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByIngredientMeasureArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSpiritArgs: ["where"],
  FindFirstSpiritArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySpiritArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSpiritArgs: ["data"],
  CreateManySpiritArgs: ["data"],
  DeleteSpiritArgs: ["where"],
  UpdateSpiritArgs: ["data", "where"],
  DeleteManySpiritArgs: ["where"],
  UpdateManySpiritArgs: ["data", "where"],
  UpsertSpiritArgs: ["where", "create", "update"],
  AggregateSpiritArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySpiritArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueIngredientArgs: ["where"],
  FindFirstIngredientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIngredientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateIngredientArgs: ["data"],
  CreateManyIngredientArgs: ["data"],
  DeleteIngredientArgs: ["where"],
  UpdateIngredientArgs: ["data", "where"],
  DeleteManyIngredientArgs: ["where"],
  UpdateManyIngredientArgs: ["data", "where"],
  UpsertIngredientArgs: ["where", "create", "update"],
  AggregateIngredientArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByIngredientArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Drink: relationResolvers.DrinkRelationsResolver,
  IngredientMeasure: relationResolvers.IngredientMeasureRelationsResolver,
  Spirit: relationResolvers.SpiritRelationsResolver,
  Ingredient: relationResolvers.IngredientRelationsResolver
};
const relationResolversInfo = {
  Drink: ["ingredients"],
  IngredientMeasure: ["ingredient", "Drink"],
  Spirit: ["Ingredient"],
  Ingredient: ["spirit", "IngredientMeasure"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Drink: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags"],
  IngredientMeasure: ["id", "measure", "ingredientId", "drinkId"],
  Spirit: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  Ingredient: ["id", "name", "type", "image", "spiritId"],
  SpiritClassification: ["mainProductType", "productType", "subProductType"],
  SpiritDescription: ["colour", "odour", "taste"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateDrink: ["_count", "_min", "_max"],
  DrinkGroupBy: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "_count", "_min", "_max"],
  AggregateIngredientMeasure: ["_count", "_min", "_max"],
  IngredientMeasureGroupBy: ["id", "measure", "ingredientId", "drinkId", "_count", "_min", "_max"],
  AggregateSpirit: ["_count", "_avg", "_sum", "_min", "_max"],
  SpiritGroupBy: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIngredient: ["_count", "_min", "_max"],
  IngredientGroupBy: ["id", "name", "type", "image", "spiritId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  DrinkCount: ["ingredients"],
  DrinkCountAggregate: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "_all"],
  DrinkMinAggregate: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name"],
  DrinkMaxAggregate: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name"],
  IngredientMeasureCountAggregate: ["id", "measure", "ingredientId", "drinkId", "_all"],
  IngredientMeasureMinAggregate: ["id", "measure", "ingredientId", "drinkId"],
  IngredientMeasureMaxAggregate: ["id", "measure", "ingredientId", "drinkId"],
  SpiritCount: ["Ingredient"],
  SpiritCountAggregate: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "_all"],
  SpiritAvgAggregate: ["alcoholContent", "volume"],
  SpiritSumAggregate: ["alcoholContent", "volume"],
  SpiritMinAggregate: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritMaxAggregate: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  IngredientCount: ["IngredientMeasure"],
  IngredientCountAggregate: ["id", "name", "type", "image", "spiritId", "_all"],
  IngredientMinAggregate: ["id", "name", "type", "image", "spiritId"],
  IngredientMaxAggregate: ["id", "name", "type", "image", "spiritId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  DrinkWhereInput: ["AND", "OR", "NOT", "IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags"],
  DrinkOrderByWithRelationInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags"],
  DrinkWhereUniqueInput: ["id"],
  DrinkOrderByWithAggregationInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "_count", "_max", "_min"],
  DrinkScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags"],
  IngredientMeasureWhereInput: ["AND", "OR", "NOT", "id", "measure", "ingredient", "ingredientId", "Drink", "drinkId"],
  IngredientMeasureOrderByWithRelationInput: ["id", "measure", "ingredient", "ingredientId", "Drink", "drinkId"],
  IngredientMeasureWhereUniqueInput: ["id"],
  IngredientMeasureOrderByWithAggregationInput: ["id", "measure", "ingredientId", "drinkId", "_count", "_max", "_min"],
  IngredientMeasureScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "measure", "ingredientId", "drinkId"],
  SpiritWhereInput: ["AND", "OR", "NOT", "classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritOrderByWithRelationInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritWhereUniqueInput: ["id"],
  SpiritOrderByWithAggregationInput: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "_count", "_avg", "_max", "_min", "_sum"],
  SpiritScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  IngredientWhereInput: ["AND", "OR", "NOT", "id", "name", "type", "image", "spirit", "spiritId", "IngredientMeasure"],
  IngredientOrderByWithRelationInput: ["id", "name", "type", "image", "spirit", "spiritId", "IngredientMeasure"],
  IngredientWhereUniqueInput: ["id"],
  IngredientOrderByWithAggregationInput: ["id", "name", "type", "image", "spiritId", "_count", "_max", "_min"],
  IngredientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "type", "image", "spiritId"],
  DrinkCreateInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags"],
  DrinkUpdateInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "ingredients", "instructions", "name", "tags"],
  DrinkCreateManyInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags"],
  DrinkUpdateManyMutationInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "instructions", "name", "tags"],
  IngredientMeasureCreateInput: ["id", "measure", "ingredient", "Drink"],
  IngredientMeasureUpdateInput: ["measure", "ingredient", "Drink"],
  IngredientMeasureCreateManyInput: ["id", "measure", "ingredientId", "drinkId"],
  IngredientMeasureUpdateManyMutationInput: ["measure"],
  SpiritCreateInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritUpdateInput: ["classification", "description", "alcoholContent", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritCreateManyInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritUpdateManyMutationInput: ["classification", "description", "alcoholContent", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  IngredientCreateInput: ["id", "name", "type", "image", "spirit", "IngredientMeasure"],
  IngredientUpdateInput: ["name", "type", "image", "spirit", "IngredientMeasure"],
  IngredientCreateManyInput: ["id", "name", "type", "image", "spiritId"],
  IngredientUpdateManyMutationInput: ["name", "type", "image"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IngredientMeasureListRelationFilter: ["every", "some", "none"],
  IngredientMeasureOrderByRelationAggregateInput: ["_count"],
  DrinkCountOrderByAggregateInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags"],
  DrinkMaxOrderByAggregateInput: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name"],
  DrinkMinOrderByAggregateInput: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IngredientRelationFilter: ["is", "isNot"],
  DrinkRelationFilter: ["is", "isNot"],
  IngredientMeasureCountOrderByAggregateInput: ["id", "measure", "ingredientId", "drinkId"],
  IngredientMeasureMaxOrderByAggregateInput: ["id", "measure", "ingredientId", "drinkId"],
  IngredientMeasureMinOrderByAggregateInput: ["id", "measure", "ingredientId", "drinkId"],
  SpiritClassificationCompositeFilter: ["equals", "is", "isNot"],
  SpiritClassificationObjectEqualityInput: ["mainProductType", "productType", "subProductType"],
  SpiritDescriptionCompositeFilter: ["equals", "is", "isNot"],
  SpiritDescriptionObjectEqualityInput: ["colour", "odour", "taste"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumSpiritTypeFilter: ["equals", "in", "notIn", "not"],
  IngredientListRelationFilter: ["every", "some", "none"],
  SpiritClassificationOrderByInput: ["mainProductType", "productType", "subProductType"],
  SpiritDescriptionOrderByInput: ["colour", "odour", "taste"],
  IngredientOrderByRelationAggregateInput: ["_count"],
  SpiritCountOrderByAggregateInput: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritAvgOrderByAggregateInput: ["alcoholContent", "volume"],
  SpiritMaxOrderByAggregateInput: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritMinOrderByAggregateInput: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritSumOrderByAggregateInput: ["alcoholContent", "volume"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumSpiritTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  SpiritRelationFilter: ["is", "isNot"],
  IngredientCountOrderByAggregateInput: ["id", "name", "type", "image", "spiritId"],
  IngredientMaxOrderByAggregateInput: ["id", "name", "type", "image", "spiritId"],
  IngredientMinOrderByAggregateInput: ["id", "name", "type", "image", "spiritId"],
  DrinkCreatecategoryInput: ["set"],
  IngredientMeasureCreateNestedManyWithoutDrinkInput: ["create", "connectOrCreate", "createMany", "connect"],
  DrinkCreatetagsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  StringFieldUpdateOperationsInput: ["set"],
  DrinkUpdatecategoryInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IngredientMeasureUpdateManyWithoutDrinkInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DrinkUpdatetagsInput: ["set", "push"],
  IngredientCreateNestedOneWithoutIngredientMeasureInput: ["create", "connectOrCreate", "connect"],
  DrinkCreateNestedOneWithoutIngredientsInput: ["create", "connectOrCreate", "connect"],
  IngredientUpdateOneWithoutIngredientMeasureInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DrinkUpdateOneWithoutIngredientsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SpiritClassificationCreateEnvelopeInput: ["set"],
  SpiritClassificationCreateInput: ["mainProductType", "productType", "subProductType"],
  SpiritDescriptionCreateEnvelopeInput: ["set"],
  SpiritDescriptionCreateInput: ["colour", "odour", "taste"],
  IngredientCreateNestedManyWithoutSpiritInput: ["create", "connectOrCreate", "createMany", "connect"],
  SpiritClassificationUpdateEnvelopeInput: ["set", "update"],
  SpiritDescriptionUpdateEnvelopeInput: ["set", "update"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumSpiritTypeFieldUpdateOperationsInput: ["set"],
  IngredientUpdateManyWithoutSpiritInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SpiritCreateNestedOneWithoutIngredientInput: ["create", "connectOrCreate", "connect"],
  IngredientMeasureCreateNestedManyWithoutIngredientInput: ["create", "connectOrCreate", "createMany", "connect"],
  SpiritUpdateOneWithoutIngredientInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IngredientMeasureUpdateManyWithoutIngredientInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  SpiritClassificationWhereInput: ["AND", "OR", "NOT", "mainProductType", "productType", "subProductType"],
  SpiritDescriptionWhereInput: ["AND", "OR", "NOT", "colour", "odour", "taste"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumSpiritTypeFilter: ["equals", "in", "notIn", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumSpiritTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IngredientMeasureCreateWithoutDrinkInput: ["id", "measure", "ingredient"],
  IngredientMeasureCreateOrConnectWithoutDrinkInput: ["where", "create"],
  IngredientMeasureCreateManyDrinkInputEnvelope: ["data"],
  IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput: ["where", "update", "create"],
  IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput: ["where", "data"],
  IngredientMeasureUpdateManyWithWhereWithoutDrinkInput: ["where", "data"],
  IngredientMeasureScalarWhereInput: ["AND", "OR", "NOT", "id", "measure", "ingredientId", "drinkId"],
  IngredientCreateWithoutIngredientMeasureInput: ["id", "name", "type", "image", "spirit"],
  IngredientCreateOrConnectWithoutIngredientMeasureInput: ["where", "create"],
  DrinkCreateWithoutIngredientsInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags"],
  DrinkCreateOrConnectWithoutIngredientsInput: ["where", "create"],
  IngredientUpsertWithoutIngredientMeasureInput: ["update", "create"],
  IngredientUpdateWithoutIngredientMeasureInput: ["name", "type", "image", "spirit"],
  DrinkUpsertWithoutIngredientsInput: ["update", "create"],
  DrinkUpdateWithoutIngredientsInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "instructions", "name", "tags"],
  IngredientCreateWithoutSpiritInput: ["id", "name", "type", "image", "IngredientMeasure"],
  IngredientCreateOrConnectWithoutSpiritInput: ["where", "create"],
  IngredientCreateManySpiritInputEnvelope: ["data"],
  SpiritClassificationUpdateInput: ["mainProductType", "productType", "subProductType"],
  SpiritDescriptionUpdateInput: ["colour", "odour", "taste"],
  IngredientUpsertWithWhereUniqueWithoutSpiritInput: ["where", "update", "create"],
  IngredientUpdateWithWhereUniqueWithoutSpiritInput: ["where", "data"],
  IngredientUpdateManyWithWhereWithoutSpiritInput: ["where", "data"],
  IngredientScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "type", "image", "spiritId"],
  SpiritCreateWithoutIngredientInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritCreateOrConnectWithoutIngredientInput: ["where", "create"],
  IngredientMeasureCreateWithoutIngredientInput: ["id", "measure", "Drink"],
  IngredientMeasureCreateOrConnectWithoutIngredientInput: ["where", "create"],
  IngredientMeasureCreateManyIngredientInputEnvelope: ["data"],
  SpiritUpsertWithoutIngredientInput: ["update", "create"],
  SpiritUpdateWithoutIngredientInput: ["classification", "description", "alcoholContent", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput: ["where", "update", "create"],
  IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput: ["where", "data"],
  IngredientMeasureUpdateManyWithWhereWithoutIngredientInput: ["where", "data"],
  IngredientMeasureCreateManyDrinkInput: ["id", "measure", "ingredientId"],
  IngredientMeasureUpdateWithoutDrinkInput: ["measure", "ingredient"],
  IngredientCreateManySpiritInput: ["id", "name", "type", "image"],
  IngredientUpdateWithoutSpiritInput: ["name", "type", "image", "IngredientMeasure"],
  IngredientMeasureCreateManyIngredientInput: ["id", "measure", "drinkId"],
  IngredientMeasureUpdateWithoutIngredientInput: ["measure", "Drink"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

