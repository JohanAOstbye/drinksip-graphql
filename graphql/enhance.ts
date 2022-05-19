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
  Review: crudResolvers.ReviewCrudResolver,
  Ingredient: crudResolvers.IngredientCrudResolver,
  User: crudResolvers.UserCrudResolver
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
  Review: {
    review: actionResolvers.FindUniqueReviewResolver,
    findFirstReview: actionResolvers.FindFirstReviewResolver,
    reviews: actionResolvers.FindManyReviewResolver,
    createReview: actionResolvers.CreateReviewResolver,
    createManyReview: actionResolvers.CreateManyReviewResolver,
    deleteReview: actionResolvers.DeleteReviewResolver,
    updateReview: actionResolvers.UpdateReviewResolver,
    deleteManyReview: actionResolvers.DeleteManyReviewResolver,
    updateManyReview: actionResolvers.UpdateManyReviewResolver,
    upsertReview: actionResolvers.UpsertReviewResolver,
    aggregateReview: actionResolvers.AggregateReviewResolver,
    groupByReview: actionResolvers.GroupByReviewResolver
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
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  }
};
const crudResolversInfo = {
  Drink: ["drink", "findFirstDrink", "drinks", "createDrink", "createManyDrink", "deleteDrink", "updateDrink", "deleteManyDrink", "updateManyDrink", "upsertDrink", "aggregateDrink", "groupByDrink"],
  IngredientMeasure: ["ingredientMeasure", "findFirstIngredientMeasure", "ingredientMeasures", "createIngredientMeasure", "createManyIngredientMeasure", "deleteIngredientMeasure", "updateIngredientMeasure", "deleteManyIngredientMeasure", "updateManyIngredientMeasure", "upsertIngredientMeasure", "aggregateIngredientMeasure", "groupByIngredientMeasure"],
  Spirit: ["spirit", "findFirstSpirit", "spirits", "createSpirit", "createManySpirit", "deleteSpirit", "updateSpirit", "deleteManySpirit", "updateManySpirit", "upsertSpirit", "aggregateSpirit", "groupBySpirit"],
  Review: ["review", "findFirstReview", "reviews", "createReview", "createManyReview", "deleteReview", "updateReview", "deleteManyReview", "updateManyReview", "upsertReview", "aggregateReview", "groupByReview"],
  Ingredient: ["ingredient", "findFirstIngredient", "ingredients", "createIngredient", "createManyIngredient", "deleteIngredient", "updateIngredient", "deleteManyIngredient", "updateManyIngredient", "upsertIngredient", "aggregateIngredient", "groupByIngredient"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
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
  FindUniqueReviewArgs: ["where"],
  FindFirstReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReviewArgs: ["data"],
  CreateManyReviewArgs: ["data"],
  DeleteReviewArgs: ["where"],
  UpdateReviewArgs: ["data", "where"],
  DeleteManyReviewArgs: ["where"],
  UpdateManyReviewArgs: ["data", "where"],
  UpsertReviewArgs: ["where", "create", "update"],
  AggregateReviewArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReviewArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  GroupByIngredientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  Review: relationResolvers.ReviewRelationsResolver,
  Ingredient: relationResolvers.IngredientRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
  Drink: ["ingredients", "createdBy", "favorittedBy", "reviews"],
  IngredientMeasure: ["ingredient", "drink"],
  Spirit: ["Ingredient"],
  Review: ["rater", "drink"],
  Ingredient: ["spirit", "ingredientMeasure"],
  User: ["favorites", "created", "review"]
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
  Drink: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId"],
  IngredientMeasure: ["id", "measure", "ingredientId", "drinkId"],
  Spirit: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  Review: ["id", "rating", "userId", "drinkId"],
  Ingredient: ["id", "name", "type", "image", "spiritId"],
  User: ["id", "name", "email", "emailVerified", "image"],
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
  DrinkGroupBy: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId", "_count", "_min", "_max"],
  AggregateIngredientMeasure: ["_count", "_min", "_max"],
  IngredientMeasureGroupBy: ["id", "measure", "ingredientId", "drinkId", "_count", "_min", "_max"],
  AggregateSpirit: ["_count", "_avg", "_sum", "_min", "_max"],
  SpiritGroupBy: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReview: ["_count", "_avg", "_sum", "_min", "_max"],
  ReviewGroupBy: ["id", "rating", "userId", "drinkId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIngredient: ["_count", "_min", "_max"],
  IngredientGroupBy: ["id", "name", "type", "image", "spiritId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  DrinkCount: ["ingredients", "reviews"],
  DrinkCountAggregate: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId", "_all"],
  DrinkMinAggregate: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name", "userId", "favUserId"],
  DrinkMaxAggregate: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name", "userId", "favUserId"],
  IngredientMeasureCountAggregate: ["id", "measure", "ingredientId", "drinkId", "_all"],
  IngredientMeasureMinAggregate: ["id", "measure", "ingredientId", "drinkId"],
  IngredientMeasureMaxAggregate: ["id", "measure", "ingredientId", "drinkId"],
  SpiritCount: ["Ingredient"],
  SpiritCountAggregate: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "_all"],
  SpiritAvgAggregate: ["alcoholContent", "volume"],
  SpiritSumAggregate: ["alcoholContent", "volume"],
  SpiritMinAggregate: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritMaxAggregate: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  ReviewCountAggregate: ["id", "rating", "userId", "drinkId", "_all"],
  ReviewAvgAggregate: ["rating"],
  ReviewSumAggregate: ["rating"],
  ReviewMinAggregate: ["id", "rating", "userId", "drinkId"],
  ReviewMaxAggregate: ["id", "rating", "userId", "drinkId"],
  IngredientCount: ["ingredientMeasure"],
  IngredientCountAggregate: ["id", "name", "type", "image", "spiritId", "_all"],
  IngredientMinAggregate: ["id", "name", "type", "image", "spiritId"],
  IngredientMaxAggregate: ["id", "name", "type", "image", "spiritId"],
  UserCount: ["favorites", "created", "review"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"]
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
  DrinkWhereInput: ["AND", "OR", "NOT", "IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags", "createdBy", "userId", "favorittedBy", "favUserId", "reviews"],
  DrinkOrderByWithRelationInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags", "createdBy", "userId", "favorittedBy", "favUserId", "reviews"],
  DrinkWhereUniqueInput: ["id"],
  DrinkOrderByWithAggregationInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId", "_count", "_max", "_min"],
  DrinkScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId"],
  IngredientMeasureWhereInput: ["AND", "OR", "NOT", "id", "measure", "ingredient", "ingredientId", "drink", "drinkId"],
  IngredientMeasureOrderByWithRelationInput: ["id", "measure", "ingredient", "ingredientId", "drink", "drinkId"],
  IngredientMeasureWhereUniqueInput: ["id"],
  IngredientMeasureOrderByWithAggregationInput: ["id", "measure", "ingredientId", "drinkId", "_count", "_max", "_min"],
  IngredientMeasureScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "measure", "ingredientId", "drinkId"],
  SpiritWhereInput: ["AND", "OR", "NOT", "classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritOrderByWithRelationInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritWhereUniqueInput: ["id"],
  SpiritOrderByWithAggregationInput: ["alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "_count", "_avg", "_max", "_min", "_sum"],
  SpiritScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  ReviewWhereInput: ["AND", "OR", "NOT", "id", "rating", "rater", "userId", "drink", "drinkId"],
  ReviewOrderByWithRelationInput: ["id", "rating", "rater", "userId", "drink", "drinkId"],
  ReviewWhereUniqueInput: ["id"],
  ReviewOrderByWithAggregationInput: ["id", "rating", "userId", "drinkId", "_count", "_avg", "_max", "_min", "_sum"],
  ReviewScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "rating", "userId", "drinkId"],
  IngredientWhereInput: ["AND", "OR", "NOT", "id", "name", "type", "image", "spirit", "spiritId", "ingredientMeasure"],
  IngredientOrderByWithRelationInput: ["id", "name", "type", "image", "spirit", "spiritId", "ingredientMeasure"],
  IngredientWhereUniqueInput: ["id"],
  IngredientOrderByWithAggregationInput: ["id", "name", "type", "image", "spiritId", "_count", "_max", "_min"],
  IngredientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "type", "image", "spiritId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "favorites", "created", "review"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "favorites", "created", "review"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
  DrinkCreateInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags", "createdBy", "favorittedBy", "reviews"],
  DrinkUpdateInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "ingredients", "instructions", "name", "tags", "createdBy", "favorittedBy", "reviews"],
  DrinkCreateManyInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId"],
  DrinkUpdateManyMutationInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "instructions", "name", "tags"],
  IngredientMeasureCreateInput: ["id", "measure", "ingredient", "drink"],
  IngredientMeasureUpdateInput: ["measure", "ingredient", "drink"],
  IngredientMeasureCreateManyInput: ["id", "measure", "ingredientId", "drinkId"],
  IngredientMeasureUpdateManyMutationInput: ["measure"],
  SpiritCreateInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritUpdateInput: ["classification", "description", "alcoholContent", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image", "Ingredient"],
  SpiritCreateManyInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritUpdateManyMutationInput: ["classification", "description", "alcoholContent", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  ReviewCreateInput: ["id", "rating", "rater", "drink"],
  ReviewUpdateInput: ["rating", "rater", "drink"],
  ReviewCreateManyInput: ["id", "rating", "userId", "drinkId"],
  ReviewUpdateManyMutationInput: ["rating"],
  IngredientCreateInput: ["id", "name", "type", "image", "spirit", "ingredientMeasure"],
  IngredientUpdateInput: ["name", "type", "image", "spirit", "ingredientMeasure"],
  IngredientCreateManyInput: ["id", "name", "type", "image", "spiritId"],
  IngredientUpdateManyMutationInput: ["name", "type", "image"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "favorites", "created", "review"],
  UserUpdateInput: ["name", "email", "emailVerified", "image", "favorites", "created", "review"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
  UserUpdateManyMutationInput: ["name", "email", "emailVerified", "image"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IngredientMeasureListRelationFilter: ["every", "some", "none"],
  UserRelationFilter: ["is", "isNot"],
  ReviewListRelationFilter: ["every", "some", "none"],
  IngredientMeasureOrderByRelationAggregateInput: ["_count"],
  ReviewOrderByRelationAggregateInput: ["_count"],
  DrinkCountOrderByAggregateInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId"],
  DrinkMaxOrderByAggregateInput: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name", "userId", "favUserId"],
  DrinkMinOrderByAggregateInput: ["IBA", "alcoholic", "dateModified", "glass", "id", "image", "instructions", "name", "userId", "favUserId"],
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
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ReviewCountOrderByAggregateInput: ["id", "rating", "userId", "drinkId"],
  ReviewAvgOrderByAggregateInput: ["rating"],
  ReviewMaxOrderByAggregateInput: ["id", "rating", "userId", "drinkId"],
  ReviewMinOrderByAggregateInput: ["id", "rating", "userId", "drinkId"],
  ReviewSumOrderByAggregateInput: ["rating"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  SpiritRelationFilter: ["is", "isNot"],
  IngredientCountOrderByAggregateInput: ["id", "name", "type", "image", "spiritId"],
  IngredientMaxOrderByAggregateInput: ["id", "name", "type", "image", "spiritId"],
  IngredientMinOrderByAggregateInput: ["id", "name", "type", "image", "spiritId"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  DrinkListRelationFilter: ["every", "some", "none"],
  DrinkOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  DrinkCreatecategoryInput: ["set"],
  IngredientMeasureCreateNestedManyWithoutDrinkInput: ["create", "connectOrCreate", "createMany", "connect"],
  DrinkCreatetagsInput: ["set"],
  UserCreateNestedOneWithoutCreatedInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFavoritesInput: ["create", "connectOrCreate", "connect"],
  ReviewCreateNestedManyWithoutDrinkInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  StringFieldUpdateOperationsInput: ["set"],
  DrinkUpdatecategoryInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IngredientMeasureUpdateManyWithoutDrinkInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DrinkUpdatetagsInput: ["set", "push"],
  UserUpdateOneWithoutCreatedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutFavoritesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ReviewUpdateManyWithoutDrinkInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  UserCreateNestedOneWithoutReviewInput: ["create", "connectOrCreate", "connect"],
  DrinkCreateNestedOneWithoutReviewsInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneWithoutReviewInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DrinkUpdateOneRequiredWithoutReviewsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SpiritCreateNestedOneWithoutIngredientInput: ["create", "connectOrCreate", "connect"],
  IngredientMeasureCreateNestedManyWithoutIngredientInput: ["create", "connectOrCreate", "createMany", "connect"],
  SpiritUpdateOneWithoutIngredientInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IngredientMeasureUpdateManyWithoutIngredientInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DrinkCreateNestedManyWithoutFavorittedByInput: ["create", "connectOrCreate", "createMany", "connect"],
  DrinkCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReviewCreateNestedManyWithoutRaterInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set", "unset"],
  DrinkUpdateManyWithoutFavorittedByInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DrinkUpdateManyWithoutCreatedByInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReviewUpdateManyWithoutRaterInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  IngredientMeasureCreateWithoutDrinkInput: ["id", "measure", "ingredient"],
  IngredientMeasureCreateOrConnectWithoutDrinkInput: ["where", "create"],
  IngredientMeasureCreateManyDrinkInputEnvelope: ["data"],
  UserCreateWithoutCreatedInput: ["id", "name", "email", "emailVerified", "image", "favorites", "review"],
  UserCreateOrConnectWithoutCreatedInput: ["where", "create"],
  UserCreateWithoutFavoritesInput: ["id", "name", "email", "emailVerified", "image", "created", "review"],
  UserCreateOrConnectWithoutFavoritesInput: ["where", "create"],
  ReviewCreateWithoutDrinkInput: ["id", "rating", "rater"],
  ReviewCreateOrConnectWithoutDrinkInput: ["where", "create"],
  ReviewCreateManyDrinkInputEnvelope: ["data"],
  IngredientMeasureUpsertWithWhereUniqueWithoutDrinkInput: ["where", "update", "create"],
  IngredientMeasureUpdateWithWhereUniqueWithoutDrinkInput: ["where", "data"],
  IngredientMeasureUpdateManyWithWhereWithoutDrinkInput: ["where", "data"],
  IngredientMeasureScalarWhereInput: ["AND", "OR", "NOT", "id", "measure", "ingredientId", "drinkId"],
  UserUpsertWithoutCreatedInput: ["update", "create"],
  UserUpdateWithoutCreatedInput: ["name", "email", "emailVerified", "image", "favorites", "review"],
  UserUpsertWithoutFavoritesInput: ["update", "create"],
  UserUpdateWithoutFavoritesInput: ["name", "email", "emailVerified", "image", "created", "review"],
  ReviewUpsertWithWhereUniqueWithoutDrinkInput: ["where", "update", "create"],
  ReviewUpdateWithWhereUniqueWithoutDrinkInput: ["where", "data"],
  ReviewUpdateManyWithWhereWithoutDrinkInput: ["where", "data"],
  ReviewScalarWhereInput: ["AND", "OR", "NOT", "id", "rating", "userId", "drinkId"],
  IngredientCreateWithoutIngredientMeasureInput: ["id", "name", "type", "image", "spirit"],
  IngredientCreateOrConnectWithoutIngredientMeasureInput: ["where", "create"],
  DrinkCreateWithoutIngredientsInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "createdBy", "favorittedBy", "reviews"],
  DrinkCreateOrConnectWithoutIngredientsInput: ["where", "create"],
  IngredientUpsertWithoutIngredientMeasureInput: ["update", "create"],
  IngredientUpdateWithoutIngredientMeasureInput: ["name", "type", "image", "spirit"],
  DrinkUpsertWithoutIngredientsInput: ["update", "create"],
  DrinkUpdateWithoutIngredientsInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "instructions", "name", "tags", "createdBy", "favorittedBy", "reviews"],
  IngredientCreateWithoutSpiritInput: ["id", "name", "type", "image", "ingredientMeasure"],
  IngredientCreateOrConnectWithoutSpiritInput: ["where", "create"],
  IngredientCreateManySpiritInputEnvelope: ["data"],
  SpiritClassificationUpdateInput: ["mainProductType", "productType", "subProductType"],
  SpiritDescriptionUpdateInput: ["colour", "odour", "taste"],
  IngredientUpsertWithWhereUniqueWithoutSpiritInput: ["where", "update", "create"],
  IngredientUpdateWithWhereUniqueWithoutSpiritInput: ["where", "data"],
  IngredientUpdateManyWithWhereWithoutSpiritInput: ["where", "data"],
  IngredientScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "type", "image", "spiritId"],
  UserCreateWithoutReviewInput: ["id", "name", "email", "emailVerified", "image", "favorites", "created"],
  UserCreateOrConnectWithoutReviewInput: ["where", "create"],
  DrinkCreateWithoutReviewsInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags", "createdBy", "favorittedBy"],
  DrinkCreateOrConnectWithoutReviewsInput: ["where", "create"],
  UserUpsertWithoutReviewInput: ["update", "create"],
  UserUpdateWithoutReviewInput: ["name", "email", "emailVerified", "image", "favorites", "created"],
  DrinkUpsertWithoutReviewsInput: ["update", "create"],
  DrinkUpdateWithoutReviewsInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "ingredients", "instructions", "name", "tags", "createdBy", "favorittedBy"],
  SpiritCreateWithoutIngredientInput: ["classification", "description", "alcoholContent", "id", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  SpiritCreateOrConnectWithoutIngredientInput: ["where", "create"],
  IngredientMeasureCreateWithoutIngredientInput: ["id", "measure", "drink"],
  IngredientMeasureCreateOrConnectWithoutIngredientInput: ["where", "create"],
  IngredientMeasureCreateManyIngredientInputEnvelope: ["data"],
  SpiritUpsertWithoutIngredientInput: ["update", "create"],
  SpiritUpdateWithoutIngredientInput: ["classification", "description", "alcoholContent", "ingredients", "name", "nameLong", "sugar", "volume", "volumeType", "type", "image"],
  IngredientMeasureUpsertWithWhereUniqueWithoutIngredientInput: ["where", "update", "create"],
  IngredientMeasureUpdateWithWhereUniqueWithoutIngredientInput: ["where", "data"],
  IngredientMeasureUpdateManyWithWhereWithoutIngredientInput: ["where", "data"],
  DrinkCreateWithoutFavorittedByInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags", "createdBy", "reviews"],
  DrinkCreateOrConnectWithoutFavorittedByInput: ["where", "create"],
  DrinkCreateManyFavorittedByInputEnvelope: ["data"],
  DrinkCreateWithoutCreatedByInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "ingredients", "instructions", "name", "tags", "favorittedBy", "reviews"],
  DrinkCreateOrConnectWithoutCreatedByInput: ["where", "create"],
  DrinkCreateManyCreatedByInputEnvelope: ["data"],
  ReviewCreateWithoutRaterInput: ["id", "rating", "drink"],
  ReviewCreateOrConnectWithoutRaterInput: ["where", "create"],
  ReviewCreateManyRaterInputEnvelope: ["data"],
  DrinkUpsertWithWhereUniqueWithoutFavorittedByInput: ["where", "update", "create"],
  DrinkUpdateWithWhereUniqueWithoutFavorittedByInput: ["where", "data"],
  DrinkUpdateManyWithWhereWithoutFavorittedByInput: ["where", "data"],
  DrinkScalarWhereInput: ["AND", "OR", "NOT", "IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId", "favUserId"],
  DrinkUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
  DrinkUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
  DrinkUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
  ReviewUpsertWithWhereUniqueWithoutRaterInput: ["where", "update", "create"],
  ReviewUpdateWithWhereUniqueWithoutRaterInput: ["where", "data"],
  ReviewUpdateManyWithWhereWithoutRaterInput: ["where", "data"],
  IngredientMeasureCreateManyDrinkInput: ["id", "measure", "ingredientId"],
  ReviewCreateManyDrinkInput: ["id", "rating", "userId"],
  IngredientMeasureUpdateWithoutDrinkInput: ["measure", "ingredient"],
  ReviewUpdateWithoutDrinkInput: ["rating", "rater"],
  IngredientCreateManySpiritInput: ["id", "name", "type", "image"],
  IngredientUpdateWithoutSpiritInput: ["name", "type", "image", "ingredientMeasure"],
  IngredientMeasureCreateManyIngredientInput: ["id", "measure", "drinkId"],
  IngredientMeasureUpdateWithoutIngredientInput: ["measure", "drink"],
  DrinkCreateManyFavorittedByInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "userId"],
  DrinkCreateManyCreatedByInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "id", "image", "instructions", "name", "tags", "favUserId"],
  ReviewCreateManyRaterInput: ["id", "rating", "drinkId"],
  DrinkUpdateWithoutFavorittedByInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "ingredients", "instructions", "name", "tags", "createdBy", "reviews"],
  DrinkUpdateWithoutCreatedByInput: ["IBA", "alcoholic", "category", "dateModified", "glass", "image", "ingredients", "instructions", "name", "tags", "favorittedBy", "reviews"],
  ReviewUpdateWithoutRaterInput: ["rating", "drink"]
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

