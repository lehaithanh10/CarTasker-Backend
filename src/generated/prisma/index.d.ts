/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model ProviderProfile
 *
 */
export type ProviderProfile = $Result.DefaultSelection<Prisma.$ProviderProfilePayload>;
/**
 * Model ServiceCategory
 *
 */
export type ServiceCategory = $Result.DefaultSelection<Prisma.$ServiceCategoryPayload>;
/**
 * Model ProviderService
 *
 */
export type ProviderService = $Result.DefaultSelection<Prisma.$ProviderServicePayload>;
/**
 * Model Job
 *
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>;
/**
 * Model JobBid
 *
 */
export type JobBid = $Result.DefaultSelection<Prisma.$JobBidPayload>;
/**
 * Model JobAssignment
 *
 */
export type JobAssignment = $Result.DefaultSelection<Prisma.$JobAssignmentPayload>;
/**
 * Model Conversation
 *
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>;
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model JobStatusHistory
 *
 */
export type JobStatusHistory = $Result.DefaultSelection<Prisma.$JobStatusHistoryPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.providerProfile`: Exposes CRUD operations for the **ProviderProfile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProviderProfiles
   * const providerProfiles = await prisma.providerProfile.findMany()
   * ```
   */
  get providerProfile(): Prisma.ProviderProfileDelegate<ExtArgs>;

  /**
   * `prisma.serviceCategory`: Exposes CRUD operations for the **ServiceCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ServiceCategories
   * const serviceCategories = await prisma.serviceCategory.findMany()
   * ```
   */
  get serviceCategory(): Prisma.ServiceCategoryDelegate<ExtArgs>;

  /**
   * `prisma.providerService`: Exposes CRUD operations for the **ProviderService** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProviderServices
   * const providerServices = await prisma.providerService.findMany()
   * ```
   */
  get providerService(): Prisma.ProviderServiceDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.jobBid`: Exposes CRUD operations for the **JobBid** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more JobBids
   * const jobBids = await prisma.jobBid.findMany()
   * ```
   */
  get jobBid(): Prisma.JobBidDelegate<ExtArgs>;

  /**
   * `prisma.jobAssignment`: Exposes CRUD operations for the **JobAssignment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more JobAssignments
   * const jobAssignments = await prisma.jobAssignment.findMany()
   * ```
   */
  get jobAssignment(): Prisma.JobAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Conversations
   * const conversations = await prisma.conversation.findMany()
   * ```
   */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.jobStatusHistory`: Exposes CRUD operations for the **JobStatusHistory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more JobStatusHistories
   * const jobStatusHistories = await prisma.jobStatusHistory.findMany()
   * ```
   */
  get jobStatusHistory(): Prisma.JobStatusHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends boolean, B2 extends boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    ProviderProfile: 'ProviderProfile';
    ServiceCategory: 'ServiceCategory';
    ProviderService: 'ProviderService';
    Job: 'Job';
    JobBid: 'JobBid';
    JobAssignment: 'JobAssignment';
    Conversation: 'Conversation';
    Message: 'Message';
    JobStatusHistory: 'JobStatusHistory';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps:
        | 'user'
        | 'providerProfile'
        | 'serviceCategory'
        | 'providerService'
        | 'job'
        | 'jobBid'
        | 'jobAssignment'
        | 'conversation'
        | 'message'
        | 'jobStatusHistory';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      ProviderProfile: {
        payload: Prisma.$ProviderProfilePayload<ExtArgs>;
        fields: Prisma.ProviderProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProviderProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProviderProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>;
          };
          findFirst: {
            args: Prisma.ProviderProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProviderProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>;
          };
          findMany: {
            args: Prisma.ProviderProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>[];
          };
          create: {
            args: Prisma.ProviderProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>;
          };
          createMany: {
            args: Prisma.ProviderProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProviderProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>[];
          };
          delete: {
            args: Prisma.ProviderProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>;
          };
          update: {
            args: Prisma.ProviderProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>;
          };
          deleteMany: {
            args: Prisma.ProviderProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProviderProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ProviderProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>;
          };
          aggregate: {
            args: Prisma.ProviderProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProviderProfile>;
          };
          groupBy: {
            args: Prisma.ProviderProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProviderProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProviderProfileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProviderProfileCountAggregateOutputType> | number;
          };
        };
      };
      ServiceCategory: {
        payload: Prisma.$ServiceCategoryPayload<ExtArgs>;
        fields: Prisma.ServiceCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>;
          };
          findFirst: {
            args: Prisma.ServiceCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>;
          };
          findMany: {
            args: Prisma.ServiceCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[];
          };
          create: {
            args: Prisma.ServiceCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>;
          };
          createMany: {
            args: Prisma.ServiceCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ServiceCategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[];
          };
          delete: {
            args: Prisma.ServiceCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>;
          };
          update: {
            args: Prisma.ServiceCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.ServiceCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ServiceCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>;
          };
          aggregate: {
            args: Prisma.ServiceCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateServiceCategory>;
          };
          groupBy: {
            args: Prisma.ServiceCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceCategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCategoryCountAggregateOutputType> | number;
          };
        };
      };
      ProviderService: {
        payload: Prisma.$ProviderServicePayload<ExtArgs>;
        fields: Prisma.ProviderServiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProviderServiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProviderServiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>;
          };
          findFirst: {
            args: Prisma.ProviderServiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProviderServiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>;
          };
          findMany: {
            args: Prisma.ProviderServiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[];
          };
          create: {
            args: Prisma.ProviderServiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>;
          };
          createMany: {
            args: Prisma.ProviderServiceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProviderServiceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[];
          };
          delete: {
            args: Prisma.ProviderServiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>;
          };
          update: {
            args: Prisma.ProviderServiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>;
          };
          deleteMany: {
            args: Prisma.ProviderServiceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProviderServiceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ProviderServiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>;
          };
          aggregate: {
            args: Prisma.ProviderServiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProviderService>;
          };
          groupBy: {
            args: Prisma.ProviderServiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProviderServiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProviderServiceCountArgs<ExtArgs>;
            result: $Utils.Optional<ProviderServiceCountAggregateOutputType> | number;
          };
        };
      };
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>;
        fields: Prisma.JobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      JobBid: {
        payload: Prisma.$JobBidPayload<ExtArgs>;
        fields: Prisma.JobBidFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobBidFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobBidFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>;
          };
          findFirst: {
            args: Prisma.JobBidFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobBidFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>;
          };
          findMany: {
            args: Prisma.JobBidFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>[];
          };
          create: {
            args: Prisma.JobBidCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>;
          };
          createMany: {
            args: Prisma.JobBidCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobBidCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>[];
          };
          delete: {
            args: Prisma.JobBidDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>;
          };
          update: {
            args: Prisma.JobBidUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>;
          };
          deleteMany: {
            args: Prisma.JobBidDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobBidUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.JobBidUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobBidPayload>;
          };
          aggregate: {
            args: Prisma.JobBidAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJobBid>;
          };
          groupBy: {
            args: Prisma.JobBidGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobBidGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobBidCountArgs<ExtArgs>;
            result: $Utils.Optional<JobBidCountAggregateOutputType> | number;
          };
        };
      };
      JobAssignment: {
        payload: Prisma.$JobAssignmentPayload<ExtArgs>;
        fields: Prisma.JobAssignmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobAssignmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobAssignmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>;
          };
          findFirst: {
            args: Prisma.JobAssignmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobAssignmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>;
          };
          findMany: {
            args: Prisma.JobAssignmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>[];
          };
          create: {
            args: Prisma.JobAssignmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>;
          };
          createMany: {
            args: Prisma.JobAssignmentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobAssignmentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>[];
          };
          delete: {
            args: Prisma.JobAssignmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>;
          };
          update: {
            args: Prisma.JobAssignmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>;
          };
          deleteMany: {
            args: Prisma.JobAssignmentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobAssignmentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.JobAssignmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>;
          };
          aggregate: {
            args: Prisma.JobAssignmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJobAssignment>;
          };
          groupBy: {
            args: Prisma.JobAssignmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobAssignmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobAssignmentCountArgs<ExtArgs>;
            result: $Utils.Optional<JobAssignmentCountAggregateOutputType> | number;
          };
        };
      };
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>;
        fields: Prisma.ConversationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>;
          };
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>;
          };
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[];
          };
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>;
          };
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[];
          };
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>;
          };
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>;
          };
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>;
          };
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateConversation>;
          };
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ConversationGroupByOutputType>[];
          };
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>;
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number;
          };
        };
      };
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>;
        fields: Prisma.MessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      JobStatusHistory: {
        payload: Prisma.$JobStatusHistoryPayload<ExtArgs>;
        fields: Prisma.JobStatusHistoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobStatusHistoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobStatusHistoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>;
          };
          findFirst: {
            args: Prisma.JobStatusHistoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobStatusHistoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>;
          };
          findMany: {
            args: Prisma.JobStatusHistoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>[];
          };
          create: {
            args: Prisma.JobStatusHistoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>;
          };
          createMany: {
            args: Prisma.JobStatusHistoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobStatusHistoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>[];
          };
          delete: {
            args: Prisma.JobStatusHistoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>;
          };
          update: {
            args: Prisma.JobStatusHistoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>;
          };
          deleteMany: {
            args: Prisma.JobStatusHistoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobStatusHistoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.JobStatusHistoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>;
          };
          aggregate: {
            args: Prisma.JobStatusHistoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJobStatusHistory>;
          };
          groupBy: {
            args: Prisma.JobStatusHistoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobStatusHistoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobStatusHistoryCountArgs<ExtArgs>;
            result: $Utils.Optional<JobStatusHistoryCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customerJobs: number;
    assignedJobs: number;
    providerServices: number;
    bids: number;
    jobAssignmentsAsCustomer: number;
    jobAssignmentsAsProvider: number;
    customerConversations: number;
    providerConversations: number;
    sentMessages: number;
    jobStatusHistories: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    customerJobs?: boolean | UserCountOutputTypeCountCustomerJobsArgs;
    assignedJobs?: boolean | UserCountOutputTypeCountAssignedJobsArgs;
    providerServices?: boolean | UserCountOutputTypeCountProviderServicesArgs;
    bids?: boolean | UserCountOutputTypeCountBidsArgs;
    jobAssignmentsAsCustomer?: boolean | UserCountOutputTypeCountJobAssignmentsAsCustomerArgs;
    jobAssignmentsAsProvider?: boolean | UserCountOutputTypeCountJobAssignmentsAsProviderArgs;
    customerConversations?: boolean | UserCountOutputTypeCountCustomerConversationsArgs;
    providerConversations?: boolean | UserCountOutputTypeCountProviderConversationsArgs;
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs;
    jobStatusHistories?: boolean | UserCountOutputTypeCountJobStatusHistoriesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProviderServicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProviderServiceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobBidWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobAssignmentsAsCustomerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobAssignmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobAssignmentsAsProviderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobAssignmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerConversationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ConversationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProviderConversationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ConversationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobStatusHistoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobStatusHistoryWhereInput;
  };

  /**
   * Count Type ServiceCategoryCountOutputType
   */

  export type ServiceCategoryCountOutputType = {
    providerServices: number;
    jobs: number;
  };

  export type ServiceCategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    providerServices?: boolean | ServiceCategoryCountOutputTypeCountProviderServicesArgs;
    jobs?: boolean | ServiceCategoryCountOutputTypeCountJobsArgs;
  };

  // Custom InputTypes
  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategoryCountOutputType
     */
    select?: ServiceCategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountProviderServicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProviderServiceWhereInput;
  };

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
  };

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    bids: number;
    statusHistory: number;
  };

  export type JobCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bids?: boolean | JobCountOutputTypeCountBidsArgs;
    statusHistory?: boolean | JobCountOutputTypeCountStatusHistoryArgs;
  };

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountBidsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobBidWhereInput;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountStatusHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobStatusHistoryWhereInput;
  };

  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number;
  };

  export type ConversationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs;
  };

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    phone: string | null;
    role: string | null;
    avatarUrl: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    phone: string | null;
    role: string | null;
    avatarUrl: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    fullName: number;
    phone: number;
    role: number;
    avatarUrl: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    phone?: true;
    role?: true;
    avatarUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    phone?: true;
    role?: true;
    avatarUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    phone?: true;
    role?: true;
    avatarUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput;
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
      by: UserScalarFieldEnum[] | UserScalarFieldEnum;
      having?: UserScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UserCountAggregateInputType | true;
      _min?: UserMinAggregateInputType;
      _max?: UserMaxAggregateInputType;
    };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone: string | null;
    role: string;
    avatarUrl: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        email?: boolean;
        passwordHash?: boolean;
        fullName?: boolean;
        phone?: boolean;
        role?: boolean;
        avatarUrl?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        providerProfile?: boolean | User$providerProfileArgs<ExtArgs>;
        customerJobs?: boolean | User$customerJobsArgs<ExtArgs>;
        assignedJobs?: boolean | User$assignedJobsArgs<ExtArgs>;
        providerServices?: boolean | User$providerServicesArgs<ExtArgs>;
        bids?: boolean | User$bidsArgs<ExtArgs>;
        jobAssignmentsAsCustomer?: boolean | User$jobAssignmentsAsCustomerArgs<ExtArgs>;
        jobAssignmentsAsProvider?: boolean | User$jobAssignmentsAsProviderArgs<ExtArgs>;
        customerConversations?: boolean | User$customerConversationsArgs<ExtArgs>;
        providerConversations?: boolean | User$providerConversationsArgs<ExtArgs>;
        sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>;
        jobStatusHistories?: boolean | User$jobStatusHistoriesArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      fullName?: boolean;
      phone?: boolean;
      role?: boolean;
      avatarUrl?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    phone?: boolean;
    role?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerProfile?: boolean | User$providerProfileArgs<ExtArgs>;
    customerJobs?: boolean | User$customerJobsArgs<ExtArgs>;
    assignedJobs?: boolean | User$assignedJobsArgs<ExtArgs>;
    providerServices?: boolean | User$providerServicesArgs<ExtArgs>;
    bids?: boolean | User$bidsArgs<ExtArgs>;
    jobAssignmentsAsCustomer?: boolean | User$jobAssignmentsAsCustomerArgs<ExtArgs>;
    jobAssignmentsAsProvider?: boolean | User$jobAssignmentsAsProviderArgs<ExtArgs>;
    customerConversations?: boolean | User$customerConversationsArgs<ExtArgs>;
    providerConversations?: boolean | User$providerConversationsArgs<ExtArgs>;
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>;
    jobStatusHistories?: boolean | User$jobStatusHistoriesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      providerProfile: Prisma.$ProviderProfilePayload<ExtArgs> | null;
      customerJobs: Prisma.$JobPayload<ExtArgs>[];
      assignedJobs: Prisma.$JobPayload<ExtArgs>[];
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[];
      bids: Prisma.$JobBidPayload<ExtArgs>[];
      jobAssignmentsAsCustomer: Prisma.$JobAssignmentPayload<ExtArgs>[];
      jobAssignmentsAsProvider: Prisma.$JobAssignmentPayload<ExtArgs>[];
      customerConversations: Prisma.$ConversationPayload<ExtArgs>[];
      providerConversations: Prisma.$ConversationPayload<ExtArgs>[];
      sentMessages: Prisma.$MessagePayload<ExtArgs>[];
      jobStatusHistories: Prisma.$JobStatusHistoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        passwordHash: string;
        fullName: string;
        phone: string | null;
        role: string;
        avatarUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    providerProfile<T extends User$providerProfileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$providerProfileArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    customerJobs<T extends User$customerJobsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$customerJobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;
    assignedJobs<T extends User$assignedJobsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$assignedJobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;
    providerServices<T extends User$providerServicesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$providerServicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    bids<T extends User$bidsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$bidsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    jobAssignmentsAsCustomer<T extends User$jobAssignmentsAsCustomerArgs<ExtArgs> = {}>(
      args?: Subset<T, User$jobAssignmentsAsCustomerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    jobAssignmentsAsProvider<T extends User$jobAssignmentsAsProviderArgs<ExtArgs> = {}>(
      args?: Subset<T, User$jobAssignmentsAsProviderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    customerConversations<T extends User$customerConversationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$customerConversationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    providerConversations<T extends User$providerConversationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$providerConversationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sentMessagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    jobStatusHistories<T extends User$jobStatusHistoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$jobStatusHistoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly passwordHash: FieldRef<'User', 'String'>;
    readonly fullName: FieldRef<'User', 'String'>;
    readonly phone: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'String'>;
    readonly avatarUrl: FieldRef<'User', 'String'>;
    readonly isActive: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number;
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.providerProfile
   */
  export type User$providerProfileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    where?: ProviderProfileWhereInput;
  };

  /**
   * User.customerJobs
   */
  export type User$customerJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    where?: JobWhereInput;
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    cursor?: JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * User.assignedJobs
   */
  export type User$assignedJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    where?: JobWhereInput;
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    cursor?: JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * User.providerServices
   */
  export type User$providerServicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    where?: ProviderServiceWhereInput;
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[];
    cursor?: ProviderServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[];
  };

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    where?: JobBidWhereInput;
    orderBy?: JobBidOrderByWithRelationInput | JobBidOrderByWithRelationInput[];
    cursor?: JobBidWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobBidScalarFieldEnum | JobBidScalarFieldEnum[];
  };

  /**
   * User.jobAssignmentsAsCustomer
   */
  export type User$jobAssignmentsAsCustomerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    where?: JobAssignmentWhereInput;
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[];
    cursor?: JobAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[];
  };

  /**
   * User.jobAssignmentsAsProvider
   */
  export type User$jobAssignmentsAsProviderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    where?: JobAssignmentWhereInput;
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[];
    cursor?: JobAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[];
  };

  /**
   * User.customerConversations
   */
  export type User$customerConversationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[];
    cursor?: ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[];
  };

  /**
   * User.providerConversations
   */
  export type User$providerConversationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[];
    cursor?: ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[];
  };

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * User.jobStatusHistories
   */
  export type User$jobStatusHistoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    where?: JobStatusHistoryWhereInput;
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[];
    cursor?: JobStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
    };

  /**
   * Model ProviderProfile
   */

  export type AggregateProviderProfile = {
    _count: ProviderProfileCountAggregateOutputType | null;
    _avg: ProviderProfileAvgAggregateOutputType | null;
    _sum: ProviderProfileSumAggregateOutputType | null;
    _min: ProviderProfileMinAggregateOutputType | null;
    _max: ProviderProfileMaxAggregateOutputType | null;
  };

  export type ProviderProfileAvgAggregateOutputType = {
    yearsExperience: number | null;
  };

  export type ProviderProfileSumAggregateOutputType = {
    yearsExperience: number | null;
  };

  export type ProviderProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    businessName: string | null;
    bio: string | null;
    yearsExperience: number | null;
    serviceAreaText: string | null;
    suburb: string | null;
    state: string | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProviderProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    businessName: string | null;
    bio: string | null;
    yearsExperience: number | null;
    serviceAreaText: string | null;
    suburb: string | null;
    state: string | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProviderProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    businessName: number;
    bio: number;
    yearsExperience: number;
    serviceAreaText: number;
    suburb: number;
    state: number;
    isVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProviderProfileAvgAggregateInputType = {
    yearsExperience?: true;
  };

  export type ProviderProfileSumAggregateInputType = {
    yearsExperience?: true;
  };

  export type ProviderProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    businessName?: true;
    bio?: true;
    yearsExperience?: true;
    serviceAreaText?: true;
    suburb?: true;
    state?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProviderProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    businessName?: true;
    bio?: true;
    yearsExperience?: true;
    serviceAreaText?: true;
    suburb?: true;
    state?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProviderProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    businessName?: true;
    bio?: true;
    yearsExperience?: true;
    serviceAreaText?: true;
    suburb?: true;
    state?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProviderProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProviderProfile to aggregate.
     */
    where?: ProviderProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProviderProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProviderProfiles
     **/
    _count?: true | ProviderProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProviderProfileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProviderProfileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProviderProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProviderProfileMaxAggregateInputType;
  };

  export type GetProviderProfileAggregateType<T extends ProviderProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProviderProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderProfile[P]>
      : GetScalarType<T[P], AggregateProviderProfile[P]>;
  };

  export type ProviderProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProviderProfileWhereInput;
    orderBy?:
      | ProviderProfileOrderByWithAggregationInput
      | ProviderProfileOrderByWithAggregationInput[];
    by: ProviderProfileScalarFieldEnum[] | ProviderProfileScalarFieldEnum;
    having?: ProviderProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProviderProfileCountAggregateInputType | true;
    _avg?: ProviderProfileAvgAggregateInputType;
    _sum?: ProviderProfileSumAggregateInputType;
    _min?: ProviderProfileMinAggregateInputType;
    _max?: ProviderProfileMaxAggregateInputType;
  };

  export type ProviderProfileGroupByOutputType = {
    id: string;
    userId: string;
    businessName: string | null;
    bio: string | null;
    yearsExperience: number | null;
    serviceAreaText: string | null;
    suburb: string | null;
    state: string | null;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProviderProfileCountAggregateOutputType | null;
    _avg: ProviderProfileAvgAggregateOutputType | null;
    _sum: ProviderProfileSumAggregateOutputType | null;
    _min: ProviderProfileMinAggregateOutputType | null;
    _max: ProviderProfileMaxAggregateOutputType | null;
  };

  type GetProviderProfileGroupByPayload<T extends ProviderProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProviderProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProviderProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type ProviderProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      businessName?: boolean;
      bio?: boolean;
      yearsExperience?: boolean;
      serviceAreaText?: boolean;
      suburb?: boolean;
      state?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['providerProfile']
  >;

  export type ProviderProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      businessName?: boolean;
      bio?: boolean;
      yearsExperience?: boolean;
      serviceAreaText?: boolean;
      suburb?: boolean;
      state?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['providerProfile']
  >;

  export type ProviderProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    businessName?: boolean;
    bio?: boolean;
    yearsExperience?: boolean;
    serviceAreaText?: boolean;
    suburb?: boolean;
    state?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProviderProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProviderProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProviderProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ProviderProfile';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        businessName: string | null;
        bio: string | null;
        yearsExperience: number | null;
        serviceAreaText: string | null;
        suburb: string | null;
        state: string | null;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['providerProfile']
    >;
    composites: {};
  };

  type ProviderProfileGetPayload<
    S extends boolean | null | undefined | ProviderProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$ProviderProfilePayload, S>;

  type ProviderProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProviderProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ProviderProfileCountAggregateInputType | true;
  };

  export interface ProviderProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ProviderProfile'];
      meta: { name: 'ProviderProfile' };
    };
    /**
     * Find zero or one ProviderProfile that matches the filter.
     * @param {ProviderProfileFindUniqueArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderProfileFindUniqueArgs>(
      args: SelectSubset<T, ProviderProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one ProviderProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderProfileFindUniqueOrThrowArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProviderProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first ProviderProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileFindFirstArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderProfileFindFirstArgs>(
      args?: SelectSubset<T, ProviderProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first ProviderProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileFindFirstOrThrowArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more ProviderProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderProfiles
     * const providerProfiles = await prisma.providerProfile.findMany()
     *
     * // Get first 10 ProviderProfiles
     * const providerProfiles = await prisma.providerProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const providerProfileWithIdOnly = await prisma.providerProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProviderProfileFindManyArgs>(
      args?: SelectSubset<T, ProviderProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a ProviderProfile.
     * @param {ProviderProfileCreateArgs} args - Arguments to create a ProviderProfile.
     * @example
     * // Create one ProviderProfile
     * const ProviderProfile = await prisma.providerProfile.create({
     *   data: {
     *     // ... data to create a ProviderProfile
     *   }
     * })
     *
     */
    create<T extends ProviderProfileCreateArgs>(
      args: SelectSubset<T, ProviderProfileCreateArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many ProviderProfiles.
     * @param {ProviderProfileCreateManyArgs} args - Arguments to create many ProviderProfiles.
     * @example
     * // Create many ProviderProfiles
     * const providerProfile = await prisma.providerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProviderProfileCreateManyArgs>(
      args?: SelectSubset<T, ProviderProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProviderProfiles and returns the data saved in the database.
     * @param {ProviderProfileCreateManyAndReturnArgs} args - Arguments to create many ProviderProfiles.
     * @example
     * // Create many ProviderProfiles
     * const providerProfile = await prisma.providerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProviderProfiles and only return the `id`
     * const providerProfileWithIdOnly = await prisma.providerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProviderProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProviderProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a ProviderProfile.
     * @param {ProviderProfileDeleteArgs} args - Arguments to delete one ProviderProfile.
     * @example
     * // Delete one ProviderProfile
     * const ProviderProfile = await prisma.providerProfile.delete({
     *   where: {
     *     // ... filter to delete one ProviderProfile
     *   }
     * })
     *
     */
    delete<T extends ProviderProfileDeleteArgs>(
      args: SelectSubset<T, ProviderProfileDeleteArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one ProviderProfile.
     * @param {ProviderProfileUpdateArgs} args - Arguments to update one ProviderProfile.
     * @example
     * // Update one ProviderProfile
     * const providerProfile = await prisma.providerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProviderProfileUpdateArgs>(
      args: SelectSubset<T, ProviderProfileUpdateArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more ProviderProfiles.
     * @param {ProviderProfileDeleteManyArgs} args - Arguments to filter ProviderProfiles to delete.
     * @example
     * // Delete a few ProviderProfiles
     * const { count } = await prisma.providerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProviderProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProviderProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProviderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderProfiles
     * const providerProfile = await prisma.providerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProviderProfileUpdateManyArgs>(
      args: SelectSubset<T, ProviderProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ProviderProfile.
     * @param {ProviderProfileUpsertArgs} args - Arguments to update or create a ProviderProfile.
     * @example
     * // Update or create a ProviderProfile
     * const providerProfile = await prisma.providerProfile.upsert({
     *   create: {
     *     // ... data to create a ProviderProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderProfile we want to update
     *   }
     * })
     */
    upsert<T extends ProviderProfileUpsertArgs>(
      args: SelectSubset<T, ProviderProfileUpsertArgs<ExtArgs>>,
    ): Prisma__ProviderProfileClient<
      $Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of ProviderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileCountArgs} args - Arguments to filter ProviderProfiles to count.
     * @example
     * // Count the number of ProviderProfiles
     * const count = await prisma.providerProfile.count({
     *   where: {
     *     // ... the filter for the ProviderProfiles we want to count
     *   }
     * })
     **/
    count<T extends ProviderProfileCountArgs>(
      args?: Subset<T, ProviderProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProviderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProviderProfileAggregateArgs>(
      args: Subset<T, ProviderProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProviderProfileAggregateType<T>>;

    /**
     * Group by ProviderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProviderProfileGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProviderProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProviderProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProviderProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProviderProfile model
     */
    readonly fields: ProviderProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProviderProfile model
   */
  interface ProviderProfileFieldRefs {
    readonly id: FieldRef<'ProviderProfile', 'String'>;
    readonly userId: FieldRef<'ProviderProfile', 'String'>;
    readonly businessName: FieldRef<'ProviderProfile', 'String'>;
    readonly bio: FieldRef<'ProviderProfile', 'String'>;
    readonly yearsExperience: FieldRef<'ProviderProfile', 'Int'>;
    readonly serviceAreaText: FieldRef<'ProviderProfile', 'String'>;
    readonly suburb: FieldRef<'ProviderProfile', 'String'>;
    readonly state: FieldRef<'ProviderProfile', 'String'>;
    readonly isVerified: FieldRef<'ProviderProfile', 'Boolean'>;
    readonly createdAt: FieldRef<'ProviderProfile', 'DateTime'>;
    readonly updatedAt: FieldRef<'ProviderProfile', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ProviderProfile findUnique
   */
  export type ProviderProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where: ProviderProfileWhereUniqueInput;
  };

  /**
   * ProviderProfile findUniqueOrThrow
   */
  export type ProviderProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where: ProviderProfileWhereUniqueInput;
  };

  /**
   * ProviderProfile findFirst
   */
  export type ProviderProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where?: ProviderProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProviderProfiles.
     */
    cursor?: ProviderProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProviderProfiles.
     */
    distinct?: ProviderProfileScalarFieldEnum | ProviderProfileScalarFieldEnum[];
  };

  /**
   * ProviderProfile findFirstOrThrow
   */
  export type ProviderProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where?: ProviderProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProviderProfiles.
     */
    cursor?: ProviderProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProviderProfiles.
     */
    distinct?: ProviderProfileScalarFieldEnum | ProviderProfileScalarFieldEnum[];
  };

  /**
   * ProviderProfile findMany
   */
  export type ProviderProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderProfiles to fetch.
     */
    where?: ProviderProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProviderProfiles.
     */
    cursor?: ProviderProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number;
    distinct?: ProviderProfileScalarFieldEnum | ProviderProfileScalarFieldEnum[];
  };

  /**
   * ProviderProfile create
   */
  export type ProviderProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProviderProfile.
     */
    data: XOR<ProviderProfileCreateInput, ProviderProfileUncheckedCreateInput>;
  };

  /**
   * ProviderProfile createMany
   */
  export type ProviderProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProviderProfiles.
     */
    data: ProviderProfileCreateManyInput | ProviderProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProviderProfile createManyAndReturn
   */
  export type ProviderProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many ProviderProfiles.
     */
    data: ProviderProfileCreateManyInput | ProviderProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProviderProfile update
   */
  export type ProviderProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProviderProfile.
     */
    data: XOR<ProviderProfileUpdateInput, ProviderProfileUncheckedUpdateInput>;
    /**
     * Choose, which ProviderProfile to update.
     */
    where: ProviderProfileWhereUniqueInput;
  };

  /**
   * ProviderProfile updateMany
   */
  export type ProviderProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProviderProfiles.
     */
    data: XOR<ProviderProfileUpdateManyMutationInput, ProviderProfileUncheckedUpdateManyInput>;
    /**
     * Filter which ProviderProfiles to update
     */
    where?: ProviderProfileWhereInput;
  };

  /**
   * ProviderProfile upsert
   */
  export type ProviderProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProviderProfile to update in case it exists.
     */
    where: ProviderProfileWhereUniqueInput;
    /**
     * In case the ProviderProfile found by the `where` argument doesn't exist, create a new ProviderProfile with this data.
     */
    create: XOR<ProviderProfileCreateInput, ProviderProfileUncheckedCreateInput>;
    /**
     * In case the ProviderProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderProfileUpdateInput, ProviderProfileUncheckedUpdateInput>;
  };

  /**
   * ProviderProfile delete
   */
  export type ProviderProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
    /**
     * Filter which ProviderProfile to delete.
     */
    where: ProviderProfileWhereUniqueInput;
  };

  /**
   * ProviderProfile deleteMany
   */
  export type ProviderProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProviderProfiles to delete
     */
    where?: ProviderProfileWhereInput;
  };

  /**
   * ProviderProfile without action
   */
  export type ProviderProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null;
  };

  /**
   * Model ServiceCategory
   */

  export type AggregateServiceCategory = {
    _count: ServiceCategoryCountAggregateOutputType | null;
    _min: ServiceCategoryMinAggregateOutputType | null;
    _max: ServiceCategoryMaxAggregateOutputType | null;
  };

  export type ServiceCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
  };

  export type ServiceCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
  };

  export type ServiceCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    isActive: number;
    createdAt: number;
    _all: number;
  };

  export type ServiceCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
  };

  export type ServiceCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
  };

  export type ServiceCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ServiceCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceCategory to aggregate.
     */
    where?: ServiceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ServiceCategories
     **/
    _count?: true | ServiceCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceCategoryMaxAggregateInputType;
  };

  export type GetServiceCategoryAggregateType<T extends ServiceCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateServiceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCategory[P]>
      : GetScalarType<T[P], AggregateServiceCategory[P]>;
  };

  export type ServiceCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceCategoryWhereInput;
    orderBy?:
      | ServiceCategoryOrderByWithAggregationInput
      | ServiceCategoryOrderByWithAggregationInput[];
    by: ServiceCategoryScalarFieldEnum[] | ServiceCategoryScalarFieldEnum;
    having?: ServiceCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCategoryCountAggregateInputType | true;
    _min?: ServiceCategoryMinAggregateInputType;
    _max?: ServiceCategoryMaxAggregateInputType;
  };

  export type ServiceCategoryGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    isActive: boolean;
    createdAt: Date;
    _count: ServiceCategoryCountAggregateOutputType | null;
    _min: ServiceCategoryMinAggregateOutputType | null;
    _max: ServiceCategoryMaxAggregateOutputType | null;
  };

  type GetServiceCategoryGroupByPayload<T extends ServiceCategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceCategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ServiceCategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      providerServices?: boolean | ServiceCategory$providerServicesArgs<ExtArgs>;
      jobs?: boolean | ServiceCategory$jobsArgs<ExtArgs>;
      _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceCategory']
  >;

  export type ServiceCategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['serviceCategory']
  >;

  export type ServiceCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
  };

  export type ServiceCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    providerServices?: boolean | ServiceCategory$providerServicesArgs<ExtArgs>;
    jobs?: boolean | ServiceCategory$jobsArgs<ExtArgs>;
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ServiceCategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ServiceCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ServiceCategory';
    objects: {
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[];
      jobs: Prisma.$JobPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        slug: string;
        isActive: boolean;
        createdAt: Date;
      },
      ExtArgs['result']['serviceCategory']
    >;
    composites: {};
  };

  type ServiceCategoryGetPayload<
    S extends boolean | null | undefined | ServiceCategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$ServiceCategoryPayload, S>;

  type ServiceCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ServiceCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ServiceCategoryCountAggregateInputType | true;
  };

  export interface ServiceCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ServiceCategory'];
      meta: { name: 'ServiceCategory' };
    };
    /**
     * Find zero or one ServiceCategory that matches the filter.
     * @param {ServiceCategoryFindUniqueArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCategoryFindUniqueArgs>(
      args: SelectSubset<T, ServiceCategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one ServiceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first ServiceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCategoryFindFirstArgs>(
      args?: SelectSubset<T, ServiceCategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first ServiceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceCategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany()
     *
     * // Get first 10 ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceCategoryFindManyArgs>(
      args?: SelectSubset<T, ServiceCategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a ServiceCategory.
     * @param {ServiceCategoryCreateArgs} args - Arguments to create a ServiceCategory.
     * @example
     * // Create one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.create({
     *   data: {
     *     // ... data to create a ServiceCategory
     *   }
     * })
     *
     */
    create<T extends ServiceCategoryCreateArgs>(
      args: SelectSubset<T, ServiceCategoryCreateArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many ServiceCategories.
     * @param {ServiceCategoryCreateManyArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceCategoryCreateManyArgs>(
      args?: SelectSubset<T, ServiceCategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ServiceCategories and returns the data saved in the database.
     * @param {ServiceCategoryCreateManyAndReturnArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ServiceCategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ServiceCategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a ServiceCategory.
     * @param {ServiceCategoryDeleteArgs} args - Arguments to delete one ServiceCategory.
     * @example
     * // Delete one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.delete({
     *   where: {
     *     // ... filter to delete one ServiceCategory
     *   }
     * })
     *
     */
    delete<T extends ServiceCategoryDeleteArgs>(
      args: SelectSubset<T, ServiceCategoryDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one ServiceCategory.
     * @param {ServiceCategoryUpdateArgs} args - Arguments to update one ServiceCategory.
     * @example
     * // Update one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceCategoryUpdateArgs>(
      args: SelectSubset<T, ServiceCategoryUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more ServiceCategories.
     * @param {ServiceCategoryDeleteManyArgs} args - Arguments to filter ServiceCategories to delete.
     * @example
     * // Delete a few ServiceCategories
     * const { count } = await prisma.serviceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceCategoryDeleteManyArgs>(
      args?: SelectSubset<T, ServiceCategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceCategoryUpdateManyArgs>(
      args: SelectSubset<T, ServiceCategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ServiceCategory.
     * @param {ServiceCategoryUpsertArgs} args - Arguments to update or create a ServiceCategory.
     * @example
     * // Update or create a ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.upsert({
     *   create: {
     *     // ... data to create a ServiceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCategoryUpsertArgs>(
      args: SelectSubset<T, ServiceCategoryUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryCountArgs} args - Arguments to filter ServiceCategories to count.
     * @example
     * // Count the number of ServiceCategories
     * const count = await prisma.serviceCategory.count({
     *   where: {
     *     // ... the filter for the ServiceCategories we want to count
     *   }
     * })
     **/
    count<T extends ServiceCategoryCountArgs>(
      args?: Subset<T, ServiceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ServiceCategoryAggregateArgs>(
      args: Subset<T, ServiceCategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceCategoryAggregateType<T>>;

    /**
     * Group by ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ServiceCategoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceCategoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetServiceCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ServiceCategory model
     */
    readonly fields: ServiceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    providerServices<T extends ServiceCategory$providerServicesArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceCategory$providerServicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    jobs<T extends ServiceCategory$jobsArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceCategory$jobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ServiceCategory model
   */
  interface ServiceCategoryFieldRefs {
    readonly id: FieldRef<'ServiceCategory', 'String'>;
    readonly name: FieldRef<'ServiceCategory', 'String'>;
    readonly slug: FieldRef<'ServiceCategory', 'String'>;
    readonly isActive: FieldRef<'ServiceCategory', 'Boolean'>;
    readonly createdAt: FieldRef<'ServiceCategory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ServiceCategory findUnique
   */
  export type ServiceCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput;
  };

  /**
   * ServiceCategory findUniqueOrThrow
   */
  export type ServiceCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput;
  };

  /**
   * ServiceCategory findFirst
   */
  export type ServiceCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[];
  };

  /**
   * ServiceCategory findFirstOrThrow
   */
  export type ServiceCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[];
  };

  /**
   * ServiceCategory findMany
   */
  export type ServiceCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceCategories to fetch.
     */
    where?: ServiceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceCategories.
     */
    skip?: number;
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[];
  };

  /**
   * ServiceCategory create
   */
  export type ServiceCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ServiceCategory.
     */
    data: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>;
  };

  /**
   * ServiceCategory createMany
   */
  export type ServiceCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ServiceCategory createManyAndReturn
   */
  export type ServiceCategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ServiceCategory update
   */
  export type ServiceCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ServiceCategory.
     */
    data: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>;
    /**
     * Choose, which ServiceCategory to update.
     */
    where: ServiceCategoryWhereUniqueInput;
  };

  /**
   * ServiceCategory updateMany
   */
  export type ServiceCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput;
  };

  /**
   * ServiceCategory upsert
   */
  export type ServiceCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ServiceCategory to update in case it exists.
     */
    where: ServiceCategoryWhereUniqueInput;
    /**
     * In case the ServiceCategory found by the `where` argument doesn't exist, create a new ServiceCategory with this data.
     */
    create: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>;
    /**
     * In case the ServiceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>;
  };

  /**
   * ServiceCategory delete
   */
  export type ServiceCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
    /**
     * Filter which ServiceCategory to delete.
     */
    where: ServiceCategoryWhereUniqueInput;
  };

  /**
   * ServiceCategory deleteMany
   */
  export type ServiceCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceCategories to delete
     */
    where?: ServiceCategoryWhereInput;
  };

  /**
   * ServiceCategory.providerServices
   */
  export type ServiceCategory$providerServicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    where?: ProviderServiceWhereInput;
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[];
    cursor?: ProviderServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[];
  };

  /**
   * ServiceCategory.jobs
   */
  export type ServiceCategory$jobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    where?: JobWhereInput;
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    cursor?: JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * ServiceCategory without action
   */
  export type ServiceCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null;
  };

  /**
   * Model ProviderService
   */

  export type AggregateProviderService = {
    _count: ProviderServiceCountAggregateOutputType | null;
    _min: ProviderServiceMinAggregateOutputType | null;
    _max: ProviderServiceMaxAggregateOutputType | null;
  };

  export type ProviderServiceMinAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    categoryId: string | null;
    createdAt: Date | null;
  };

  export type ProviderServiceMaxAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    categoryId: string | null;
    createdAt: Date | null;
  };

  export type ProviderServiceCountAggregateOutputType = {
    id: number;
    providerId: number;
    categoryId: number;
    createdAt: number;
    _all: number;
  };

  export type ProviderServiceMinAggregateInputType = {
    id?: true;
    providerId?: true;
    categoryId?: true;
    createdAt?: true;
  };

  export type ProviderServiceMaxAggregateInputType = {
    id?: true;
    providerId?: true;
    categoryId?: true;
    createdAt?: true;
  };

  export type ProviderServiceCountAggregateInputType = {
    id?: true;
    providerId?: true;
    categoryId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ProviderServiceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProviderService to aggregate.
     */
    where?: ProviderServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProviderServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderServices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProviderServices
     **/
    _count?: true | ProviderServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProviderServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProviderServiceMaxAggregateInputType;
  };

  export type GetProviderServiceAggregateType<T extends ProviderServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateProviderService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderService[P]>
      : GetScalarType<T[P], AggregateProviderService[P]>;
  };

  export type ProviderServiceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProviderServiceWhereInput;
    orderBy?:
      | ProviderServiceOrderByWithAggregationInput
      | ProviderServiceOrderByWithAggregationInput[];
    by: ProviderServiceScalarFieldEnum[] | ProviderServiceScalarFieldEnum;
    having?: ProviderServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProviderServiceCountAggregateInputType | true;
    _min?: ProviderServiceMinAggregateInputType;
    _max?: ProviderServiceMaxAggregateInputType;
  };

  export type ProviderServiceGroupByOutputType = {
    id: string;
    providerId: string;
    categoryId: string;
    createdAt: Date;
    _count: ProviderServiceCountAggregateOutputType | null;
    _min: ProviderServiceMinAggregateOutputType | null;
    _max: ProviderServiceMaxAggregateOutputType | null;
  };

  type GetProviderServiceGroupByPayload<T extends ProviderServiceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProviderServiceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProviderServiceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderServiceGroupByOutputType[P]>;
        }
      >
    >;

  export type ProviderServiceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      providerId?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
      category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['providerService']
  >;

  export type ProviderServiceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      providerId?: boolean;
      categoryId?: boolean;
      createdAt?: boolean;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
      category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['providerService']
  >;

  export type ProviderServiceSelectScalar = {
    id?: boolean;
    providerId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
  };

  export type ProviderServiceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    provider?: boolean | UserDefaultArgs<ExtArgs>;
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
  };
  export type ProviderServiceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    provider?: boolean | UserDefaultArgs<ExtArgs>;
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
  };

  export type $ProviderServicePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ProviderService';
    objects: {
      provider: Prisma.$UserPayload<ExtArgs>;
      category: Prisma.$ServiceCategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        providerId: string;
        categoryId: string;
        createdAt: Date;
      },
      ExtArgs['result']['providerService']
    >;
    composites: {};
  };

  type ProviderServiceGetPayload<
    S extends boolean | null | undefined | ProviderServiceDefaultArgs,
  > = $Result.GetResult<Prisma.$ProviderServicePayload, S>;

  type ProviderServiceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProviderServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ProviderServiceCountAggregateInputType | true;
  };

  export interface ProviderServiceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ProviderService'];
      meta: { name: 'ProviderService' };
    };
    /**
     * Find zero or one ProviderService that matches the filter.
     * @param {ProviderServiceFindUniqueArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderServiceFindUniqueArgs>(
      args: SelectSubset<T, ProviderServiceFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one ProviderService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderServiceFindUniqueOrThrowArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderServiceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProviderServiceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first ProviderService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindFirstArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderServiceFindFirstArgs>(
      args?: SelectSubset<T, ProviderServiceFindFirstArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first ProviderService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindFirstOrThrowArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderServiceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderServices
     * const providerServices = await prisma.providerService.findMany()
     *
     * // Get first 10 ProviderServices
     * const providerServices = await prisma.providerService.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProviderServiceFindManyArgs>(
      args?: SelectSubset<T, ProviderServiceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a ProviderService.
     * @param {ProviderServiceCreateArgs} args - Arguments to create a ProviderService.
     * @example
     * // Create one ProviderService
     * const ProviderService = await prisma.providerService.create({
     *   data: {
     *     // ... data to create a ProviderService
     *   }
     * })
     *
     */
    create<T extends ProviderServiceCreateArgs>(
      args: SelectSubset<T, ProviderServiceCreateArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many ProviderServices.
     * @param {ProviderServiceCreateManyArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerService = await prisma.providerService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProviderServiceCreateManyArgs>(
      args?: SelectSubset<T, ProviderServiceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProviderServices and returns the data saved in the database.
     * @param {ProviderServiceCreateManyAndReturnArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerService = await prisma.providerService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProviderServices and only return the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProviderServiceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProviderServiceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a ProviderService.
     * @param {ProviderServiceDeleteArgs} args - Arguments to delete one ProviderService.
     * @example
     * // Delete one ProviderService
     * const ProviderService = await prisma.providerService.delete({
     *   where: {
     *     // ... filter to delete one ProviderService
     *   }
     * })
     *
     */
    delete<T extends ProviderServiceDeleteArgs>(
      args: SelectSubset<T, ProviderServiceDeleteArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one ProviderService.
     * @param {ProviderServiceUpdateArgs} args - Arguments to update one ProviderService.
     * @example
     * // Update one ProviderService
     * const providerService = await prisma.providerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProviderServiceUpdateArgs>(
      args: SelectSubset<T, ProviderServiceUpdateArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more ProviderServices.
     * @param {ProviderServiceDeleteManyArgs} args - Arguments to filter ProviderServices to delete.
     * @example
     * // Delete a few ProviderServices
     * const { count } = await prisma.providerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProviderServiceDeleteManyArgs>(
      args?: SelectSubset<T, ProviderServiceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderServices
     * const providerService = await prisma.providerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProviderServiceUpdateManyArgs>(
      args: SelectSubset<T, ProviderServiceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ProviderService.
     * @param {ProviderServiceUpsertArgs} args - Arguments to update or create a ProviderService.
     * @example
     * // Update or create a ProviderService
     * const providerService = await prisma.providerService.upsert({
     *   create: {
     *     // ... data to create a ProviderService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderService we want to update
     *   }
     * })
     */
    upsert<T extends ProviderServiceUpsertArgs>(
      args: SelectSubset<T, ProviderServiceUpsertArgs<ExtArgs>>,
    ): Prisma__ProviderServiceClient<
      $Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceCountArgs} args - Arguments to filter ProviderServices to count.
     * @example
     * // Count the number of ProviderServices
     * const count = await prisma.providerService.count({
     *   where: {
     *     // ... the filter for the ProviderServices we want to count
     *   }
     * })
     **/
    count<T extends ProviderServiceCountArgs>(
      args?: Subset<T, ProviderServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderServiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProviderService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProviderServiceAggregateArgs>(
      args: Subset<T, ProviderServiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetProviderServiceAggregateType<T>>;

    /**
     * Group by ProviderService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProviderServiceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderServiceGroupByArgs['orderBy'] }
        : { orderBy?: ProviderServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProviderServiceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProviderServiceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProviderService model
     */
    readonly fields: ProviderServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderServiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    category<T extends ServiceCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceCategoryDefaultArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProviderService model
   */
  interface ProviderServiceFieldRefs {
    readonly id: FieldRef<'ProviderService', 'String'>;
    readonly providerId: FieldRef<'ProviderService', 'String'>;
    readonly categoryId: FieldRef<'ProviderService', 'String'>;
    readonly createdAt: FieldRef<'ProviderService', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ProviderService findUnique
   */
  export type ProviderServiceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderService to fetch.
     */
    where: ProviderServiceWhereUniqueInput;
  };

  /**
   * ProviderService findUniqueOrThrow
   */
  export type ProviderServiceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderService to fetch.
     */
    where: ProviderServiceWhereUniqueInput;
  };

  /**
   * ProviderService findFirst
   */
  export type ProviderServiceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderService to fetch.
     */
    where?: ProviderServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderServices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[];
  };

  /**
   * ProviderService findFirstOrThrow
   */
  export type ProviderServiceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderService to fetch.
     */
    where?: ProviderServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderServices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[];
  };

  /**
   * ProviderService findMany
   */
  export type ProviderServiceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * Filter, which ProviderServices to fetch.
     */
    where?: ProviderServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProviderServices.
     */
    skip?: number;
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[];
  };

  /**
   * ProviderService create
   */
  export type ProviderServiceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProviderService.
     */
    data: XOR<ProviderServiceCreateInput, ProviderServiceUncheckedCreateInput>;
  };

  /**
   * ProviderService createMany
   */
  export type ProviderServiceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServiceCreateManyInput | ProviderServiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProviderService createManyAndReturn
   */
  export type ProviderServiceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServiceCreateManyInput | ProviderServiceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProviderService update
   */
  export type ProviderServiceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProviderService.
     */
    data: XOR<ProviderServiceUpdateInput, ProviderServiceUncheckedUpdateInput>;
    /**
     * Choose, which ProviderService to update.
     */
    where: ProviderServiceWhereUniqueInput;
  };

  /**
   * ProviderService updateMany
   */
  export type ProviderServiceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyInput>;
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServiceWhereInput;
  };

  /**
   * ProviderService upsert
   */
  export type ProviderServiceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProviderService to update in case it exists.
     */
    where: ProviderServiceWhereUniqueInput;
    /**
     * In case the ProviderService found by the `where` argument doesn't exist, create a new ProviderService with this data.
     */
    create: XOR<ProviderServiceCreateInput, ProviderServiceUncheckedCreateInput>;
    /**
     * In case the ProviderService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderServiceUpdateInput, ProviderServiceUncheckedUpdateInput>;
  };

  /**
   * ProviderService delete
   */
  export type ProviderServiceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
    /**
     * Filter which ProviderService to delete.
     */
    where: ProviderServiceWhereUniqueInput;
  };

  /**
   * ProviderService deleteMany
   */
  export type ProviderServiceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProviderServices to delete
     */
    where?: ProviderServiceWhereInput;
  };

  /**
   * ProviderService without action
   */
  export type ProviderServiceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null;
  };

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
  };

  export type JobSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    categoryId: string | null;
    title: string | null;
    description: string | null;
    locationText: string | null;
    suburb: string | null;
    state: string | null;
    latitude: number | null;
    longitude: number | null;
    preferredDate: Date | null;
    status: string | null;
    assignedProviderId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    categoryId: string | null;
    title: string | null;
    description: string | null;
    locationText: string | null;
    suburb: string | null;
    state: string | null;
    latitude: number | null;
    longitude: number | null;
    preferredDate: Date | null;
    status: string | null;
    assignedProviderId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    customerId: number;
    categoryId: number;
    title: number;
    description: number;
    locationText: number;
    suburb: number;
    state: number;
    latitude: number;
    longitude: number;
    preferredDate: number;
    status: number;
    assignedProviderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type JobAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
  };

  export type JobSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    customerId?: true;
    categoryId?: true;
    title?: true;
    description?: true;
    locationText?: true;
    suburb?: true;
    state?: true;
    latitude?: true;
    longitude?: true;
    preferredDate?: true;
    status?: true;
    assignedProviderId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    categoryId?: true;
    title?: true;
    description?: true;
    locationText?: true;
    suburb?: true;
    state?: true;
    latitude?: true;
    longitude?: true;
    preferredDate?: true;
    status?: true;
    assignedProviderId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    customerId?: true;
    categoryId?: true;
    title?: true;
    description?: true;
    locationText?: true;
    suburb?: true;
    state?: true;
    latitude?: true;
    longitude?: true;
    preferredDate?: true;
    status?: true;
    assignedProviderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which Job to aggregate.
       */
      where?: JobWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Jobs to fetch.
       */
      orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: JobWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Jobs from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Jobs.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Jobs
       **/
      _count?: true | JobCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: JobAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: JobSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: JobMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: JobMaxAggregateInputType;
    };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput;
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: JobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _avg?: JobAvgAggregateInputType;
    _sum?: JobSumAggregateInputType;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb: string | null;
    state: string | null;
    latitude: number | null;
    longitude: number | null;
    preferredDate: Date | null;
    status: string;
    assignedProviderId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        customerId?: boolean;
        categoryId?: boolean;
        title?: boolean;
        description?: boolean;
        locationText?: boolean;
        suburb?: boolean;
        state?: boolean;
        latitude?: boolean;
        longitude?: boolean;
        preferredDate?: boolean;
        status?: boolean;
        assignedProviderId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        customer?: boolean | UserDefaultArgs<ExtArgs>;
        assignedProvider?: boolean | Job$assignedProviderArgs<ExtArgs>;
        category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
        bids?: boolean | Job$bidsArgs<ExtArgs>;
        assignment?: boolean | Job$assignmentArgs<ExtArgs>;
        conversation?: boolean | Job$conversationArgs<ExtArgs>;
        statusHistory?: boolean | Job$statusHistoryArgs<ExtArgs>;
        _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job']
    >;

  export type JobSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      categoryId?: boolean;
      title?: boolean;
      description?: boolean;
      locationText?: boolean;
      suburb?: boolean;
      state?: boolean;
      latitude?: boolean;
      longitude?: boolean;
      preferredDate?: boolean;
      status?: boolean;
      assignedProviderId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      customer?: boolean | UserDefaultArgs<ExtArgs>;
      assignedProvider?: boolean | Job$assignedProviderArgs<ExtArgs>;
      category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type JobSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    categoryId?: boolean;
    title?: boolean;
    description?: boolean;
    locationText?: boolean;
    suburb?: boolean;
    state?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    preferredDate?: boolean;
    status?: boolean;
    assignedProviderId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>;
    assignedProvider?: boolean | Job$assignedProviderArgs<ExtArgs>;
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
    bids?: boolean | Job$bidsArgs<ExtArgs>;
    assignment?: boolean | Job$assignmentArgs<ExtArgs>;
    conversation?: boolean | Job$conversationArgs<ExtArgs>;
    statusHistory?: boolean | Job$statusHistoryArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type JobIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    customer?: boolean | UserDefaultArgs<ExtArgs>;
    assignedProvider?: boolean | Job$assignedProviderArgs<ExtArgs>;
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>;
  };

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Job';
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>;
      assignedProvider: Prisma.$UserPayload<ExtArgs> | null;
      category: Prisma.$ServiceCategoryPayload<ExtArgs>;
      bids: Prisma.$JobBidPayload<ExtArgs>[];
      assignment: Prisma.$JobAssignmentPayload<ExtArgs> | null;
      conversation: Prisma.$ConversationPayload<ExtArgs> | null;
      statusHistory: Prisma.$JobStatusHistoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        customerId: string;
        categoryId: string;
        title: string;
        description: string;
        locationText: string;
        suburb: string | null;
        state: string | null;
        latitude: number | null;
        longitude: number | null;
        preferredDate: Date | null;
        status: string;
        assignedProviderId: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['job']
    >;
    composites: {};
  };

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<
    Prisma.$JobPayload,
    S
  >;

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    JobFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: JobCountAggregateInputType | true;
  };

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job']; meta: { name: 'Job' } };
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobFindManyArgs>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     */
    create<T extends JobCreateArgs>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobCreateManyArgs>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     */
    delete<T extends JobDeleteArgs>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobUpdateArgs>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobDeleteManyArgs>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobUpdateManyArgs>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Job model
     */
    readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    assignedProvider<T extends Job$assignedProviderArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$assignedProviderArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    category<T extends ServiceCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceCategoryDefaultArgs<ExtArgs>>,
    ): Prisma__ServiceCategoryClient<
      $Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    bids<T extends Job$bidsArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$bidsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    assignment<T extends Job$assignmentArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$assignmentArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    conversation<T extends Job$conversationArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$conversationArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    statusHistory<T extends Job$statusHistoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$statusHistoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<'Job', 'String'>;
    readonly customerId: FieldRef<'Job', 'String'>;
    readonly categoryId: FieldRef<'Job', 'String'>;
    readonly title: FieldRef<'Job', 'String'>;
    readonly description: FieldRef<'Job', 'String'>;
    readonly locationText: FieldRef<'Job', 'String'>;
    readonly suburb: FieldRef<'Job', 'String'>;
    readonly state: FieldRef<'Job', 'String'>;
    readonly latitude: FieldRef<'Job', 'Float'>;
    readonly longitude: FieldRef<'Job', 'Float'>;
    readonly preferredDate: FieldRef<'Job', 'DateTime'>;
    readonly status: FieldRef<'Job', 'String'>;
    readonly assignedProviderId: FieldRef<'Job', 'String'>;
    readonly createdAt: FieldRef<'Job', 'DateTime'>;
    readonly updatedAt: FieldRef<'Job', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Job
       */
      select?: JobSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: JobInclude<ExtArgs> | null;
      /**
       * Filter, which Job to fetch.
       */
      where?: JobWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Jobs to fetch.
       */
      orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Jobs.
       */
      cursor?: JobWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Jobs from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Jobs.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Jobs.
       */
      distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
    };

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Job
       */
      select?: JobSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: JobInclude<ExtArgs> | null;
      /**
       * Filter, which Jobs to fetch.
       */
      where?: JobWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Jobs to fetch.
       */
      orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Jobs.
       */
      cursor?: JobWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Jobs from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Jobs.
       */
      skip?: number;
      distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
    };

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>;
  };

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput;
  };

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput;
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>;
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
  };

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput;
  };

  /**
   * Job.assignedProvider
   */
  export type Job$assignedProviderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Job.bids
   */
  export type Job$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    where?: JobBidWhereInput;
    orderBy?: JobBidOrderByWithRelationInput | JobBidOrderByWithRelationInput[];
    cursor?: JobBidWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobBidScalarFieldEnum | JobBidScalarFieldEnum[];
  };

  /**
   * Job.assignment
   */
  export type Job$assignmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    where?: JobAssignmentWhereInput;
  };

  /**
   * Job.conversation
   */
  export type Job$conversationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    where?: ConversationWhereInput;
  };

  /**
   * Job.statusHistory
   */
  export type Job$statusHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    where?: JobStatusHistoryWhereInput;
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[];
    cursor?: JobStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[];
  };

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
  };

  /**
   * Model JobBid
   */

  export type AggregateJobBid = {
    _count: JobBidCountAggregateOutputType | null;
    _avg: JobBidAvgAggregateOutputType | null;
    _sum: JobBidSumAggregateOutputType | null;
    _min: JobBidMinAggregateOutputType | null;
    _max: JobBidMaxAggregateOutputType | null;
  };

  export type JobBidAvgAggregateOutputType = {
    bidAmount: number | null;
    estimatedArrivalHours: number | null;
  };

  export type JobBidSumAggregateOutputType = {
    bidAmount: number | null;
    estimatedArrivalHours: number | null;
  };

  export type JobBidMinAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    providerId: string | null;
    bidAmount: number | null;
    message: string | null;
    estimatedArrivalHours: number | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobBidMaxAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    providerId: string | null;
    bidAmount: number | null;
    message: string | null;
    estimatedArrivalHours: number | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobBidCountAggregateOutputType = {
    id: number;
    jobId: number;
    providerId: number;
    bidAmount: number;
    message: number;
    estimatedArrivalHours: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type JobBidAvgAggregateInputType = {
    bidAmount?: true;
    estimatedArrivalHours?: true;
  };

  export type JobBidSumAggregateInputType = {
    bidAmount?: true;
    estimatedArrivalHours?: true;
  };

  export type JobBidMinAggregateInputType = {
    id?: true;
    jobId?: true;
    providerId?: true;
    bidAmount?: true;
    message?: true;
    estimatedArrivalHours?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobBidMaxAggregateInputType = {
    id?: true;
    jobId?: true;
    providerId?: true;
    bidAmount?: true;
    message?: true;
    estimatedArrivalHours?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobBidCountAggregateInputType = {
    id?: true;
    jobId?: true;
    providerId?: true;
    bidAmount?: true;
    message?: true;
    estimatedArrivalHours?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type JobBidAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobBid to aggregate.
     */
    where?: JobBidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobBids to fetch.
     */
    orderBy?: JobBidOrderByWithRelationInput | JobBidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobBidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobBids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobBids.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobBids
     **/
    _count?: true | JobBidCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: JobBidAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: JobBidSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobBidMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobBidMaxAggregateInputType;
  };

  export type GetJobBidAggregateType<T extends JobBidAggregateArgs> = {
    [P in keyof T & keyof AggregateJobBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobBid[P]>
      : GetScalarType<T[P], AggregateJobBid[P]>;
  };

  export type JobBidGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobBidWhereInput;
    orderBy?: JobBidOrderByWithAggregationInput | JobBidOrderByWithAggregationInput[];
    by: JobBidScalarFieldEnum[] | JobBidScalarFieldEnum;
    having?: JobBidScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobBidCountAggregateInputType | true;
    _avg?: JobBidAvgAggregateInputType;
    _sum?: JobBidSumAggregateInputType;
    _min?: JobBidMinAggregateInputType;
    _max?: JobBidMaxAggregateInputType;
  };

  export type JobBidGroupByOutputType = {
    id: string;
    jobId: string;
    providerId: string;
    bidAmount: number | null;
    message: string | null;
    estimatedArrivalHours: number | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    _count: JobBidCountAggregateOutputType | null;
    _avg: JobBidAvgAggregateOutputType | null;
    _sum: JobBidSumAggregateOutputType | null;
    _min: JobBidMinAggregateOutputType | null;
    _max: JobBidMaxAggregateOutputType | null;
  };

  type GetJobBidGroupByPayload<T extends JobBidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobBidGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobBidGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobBidGroupByOutputType[P]>
          : GetScalarType<T[P], JobBidGroupByOutputType[P]>;
      }
    >
  >;

  export type JobBidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        jobId?: boolean;
        providerId?: boolean;
        bidAmount?: boolean;
        message?: boolean;
        estimatedArrivalHours?: boolean;
        status?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        job?: boolean | JobDefaultArgs<ExtArgs>;
        provider?: boolean | UserDefaultArgs<ExtArgs>;
        acceptedAssignment?: boolean | JobBid$acceptedAssignmentArgs<ExtArgs>;
      },
      ExtArgs['result']['jobBid']
    >;

  export type JobBidSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      providerId?: boolean;
      bidAmount?: boolean;
      message?: boolean;
      estimatedArrivalHours?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['jobBid']
  >;

  export type JobBidSelectScalar = {
    id?: boolean;
    jobId?: boolean;
    providerId?: boolean;
    bidAmount?: boolean;
    message?: boolean;
    estimatedArrivalHours?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type JobBidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    provider?: boolean | UserDefaultArgs<ExtArgs>;
    acceptedAssignment?: boolean | JobBid$acceptedAssignmentArgs<ExtArgs>;
  };
  export type JobBidIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    provider?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $JobBidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'JobBid';
    objects: {
      job: Prisma.$JobPayload<ExtArgs>;
      provider: Prisma.$UserPayload<ExtArgs>;
      acceptedAssignment: Prisma.$JobAssignmentPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        jobId: string;
        providerId: string;
        bidAmount: number | null;
        message: string | null;
        estimatedArrivalHours: number | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['jobBid']
    >;
    composites: {};
  };

  type JobBidGetPayload<S extends boolean | null | undefined | JobBidDefaultArgs> =
    $Result.GetResult<Prisma.$JobBidPayload, S>;

  type JobBidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    JobBidFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: JobBidCountAggregateInputType | true;
  };

  export interface JobBidDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobBid']; meta: { name: 'JobBid' } };
    /**
     * Find zero or one JobBid that matches the filter.
     * @param {JobBidFindUniqueArgs} args - Arguments to find a JobBid
     * @example
     * // Get one JobBid
     * const jobBid = await prisma.jobBid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobBidFindUniqueArgs>(
      args: SelectSubset<T, JobBidFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one JobBid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobBidFindUniqueOrThrowArgs} args - Arguments to find a JobBid
     * @example
     * // Get one JobBid
     * const jobBid = await prisma.jobBid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobBidFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobBidFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first JobBid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidFindFirstArgs} args - Arguments to find a JobBid
     * @example
     * // Get one JobBid
     * const jobBid = await prisma.jobBid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobBidFindFirstArgs>(
      args?: SelectSubset<T, JobBidFindFirstArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first JobBid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidFindFirstOrThrowArgs} args - Arguments to find a JobBid
     * @example
     * // Get one JobBid
     * const jobBid = await prisma.jobBid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobBidFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobBidFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more JobBids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobBids
     * const jobBids = await prisma.jobBid.findMany()
     *
     * // Get first 10 JobBids
     * const jobBids = await prisma.jobBid.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobBidWithIdOnly = await prisma.jobBid.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobBidFindManyArgs>(
      args?: SelectSubset<T, JobBidFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a JobBid.
     * @param {JobBidCreateArgs} args - Arguments to create a JobBid.
     * @example
     * // Create one JobBid
     * const JobBid = await prisma.jobBid.create({
     *   data: {
     *     // ... data to create a JobBid
     *   }
     * })
     *
     */
    create<T extends JobBidCreateArgs>(
      args: SelectSubset<T, JobBidCreateArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many JobBids.
     * @param {JobBidCreateManyArgs} args - Arguments to create many JobBids.
     * @example
     * // Create many JobBids
     * const jobBid = await prisma.jobBid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobBidCreateManyArgs>(
      args?: SelectSubset<T, JobBidCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many JobBids and returns the data saved in the database.
     * @param {JobBidCreateManyAndReturnArgs} args - Arguments to create many JobBids.
     * @example
     * // Create many JobBids
     * const jobBid = await prisma.jobBid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobBids and only return the `id`
     * const jobBidWithIdOnly = await prisma.jobBid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobBidCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobBidCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a JobBid.
     * @param {JobBidDeleteArgs} args - Arguments to delete one JobBid.
     * @example
     * // Delete one JobBid
     * const JobBid = await prisma.jobBid.delete({
     *   where: {
     *     // ... filter to delete one JobBid
     *   }
     * })
     *
     */
    delete<T extends JobBidDeleteArgs>(
      args: SelectSubset<T, JobBidDeleteArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one JobBid.
     * @param {JobBidUpdateArgs} args - Arguments to update one JobBid.
     * @example
     * // Update one JobBid
     * const jobBid = await prisma.jobBid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobBidUpdateArgs>(
      args: SelectSubset<T, JobBidUpdateArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more JobBids.
     * @param {JobBidDeleteManyArgs} args - Arguments to filter JobBids to delete.
     * @example
     * // Delete a few JobBids
     * const { count } = await prisma.jobBid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobBidDeleteManyArgs>(
      args?: SelectSubset<T, JobBidDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobBids
     * const jobBid = await prisma.jobBid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobBidUpdateManyArgs>(
      args: SelectSubset<T, JobBidUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one JobBid.
     * @param {JobBidUpsertArgs} args - Arguments to update or create a JobBid.
     * @example
     * // Update or create a JobBid
     * const jobBid = await prisma.jobBid.upsert({
     *   create: {
     *     // ... data to create a JobBid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobBid we want to update
     *   }
     * })
     */
    upsert<T extends JobBidUpsertArgs>(
      args: SelectSubset<T, JobBidUpsertArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of JobBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidCountArgs} args - Arguments to filter JobBids to count.
     * @example
     * // Count the number of JobBids
     * const count = await prisma.jobBid.count({
     *   where: {
     *     // ... the filter for the JobBids we want to count
     *   }
     * })
     **/
    count<T extends JobBidCountArgs>(
      args?: Subset<T, JobBidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobBidCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a JobBid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobBidAggregateArgs>(
      args: Subset<T, JobBidAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobBidAggregateType<T>>;

    /**
     * Group by JobBid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobBidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends JobBidGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobBidGroupByArgs['orderBy'] }
        : { orderBy?: JobBidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobBidGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJobBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobBid model
     */
    readonly fields: JobBidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobBid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobBidClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    acceptedAssignment<T extends JobBid$acceptedAssignmentArgs<ExtArgs> = {}>(
      args?: Subset<T, JobBid$acceptedAssignmentArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the JobBid model
   */
  interface JobBidFieldRefs {
    readonly id: FieldRef<'JobBid', 'String'>;
    readonly jobId: FieldRef<'JobBid', 'String'>;
    readonly providerId: FieldRef<'JobBid', 'String'>;
    readonly bidAmount: FieldRef<'JobBid', 'Float'>;
    readonly message: FieldRef<'JobBid', 'String'>;
    readonly estimatedArrivalHours: FieldRef<'JobBid', 'Int'>;
    readonly status: FieldRef<'JobBid', 'String'>;
    readonly createdAt: FieldRef<'JobBid', 'DateTime'>;
    readonly updatedAt: FieldRef<'JobBid', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * JobBid findUnique
   */
  export type JobBidFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    /**
     * Filter, which JobBid to fetch.
     */
    where: JobBidWhereUniqueInput;
  };

  /**
   * JobBid findUniqueOrThrow
   */
  export type JobBidFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    /**
     * Filter, which JobBid to fetch.
     */
    where: JobBidWhereUniqueInput;
  };

  /**
   * JobBid findFirst
   */
  export type JobBidFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    /**
     * Filter, which JobBid to fetch.
     */
    where?: JobBidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobBids to fetch.
     */
    orderBy?: JobBidOrderByWithRelationInput | JobBidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobBids.
     */
    cursor?: JobBidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobBids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobBids.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobBids.
     */
    distinct?: JobBidScalarFieldEnum | JobBidScalarFieldEnum[];
  };

  /**
   * JobBid findFirstOrThrow
   */
  export type JobBidFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    /**
     * Filter, which JobBid to fetch.
     */
    where?: JobBidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobBids to fetch.
     */
    orderBy?: JobBidOrderByWithRelationInput | JobBidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobBids.
     */
    cursor?: JobBidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobBids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobBids.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobBids.
     */
    distinct?: JobBidScalarFieldEnum | JobBidScalarFieldEnum[];
  };

  /**
   * JobBid findMany
   */
  export type JobBidFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    /**
     * Filter, which JobBids to fetch.
     */
    where?: JobBidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobBids to fetch.
     */
    orderBy?: JobBidOrderByWithRelationInput | JobBidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobBids.
     */
    cursor?: JobBidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobBids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobBids.
     */
    skip?: number;
    distinct?: JobBidScalarFieldEnum | JobBidScalarFieldEnum[];
  };

  /**
   * JobBid create
   */
  export type JobBidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the JobBid
       */
      select?: JobBidSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: JobBidInclude<ExtArgs> | null;
      /**
       * The data needed to create a JobBid.
       */
      data: XOR<JobBidCreateInput, JobBidUncheckedCreateInput>;
    };

  /**
   * JobBid createMany
   */
  export type JobBidCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many JobBids.
     */
    data: JobBidCreateManyInput | JobBidCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * JobBid createManyAndReturn
   */
  export type JobBidCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many JobBids.
     */
    data: JobBidCreateManyInput | JobBidCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobBid update
   */
  export type JobBidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the JobBid
       */
      select?: JobBidSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: JobBidInclude<ExtArgs> | null;
      /**
       * The data needed to update a JobBid.
       */
      data: XOR<JobBidUpdateInput, JobBidUncheckedUpdateInput>;
      /**
       * Choose, which JobBid to update.
       */
      where: JobBidWhereUniqueInput;
    };

  /**
   * JobBid updateMany
   */
  export type JobBidUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update JobBids.
     */
    data: XOR<JobBidUpdateManyMutationInput, JobBidUncheckedUpdateManyInput>;
    /**
     * Filter which JobBids to update
     */
    where?: JobBidWhereInput;
  };

  /**
   * JobBid upsert
   */
  export type JobBidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the JobBid
       */
      select?: JobBidSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: JobBidInclude<ExtArgs> | null;
      /**
       * The filter to search for the JobBid to update in case it exists.
       */
      where: JobBidWhereUniqueInput;
      /**
       * In case the JobBid found by the `where` argument doesn't exist, create a new JobBid with this data.
       */
      create: XOR<JobBidCreateInput, JobBidUncheckedCreateInput>;
      /**
       * In case the JobBid was found with the provided `where` argument, update it with this data.
       */
      update: XOR<JobBidUpdateInput, JobBidUncheckedUpdateInput>;
    };

  /**
   * JobBid delete
   */
  export type JobBidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the JobBid
       */
      select?: JobBidSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: JobBidInclude<ExtArgs> | null;
      /**
       * Filter which JobBid to delete.
       */
      where: JobBidWhereUniqueInput;
    };

  /**
   * JobBid deleteMany
   */
  export type JobBidDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobBids to delete
     */
    where?: JobBidWhereInput;
  };

  /**
   * JobBid.acceptedAssignment
   */
  export type JobBid$acceptedAssignmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    where?: JobAssignmentWhereInput;
  };

  /**
   * JobBid without action
   */
  export type JobBidDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
  };

  /**
   * Model JobAssignment
   */

  export type AggregateJobAssignment = {
    _count: JobAssignmentCountAggregateOutputType | null;
    _min: JobAssignmentMinAggregateOutputType | null;
    _max: JobAssignmentMaxAggregateOutputType | null;
  };

  export type JobAssignmentMinAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    customerId: string | null;
    providerId: string | null;
    acceptedBidId: string | null;
    assignedAt: Date | null;
    completedAt: Date | null;
  };

  export type JobAssignmentMaxAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    customerId: string | null;
    providerId: string | null;
    acceptedBidId: string | null;
    assignedAt: Date | null;
    completedAt: Date | null;
  };

  export type JobAssignmentCountAggregateOutputType = {
    id: number;
    jobId: number;
    customerId: number;
    providerId: number;
    acceptedBidId: number;
    assignedAt: number;
    completedAt: number;
    _all: number;
  };

  export type JobAssignmentMinAggregateInputType = {
    id?: true;
    jobId?: true;
    customerId?: true;
    providerId?: true;
    acceptedBidId?: true;
    assignedAt?: true;
    completedAt?: true;
  };

  export type JobAssignmentMaxAggregateInputType = {
    id?: true;
    jobId?: true;
    customerId?: true;
    providerId?: true;
    acceptedBidId?: true;
    assignedAt?: true;
    completedAt?: true;
  };

  export type JobAssignmentCountAggregateInputType = {
    id?: true;
    jobId?: true;
    customerId?: true;
    providerId?: true;
    acceptedBidId?: true;
    assignedAt?: true;
    completedAt?: true;
    _all?: true;
  };

  export type JobAssignmentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobAssignment to aggregate.
     */
    where?: JobAssignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobAssignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobAssignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobAssignments
     **/
    _count?: true | JobAssignmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobAssignmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobAssignmentMaxAggregateInputType;
  };

  export type GetJobAssignmentAggregateType<T extends JobAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateJobAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobAssignment[P]>
      : GetScalarType<T[P], AggregateJobAssignment[P]>;
  };

  export type JobAssignmentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobAssignmentWhereInput;
    orderBy?: JobAssignmentOrderByWithAggregationInput | JobAssignmentOrderByWithAggregationInput[];
    by: JobAssignmentScalarFieldEnum[] | JobAssignmentScalarFieldEnum;
    having?: JobAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobAssignmentCountAggregateInputType | true;
    _min?: JobAssignmentMinAggregateInputType;
    _max?: JobAssignmentMaxAggregateInputType;
  };

  export type JobAssignmentGroupByOutputType = {
    id: string;
    jobId: string;
    customerId: string;
    providerId: string;
    acceptedBidId: string | null;
    assignedAt: Date;
    completedAt: Date | null;
    _count: JobAssignmentCountAggregateOutputType | null;
    _min: JobAssignmentMinAggregateOutputType | null;
    _max: JobAssignmentMaxAggregateOutputType | null;
  };

  type GetJobAssignmentGroupByPayload<T extends JobAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobAssignmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobAssignmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobAssignmentGroupByOutputType[P]>
          : GetScalarType<T[P], JobAssignmentGroupByOutputType[P]>;
      }
    >
  >;

  export type JobAssignmentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      customerId?: boolean;
      providerId?: boolean;
      acceptedBidId?: boolean;
      assignedAt?: boolean;
      completedAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      customer?: boolean | UserDefaultArgs<ExtArgs>;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
      acceptedBid?: boolean | JobAssignment$acceptedBidArgs<ExtArgs>;
    },
    ExtArgs['result']['jobAssignment']
  >;

  export type JobAssignmentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      customerId?: boolean;
      providerId?: boolean;
      acceptedBidId?: boolean;
      assignedAt?: boolean;
      completedAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      customer?: boolean | UserDefaultArgs<ExtArgs>;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
      acceptedBid?: boolean | JobAssignment$acceptedBidArgs<ExtArgs>;
    },
    ExtArgs['result']['jobAssignment']
  >;

  export type JobAssignmentSelectScalar = {
    id?: boolean;
    jobId?: boolean;
    customerId?: boolean;
    providerId?: boolean;
    acceptedBidId?: boolean;
    assignedAt?: boolean;
    completedAt?: boolean;
  };

  export type JobAssignmentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    customer?: boolean | UserDefaultArgs<ExtArgs>;
    provider?: boolean | UserDefaultArgs<ExtArgs>;
    acceptedBid?: boolean | JobAssignment$acceptedBidArgs<ExtArgs>;
  };
  export type JobAssignmentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    customer?: boolean | UserDefaultArgs<ExtArgs>;
    provider?: boolean | UserDefaultArgs<ExtArgs>;
    acceptedBid?: boolean | JobAssignment$acceptedBidArgs<ExtArgs>;
  };

  export type $JobAssignmentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'JobAssignment';
    objects: {
      job: Prisma.$JobPayload<ExtArgs>;
      customer: Prisma.$UserPayload<ExtArgs>;
      provider: Prisma.$UserPayload<ExtArgs>;
      acceptedBid: Prisma.$JobBidPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        jobId: string;
        customerId: string;
        providerId: string;
        acceptedBidId: string | null;
        assignedAt: Date;
        completedAt: Date | null;
      },
      ExtArgs['result']['jobAssignment']
    >;
    composites: {};
  };

  type JobAssignmentGetPayload<S extends boolean | null | undefined | JobAssignmentDefaultArgs> =
    $Result.GetResult<Prisma.$JobAssignmentPayload, S>;

  type JobAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobAssignmentCountAggregateInputType | true;
    };

  export interface JobAssignmentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['JobAssignment'];
      meta: { name: 'JobAssignment' };
    };
    /**
     * Find zero or one JobAssignment that matches the filter.
     * @param {JobAssignmentFindUniqueArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobAssignmentFindUniqueArgs>(
      args: SelectSubset<T, JobAssignmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one JobAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobAssignmentFindUniqueOrThrowArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobAssignmentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobAssignmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first JobAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentFindFirstArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobAssignmentFindFirstArgs>(
      args?: SelectSubset<T, JobAssignmentFindFirstArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first JobAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentFindFirstOrThrowArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobAssignmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobAssignmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more JobAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobAssignments
     * const jobAssignments = await prisma.jobAssignment.findMany()
     *
     * // Get first 10 JobAssignments
     * const jobAssignments = await prisma.jobAssignment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobAssignmentWithIdOnly = await prisma.jobAssignment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobAssignmentFindManyArgs>(
      args?: SelectSubset<T, JobAssignmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a JobAssignment.
     * @param {JobAssignmentCreateArgs} args - Arguments to create a JobAssignment.
     * @example
     * // Create one JobAssignment
     * const JobAssignment = await prisma.jobAssignment.create({
     *   data: {
     *     // ... data to create a JobAssignment
     *   }
     * })
     *
     */
    create<T extends JobAssignmentCreateArgs>(
      args: SelectSubset<T, JobAssignmentCreateArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many JobAssignments.
     * @param {JobAssignmentCreateManyArgs} args - Arguments to create many JobAssignments.
     * @example
     * // Create many JobAssignments
     * const jobAssignment = await prisma.jobAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobAssignmentCreateManyArgs>(
      args?: SelectSubset<T, JobAssignmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many JobAssignments and returns the data saved in the database.
     * @param {JobAssignmentCreateManyAndReturnArgs} args - Arguments to create many JobAssignments.
     * @example
     * // Create many JobAssignments
     * const jobAssignment = await prisma.jobAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobAssignments and only return the `id`
     * const jobAssignmentWithIdOnly = await prisma.jobAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobAssignmentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobAssignmentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a JobAssignment.
     * @param {JobAssignmentDeleteArgs} args - Arguments to delete one JobAssignment.
     * @example
     * // Delete one JobAssignment
     * const JobAssignment = await prisma.jobAssignment.delete({
     *   where: {
     *     // ... filter to delete one JobAssignment
     *   }
     * })
     *
     */
    delete<T extends JobAssignmentDeleteArgs>(
      args: SelectSubset<T, JobAssignmentDeleteArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one JobAssignment.
     * @param {JobAssignmentUpdateArgs} args - Arguments to update one JobAssignment.
     * @example
     * // Update one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobAssignmentUpdateArgs>(
      args: SelectSubset<T, JobAssignmentUpdateArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more JobAssignments.
     * @param {JobAssignmentDeleteManyArgs} args - Arguments to filter JobAssignments to delete.
     * @example
     * // Delete a few JobAssignments
     * const { count } = await prisma.jobAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobAssignmentDeleteManyArgs>(
      args?: SelectSubset<T, JobAssignmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobAssignments
     * const jobAssignment = await prisma.jobAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobAssignmentUpdateManyArgs>(
      args: SelectSubset<T, JobAssignmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one JobAssignment.
     * @param {JobAssignmentUpsertArgs} args - Arguments to update or create a JobAssignment.
     * @example
     * // Update or create a JobAssignment
     * const jobAssignment = await prisma.jobAssignment.upsert({
     *   create: {
     *     // ... data to create a JobAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobAssignment we want to update
     *   }
     * })
     */
    upsert<T extends JobAssignmentUpsertArgs>(
      args: SelectSubset<T, JobAssignmentUpsertArgs<ExtArgs>>,
    ): Prisma__JobAssignmentClient<
      $Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of JobAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentCountArgs} args - Arguments to filter JobAssignments to count.
     * @example
     * // Count the number of JobAssignments
     * const count = await prisma.jobAssignment.count({
     *   where: {
     *     // ... the filter for the JobAssignments we want to count
     *   }
     * })
     **/
    count<T extends JobAssignmentCountArgs>(
      args?: Subset<T, JobAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobAssignmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a JobAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobAssignmentAggregateArgs>(
      args: Subset<T, JobAssignmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAssignmentAggregateType<T>>;

    /**
     * Group by JobAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends JobAssignmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: JobAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobAssignmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetJobAssignmentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobAssignment model
     */
    readonly fields: JobAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobAssignmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    acceptedBid<T extends JobAssignment$acceptedBidArgs<ExtArgs> = {}>(
      args?: Subset<T, JobAssignment$acceptedBidArgs<ExtArgs>>,
    ): Prisma__JobBidClient<
      $Result.GetResult<Prisma.$JobBidPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the JobAssignment model
   */
  interface JobAssignmentFieldRefs {
    readonly id: FieldRef<'JobAssignment', 'String'>;
    readonly jobId: FieldRef<'JobAssignment', 'String'>;
    readonly customerId: FieldRef<'JobAssignment', 'String'>;
    readonly providerId: FieldRef<'JobAssignment', 'String'>;
    readonly acceptedBidId: FieldRef<'JobAssignment', 'String'>;
    readonly assignedAt: FieldRef<'JobAssignment', 'DateTime'>;
    readonly completedAt: FieldRef<'JobAssignment', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * JobAssignment findUnique
   */
  export type JobAssignmentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * Filter, which JobAssignment to fetch.
     */
    where: JobAssignmentWhereUniqueInput;
  };

  /**
   * JobAssignment findUniqueOrThrow
   */
  export type JobAssignmentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * Filter, which JobAssignment to fetch.
     */
    where: JobAssignmentWhereUniqueInput;
  };

  /**
   * JobAssignment findFirst
   */
  export type JobAssignmentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * Filter, which JobAssignment to fetch.
     */
    where?: JobAssignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobAssignments.
     */
    cursor?: JobAssignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobAssignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobAssignments.
     */
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[];
  };

  /**
   * JobAssignment findFirstOrThrow
   */
  export type JobAssignmentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * Filter, which JobAssignment to fetch.
     */
    where?: JobAssignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobAssignments.
     */
    cursor?: JobAssignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobAssignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobAssignments.
     */
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[];
  };

  /**
   * JobAssignment findMany
   */
  export type JobAssignmentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * Filter, which JobAssignments to fetch.
     */
    where?: JobAssignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobAssignments.
     */
    cursor?: JobAssignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobAssignments.
     */
    skip?: number;
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[];
  };

  /**
   * JobAssignment create
   */
  export type JobAssignmentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a JobAssignment.
     */
    data: XOR<JobAssignmentCreateInput, JobAssignmentUncheckedCreateInput>;
  };

  /**
   * JobAssignment createMany
   */
  export type JobAssignmentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many JobAssignments.
     */
    data: JobAssignmentCreateManyInput | JobAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * JobAssignment createManyAndReturn
   */
  export type JobAssignmentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many JobAssignments.
     */
    data: JobAssignmentCreateManyInput | JobAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobAssignment update
   */
  export type JobAssignmentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a JobAssignment.
     */
    data: XOR<JobAssignmentUpdateInput, JobAssignmentUncheckedUpdateInput>;
    /**
     * Choose, which JobAssignment to update.
     */
    where: JobAssignmentWhereUniqueInput;
  };

  /**
   * JobAssignment updateMany
   */
  export type JobAssignmentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update JobAssignments.
     */
    data: XOR<JobAssignmentUpdateManyMutationInput, JobAssignmentUncheckedUpdateManyInput>;
    /**
     * Filter which JobAssignments to update
     */
    where?: JobAssignmentWhereInput;
  };

  /**
   * JobAssignment upsert
   */
  export type JobAssignmentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the JobAssignment to update in case it exists.
     */
    where: JobAssignmentWhereUniqueInput;
    /**
     * In case the JobAssignment found by the `where` argument doesn't exist, create a new JobAssignment with this data.
     */
    create: XOR<JobAssignmentCreateInput, JobAssignmentUncheckedCreateInput>;
    /**
     * In case the JobAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobAssignmentUpdateInput, JobAssignmentUncheckedUpdateInput>;
  };

  /**
   * JobAssignment delete
   */
  export type JobAssignmentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
    /**
     * Filter which JobAssignment to delete.
     */
    where: JobAssignmentWhereUniqueInput;
  };

  /**
   * JobAssignment deleteMany
   */
  export type JobAssignmentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobAssignments to delete
     */
    where?: JobAssignmentWhereInput;
  };

  /**
   * JobAssignment.acceptedBid
   */
  export type JobAssignment$acceptedBidArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobBid
     */
    select?: JobBidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobBidInclude<ExtArgs> | null;
    where?: JobBidWhereInput;
  };

  /**
   * JobAssignment without action
   */
  export type JobAssignmentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null;
  };

  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
  };

  export type ConversationMinAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    customerId: string | null;
    providerId: string | null;
    createdAt: Date | null;
  };

  export type ConversationMaxAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    customerId: string | null;
    providerId: string | null;
    createdAt: Date | null;
  };

  export type ConversationCountAggregateOutputType = {
    id: number;
    jobId: number;
    customerId: number;
    providerId: number;
    createdAt: number;
    _all: number;
  };

  export type ConversationMinAggregateInputType = {
    id?: true;
    jobId?: true;
    customerId?: true;
    providerId?: true;
    createdAt?: true;
  };

  export type ConversationMaxAggregateInputType = {
    id?: true;
    jobId?: true;
    customerId?: true;
    providerId?: true;
    createdAt?: true;
  };

  export type ConversationCountAggregateInputType = {
    id?: true;
    jobId?: true;
    customerId?: true;
    providerId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ConversationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Conversations
     **/
    _count?: true | ConversationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ConversationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ConversationMaxAggregateInputType;
  };

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
    [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>;
  };

  export type ConversationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[];
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum;
    having?: ConversationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationCountAggregateInputType | true;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
  };

  export type ConversationGroupByOutputType = {
    id: string;
    jobId: string;
    customerId: string;
    providerId: string;
    createdAt: Date;
    _count: ConversationCountAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
  };

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ConversationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
          : GetScalarType<T[P], ConversationGroupByOutputType[P]>;
      }
    >
  >;

  export type ConversationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      customerId?: boolean;
      providerId?: boolean;
      createdAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      customer?: boolean | UserDefaultArgs<ExtArgs>;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
      messages?: boolean | Conversation$messagesArgs<ExtArgs>;
      _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['conversation']
  >;

  export type ConversationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      customerId?: boolean;
      providerId?: boolean;
      createdAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      customer?: boolean | UserDefaultArgs<ExtArgs>;
      provider?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['conversation']
  >;

  export type ConversationSelectScalar = {
    id?: boolean;
    jobId?: boolean;
    customerId?: boolean;
    providerId?: boolean;
    createdAt?: boolean;
  };

  export type ConversationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    customer?: boolean | UserDefaultArgs<ExtArgs>;
    provider?: boolean | UserDefaultArgs<ExtArgs>;
    messages?: boolean | Conversation$messagesArgs<ExtArgs>;
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ConversationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    customer?: boolean | UserDefaultArgs<ExtArgs>;
    provider?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ConversationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Conversation';
    objects: {
      job: Prisma.$JobPayload<ExtArgs>;
      customer: Prisma.$UserPayload<ExtArgs>;
      provider: Prisma.$UserPayload<ExtArgs>;
      messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        jobId: string;
        customerId: string;
        providerId: string;
        createdAt: Date;
      },
      ExtArgs['result']['conversation']
    >;
    composites: {};
  };

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> =
    $Result.GetResult<Prisma.$ConversationPayload, S>;

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationCountAggregateInputType | true;
    };

  export interface ConversationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Conversation'];
      meta: { name: 'Conversation' };
    };
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(
      args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(
      args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     *
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConversationFindManyArgs>(
      args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     *
     */
    create<T extends ConversationCreateArgs>(
      args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConversationCreateManyArgs>(
      args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     *
     */
    delete<T extends ConversationDeleteArgs>(
      args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConversationUpdateArgs>(
      args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConversationDeleteManyArgs>(
      args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConversationUpdateManyArgs>(
      args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(
      args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
     **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ConversationAggregateArgs>(
      args: Subset<T, ConversationAggregateArgs>,
    ): Prisma.PrismaPromise<GetConversationAggregateType<T>>;

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetConversationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Conversation model
     */
    readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Conversation$messagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<'Conversation', 'String'>;
    readonly jobId: FieldRef<'Conversation', 'String'>;
    readonly customerId: FieldRef<'Conversation', 'String'>;
    readonly providerId: FieldRef<'Conversation', 'String'>;
    readonly createdAt: FieldRef<'Conversation', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput;
  };

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput;
  };

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[];
  };

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[];
  };

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Conversations.
     */
    skip?: number;
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[];
  };

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>;
  };

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>;
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput;
  };

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>;
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput;
  };

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput;
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>;
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>;
  };

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput;
  };

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput;
  };

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null;
  };

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageMinAggregateOutputType = {
    id: string | null;
    conversationId: string | null;
    senderId: string | null;
    messageText: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: string | null;
    conversationId: string | null;
    senderId: string | null;
    messageText: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    conversationId: number;
    senderId: number;
    messageText: number;
    isRead: number;
    createdAt: number;
    _all: number;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    conversationId?: true;
    senderId?: true;
    messageText?: true;
    isRead?: true;
    createdAt?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    conversationId?: true;
    senderId?: true;
    messageText?: true;
    isRead?: true;
    createdAt?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    conversationId?: true;
    senderId?: true;
    messageText?: true;
    isRead?: true;
    createdAt?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: string;
    conversationId: string;
    senderId: string;
    messageText: string;
    isRead: boolean;
    createdAt: Date;
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
          : GetScalarType<T[P], MessageGroupByOutputType[P]>;
      }
    >
  >;

  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        conversationId?: boolean;
        senderId?: boolean;
        messageText?: boolean;
        isRead?: boolean;
        createdAt?: boolean;
        conversation?: boolean | ConversationDefaultArgs<ExtArgs>;
        sender?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['message']
    >;

  export type MessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      conversationId?: boolean;
      senderId?: boolean;
      messageText?: boolean;
      isRead?: boolean;
      createdAt?: boolean;
      conversation?: boolean | ConversationDefaultArgs<ExtArgs>;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectScalar = {
    id?: boolean;
    conversationId?: boolean;
    senderId?: boolean;
    messageText?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
  };

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>;
    sender?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MessageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>;
    sender?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Message';
      objects: {
        conversation: Prisma.$ConversationPayload<ExtArgs>;
        sender: Prisma.$UserPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          conversationId: string;
          senderId: string;
          messageText: string;
          isRead: boolean;
          createdAt: Date;
        },
        ExtArgs['result']['message']
      >;
      composites: {};
    };

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> =
    $Result.GetResult<Prisma.$MessagePayload, S>;

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    MessageFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message']; meta: { name: 'Message' } };
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     */
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     */
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ConversationDefaultArgs<ExtArgs>>,
    ): Prisma__ConversationClient<
      $Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'String'>;
    readonly conversationId: FieldRef<'Message', 'String'>;
    readonly senderId: FieldRef<'Message', 'String'>;
    readonly messageText: FieldRef<'Message', 'String'>;
    readonly isRead: FieldRef<'Message', 'Boolean'>;
    readonly createdAt: FieldRef<'Message', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
  };

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
  };

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput;
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
  };

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput;
  };

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
  };

  /**
   * Model JobStatusHistory
   */

  export type AggregateJobStatusHistory = {
    _count: JobStatusHistoryCountAggregateOutputType | null;
    _min: JobStatusHistoryMinAggregateOutputType | null;
    _max: JobStatusHistoryMaxAggregateOutputType | null;
  };

  export type JobStatusHistoryMinAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    oldStatus: string | null;
    newStatus: string | null;
    changedBy: string | null;
    note: string | null;
    createdAt: Date | null;
  };

  export type JobStatusHistoryMaxAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    oldStatus: string | null;
    newStatus: string | null;
    changedBy: string | null;
    note: string | null;
    createdAt: Date | null;
  };

  export type JobStatusHistoryCountAggregateOutputType = {
    id: number;
    jobId: number;
    oldStatus: number;
    newStatus: number;
    changedBy: number;
    note: number;
    createdAt: number;
    _all: number;
  };

  export type JobStatusHistoryMinAggregateInputType = {
    id?: true;
    jobId?: true;
    oldStatus?: true;
    newStatus?: true;
    changedBy?: true;
    note?: true;
    createdAt?: true;
  };

  export type JobStatusHistoryMaxAggregateInputType = {
    id?: true;
    jobId?: true;
    oldStatus?: true;
    newStatus?: true;
    changedBy?: true;
    note?: true;
    createdAt?: true;
  };

  export type JobStatusHistoryCountAggregateInputType = {
    id?: true;
    jobId?: true;
    oldStatus?: true;
    newStatus?: true;
    changedBy?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
  };

  export type JobStatusHistoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobStatusHistory to aggregate.
     */
    where?: JobStatusHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobStatusHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobStatusHistories
     **/
    _count?: true | JobStatusHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobStatusHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobStatusHistoryMaxAggregateInputType;
  };

  export type GetJobStatusHistoryAggregateType<T extends JobStatusHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateJobStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobStatusHistory[P]>
      : GetScalarType<T[P], AggregateJobStatusHistory[P]>;
  };

  export type JobStatusHistoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobStatusHistoryWhereInput;
    orderBy?:
      | JobStatusHistoryOrderByWithAggregationInput
      | JobStatusHistoryOrderByWithAggregationInput[];
    by: JobStatusHistoryScalarFieldEnum[] | JobStatusHistoryScalarFieldEnum;
    having?: JobStatusHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobStatusHistoryCountAggregateInputType | true;
    _min?: JobStatusHistoryMinAggregateInputType;
    _max?: JobStatusHistoryMaxAggregateInputType;
  };

  export type JobStatusHistoryGroupByOutputType = {
    id: string;
    jobId: string;
    oldStatus: string | null;
    newStatus: string;
    changedBy: string | null;
    note: string | null;
    createdAt: Date;
    _count: JobStatusHistoryCountAggregateOutputType | null;
    _min: JobStatusHistoryMinAggregateOutputType | null;
    _max: JobStatusHistoryMaxAggregateOutputType | null;
  };

  type GetJobStatusHistoryGroupByPayload<T extends JobStatusHistoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<JobStatusHistoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof JobStatusHistoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], JobStatusHistoryGroupByOutputType[P]>;
        }
      >
    >;

  export type JobStatusHistorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      oldStatus?: boolean;
      newStatus?: boolean;
      changedBy?: boolean;
      note?: boolean;
      createdAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      changedByUser?: boolean | JobStatusHistory$changedByUserArgs<ExtArgs>;
    },
    ExtArgs['result']['jobStatusHistory']
  >;

  export type JobStatusHistorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      oldStatus?: boolean;
      newStatus?: boolean;
      changedBy?: boolean;
      note?: boolean;
      createdAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      changedByUser?: boolean | JobStatusHistory$changedByUserArgs<ExtArgs>;
    },
    ExtArgs['result']['jobStatusHistory']
  >;

  export type JobStatusHistorySelectScalar = {
    id?: boolean;
    jobId?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    changedBy?: boolean;
    note?: boolean;
    createdAt?: boolean;
  };

  export type JobStatusHistoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    changedByUser?: boolean | JobStatusHistory$changedByUserArgs<ExtArgs>;
  };
  export type JobStatusHistoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    changedByUser?: boolean | JobStatusHistory$changedByUserArgs<ExtArgs>;
  };

  export type $JobStatusHistoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'JobStatusHistory';
    objects: {
      job: Prisma.$JobPayload<ExtArgs>;
      changedByUser: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        jobId: string;
        oldStatus: string | null;
        newStatus: string;
        changedBy: string | null;
        note: string | null;
        createdAt: Date;
      },
      ExtArgs['result']['jobStatusHistory']
    >;
    composites: {};
  };

  type JobStatusHistoryGetPayload<
    S extends boolean | null | undefined | JobStatusHistoryDefaultArgs,
  > = $Result.GetResult<Prisma.$JobStatusHistoryPayload, S>;

  type JobStatusHistoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<JobStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: JobStatusHistoryCountAggregateInputType | true;
  };

  export interface JobStatusHistoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['JobStatusHistory'];
      meta: { name: 'JobStatusHistory' };
    };
    /**
     * Find zero or one JobStatusHistory that matches the filter.
     * @param {JobStatusHistoryFindUniqueArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobStatusHistoryFindUniqueArgs>(
      args: SelectSubset<T, JobStatusHistoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one JobStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobStatusHistoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first JobStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryFindFirstArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobStatusHistoryFindFirstArgs>(
      args?: SelectSubset<T, JobStatusHistoryFindFirstArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first JobStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobStatusHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobStatusHistoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more JobStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobStatusHistories
     * const jobStatusHistories = await prisma.jobStatusHistory.findMany()
     *
     * // Get first 10 JobStatusHistories
     * const jobStatusHistories = await prisma.jobStatusHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobStatusHistoryWithIdOnly = await prisma.jobStatusHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobStatusHistoryFindManyArgs>(
      args?: SelectSubset<T, JobStatusHistoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a JobStatusHistory.
     * @param {JobStatusHistoryCreateArgs} args - Arguments to create a JobStatusHistory.
     * @example
     * // Create one JobStatusHistory
     * const JobStatusHistory = await prisma.jobStatusHistory.create({
     *   data: {
     *     // ... data to create a JobStatusHistory
     *   }
     * })
     *
     */
    create<T extends JobStatusHistoryCreateArgs>(
      args: SelectSubset<T, JobStatusHistoryCreateArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many JobStatusHistories.
     * @param {JobStatusHistoryCreateManyArgs} args - Arguments to create many JobStatusHistories.
     * @example
     * // Create many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobStatusHistoryCreateManyArgs>(
      args?: SelectSubset<T, JobStatusHistoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many JobStatusHistories and returns the data saved in the database.
     * @param {JobStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many JobStatusHistories.
     * @example
     * // Create many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobStatusHistories and only return the `id`
     * const jobStatusHistoryWithIdOnly = await prisma.jobStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobStatusHistoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobStatusHistoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a JobStatusHistory.
     * @param {JobStatusHistoryDeleteArgs} args - Arguments to delete one JobStatusHistory.
     * @example
     * // Delete one JobStatusHistory
     * const JobStatusHistory = await prisma.jobStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one JobStatusHistory
     *   }
     * })
     *
     */
    delete<T extends JobStatusHistoryDeleteArgs>(
      args: SelectSubset<T, JobStatusHistoryDeleteArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one JobStatusHistory.
     * @param {JobStatusHistoryUpdateArgs} args - Arguments to update one JobStatusHistory.
     * @example
     * // Update one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobStatusHistoryUpdateArgs>(
      args: SelectSubset<T, JobStatusHistoryUpdateArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more JobStatusHistories.
     * @param {JobStatusHistoryDeleteManyArgs} args - Arguments to filter JobStatusHistories to delete.
     * @example
     * // Delete a few JobStatusHistories
     * const { count } = await prisma.jobStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobStatusHistoryDeleteManyArgs>(
      args?: SelectSubset<T, JobStatusHistoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobStatusHistoryUpdateManyArgs>(
      args: SelectSubset<T, JobStatusHistoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one JobStatusHistory.
     * @param {JobStatusHistoryUpsertArgs} args - Arguments to update or create a JobStatusHistory.
     * @example
     * // Update or create a JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.upsert({
     *   create: {
     *     // ... data to create a JobStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends JobStatusHistoryUpsertArgs>(
      args: SelectSubset<T, JobStatusHistoryUpsertArgs<ExtArgs>>,
    ): Prisma__JobStatusHistoryClient<
      $Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of JobStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryCountArgs} args - Arguments to filter JobStatusHistories to count.
     * @example
     * // Count the number of JobStatusHistories
     * const count = await prisma.jobStatusHistory.count({
     *   where: {
     *     // ... the filter for the JobStatusHistories we want to count
     *   }
     * })
     **/
    count<T extends JobStatusHistoryCountArgs>(
      args?: Subset<T, JobStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobStatusHistoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a JobStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobStatusHistoryAggregateArgs>(
      args: Subset<T, JobStatusHistoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobStatusHistoryAggregateType<T>>;

    /**
     * Group by JobStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends JobStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: JobStatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobStatusHistoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetJobStatusHistoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobStatusHistory model
     */
    readonly fields: JobStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobStatusHistoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;
    changedByUser<T extends JobStatusHistory$changedByUserArgs<ExtArgs> = {}>(
      args?: Subset<T, JobStatusHistory$changedByUserArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the JobStatusHistory model
   */
  interface JobStatusHistoryFieldRefs {
    readonly id: FieldRef<'JobStatusHistory', 'String'>;
    readonly jobId: FieldRef<'JobStatusHistory', 'String'>;
    readonly oldStatus: FieldRef<'JobStatusHistory', 'String'>;
    readonly newStatus: FieldRef<'JobStatusHistory', 'String'>;
    readonly changedBy: FieldRef<'JobStatusHistory', 'String'>;
    readonly note: FieldRef<'JobStatusHistory', 'String'>;
    readonly createdAt: FieldRef<'JobStatusHistory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * JobStatusHistory findUnique
   */
  export type JobStatusHistoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where: JobStatusHistoryWhereUniqueInput;
  };

  /**
   * JobStatusHistory findUniqueOrThrow
   */
  export type JobStatusHistoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where: JobStatusHistoryWhereUniqueInput;
  };

  /**
   * JobStatusHistory findFirst
   */
  export type JobStatusHistoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where?: JobStatusHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobStatusHistories.
     */
    cursor?: JobStatusHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobStatusHistories.
     */
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[];
  };

  /**
   * JobStatusHistory findFirstOrThrow
   */
  export type JobStatusHistoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where?: JobStatusHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobStatusHistories.
     */
    cursor?: JobStatusHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobStatusHistories.
     */
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[];
  };

  /**
   * JobStatusHistory findMany
   */
  export type JobStatusHistoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which JobStatusHistories to fetch.
     */
    where?: JobStatusHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobStatusHistories.
     */
    cursor?: JobStatusHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number;
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[];
  };

  /**
   * JobStatusHistory create
   */
  export type JobStatusHistoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a JobStatusHistory.
     */
    data: XOR<JobStatusHistoryCreateInput, JobStatusHistoryUncheckedCreateInput>;
  };

  /**
   * JobStatusHistory createMany
   */
  export type JobStatusHistoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many JobStatusHistories.
     */
    data: JobStatusHistoryCreateManyInput | JobStatusHistoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * JobStatusHistory createManyAndReturn
   */
  export type JobStatusHistoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many JobStatusHistories.
     */
    data: JobStatusHistoryCreateManyInput | JobStatusHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobStatusHistory update
   */
  export type JobStatusHistoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a JobStatusHistory.
     */
    data: XOR<JobStatusHistoryUpdateInput, JobStatusHistoryUncheckedUpdateInput>;
    /**
     * Choose, which JobStatusHistory to update.
     */
    where: JobStatusHistoryWhereUniqueInput;
  };

  /**
   * JobStatusHistory updateMany
   */
  export type JobStatusHistoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update JobStatusHistories.
     */
    data: XOR<JobStatusHistoryUpdateManyMutationInput, JobStatusHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which JobStatusHistories to update
     */
    where?: JobStatusHistoryWhereInput;
  };

  /**
   * JobStatusHistory upsert
   */
  export type JobStatusHistoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the JobStatusHistory to update in case it exists.
     */
    where: JobStatusHistoryWhereUniqueInput;
    /**
     * In case the JobStatusHistory found by the `where` argument doesn't exist, create a new JobStatusHistory with this data.
     */
    create: XOR<JobStatusHistoryCreateInput, JobStatusHistoryUncheckedCreateInput>;
    /**
     * In case the JobStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobStatusHistoryUpdateInput, JobStatusHistoryUncheckedUpdateInput>;
  };

  /**
   * JobStatusHistory delete
   */
  export type JobStatusHistoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
    /**
     * Filter which JobStatusHistory to delete.
     */
    where: JobStatusHistoryWhereUniqueInput;
  };

  /**
   * JobStatusHistory deleteMany
   */
  export type JobStatusHistoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobStatusHistories to delete
     */
    where?: JobStatusHistoryWhereInput;
  };

  /**
   * JobStatusHistory.changedByUser
   */
  export type JobStatusHistory$changedByUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * JobStatusHistory without action
   */
  export type JobStatusHistoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    passwordHash: 'passwordHash';
    fullName: 'fullName';
    phone: 'phone';
    role: 'role';
    avatarUrl: 'avatarUrl';
    isActive: 'isActive';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProviderProfileScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    businessName: 'businessName';
    bio: 'bio';
    yearsExperience: 'yearsExperience';
    serviceAreaText: 'serviceAreaText';
    suburb: 'suburb';
    state: 'state';
    isVerified: 'isVerified';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ProviderProfileScalarFieldEnum =
    (typeof ProviderProfileScalarFieldEnum)[keyof typeof ProviderProfileScalarFieldEnum];

  export const ServiceCategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    slug: 'slug';
    isActive: 'isActive';
    createdAt: 'createdAt';
  };

  export type ServiceCategoryScalarFieldEnum =
    (typeof ServiceCategoryScalarFieldEnum)[keyof typeof ServiceCategoryScalarFieldEnum];

  export const ProviderServiceScalarFieldEnum: {
    id: 'id';
    providerId: 'providerId';
    categoryId: 'categoryId';
    createdAt: 'createdAt';
  };

  export type ProviderServiceScalarFieldEnum =
    (typeof ProviderServiceScalarFieldEnum)[keyof typeof ProviderServiceScalarFieldEnum];

  export const JobScalarFieldEnum: {
    id: 'id';
    customerId: 'customerId';
    categoryId: 'categoryId';
    title: 'title';
    description: 'description';
    locationText: 'locationText';
    suburb: 'suburb';
    state: 'state';
    latitude: 'latitude';
    longitude: 'longitude';
    preferredDate: 'preferredDate';
    status: 'status';
    assignedProviderId: 'assignedProviderId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const JobBidScalarFieldEnum: {
    id: 'id';
    jobId: 'jobId';
    providerId: 'providerId';
    bidAmount: 'bidAmount';
    message: 'message';
    estimatedArrivalHours: 'estimatedArrivalHours';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type JobBidScalarFieldEnum =
    (typeof JobBidScalarFieldEnum)[keyof typeof JobBidScalarFieldEnum];

  export const JobAssignmentScalarFieldEnum: {
    id: 'id';
    jobId: 'jobId';
    customerId: 'customerId';
    providerId: 'providerId';
    acceptedBidId: 'acceptedBidId';
    assignedAt: 'assignedAt';
    completedAt: 'completedAt';
  };

  export type JobAssignmentScalarFieldEnum =
    (typeof JobAssignmentScalarFieldEnum)[keyof typeof JobAssignmentScalarFieldEnum];

  export const ConversationScalarFieldEnum: {
    id: 'id';
    jobId: 'jobId';
    customerId: 'customerId';
    providerId: 'providerId';
    createdAt: 'createdAt';
  };

  export type ConversationScalarFieldEnum =
    (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    conversationId: 'conversationId';
    senderId: 'senderId';
    messageText: 'messageText';
    isRead: 'isRead';
    createdAt: 'createdAt';
  };

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const JobStatusHistoryScalarFieldEnum: {
    id: 'id';
    jobId: 'jobId';
    oldStatus: 'oldStatus';
    newStatus: 'newStatus';
    changedBy: 'changedBy';
    note: 'note';
    createdAt: 'createdAt';
  };

  export type JobStatusHistoryScalarFieldEnum =
    (typeof JobStatusHistoryScalarFieldEnum)[keyof typeof JobStatusHistoryScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: UuidFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    passwordHash?: StringFilter<'User'> | string;
    fullName?: StringFilter<'User'> | string;
    phone?: StringNullableFilter<'User'> | string | null;
    role?: StringFilter<'User'> | string;
    avatarUrl?: StringNullableFilter<'User'> | string | null;
    isActive?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    providerProfile?: XOR<ProviderProfileNullableRelationFilter, ProviderProfileWhereInput> | null;
    customerJobs?: JobListRelationFilter;
    assignedJobs?: JobListRelationFilter;
    providerServices?: ProviderServiceListRelationFilter;
    bids?: JobBidListRelationFilter;
    jobAssignmentsAsCustomer?: JobAssignmentListRelationFilter;
    jobAssignmentsAsProvider?: JobAssignmentListRelationFilter;
    customerConversations?: ConversationListRelationFilter;
    providerConversations?: ConversationListRelationFilter;
    sentMessages?: MessageListRelationFilter;
    jobStatusHistories?: JobStatusHistoryListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    fullName?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    providerProfile?: ProviderProfileOrderByWithRelationInput;
    customerJobs?: JobOrderByRelationAggregateInput;
    assignedJobs?: JobOrderByRelationAggregateInput;
    providerServices?: ProviderServiceOrderByRelationAggregateInput;
    bids?: JobBidOrderByRelationAggregateInput;
    jobAssignmentsAsCustomer?: JobAssignmentOrderByRelationAggregateInput;
    jobAssignmentsAsProvider?: JobAssignmentOrderByRelationAggregateInput;
    customerConversations?: ConversationOrderByRelationAggregateInput;
    providerConversations?: ConversationOrderByRelationAggregateInput;
    sentMessages?: MessageOrderByRelationAggregateInput;
    jobStatusHistories?: JobStatusHistoryOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      passwordHash?: StringFilter<'User'> | string;
      fullName?: StringFilter<'User'> | string;
      phone?: StringNullableFilter<'User'> | string | null;
      role?: StringFilter<'User'> | string;
      avatarUrl?: StringNullableFilter<'User'> | string | null;
      isActive?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      providerProfile?: XOR<
        ProviderProfileNullableRelationFilter,
        ProviderProfileWhereInput
      > | null;
      customerJobs?: JobListRelationFilter;
      assignedJobs?: JobListRelationFilter;
      providerServices?: ProviderServiceListRelationFilter;
      bids?: JobBidListRelationFilter;
      jobAssignmentsAsCustomer?: JobAssignmentListRelationFilter;
      jobAssignmentsAsProvider?: JobAssignmentListRelationFilter;
      customerConversations?: ConversationListRelationFilter;
      providerConversations?: ConversationListRelationFilter;
      sentMessages?: MessageListRelationFilter;
      jobStatusHistories?: JobStatusHistoryListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    fullName?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    passwordHash?: StringWithAggregatesFilter<'User'> | string;
    fullName?: StringWithAggregatesFilter<'User'> | string;
    phone?: StringNullableWithAggregatesFilter<'User'> | string | null;
    role?: StringWithAggregatesFilter<'User'> | string;
    avatarUrl?: StringNullableWithAggregatesFilter<'User'> | string | null;
    isActive?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ProviderProfileWhereInput = {
    AND?: ProviderProfileWhereInput | ProviderProfileWhereInput[];
    OR?: ProviderProfileWhereInput[];
    NOT?: ProviderProfileWhereInput | ProviderProfileWhereInput[];
    id?: UuidFilter<'ProviderProfile'> | string;
    userId?: UuidFilter<'ProviderProfile'> | string;
    businessName?: StringNullableFilter<'ProviderProfile'> | string | null;
    bio?: StringNullableFilter<'ProviderProfile'> | string | null;
    yearsExperience?: IntNullableFilter<'ProviderProfile'> | number | null;
    serviceAreaText?: StringNullableFilter<'ProviderProfile'> | string | null;
    suburb?: StringNullableFilter<'ProviderProfile'> | string | null;
    state?: StringNullableFilter<'ProviderProfile'> | string | null;
    isVerified?: BoolFilter<'ProviderProfile'> | boolean;
    createdAt?: DateTimeFilter<'ProviderProfile'> | Date | string;
    updatedAt?: DateTimeFilter<'ProviderProfile'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ProviderProfileOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    businessName?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    yearsExperience?: SortOrderInput | SortOrder;
    serviceAreaText?: SortOrderInput | SortOrder;
    suburb?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ProviderProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: ProviderProfileWhereInput | ProviderProfileWhereInput[];
      OR?: ProviderProfileWhereInput[];
      NOT?: ProviderProfileWhereInput | ProviderProfileWhereInput[];
      businessName?: StringNullableFilter<'ProviderProfile'> | string | null;
      bio?: StringNullableFilter<'ProviderProfile'> | string | null;
      yearsExperience?: IntNullableFilter<'ProviderProfile'> | number | null;
      serviceAreaText?: StringNullableFilter<'ProviderProfile'> | string | null;
      suburb?: StringNullableFilter<'ProviderProfile'> | string | null;
      state?: StringNullableFilter<'ProviderProfile'> | string | null;
      isVerified?: BoolFilter<'ProviderProfile'> | boolean;
      createdAt?: DateTimeFilter<'ProviderProfile'> | Date | string;
      updatedAt?: DateTimeFilter<'ProviderProfile'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type ProviderProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    businessName?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    yearsExperience?: SortOrderInput | SortOrder;
    serviceAreaText?: SortOrderInput | SortOrder;
    suburb?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProviderProfileCountOrderByAggregateInput;
    _avg?: ProviderProfileAvgOrderByAggregateInput;
    _max?: ProviderProfileMaxOrderByAggregateInput;
    _min?: ProviderProfileMinOrderByAggregateInput;
    _sum?: ProviderProfileSumOrderByAggregateInput;
  };

  export type ProviderProfileScalarWhereWithAggregatesInput = {
    AND?:
      | ProviderProfileScalarWhereWithAggregatesInput
      | ProviderProfileScalarWhereWithAggregatesInput[];
    OR?: ProviderProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | ProviderProfileScalarWhereWithAggregatesInput
      | ProviderProfileScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ProviderProfile'> | string;
    userId?: UuidWithAggregatesFilter<'ProviderProfile'> | string;
    businessName?: StringNullableWithAggregatesFilter<'ProviderProfile'> | string | null;
    bio?: StringNullableWithAggregatesFilter<'ProviderProfile'> | string | null;
    yearsExperience?: IntNullableWithAggregatesFilter<'ProviderProfile'> | number | null;
    serviceAreaText?: StringNullableWithAggregatesFilter<'ProviderProfile'> | string | null;
    suburb?: StringNullableWithAggregatesFilter<'ProviderProfile'> | string | null;
    state?: StringNullableWithAggregatesFilter<'ProviderProfile'> | string | null;
    isVerified?: BoolWithAggregatesFilter<'ProviderProfile'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'ProviderProfile'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'ProviderProfile'> | Date | string;
  };

  export type ServiceCategoryWhereInput = {
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[];
    OR?: ServiceCategoryWhereInput[];
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[];
    id?: UuidFilter<'ServiceCategory'> | string;
    name?: StringFilter<'ServiceCategory'> | string;
    slug?: StringFilter<'ServiceCategory'> | string;
    isActive?: BoolFilter<'ServiceCategory'> | boolean;
    createdAt?: DateTimeFilter<'ServiceCategory'> | Date | string;
    providerServices?: ProviderServiceListRelationFilter;
    jobs?: JobListRelationFilter;
  };

  export type ServiceCategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    providerServices?: ProviderServiceOrderByRelationAggregateInput;
    jobs?: JobOrderByRelationAggregateInput;
  };

  export type ServiceCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      slug?: string;
      AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[];
      OR?: ServiceCategoryWhereInput[];
      NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[];
      isActive?: BoolFilter<'ServiceCategory'> | boolean;
      createdAt?: DateTimeFilter<'ServiceCategory'> | Date | string;
      providerServices?: ProviderServiceListRelationFilter;
      jobs?: JobListRelationFilter;
    },
    'id' | 'name' | 'slug'
  >;

  export type ServiceCategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    _count?: ServiceCategoryCountOrderByAggregateInput;
    _max?: ServiceCategoryMaxOrderByAggregateInput;
    _min?: ServiceCategoryMinOrderByAggregateInput;
  };

  export type ServiceCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceCategoryScalarWhereWithAggregatesInput
      | ServiceCategoryScalarWhereWithAggregatesInput[];
    OR?: ServiceCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceCategoryScalarWhereWithAggregatesInput
      | ServiceCategoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ServiceCategory'> | string;
    name?: StringWithAggregatesFilter<'ServiceCategory'> | string;
    slug?: StringWithAggregatesFilter<'ServiceCategory'> | string;
    isActive?: BoolWithAggregatesFilter<'ServiceCategory'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'ServiceCategory'> | Date | string;
  };

  export type ProviderServiceWhereInput = {
    AND?: ProviderServiceWhereInput | ProviderServiceWhereInput[];
    OR?: ProviderServiceWhereInput[];
    NOT?: ProviderServiceWhereInput | ProviderServiceWhereInput[];
    id?: UuidFilter<'ProviderService'> | string;
    providerId?: UuidFilter<'ProviderService'> | string;
    categoryId?: UuidFilter<'ProviderService'> | string;
    createdAt?: DateTimeFilter<'ProviderService'> | Date | string;
    provider?: XOR<UserRelationFilter, UserWhereInput>;
    category?: XOR<ServiceCategoryRelationFilter, ServiceCategoryWhereInput>;
  };

  export type ProviderServiceOrderByWithRelationInput = {
    id?: SortOrder;
    providerId?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    provider?: UserOrderByWithRelationInput;
    category?: ServiceCategoryOrderByWithRelationInput;
  };

  export type ProviderServiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      providerId_categoryId?: ProviderServiceProviderIdCategoryIdCompoundUniqueInput;
      AND?: ProviderServiceWhereInput | ProviderServiceWhereInput[];
      OR?: ProviderServiceWhereInput[];
      NOT?: ProviderServiceWhereInput | ProviderServiceWhereInput[];
      providerId?: UuidFilter<'ProviderService'> | string;
      categoryId?: UuidFilter<'ProviderService'> | string;
      createdAt?: DateTimeFilter<'ProviderService'> | Date | string;
      provider?: XOR<UserRelationFilter, UserWhereInput>;
      category?: XOR<ServiceCategoryRelationFilter, ServiceCategoryWhereInput>;
    },
    'id' | 'providerId_categoryId'
  >;

  export type ProviderServiceOrderByWithAggregationInput = {
    id?: SortOrder;
    providerId?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    _count?: ProviderServiceCountOrderByAggregateInput;
    _max?: ProviderServiceMaxOrderByAggregateInput;
    _min?: ProviderServiceMinOrderByAggregateInput;
  };

  export type ProviderServiceScalarWhereWithAggregatesInput = {
    AND?:
      | ProviderServiceScalarWhereWithAggregatesInput
      | ProviderServiceScalarWhereWithAggregatesInput[];
    OR?: ProviderServiceScalarWhereWithAggregatesInput[];
    NOT?:
      | ProviderServiceScalarWhereWithAggregatesInput
      | ProviderServiceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ProviderService'> | string;
    providerId?: UuidWithAggregatesFilter<'ProviderService'> | string;
    categoryId?: UuidWithAggregatesFilter<'ProviderService'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'ProviderService'> | Date | string;
  };

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[];
    OR?: JobWhereInput[];
    NOT?: JobWhereInput | JobWhereInput[];
    id?: UuidFilter<'Job'> | string;
    customerId?: UuidFilter<'Job'> | string;
    categoryId?: UuidFilter<'Job'> | string;
    title?: StringFilter<'Job'> | string;
    description?: StringFilter<'Job'> | string;
    locationText?: StringFilter<'Job'> | string;
    suburb?: StringNullableFilter<'Job'> | string | null;
    state?: StringNullableFilter<'Job'> | string | null;
    latitude?: FloatNullableFilter<'Job'> | number | null;
    longitude?: FloatNullableFilter<'Job'> | number | null;
    preferredDate?: DateTimeNullableFilter<'Job'> | Date | string | null;
    status?: StringFilter<'Job'> | string;
    assignedProviderId?: UuidNullableFilter<'Job'> | string | null;
    createdAt?: DateTimeFilter<'Job'> | Date | string;
    updatedAt?: DateTimeFilter<'Job'> | Date | string;
    customer?: XOR<UserRelationFilter, UserWhereInput>;
    assignedProvider?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
    category?: XOR<ServiceCategoryRelationFilter, ServiceCategoryWhereInput>;
    bids?: JobBidListRelationFilter;
    assignment?: XOR<JobAssignmentNullableRelationFilter, JobAssignmentWhereInput> | null;
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null;
    statusHistory?: JobStatusHistoryListRelationFilter;
  };

  export type JobOrderByWithRelationInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    categoryId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    locationText?: SortOrder;
    suburb?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    latitude?: SortOrderInput | SortOrder;
    longitude?: SortOrderInput | SortOrder;
    preferredDate?: SortOrderInput | SortOrder;
    status?: SortOrder;
    assignedProviderId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    customer?: UserOrderByWithRelationInput;
    assignedProvider?: UserOrderByWithRelationInput;
    category?: ServiceCategoryOrderByWithRelationInput;
    bids?: JobBidOrderByRelationAggregateInput;
    assignment?: JobAssignmentOrderByWithRelationInput;
    conversation?: ConversationOrderByWithRelationInput;
    statusHistory?: JobStatusHistoryOrderByRelationAggregateInput;
  };

  export type JobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: JobWhereInput | JobWhereInput[];
      OR?: JobWhereInput[];
      NOT?: JobWhereInput | JobWhereInput[];
      customerId?: UuidFilter<'Job'> | string;
      categoryId?: UuidFilter<'Job'> | string;
      title?: StringFilter<'Job'> | string;
      description?: StringFilter<'Job'> | string;
      locationText?: StringFilter<'Job'> | string;
      suburb?: StringNullableFilter<'Job'> | string | null;
      state?: StringNullableFilter<'Job'> | string | null;
      latitude?: FloatNullableFilter<'Job'> | number | null;
      longitude?: FloatNullableFilter<'Job'> | number | null;
      preferredDate?: DateTimeNullableFilter<'Job'> | Date | string | null;
      status?: StringFilter<'Job'> | string;
      assignedProviderId?: UuidNullableFilter<'Job'> | string | null;
      createdAt?: DateTimeFilter<'Job'> | Date | string;
      updatedAt?: DateTimeFilter<'Job'> | Date | string;
      customer?: XOR<UserRelationFilter, UserWhereInput>;
      assignedProvider?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
      category?: XOR<ServiceCategoryRelationFilter, ServiceCategoryWhereInput>;
      bids?: JobBidListRelationFilter;
      assignment?: XOR<JobAssignmentNullableRelationFilter, JobAssignmentWhereInput> | null;
      conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null;
      statusHistory?: JobStatusHistoryListRelationFilter;
    },
    'id'
  >;

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    categoryId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    locationText?: SortOrder;
    suburb?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    latitude?: SortOrderInput | SortOrder;
    longitude?: SortOrderInput | SortOrder;
    preferredDate?: SortOrderInput | SortOrder;
    status?: SortOrder;
    assignedProviderId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: JobCountOrderByAggregateInput;
    _avg?: JobAvgOrderByAggregateInput;
    _max?: JobMaxOrderByAggregateInput;
    _min?: JobMinOrderByAggregateInput;
    _sum?: JobSumOrderByAggregateInput;
  };

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[];
    OR?: JobScalarWhereWithAggregatesInput[];
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Job'> | string;
    customerId?: UuidWithAggregatesFilter<'Job'> | string;
    categoryId?: UuidWithAggregatesFilter<'Job'> | string;
    title?: StringWithAggregatesFilter<'Job'> | string;
    description?: StringWithAggregatesFilter<'Job'> | string;
    locationText?: StringWithAggregatesFilter<'Job'> | string;
    suburb?: StringNullableWithAggregatesFilter<'Job'> | string | null;
    state?: StringNullableWithAggregatesFilter<'Job'> | string | null;
    latitude?: FloatNullableWithAggregatesFilter<'Job'> | number | null;
    longitude?: FloatNullableWithAggregatesFilter<'Job'> | number | null;
    preferredDate?: DateTimeNullableWithAggregatesFilter<'Job'> | Date | string | null;
    status?: StringWithAggregatesFilter<'Job'> | string;
    assignedProviderId?: UuidNullableWithAggregatesFilter<'Job'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Job'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Job'> | Date | string;
  };

  export type JobBidWhereInput = {
    AND?: JobBidWhereInput | JobBidWhereInput[];
    OR?: JobBidWhereInput[];
    NOT?: JobBidWhereInput | JobBidWhereInput[];
    id?: UuidFilter<'JobBid'> | string;
    jobId?: UuidFilter<'JobBid'> | string;
    providerId?: UuidFilter<'JobBid'> | string;
    bidAmount?: FloatNullableFilter<'JobBid'> | number | null;
    message?: StringNullableFilter<'JobBid'> | string | null;
    estimatedArrivalHours?: IntNullableFilter<'JobBid'> | number | null;
    status?: StringFilter<'JobBid'> | string;
    createdAt?: DateTimeFilter<'JobBid'> | Date | string;
    updatedAt?: DateTimeFilter<'JobBid'> | Date | string;
    job?: XOR<JobRelationFilter, JobWhereInput>;
    provider?: XOR<UserRelationFilter, UserWhereInput>;
    acceptedAssignment?: XOR<JobAssignmentNullableRelationFilter, JobAssignmentWhereInput> | null;
  };

  export type JobBidOrderByWithRelationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    providerId?: SortOrder;
    bidAmount?: SortOrderInput | SortOrder;
    message?: SortOrderInput | SortOrder;
    estimatedArrivalHours?: SortOrderInput | SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    job?: JobOrderByWithRelationInput;
    provider?: UserOrderByWithRelationInput;
    acceptedAssignment?: JobAssignmentOrderByWithRelationInput;
  };

  export type JobBidWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      jobId_providerId?: JobBidJobIdProviderIdCompoundUniqueInput;
      AND?: JobBidWhereInput | JobBidWhereInput[];
      OR?: JobBidWhereInput[];
      NOT?: JobBidWhereInput | JobBidWhereInput[];
      jobId?: UuidFilter<'JobBid'> | string;
      providerId?: UuidFilter<'JobBid'> | string;
      bidAmount?: FloatNullableFilter<'JobBid'> | number | null;
      message?: StringNullableFilter<'JobBid'> | string | null;
      estimatedArrivalHours?: IntNullableFilter<'JobBid'> | number | null;
      status?: StringFilter<'JobBid'> | string;
      createdAt?: DateTimeFilter<'JobBid'> | Date | string;
      updatedAt?: DateTimeFilter<'JobBid'> | Date | string;
      job?: XOR<JobRelationFilter, JobWhereInput>;
      provider?: XOR<UserRelationFilter, UserWhereInput>;
      acceptedAssignment?: XOR<JobAssignmentNullableRelationFilter, JobAssignmentWhereInput> | null;
    },
    'id' | 'jobId_providerId'
  >;

  export type JobBidOrderByWithAggregationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    providerId?: SortOrder;
    bidAmount?: SortOrderInput | SortOrder;
    message?: SortOrderInput | SortOrder;
    estimatedArrivalHours?: SortOrderInput | SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: JobBidCountOrderByAggregateInput;
    _avg?: JobBidAvgOrderByAggregateInput;
    _max?: JobBidMaxOrderByAggregateInput;
    _min?: JobBidMinOrderByAggregateInput;
    _sum?: JobBidSumOrderByAggregateInput;
  };

  export type JobBidScalarWhereWithAggregatesInput = {
    AND?: JobBidScalarWhereWithAggregatesInput | JobBidScalarWhereWithAggregatesInput[];
    OR?: JobBidScalarWhereWithAggregatesInput[];
    NOT?: JobBidScalarWhereWithAggregatesInput | JobBidScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'JobBid'> | string;
    jobId?: UuidWithAggregatesFilter<'JobBid'> | string;
    providerId?: UuidWithAggregatesFilter<'JobBid'> | string;
    bidAmount?: FloatNullableWithAggregatesFilter<'JobBid'> | number | null;
    message?: StringNullableWithAggregatesFilter<'JobBid'> | string | null;
    estimatedArrivalHours?: IntNullableWithAggregatesFilter<'JobBid'> | number | null;
    status?: StringWithAggregatesFilter<'JobBid'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'JobBid'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'JobBid'> | Date | string;
  };

  export type JobAssignmentWhereInput = {
    AND?: JobAssignmentWhereInput | JobAssignmentWhereInput[];
    OR?: JobAssignmentWhereInput[];
    NOT?: JobAssignmentWhereInput | JobAssignmentWhereInput[];
    id?: UuidFilter<'JobAssignment'> | string;
    jobId?: UuidFilter<'JobAssignment'> | string;
    customerId?: UuidFilter<'JobAssignment'> | string;
    providerId?: UuidFilter<'JobAssignment'> | string;
    acceptedBidId?: UuidNullableFilter<'JobAssignment'> | string | null;
    assignedAt?: DateTimeFilter<'JobAssignment'> | Date | string;
    completedAt?: DateTimeNullableFilter<'JobAssignment'> | Date | string | null;
    job?: XOR<JobRelationFilter, JobWhereInput>;
    customer?: XOR<UserRelationFilter, UserWhereInput>;
    provider?: XOR<UserRelationFilter, UserWhereInput>;
    acceptedBid?: XOR<JobBidNullableRelationFilter, JobBidWhereInput> | null;
  };

  export type JobAssignmentOrderByWithRelationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    acceptedBidId?: SortOrderInput | SortOrder;
    assignedAt?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    job?: JobOrderByWithRelationInput;
    customer?: UserOrderByWithRelationInput;
    provider?: UserOrderByWithRelationInput;
    acceptedBid?: JobBidOrderByWithRelationInput;
  };

  export type JobAssignmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      jobId?: string;
      acceptedBidId?: string;
      AND?: JobAssignmentWhereInput | JobAssignmentWhereInput[];
      OR?: JobAssignmentWhereInput[];
      NOT?: JobAssignmentWhereInput | JobAssignmentWhereInput[];
      customerId?: UuidFilter<'JobAssignment'> | string;
      providerId?: UuidFilter<'JobAssignment'> | string;
      assignedAt?: DateTimeFilter<'JobAssignment'> | Date | string;
      completedAt?: DateTimeNullableFilter<'JobAssignment'> | Date | string | null;
      job?: XOR<JobRelationFilter, JobWhereInput>;
      customer?: XOR<UserRelationFilter, UserWhereInput>;
      provider?: XOR<UserRelationFilter, UserWhereInput>;
      acceptedBid?: XOR<JobBidNullableRelationFilter, JobBidWhereInput> | null;
    },
    'id' | 'jobId' | 'acceptedBidId'
  >;

  export type JobAssignmentOrderByWithAggregationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    acceptedBidId?: SortOrderInput | SortOrder;
    assignedAt?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    _count?: JobAssignmentCountOrderByAggregateInput;
    _max?: JobAssignmentMaxOrderByAggregateInput;
    _min?: JobAssignmentMinOrderByAggregateInput;
  };

  export type JobAssignmentScalarWhereWithAggregatesInput = {
    AND?:
      | JobAssignmentScalarWhereWithAggregatesInput
      | JobAssignmentScalarWhereWithAggregatesInput[];
    OR?: JobAssignmentScalarWhereWithAggregatesInput[];
    NOT?:
      | JobAssignmentScalarWhereWithAggregatesInput
      | JobAssignmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'JobAssignment'> | string;
    jobId?: UuidWithAggregatesFilter<'JobAssignment'> | string;
    customerId?: UuidWithAggregatesFilter<'JobAssignment'> | string;
    providerId?: UuidWithAggregatesFilter<'JobAssignment'> | string;
    acceptedBidId?: UuidNullableWithAggregatesFilter<'JobAssignment'> | string | null;
    assignedAt?: DateTimeWithAggregatesFilter<'JobAssignment'> | Date | string;
    completedAt?: DateTimeNullableWithAggregatesFilter<'JobAssignment'> | Date | string | null;
  };

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[];
    OR?: ConversationWhereInput[];
    NOT?: ConversationWhereInput | ConversationWhereInput[];
    id?: UuidFilter<'Conversation'> | string;
    jobId?: UuidFilter<'Conversation'> | string;
    customerId?: UuidFilter<'Conversation'> | string;
    providerId?: UuidFilter<'Conversation'> | string;
    createdAt?: DateTimeFilter<'Conversation'> | Date | string;
    job?: XOR<JobRelationFilter, JobWhereInput>;
    customer?: XOR<UserRelationFilter, UserWhereInput>;
    provider?: XOR<UserRelationFilter, UserWhereInput>;
    messages?: MessageListRelationFilter;
  };

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    job?: JobOrderByWithRelationInput;
    customer?: UserOrderByWithRelationInput;
    provider?: UserOrderByWithRelationInput;
    messages?: MessageOrderByRelationAggregateInput;
  };

  export type ConversationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      jobId?: string;
      AND?: ConversationWhereInput | ConversationWhereInput[];
      OR?: ConversationWhereInput[];
      NOT?: ConversationWhereInput | ConversationWhereInput[];
      customerId?: UuidFilter<'Conversation'> | string;
      providerId?: UuidFilter<'Conversation'> | string;
      createdAt?: DateTimeFilter<'Conversation'> | Date | string;
      job?: XOR<JobRelationFilter, JobWhereInput>;
      customer?: XOR<UserRelationFilter, UserWhereInput>;
      provider?: XOR<UserRelationFilter, UserWhereInput>;
      messages?: MessageListRelationFilter;
    },
    'id' | 'jobId'
  >;

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    _count?: ConversationCountOrderByAggregateInput;
    _max?: ConversationMaxOrderByAggregateInput;
    _min?: ConversationMinOrderByAggregateInput;
  };

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[];
    OR?: ConversationScalarWhereWithAggregatesInput[];
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Conversation'> | string;
    jobId?: UuidWithAggregatesFilter<'Conversation'> | string;
    customerId?: UuidWithAggregatesFilter<'Conversation'> | string;
    providerId?: UuidWithAggregatesFilter<'Conversation'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Conversation'> | Date | string;
  };

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput | MessageWhereInput[];
    id?: UuidFilter<'Message'> | string;
    conversationId?: UuidFilter<'Message'> | string;
    senderId?: UuidFilter<'Message'> | string;
    messageText?: StringFilter<'Message'> | string;
    isRead?: BoolFilter<'Message'> | boolean;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>;
    sender?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder;
    conversationId?: SortOrder;
    senderId?: SortOrder;
    messageText?: SortOrder;
    isRead?: SortOrder;
    createdAt?: SortOrder;
    conversation?: ConversationOrderByWithRelationInput;
    sender?: UserOrderByWithRelationInput;
  };

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MessageWhereInput | MessageWhereInput[];
      OR?: MessageWhereInput[];
      NOT?: MessageWhereInput | MessageWhereInput[];
      conversationId?: UuidFilter<'Message'> | string;
      senderId?: UuidFilter<'Message'> | string;
      messageText?: StringFilter<'Message'> | string;
      isRead?: BoolFilter<'Message'> | boolean;
      createdAt?: DateTimeFilter<'Message'> | Date | string;
      conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>;
      sender?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder;
    conversationId?: SortOrder;
    senderId?: SortOrder;
    messageText?: SortOrder;
    isRead?: SortOrder;
    createdAt?: SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
  };

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[];
    OR?: MessageScalarWhereWithAggregatesInput[];
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Message'> | string;
    conversationId?: UuidWithAggregatesFilter<'Message'> | string;
    senderId?: UuidWithAggregatesFilter<'Message'> | string;
    messageText?: StringWithAggregatesFilter<'Message'> | string;
    isRead?: BoolWithAggregatesFilter<'Message'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
  };

  export type JobStatusHistoryWhereInput = {
    AND?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[];
    OR?: JobStatusHistoryWhereInput[];
    NOT?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[];
    id?: UuidFilter<'JobStatusHistory'> | string;
    jobId?: UuidFilter<'JobStatusHistory'> | string;
    oldStatus?: StringNullableFilter<'JobStatusHistory'> | string | null;
    newStatus?: StringFilter<'JobStatusHistory'> | string;
    changedBy?: UuidNullableFilter<'JobStatusHistory'> | string | null;
    note?: StringNullableFilter<'JobStatusHistory'> | string | null;
    createdAt?: DateTimeFilter<'JobStatusHistory'> | Date | string;
    job?: XOR<JobRelationFilter, JobWhereInput>;
    changedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
  };

  export type JobStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    oldStatus?: SortOrderInput | SortOrder;
    newStatus?: SortOrder;
    changedBy?: SortOrderInput | SortOrder;
    note?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    job?: JobOrderByWithRelationInput;
    changedByUser?: UserOrderByWithRelationInput;
  };

  export type JobStatusHistoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[];
      OR?: JobStatusHistoryWhereInput[];
      NOT?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[];
      jobId?: UuidFilter<'JobStatusHistory'> | string;
      oldStatus?: StringNullableFilter<'JobStatusHistory'> | string | null;
      newStatus?: StringFilter<'JobStatusHistory'> | string;
      changedBy?: UuidNullableFilter<'JobStatusHistory'> | string | null;
      note?: StringNullableFilter<'JobStatusHistory'> | string | null;
      createdAt?: DateTimeFilter<'JobStatusHistory'> | Date | string;
      job?: XOR<JobRelationFilter, JobWhereInput>;
      changedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
    },
    'id'
  >;

  export type JobStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    oldStatus?: SortOrderInput | SortOrder;
    newStatus?: SortOrder;
    changedBy?: SortOrderInput | SortOrder;
    note?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: JobStatusHistoryCountOrderByAggregateInput;
    _max?: JobStatusHistoryMaxOrderByAggregateInput;
    _min?: JobStatusHistoryMinOrderByAggregateInput;
  };

  export type JobStatusHistoryScalarWhereWithAggregatesInput = {
    AND?:
      | JobStatusHistoryScalarWhereWithAggregatesInput
      | JobStatusHistoryScalarWhereWithAggregatesInput[];
    OR?: JobStatusHistoryScalarWhereWithAggregatesInput[];
    NOT?:
      | JobStatusHistoryScalarWhereWithAggregatesInput
      | JobStatusHistoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'JobStatusHistory'> | string;
    jobId?: UuidWithAggregatesFilter<'JobStatusHistory'> | string;
    oldStatus?: StringNullableWithAggregatesFilter<'JobStatusHistory'> | string | null;
    newStatus?: StringWithAggregatesFilter<'JobStatusHistory'> | string;
    changedBy?: UuidNullableWithAggregatesFilter<'JobStatusHistory'> | string | null;
    note?: StringNullableWithAggregatesFilter<'JobStatusHistory'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'JobStatusHistory'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderProfileCreateInput = {
    id?: string;
    businessName?: string | null;
    bio?: string | null;
    yearsExperience?: number | null;
    serviceAreaText?: string | null;
    suburb?: string | null;
    state?: string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProviderProfileInput;
  };

  export type ProviderProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    businessName?: string | null;
    bio?: string | null;
    yearsExperience?: number | null;
    serviceAreaText?: string | null;
    suburb?: string | null;
    state?: string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProviderProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessName?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null;
    serviceAreaText?: NullableStringFieldUpdateOperationsInput | string | null;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProviderProfileNestedInput;
  };

  export type ProviderProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    businessName?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null;
    serviceAreaText?: NullableStringFieldUpdateOperationsInput | string | null;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderProfileCreateManyInput = {
    id?: string;
    userId: string;
    businessName?: string | null;
    bio?: string | null;
    yearsExperience?: number | null;
    serviceAreaText?: string | null;
    suburb?: string | null;
    state?: string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProviderProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessName?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null;
    serviceAreaText?: NullableStringFieldUpdateOperationsInput | string | null;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    businessName?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null;
    serviceAreaText?: NullableStringFieldUpdateOperationsInput | string | null;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceCategoryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    providerServices?: ProviderServiceCreateNestedManyWithoutCategoryInput;
    jobs?: JobCreateNestedManyWithoutCategoryInput;
  };

  export type ServiceCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutCategoryInput;
    jobs?: JobUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type ServiceCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerServices?: ProviderServiceUpdateManyWithoutCategoryNestedInput;
    jobs?: JobUpdateManyWithoutCategoryNestedInput;
  };

  export type ServiceCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutCategoryNestedInput;
    jobs?: JobUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type ServiceCategoryCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
  };

  export type ServiceCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceCreateInput = {
    id?: string;
    createdAt?: Date | string;
    provider: UserCreateNestedOneWithoutProviderServicesInput;
    category: ServiceCategoryCreateNestedOneWithoutProviderServicesInput;
  };

  export type ProviderServiceUncheckedCreateInput = {
    id?: string;
    providerId: string;
    categoryId: string;
    createdAt?: Date | string;
  };

  export type ProviderServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: UserUpdateOneRequiredWithoutProviderServicesNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutProviderServicesNestedInput;
  };

  export type ProviderServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceCreateManyInput = {
    id?: string;
    providerId: string;
    categoryId: string;
    createdAt?: Date | string;
  };

  export type ProviderServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobCreateInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobCreateManyInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobBidCreateInput = {
    id?: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    job: JobCreateNestedOneWithoutBidsInput;
    provider: UserCreateNestedOneWithoutBidsInput;
    acceptedAssignment?: JobAssignmentCreateNestedOneWithoutAcceptedBidInput;
  };

  export type JobBidUncheckedCreateInput = {
    id?: string;
    jobId: string;
    providerId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    acceptedAssignment?: JobAssignmentUncheckedCreateNestedOneWithoutAcceptedBidInput;
  };

  export type JobBidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutBidsNestedInput;
    provider?: UserUpdateOneRequiredWithoutBidsNestedInput;
    acceptedAssignment?: JobAssignmentUpdateOneWithoutAcceptedBidNestedInput;
  };

  export type JobBidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAssignment?: JobAssignmentUncheckedUpdateOneWithoutAcceptedBidNestedInput;
  };

  export type JobBidCreateManyInput = {
    id?: string;
    jobId: string;
    providerId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobBidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobBidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobAssignmentCreateInput = {
    id?: string;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    job: JobCreateNestedOneWithoutAssignmentInput;
    customer: UserCreateNestedOneWithoutJobAssignmentsAsCustomerInput;
    provider: UserCreateNestedOneWithoutJobAssignmentsAsProviderInput;
    acceptedBid?: JobBidCreateNestedOneWithoutAcceptedAssignmentInput;
  };

  export type JobAssignmentUncheckedCreateInput = {
    id?: string;
    jobId: string;
    customerId: string;
    providerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    job?: JobUpdateOneRequiredWithoutAssignmentNestedInput;
    customer?: UserUpdateOneRequiredWithoutJobAssignmentsAsCustomerNestedInput;
    provider?: UserUpdateOneRequiredWithoutJobAssignmentsAsProviderNestedInput;
    acceptedBid?: JobBidUpdateOneWithoutAcceptedAssignmentNestedInput;
  };

  export type JobAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type JobAssignmentCreateManyInput = {
    id?: string;
    jobId: string;
    customerId: string;
    providerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type JobAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type ConversationCreateInput = {
    id?: string;
    createdAt?: Date | string;
    job: JobCreateNestedOneWithoutConversationInput;
    customer: UserCreateNestedOneWithoutCustomerConversationsInput;
    provider: UserCreateNestedOneWithoutProviderConversationsInput;
    messages?: MessageCreateNestedManyWithoutConversationInput;
  };

  export type ConversationUncheckedCreateInput = {
    id?: string;
    jobId: string;
    customerId: string;
    providerId: string;
    createdAt?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput;
  };

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutConversationNestedInput;
    customer?: UserUpdateOneRequiredWithoutCustomerConversationsNestedInput;
    provider?: UserUpdateOneRequiredWithoutProviderConversationsNestedInput;
    messages?: MessageUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationCreateManyInput = {
    id?: string;
    jobId: string;
    customerId: string;
    providerId: string;
    createdAt?: Date | string;
  };

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateInput = {
    id?: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
    conversation: ConversationCreateNestedOneWithoutMessagesInput;
    sender: UserCreateNestedOneWithoutSentMessagesInput;
  };

  export type MessageUncheckedCreateInput = {
    id?: string;
    conversationId: string;
    senderId: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
  };

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput;
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput;
  };

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversationId?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateManyInput = {
    id?: string;
    conversationId: string;
    senderId: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
  };

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversationId?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryCreateInput = {
    id?: string;
    oldStatus?: string | null;
    newStatus: string;
    note?: string | null;
    createdAt?: Date | string;
    job: JobCreateNestedOneWithoutStatusHistoryInput;
    changedByUser?: UserCreateNestedOneWithoutJobStatusHistoriesInput;
  };

  export type JobStatusHistoryUncheckedCreateInput = {
    id?: string;
    jobId: string;
    oldStatus?: string | null;
    newStatus: string;
    changedBy?: string | null;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type JobStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutStatusHistoryNestedInput;
    changedByUser?: UserUpdateOneWithoutJobStatusHistoriesNestedInput;
  };

  export type JobStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryCreateManyInput = {
    id?: string;
    jobId: string;
    oldStatus?: string | null;
    newStatus: string;
    changedBy?: string | null;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type JobStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ProviderProfileNullableRelationFilter = {
    is?: ProviderProfileWhereInput | null;
    isNot?: ProviderProfileWhereInput | null;
  };

  export type JobListRelationFilter = {
    every?: JobWhereInput;
    some?: JobWhereInput;
    none?: JobWhereInput;
  };

  export type ProviderServiceListRelationFilter = {
    every?: ProviderServiceWhereInput;
    some?: ProviderServiceWhereInput;
    none?: ProviderServiceWhereInput;
  };

  export type JobBidListRelationFilter = {
    every?: JobBidWhereInput;
    some?: JobBidWhereInput;
    none?: JobBidWhereInput;
  };

  export type JobAssignmentListRelationFilter = {
    every?: JobAssignmentWhereInput;
    some?: JobAssignmentWhereInput;
    none?: JobAssignmentWhereInput;
  };

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput;
    some?: ConversationWhereInput;
    none?: ConversationWhereInput;
  };

  export type MessageListRelationFilter = {
    every?: MessageWhereInput;
    some?: MessageWhereInput;
    none?: MessageWhereInput;
  };

  export type JobStatusHistoryListRelationFilter = {
    every?: JobStatusHistoryWhereInput;
    some?: JobStatusHistoryWhereInput;
    none?: JobStatusHistoryWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProviderServiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type JobBidOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type JobAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type JobStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    fullName?: SortOrder;
    phone?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    fullName?: SortOrder;
    phone?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    fullName?: SortOrder;
    phone?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ProviderProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    businessName?: SortOrder;
    bio?: SortOrder;
    yearsExperience?: SortOrder;
    serviceAreaText?: SortOrder;
    suburb?: SortOrder;
    state?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProviderProfileAvgOrderByAggregateInput = {
    yearsExperience?: SortOrder;
  };

  export type ProviderProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    businessName?: SortOrder;
    bio?: SortOrder;
    yearsExperience?: SortOrder;
    serviceAreaText?: SortOrder;
    suburb?: SortOrder;
    state?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProviderProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    businessName?: SortOrder;
    bio?: SortOrder;
    yearsExperience?: SortOrder;
    serviceAreaText?: SortOrder;
    suburb?: SortOrder;
    state?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProviderProfileSumOrderByAggregateInput = {
    yearsExperience?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type ServiceCategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ServiceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ServiceCategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ServiceCategoryRelationFilter = {
    is?: ServiceCategoryWhereInput;
    isNot?: ServiceCategoryWhereInput;
  };

  export type ProviderServiceProviderIdCategoryIdCompoundUniqueInput = {
    providerId: string;
    categoryId: string;
  };

  export type ProviderServiceCountOrderByAggregateInput = {
    id?: SortOrder;
    providerId?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProviderServiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    providerId?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProviderServiceMinOrderByAggregateInput = {
    id?: SortOrder;
    providerId?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type JobAssignmentNullableRelationFilter = {
    is?: JobAssignmentWhereInput | null;
    isNot?: JobAssignmentWhereInput | null;
  };

  export type ConversationNullableRelationFilter = {
    is?: ConversationWhereInput | null;
    isNot?: ConversationWhereInput | null;
  };

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    categoryId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    locationText?: SortOrder;
    suburb?: SortOrder;
    state?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    preferredDate?: SortOrder;
    status?: SortOrder;
    assignedProviderId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobAvgOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
  };

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    categoryId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    locationText?: SortOrder;
    suburb?: SortOrder;
    state?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    preferredDate?: SortOrder;
    status?: SortOrder;
    assignedProviderId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    categoryId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    locationText?: SortOrder;
    suburb?: SortOrder;
    state?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    preferredDate?: SortOrder;
    status?: SortOrder;
    assignedProviderId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobSumOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type JobRelationFilter = {
    is?: JobWhereInput;
    isNot?: JobWhereInput;
  };

  export type JobBidJobIdProviderIdCompoundUniqueInput = {
    jobId: string;
    providerId: string;
  };

  export type JobBidCountOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    providerId?: SortOrder;
    bidAmount?: SortOrder;
    message?: SortOrder;
    estimatedArrivalHours?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobBidAvgOrderByAggregateInput = {
    bidAmount?: SortOrder;
    estimatedArrivalHours?: SortOrder;
  };

  export type JobBidMaxOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    providerId?: SortOrder;
    bidAmount?: SortOrder;
    message?: SortOrder;
    estimatedArrivalHours?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobBidMinOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    providerId?: SortOrder;
    bidAmount?: SortOrder;
    message?: SortOrder;
    estimatedArrivalHours?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobBidSumOrderByAggregateInput = {
    bidAmount?: SortOrder;
    estimatedArrivalHours?: SortOrder;
  };

  export type JobBidNullableRelationFilter = {
    is?: JobBidWhereInput | null;
    isNot?: JobBidWhereInput | null;
  };

  export type JobAssignmentCountOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    acceptedBidId?: SortOrder;
    assignedAt?: SortOrder;
    completedAt?: SortOrder;
  };

  export type JobAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    acceptedBidId?: SortOrder;
    assignedAt?: SortOrder;
    completedAt?: SortOrder;
  };

  export type JobAssignmentMinOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    acceptedBidId?: SortOrder;
    assignedAt?: SortOrder;
    completedAt?: SortOrder;
  };

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    customerId?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ConversationRelationFilter = {
    is?: ConversationWhereInput;
    isNot?: ConversationWhereInput;
  };

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder;
    conversationId?: SortOrder;
    senderId?: SortOrder;
    messageText?: SortOrder;
    isRead?: SortOrder;
    createdAt?: SortOrder;
  };

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    conversationId?: SortOrder;
    senderId?: SortOrder;
    messageText?: SortOrder;
    isRead?: SortOrder;
    createdAt?: SortOrder;
  };

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder;
    conversationId?: SortOrder;
    senderId?: SortOrder;
    messageText?: SortOrder;
    isRead?: SortOrder;
    createdAt?: SortOrder;
  };

  export type JobStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    oldStatus?: SortOrder;
    newStatus?: SortOrder;
    changedBy?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
  };

  export type JobStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    oldStatus?: SortOrder;
    newStatus?: SortOrder;
    changedBy?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
  };

  export type JobStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    oldStatus?: SortOrder;
    newStatus?: SortOrder;
    changedBy?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProviderProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProviderProfileCreateWithoutUserInput,
      ProviderProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput;
    connect?: ProviderProfileWhereUniqueInput;
  };

  export type JobCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<JobCreateWithoutCustomerInput, JobUncheckedCreateWithoutCustomerInput>
      | JobCreateWithoutCustomerInput[]
      | JobUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCustomerInput
      | JobCreateOrConnectWithoutCustomerInput[];
    createMany?: JobCreateManyCustomerInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type JobCreateNestedManyWithoutAssignedProviderInput = {
    create?:
      | XOR<JobCreateWithoutAssignedProviderInput, JobUncheckedCreateWithoutAssignedProviderInput>
      | JobCreateWithoutAssignedProviderInput[]
      | JobUncheckedCreateWithoutAssignedProviderInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutAssignedProviderInput
      | JobCreateOrConnectWithoutAssignedProviderInput[];
    createMany?: JobCreateManyAssignedProviderInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type ProviderServiceCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutProviderInput,
          ProviderServiceUncheckedCreateWithoutProviderInput
        >
      | ProviderServiceCreateWithoutProviderInput[]
      | ProviderServiceUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutProviderInput
      | ProviderServiceCreateOrConnectWithoutProviderInput[];
    createMany?: ProviderServiceCreateManyProviderInputEnvelope;
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
  };

  export type JobBidCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<JobBidCreateWithoutProviderInput, JobBidUncheckedCreateWithoutProviderInput>
      | JobBidCreateWithoutProviderInput[]
      | JobBidUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobBidCreateOrConnectWithoutProviderInput
      | JobBidCreateOrConnectWithoutProviderInput[];
    createMany?: JobBidCreateManyProviderInputEnvelope;
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
  };

  export type JobAssignmentCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutCustomerInput,
          JobAssignmentUncheckedCreateWithoutCustomerInput
        >
      | JobAssignmentCreateWithoutCustomerInput[]
      | JobAssignmentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutCustomerInput
      | JobAssignmentCreateOrConnectWithoutCustomerInput[];
    createMany?: JobAssignmentCreateManyCustomerInputEnvelope;
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
  };

  export type JobAssignmentCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutProviderInput,
          JobAssignmentUncheckedCreateWithoutProviderInput
        >
      | JobAssignmentCreateWithoutProviderInput[]
      | JobAssignmentUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutProviderInput
      | JobAssignmentCreateOrConnectWithoutProviderInput[];
    createMany?: JobAssignmentCreateManyProviderInputEnvelope;
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
  };

  export type ConversationCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<ConversationCreateWithoutCustomerInput, ConversationUncheckedCreateWithoutCustomerInput>
      | ConversationCreateWithoutCustomerInput[]
      | ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutCustomerInput
      | ConversationCreateOrConnectWithoutCustomerInput[];
    createMany?: ConversationCreateManyCustomerInputEnvelope;
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
  };

  export type ConversationCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<ConversationCreateWithoutProviderInput, ConversationUncheckedCreateWithoutProviderInput>
      | ConversationCreateWithoutProviderInput[]
      | ConversationUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutProviderInput
      | ConversationCreateOrConnectWithoutProviderInput[];
    createMany?: ConversationCreateManyProviderInputEnvelope;
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?:
      | XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
      | MessageCreateWithoutSenderInput[]
      | MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSenderInput
      | MessageCreateOrConnectWithoutSenderInput[];
    createMany?: MessageCreateManySenderInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type JobStatusHistoryCreateNestedManyWithoutChangedByUserInput = {
    create?:
      | XOR<
          JobStatusHistoryCreateWithoutChangedByUserInput,
          JobStatusHistoryUncheckedCreateWithoutChangedByUserInput
        >
      | JobStatusHistoryCreateWithoutChangedByUserInput[]
      | JobStatusHistoryUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput[];
    createMany?: JobStatusHistoryCreateManyChangedByUserInputEnvelope;
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
  };

  export type ProviderProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProviderProfileCreateWithoutUserInput,
      ProviderProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput;
    connect?: ProviderProfileWhereUniqueInput;
  };

  export type JobUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<JobCreateWithoutCustomerInput, JobUncheckedCreateWithoutCustomerInput>
      | JobCreateWithoutCustomerInput[]
      | JobUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCustomerInput
      | JobCreateOrConnectWithoutCustomerInput[];
    createMany?: JobCreateManyCustomerInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type JobUncheckedCreateNestedManyWithoutAssignedProviderInput = {
    create?:
      | XOR<JobCreateWithoutAssignedProviderInput, JobUncheckedCreateWithoutAssignedProviderInput>
      | JobCreateWithoutAssignedProviderInput[]
      | JobUncheckedCreateWithoutAssignedProviderInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutAssignedProviderInput
      | JobCreateOrConnectWithoutAssignedProviderInput[];
    createMany?: JobCreateManyAssignedProviderInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type ProviderServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutProviderInput,
          ProviderServiceUncheckedCreateWithoutProviderInput
        >
      | ProviderServiceCreateWithoutProviderInput[]
      | ProviderServiceUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutProviderInput
      | ProviderServiceCreateOrConnectWithoutProviderInput[];
    createMany?: ProviderServiceCreateManyProviderInputEnvelope;
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
  };

  export type JobBidUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<JobBidCreateWithoutProviderInput, JobBidUncheckedCreateWithoutProviderInput>
      | JobBidCreateWithoutProviderInput[]
      | JobBidUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobBidCreateOrConnectWithoutProviderInput
      | JobBidCreateOrConnectWithoutProviderInput[];
    createMany?: JobBidCreateManyProviderInputEnvelope;
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
  };

  export type JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutCustomerInput,
          JobAssignmentUncheckedCreateWithoutCustomerInput
        >
      | JobAssignmentCreateWithoutCustomerInput[]
      | JobAssignmentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutCustomerInput
      | JobAssignmentCreateOrConnectWithoutCustomerInput[];
    createMany?: JobAssignmentCreateManyCustomerInputEnvelope;
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
  };

  export type JobAssignmentUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutProviderInput,
          JobAssignmentUncheckedCreateWithoutProviderInput
        >
      | JobAssignmentCreateWithoutProviderInput[]
      | JobAssignmentUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutProviderInput
      | JobAssignmentCreateOrConnectWithoutProviderInput[];
    createMany?: JobAssignmentCreateManyProviderInputEnvelope;
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
  };

  export type ConversationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<ConversationCreateWithoutCustomerInput, ConversationUncheckedCreateWithoutCustomerInput>
      | ConversationCreateWithoutCustomerInput[]
      | ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutCustomerInput
      | ConversationCreateOrConnectWithoutCustomerInput[];
    createMany?: ConversationCreateManyCustomerInputEnvelope;
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
  };

  export type ConversationUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<ConversationCreateWithoutProviderInput, ConversationUncheckedCreateWithoutProviderInput>
      | ConversationCreateWithoutProviderInput[]
      | ConversationUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutProviderInput
      | ConversationCreateOrConnectWithoutProviderInput[];
    createMany?: ConversationCreateManyProviderInputEnvelope;
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?:
      | XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
      | MessageCreateWithoutSenderInput[]
      | MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSenderInput
      | MessageCreateOrConnectWithoutSenderInput[];
    createMany?: MessageCreateManySenderInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput = {
    create?:
      | XOR<
          JobStatusHistoryCreateWithoutChangedByUserInput,
          JobStatusHistoryUncheckedCreateWithoutChangedByUserInput
        >
      | JobStatusHistoryCreateWithoutChangedByUserInput[]
      | JobStatusHistoryUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput[];
    createMany?: JobStatusHistoryCreateManyChangedByUserInputEnvelope;
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ProviderProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProviderProfileCreateWithoutUserInput,
      ProviderProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput;
    upsert?: ProviderProfileUpsertWithoutUserInput;
    disconnect?: ProviderProfileWhereInput | boolean;
    delete?: ProviderProfileWhereInput | boolean;
    connect?: ProviderProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProviderProfileUpdateToOneWithWhereWithoutUserInput,
        ProviderProfileUpdateWithoutUserInput
      >,
      ProviderProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type JobUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<JobCreateWithoutCustomerInput, JobUncheckedCreateWithoutCustomerInput>
      | JobCreateWithoutCustomerInput[]
      | JobUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCustomerInput
      | JobCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutCustomerInput
      | JobUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: JobCreateManyCustomerInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutCustomerInput
      | JobUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutCustomerInput
      | JobUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type JobUpdateManyWithoutAssignedProviderNestedInput = {
    create?:
      | XOR<JobCreateWithoutAssignedProviderInput, JobUncheckedCreateWithoutAssignedProviderInput>
      | JobCreateWithoutAssignedProviderInput[]
      | JobUncheckedCreateWithoutAssignedProviderInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutAssignedProviderInput
      | JobCreateOrConnectWithoutAssignedProviderInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutAssignedProviderInput
      | JobUpsertWithWhereUniqueWithoutAssignedProviderInput[];
    createMany?: JobCreateManyAssignedProviderInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutAssignedProviderInput
      | JobUpdateWithWhereUniqueWithoutAssignedProviderInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutAssignedProviderInput
      | JobUpdateManyWithWhereWithoutAssignedProviderInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type ProviderServiceUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutProviderInput,
          ProviderServiceUncheckedCreateWithoutProviderInput
        >
      | ProviderServiceCreateWithoutProviderInput[]
      | ProviderServiceUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutProviderInput
      | ProviderServiceCreateOrConnectWithoutProviderInput[];
    upsert?:
      | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput
      | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: ProviderServiceCreateManyProviderInputEnvelope;
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    update?:
      | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput
      | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | ProviderServiceUpdateManyWithWhereWithoutProviderInput
      | ProviderServiceUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[];
  };

  export type JobBidUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<JobBidCreateWithoutProviderInput, JobBidUncheckedCreateWithoutProviderInput>
      | JobBidCreateWithoutProviderInput[]
      | JobBidUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobBidCreateOrConnectWithoutProviderInput
      | JobBidCreateOrConnectWithoutProviderInput[];
    upsert?:
      | JobBidUpsertWithWhereUniqueWithoutProviderInput
      | JobBidUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: JobBidCreateManyProviderInputEnvelope;
    set?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    disconnect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    delete?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    update?:
      | JobBidUpdateWithWhereUniqueWithoutProviderInput
      | JobBidUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | JobBidUpdateManyWithWhereWithoutProviderInput
      | JobBidUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: JobBidScalarWhereInput | JobBidScalarWhereInput[];
  };

  export type JobAssignmentUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutCustomerInput,
          JobAssignmentUncheckedCreateWithoutCustomerInput
        >
      | JobAssignmentCreateWithoutCustomerInput[]
      | JobAssignmentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutCustomerInput
      | JobAssignmentCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | JobAssignmentUpsertWithWhereUniqueWithoutCustomerInput
      | JobAssignmentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: JobAssignmentCreateManyCustomerInputEnvelope;
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    update?:
      | JobAssignmentUpdateWithWhereUniqueWithoutCustomerInput
      | JobAssignmentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | JobAssignmentUpdateManyWithWhereWithoutCustomerInput
      | JobAssignmentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[];
  };

  export type JobAssignmentUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutProviderInput,
          JobAssignmentUncheckedCreateWithoutProviderInput
        >
      | JobAssignmentCreateWithoutProviderInput[]
      | JobAssignmentUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutProviderInput
      | JobAssignmentCreateOrConnectWithoutProviderInput[];
    upsert?:
      | JobAssignmentUpsertWithWhereUniqueWithoutProviderInput
      | JobAssignmentUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: JobAssignmentCreateManyProviderInputEnvelope;
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    update?:
      | JobAssignmentUpdateWithWhereUniqueWithoutProviderInput
      | JobAssignmentUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | JobAssignmentUpdateManyWithWhereWithoutProviderInput
      | JobAssignmentUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[];
  };

  export type ConversationUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<ConversationCreateWithoutCustomerInput, ConversationUncheckedCreateWithoutCustomerInput>
      | ConversationCreateWithoutCustomerInput[]
      | ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutCustomerInput
      | ConversationCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | ConversationUpsertWithWhereUniqueWithoutCustomerInput
      | ConversationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: ConversationCreateManyCustomerInputEnvelope;
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    update?:
      | ConversationUpdateWithWhereUniqueWithoutCustomerInput
      | ConversationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | ConversationUpdateManyWithWhereWithoutCustomerInput
      | ConversationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[];
  };

  export type ConversationUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<ConversationCreateWithoutProviderInput, ConversationUncheckedCreateWithoutProviderInput>
      | ConversationCreateWithoutProviderInput[]
      | ConversationUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutProviderInput
      | ConversationCreateOrConnectWithoutProviderInput[];
    upsert?:
      | ConversationUpsertWithWhereUniqueWithoutProviderInput
      | ConversationUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: ConversationCreateManyProviderInputEnvelope;
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    update?:
      | ConversationUpdateWithWhereUniqueWithoutProviderInput
      | ConversationUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | ConversationUpdateManyWithWhereWithoutProviderInput
      | ConversationUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?:
      | XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
      | MessageCreateWithoutSenderInput[]
      | MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSenderInput
      | MessageCreateOrConnectWithoutSenderInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutSenderInput
      | MessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: MessageCreateManySenderInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutSenderInput
      | MessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutSenderInput
      | MessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput = {
    create?:
      | XOR<
          JobStatusHistoryCreateWithoutChangedByUserInput,
          JobStatusHistoryUncheckedCreateWithoutChangedByUserInput
        >
      | JobStatusHistoryCreateWithoutChangedByUserInput[]
      | JobStatusHistoryUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput[];
    upsert?:
      | JobStatusHistoryUpsertWithWhereUniqueWithoutChangedByUserInput
      | JobStatusHistoryUpsertWithWhereUniqueWithoutChangedByUserInput[];
    createMany?: JobStatusHistoryCreateManyChangedByUserInputEnvelope;
    set?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    disconnect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    delete?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    update?:
      | JobStatusHistoryUpdateWithWhereUniqueWithoutChangedByUserInput
      | JobStatusHistoryUpdateWithWhereUniqueWithoutChangedByUserInput[];
    updateMany?:
      | JobStatusHistoryUpdateManyWithWhereWithoutChangedByUserInput
      | JobStatusHistoryUpdateManyWithWhereWithoutChangedByUserInput[];
    deleteMany?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[];
  };

  export type ProviderProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProviderProfileCreateWithoutUserInput,
      ProviderProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput;
    upsert?: ProviderProfileUpsertWithoutUserInput;
    disconnect?: ProviderProfileWhereInput | boolean;
    delete?: ProviderProfileWhereInput | boolean;
    connect?: ProviderProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProviderProfileUpdateToOneWithWhereWithoutUserInput,
        ProviderProfileUpdateWithoutUserInput
      >,
      ProviderProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type JobUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<JobCreateWithoutCustomerInput, JobUncheckedCreateWithoutCustomerInput>
      | JobCreateWithoutCustomerInput[]
      | JobUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCustomerInput
      | JobCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutCustomerInput
      | JobUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: JobCreateManyCustomerInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutCustomerInput
      | JobUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutCustomerInput
      | JobUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type JobUncheckedUpdateManyWithoutAssignedProviderNestedInput = {
    create?:
      | XOR<JobCreateWithoutAssignedProviderInput, JobUncheckedCreateWithoutAssignedProviderInput>
      | JobCreateWithoutAssignedProviderInput[]
      | JobUncheckedCreateWithoutAssignedProviderInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutAssignedProviderInput
      | JobCreateOrConnectWithoutAssignedProviderInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutAssignedProviderInput
      | JobUpsertWithWhereUniqueWithoutAssignedProviderInput[];
    createMany?: JobCreateManyAssignedProviderInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutAssignedProviderInput
      | JobUpdateWithWhereUniqueWithoutAssignedProviderInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutAssignedProviderInput
      | JobUpdateManyWithWhereWithoutAssignedProviderInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutProviderInput,
          ProviderServiceUncheckedCreateWithoutProviderInput
        >
      | ProviderServiceCreateWithoutProviderInput[]
      | ProviderServiceUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutProviderInput
      | ProviderServiceCreateOrConnectWithoutProviderInput[];
    upsert?:
      | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput
      | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: ProviderServiceCreateManyProviderInputEnvelope;
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    update?:
      | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput
      | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | ProviderServiceUpdateManyWithWhereWithoutProviderInput
      | ProviderServiceUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[];
  };

  export type JobBidUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<JobBidCreateWithoutProviderInput, JobBidUncheckedCreateWithoutProviderInput>
      | JobBidCreateWithoutProviderInput[]
      | JobBidUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobBidCreateOrConnectWithoutProviderInput
      | JobBidCreateOrConnectWithoutProviderInput[];
    upsert?:
      | JobBidUpsertWithWhereUniqueWithoutProviderInput
      | JobBidUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: JobBidCreateManyProviderInputEnvelope;
    set?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    disconnect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    delete?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    update?:
      | JobBidUpdateWithWhereUniqueWithoutProviderInput
      | JobBidUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | JobBidUpdateManyWithWhereWithoutProviderInput
      | JobBidUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: JobBidScalarWhereInput | JobBidScalarWhereInput[];
  };

  export type JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutCustomerInput,
          JobAssignmentUncheckedCreateWithoutCustomerInput
        >
      | JobAssignmentCreateWithoutCustomerInput[]
      | JobAssignmentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutCustomerInput
      | JobAssignmentCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | JobAssignmentUpsertWithWhereUniqueWithoutCustomerInput
      | JobAssignmentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: JobAssignmentCreateManyCustomerInputEnvelope;
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    update?:
      | JobAssignmentUpdateWithWhereUniqueWithoutCustomerInput
      | JobAssignmentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | JobAssignmentUpdateManyWithWhereWithoutCustomerInput
      | JobAssignmentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[];
  };

  export type JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<
          JobAssignmentCreateWithoutProviderInput,
          JobAssignmentUncheckedCreateWithoutProviderInput
        >
      | JobAssignmentCreateWithoutProviderInput[]
      | JobAssignmentUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | JobAssignmentCreateOrConnectWithoutProviderInput
      | JobAssignmentCreateOrConnectWithoutProviderInput[];
    upsert?:
      | JobAssignmentUpsertWithWhereUniqueWithoutProviderInput
      | JobAssignmentUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: JobAssignmentCreateManyProviderInputEnvelope;
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[];
    update?:
      | JobAssignmentUpdateWithWhereUniqueWithoutProviderInput
      | JobAssignmentUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | JobAssignmentUpdateManyWithWhereWithoutProviderInput
      | JobAssignmentUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[];
  };

  export type ConversationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<ConversationCreateWithoutCustomerInput, ConversationUncheckedCreateWithoutCustomerInput>
      | ConversationCreateWithoutCustomerInput[]
      | ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutCustomerInput
      | ConversationCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | ConversationUpsertWithWhereUniqueWithoutCustomerInput
      | ConversationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: ConversationCreateManyCustomerInputEnvelope;
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    update?:
      | ConversationUpdateWithWhereUniqueWithoutCustomerInput
      | ConversationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | ConversationUpdateManyWithWhereWithoutCustomerInput
      | ConversationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[];
  };

  export type ConversationUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<ConversationCreateWithoutProviderInput, ConversationUncheckedCreateWithoutProviderInput>
      | ConversationCreateWithoutProviderInput[]
      | ConversationUncheckedCreateWithoutProviderInput[];
    connectOrCreate?:
      | ConversationCreateOrConnectWithoutProviderInput
      | ConversationCreateOrConnectWithoutProviderInput[];
    upsert?:
      | ConversationUpsertWithWhereUniqueWithoutProviderInput
      | ConversationUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: ConversationCreateManyProviderInputEnvelope;
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[];
    update?:
      | ConversationUpdateWithWhereUniqueWithoutProviderInput
      | ConversationUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?:
      | ConversationUpdateManyWithWhereWithoutProviderInput
      | ConversationUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?:
      | XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
      | MessageCreateWithoutSenderInput[]
      | MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSenderInput
      | MessageCreateOrConnectWithoutSenderInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutSenderInput
      | MessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: MessageCreateManySenderInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutSenderInput
      | MessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutSenderInput
      | MessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput = {
    create?:
      | XOR<
          JobStatusHistoryCreateWithoutChangedByUserInput,
          JobStatusHistoryUncheckedCreateWithoutChangedByUserInput
        >
      | JobStatusHistoryCreateWithoutChangedByUserInput[]
      | JobStatusHistoryUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput
      | JobStatusHistoryCreateOrConnectWithoutChangedByUserInput[];
    upsert?:
      | JobStatusHistoryUpsertWithWhereUniqueWithoutChangedByUserInput
      | JobStatusHistoryUpsertWithWhereUniqueWithoutChangedByUserInput[];
    createMany?: JobStatusHistoryCreateManyChangedByUserInputEnvelope;
    set?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    disconnect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    delete?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    update?:
      | JobStatusHistoryUpdateWithWhereUniqueWithoutChangedByUserInput
      | JobStatusHistoryUpdateWithWhereUniqueWithoutChangedByUserInput[];
    updateMany?:
      | JobStatusHistoryUpdateManyWithWhereWithoutChangedByUserInput
      | JobStatusHistoryUpdateManyWithWhereWithoutChangedByUserInput[];
    deleteMany?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutProviderProfileInput = {
    create?: XOR<
      UserCreateWithoutProviderProfileInput,
      UserUncheckedCreateWithoutProviderProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProviderProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutProviderProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutProviderProfileInput,
      UserUncheckedCreateWithoutProviderProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProviderProfileInput;
    upsert?: UserUpsertWithoutProviderProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProviderProfileInput,
        UserUpdateWithoutProviderProfileInput
      >,
      UserUncheckedUpdateWithoutProviderProfileInput
    >;
  };

  export type ProviderServiceCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutCategoryInput,
          ProviderServiceUncheckedCreateWithoutCategoryInput
        >
      | ProviderServiceCreateWithoutCategoryInput[]
      | ProviderServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutCategoryInput
      | ProviderServiceCreateOrConnectWithoutCategoryInput[];
    createMany?: ProviderServiceCreateManyCategoryInputEnvelope;
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
  };

  export type JobCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<JobCreateWithoutCategoryInput, JobUncheckedCreateWithoutCategoryInput>
      | JobCreateWithoutCategoryInput[]
      | JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCategoryInput
      | JobCreateOrConnectWithoutCategoryInput[];
    createMany?: JobCreateManyCategoryInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type ProviderServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutCategoryInput,
          ProviderServiceUncheckedCreateWithoutCategoryInput
        >
      | ProviderServiceCreateWithoutCategoryInput[]
      | ProviderServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutCategoryInput
      | ProviderServiceCreateOrConnectWithoutCategoryInput[];
    createMany?: ProviderServiceCreateManyCategoryInputEnvelope;
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
  };

  export type JobUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<JobCreateWithoutCategoryInput, JobUncheckedCreateWithoutCategoryInput>
      | JobCreateWithoutCategoryInput[]
      | JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCategoryInput
      | JobCreateOrConnectWithoutCategoryInput[];
    createMany?: JobCreateManyCategoryInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type ProviderServiceUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutCategoryInput,
          ProviderServiceUncheckedCreateWithoutCategoryInput
        >
      | ProviderServiceCreateWithoutCategoryInput[]
      | ProviderServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutCategoryInput
      | ProviderServiceCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ProviderServiceUpsertWithWhereUniqueWithoutCategoryInput
      | ProviderServiceUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ProviderServiceCreateManyCategoryInputEnvelope;
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    update?:
      | ProviderServiceUpdateWithWhereUniqueWithoutCategoryInput
      | ProviderServiceUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ProviderServiceUpdateManyWithWhereWithoutCategoryInput
      | ProviderServiceUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[];
  };

  export type JobUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<JobCreateWithoutCategoryInput, JobUncheckedCreateWithoutCategoryInput>
      | JobCreateWithoutCategoryInput[]
      | JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCategoryInput
      | JobCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutCategoryInput
      | JobUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: JobCreateManyCategoryInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutCategoryInput
      | JobUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutCategoryInput
      | JobUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type ProviderServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ProviderServiceCreateWithoutCategoryInput,
          ProviderServiceUncheckedCreateWithoutCategoryInput
        >
      | ProviderServiceCreateWithoutCategoryInput[]
      | ProviderServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProviderServiceCreateOrConnectWithoutCategoryInput
      | ProviderServiceCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ProviderServiceUpsertWithWhereUniqueWithoutCategoryInput
      | ProviderServiceUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ProviderServiceCreateManyCategoryInputEnvelope;
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[];
    update?:
      | ProviderServiceUpdateWithWhereUniqueWithoutCategoryInput
      | ProviderServiceUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ProviderServiceUpdateManyWithWhereWithoutCategoryInput
      | ProviderServiceUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[];
  };

  export type JobUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<JobCreateWithoutCategoryInput, JobUncheckedCreateWithoutCategoryInput>
      | JobCreateWithoutCategoryInput[]
      | JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCategoryInput
      | JobCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutCategoryInput
      | JobUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: JobCreateManyCategoryInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutCategoryInput
      | JobUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutCategoryInput
      | JobUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<
      UserCreateWithoutProviderServicesInput,
      UserUncheckedCreateWithoutProviderServicesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProviderServicesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ServiceCategoryCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<
      ServiceCategoryCreateWithoutProviderServicesInput,
      ServiceCategoryUncheckedCreateWithoutProviderServicesInput
    >;
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutProviderServicesInput;
    connect?: ServiceCategoryWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<
      UserCreateWithoutProviderServicesInput,
      UserUncheckedCreateWithoutProviderServicesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProviderServicesInput;
    upsert?: UserUpsertWithoutProviderServicesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProviderServicesInput,
        UserUpdateWithoutProviderServicesInput
      >,
      UserUncheckedUpdateWithoutProviderServicesInput
    >;
  };

  export type ServiceCategoryUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<
      ServiceCategoryCreateWithoutProviderServicesInput,
      ServiceCategoryUncheckedCreateWithoutProviderServicesInput
    >;
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutProviderServicesInput;
    upsert?: ServiceCategoryUpsertWithoutProviderServicesInput;
    connect?: ServiceCategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceCategoryUpdateToOneWithWhereWithoutProviderServicesInput,
        ServiceCategoryUpdateWithoutProviderServicesInput
      >,
      ServiceCategoryUncheckedUpdateWithoutProviderServicesInput
    >;
  };

  export type UserCreateNestedOneWithoutCustomerJobsInput = {
    create?: XOR<UserCreateWithoutCustomerJobsInput, UserUncheckedCreateWithoutCustomerJobsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCustomerJobsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutAssignedJobsInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ServiceCategoryCreateNestedOneWithoutJobsInput = {
    create?: XOR<
      ServiceCategoryCreateWithoutJobsInput,
      ServiceCategoryUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutJobsInput;
    connect?: ServiceCategoryWhereUniqueInput;
  };

  export type JobBidCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<JobBidCreateWithoutJobInput, JobBidUncheckedCreateWithoutJobInput>
      | JobBidCreateWithoutJobInput[]
      | JobBidUncheckedCreateWithoutJobInput[];
    connectOrCreate?: JobBidCreateOrConnectWithoutJobInput | JobBidCreateOrConnectWithoutJobInput[];
    createMany?: JobBidCreateManyJobInputEnvelope;
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
  };

  export type JobAssignmentCreateNestedOneWithoutJobInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput;
    connect?: JobAssignmentWhereUniqueInput;
  };

  export type ConversationCreateNestedOneWithoutJobInput = {
    create?: XOR<ConversationCreateWithoutJobInput, ConversationUncheckedCreateWithoutJobInput>;
    connectOrCreate?: ConversationCreateOrConnectWithoutJobInput;
    connect?: ConversationWhereUniqueInput;
  };

  export type JobStatusHistoryCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<JobStatusHistoryCreateWithoutJobInput, JobStatusHistoryUncheckedCreateWithoutJobInput>
      | JobStatusHistoryCreateWithoutJobInput[]
      | JobStatusHistoryUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutJobInput
      | JobStatusHistoryCreateOrConnectWithoutJobInput[];
    createMany?: JobStatusHistoryCreateManyJobInputEnvelope;
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
  };

  export type JobBidUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<JobBidCreateWithoutJobInput, JobBidUncheckedCreateWithoutJobInput>
      | JobBidCreateWithoutJobInput[]
      | JobBidUncheckedCreateWithoutJobInput[];
    connectOrCreate?: JobBidCreateOrConnectWithoutJobInput | JobBidCreateOrConnectWithoutJobInput[];
    createMany?: JobBidCreateManyJobInputEnvelope;
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
  };

  export type JobAssignmentUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput;
    connect?: JobAssignmentWhereUniqueInput;
  };

  export type ConversationUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<ConversationCreateWithoutJobInput, ConversationUncheckedCreateWithoutJobInput>;
    connectOrCreate?: ConversationCreateOrConnectWithoutJobInput;
    connect?: ConversationWhereUniqueInput;
  };

  export type JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<JobStatusHistoryCreateWithoutJobInput, JobStatusHistoryUncheckedCreateWithoutJobInput>
      | JobStatusHistoryCreateWithoutJobInput[]
      | JobStatusHistoryUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutJobInput
      | JobStatusHistoryCreateOrConnectWithoutJobInput[];
    createMany?: JobStatusHistoryCreateManyJobInputEnvelope;
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserUpdateOneRequiredWithoutCustomerJobsNestedInput = {
    create?: XOR<UserCreateWithoutCustomerJobsInput, UserUncheckedCreateWithoutCustomerJobsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCustomerJobsInput;
    upsert?: UserUpsertWithoutCustomerJobsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutCustomerJobsInput, UserUpdateWithoutCustomerJobsInput>,
      UserUncheckedUpdateWithoutCustomerJobsInput
    >;
  };

  export type UserUpdateOneWithoutAssignedJobsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput;
    upsert?: UserUpsertWithoutAssignedJobsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutAssignedJobsInput, UserUpdateWithoutAssignedJobsInput>,
      UserUncheckedUpdateWithoutAssignedJobsInput
    >;
  };

  export type ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<
      ServiceCategoryCreateWithoutJobsInput,
      ServiceCategoryUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutJobsInput;
    upsert?: ServiceCategoryUpsertWithoutJobsInput;
    connect?: ServiceCategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceCategoryUpdateToOneWithWhereWithoutJobsInput,
        ServiceCategoryUpdateWithoutJobsInput
      >,
      ServiceCategoryUncheckedUpdateWithoutJobsInput
    >;
  };

  export type JobBidUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<JobBidCreateWithoutJobInput, JobBidUncheckedCreateWithoutJobInput>
      | JobBidCreateWithoutJobInput[]
      | JobBidUncheckedCreateWithoutJobInput[];
    connectOrCreate?: JobBidCreateOrConnectWithoutJobInput | JobBidCreateOrConnectWithoutJobInput[];
    upsert?:
      | JobBidUpsertWithWhereUniqueWithoutJobInput
      | JobBidUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: JobBidCreateManyJobInputEnvelope;
    set?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    disconnect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    delete?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    update?:
      | JobBidUpdateWithWhereUniqueWithoutJobInput
      | JobBidUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | JobBidUpdateManyWithWhereWithoutJobInput
      | JobBidUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: JobBidScalarWhereInput | JobBidScalarWhereInput[];
  };

  export type JobAssignmentUpdateOneWithoutJobNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput;
    upsert?: JobAssignmentUpsertWithoutJobInput;
    disconnect?: JobAssignmentWhereInput | boolean;
    delete?: JobAssignmentWhereInput | boolean;
    connect?: JobAssignmentWhereUniqueInput;
    update?: XOR<
      XOR<JobAssignmentUpdateToOneWithWhereWithoutJobInput, JobAssignmentUpdateWithoutJobInput>,
      JobAssignmentUncheckedUpdateWithoutJobInput
    >;
  };

  export type ConversationUpdateOneWithoutJobNestedInput = {
    create?: XOR<ConversationCreateWithoutJobInput, ConversationUncheckedCreateWithoutJobInput>;
    connectOrCreate?: ConversationCreateOrConnectWithoutJobInput;
    upsert?: ConversationUpsertWithoutJobInput;
    disconnect?: ConversationWhereInput | boolean;
    delete?: ConversationWhereInput | boolean;
    connect?: ConversationWhereUniqueInput;
    update?: XOR<
      XOR<ConversationUpdateToOneWithWhereWithoutJobInput, ConversationUpdateWithoutJobInput>,
      ConversationUncheckedUpdateWithoutJobInput
    >;
  };

  export type JobStatusHistoryUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<JobStatusHistoryCreateWithoutJobInput, JobStatusHistoryUncheckedCreateWithoutJobInput>
      | JobStatusHistoryCreateWithoutJobInput[]
      | JobStatusHistoryUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutJobInput
      | JobStatusHistoryCreateOrConnectWithoutJobInput[];
    upsert?:
      | JobStatusHistoryUpsertWithWhereUniqueWithoutJobInput
      | JobStatusHistoryUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: JobStatusHistoryCreateManyJobInputEnvelope;
    set?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    disconnect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    delete?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    update?:
      | JobStatusHistoryUpdateWithWhereUniqueWithoutJobInput
      | JobStatusHistoryUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | JobStatusHistoryUpdateManyWithWhereWithoutJobInput
      | JobStatusHistoryUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[];
  };

  export type JobBidUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<JobBidCreateWithoutJobInput, JobBidUncheckedCreateWithoutJobInput>
      | JobBidCreateWithoutJobInput[]
      | JobBidUncheckedCreateWithoutJobInput[];
    connectOrCreate?: JobBidCreateOrConnectWithoutJobInput | JobBidCreateOrConnectWithoutJobInput[];
    upsert?:
      | JobBidUpsertWithWhereUniqueWithoutJobInput
      | JobBidUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: JobBidCreateManyJobInputEnvelope;
    set?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    disconnect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    delete?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    connect?: JobBidWhereUniqueInput | JobBidWhereUniqueInput[];
    update?:
      | JobBidUpdateWithWhereUniqueWithoutJobInput
      | JobBidUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | JobBidUpdateManyWithWhereWithoutJobInput
      | JobBidUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: JobBidScalarWhereInput | JobBidScalarWhereInput[];
  };

  export type JobAssignmentUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput;
    upsert?: JobAssignmentUpsertWithoutJobInput;
    disconnect?: JobAssignmentWhereInput | boolean;
    delete?: JobAssignmentWhereInput | boolean;
    connect?: JobAssignmentWhereUniqueInput;
    update?: XOR<
      XOR<JobAssignmentUpdateToOneWithWhereWithoutJobInput, JobAssignmentUpdateWithoutJobInput>,
      JobAssignmentUncheckedUpdateWithoutJobInput
    >;
  };

  export type ConversationUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<ConversationCreateWithoutJobInput, ConversationUncheckedCreateWithoutJobInput>;
    connectOrCreate?: ConversationCreateOrConnectWithoutJobInput;
    upsert?: ConversationUpsertWithoutJobInput;
    disconnect?: ConversationWhereInput | boolean;
    delete?: ConversationWhereInput | boolean;
    connect?: ConversationWhereUniqueInput;
    update?: XOR<
      XOR<ConversationUpdateToOneWithWhereWithoutJobInput, ConversationUpdateWithoutJobInput>,
      ConversationUncheckedUpdateWithoutJobInput
    >;
  };

  export type JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<JobStatusHistoryCreateWithoutJobInput, JobStatusHistoryUncheckedCreateWithoutJobInput>
      | JobStatusHistoryCreateWithoutJobInput[]
      | JobStatusHistoryUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | JobStatusHistoryCreateOrConnectWithoutJobInput
      | JobStatusHistoryCreateOrConnectWithoutJobInput[];
    upsert?:
      | JobStatusHistoryUpsertWithWhereUniqueWithoutJobInput
      | JobStatusHistoryUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: JobStatusHistoryCreateManyJobInputEnvelope;
    set?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    disconnect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    delete?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[];
    update?:
      | JobStatusHistoryUpdateWithWhereUniqueWithoutJobInput
      | JobStatusHistoryUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | JobStatusHistoryUpdateManyWithWhereWithoutJobInput
      | JobStatusHistoryUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[];
  };

  export type JobCreateNestedOneWithoutBidsInput = {
    create?: XOR<JobCreateWithoutBidsInput, JobUncheckedCreateWithoutBidsInput>;
    connectOrCreate?: JobCreateOrConnectWithoutBidsInput;
    connect?: JobWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobAssignmentCreateNestedOneWithoutAcceptedBidInput = {
    create?: XOR<
      JobAssignmentCreateWithoutAcceptedBidInput,
      JobAssignmentUncheckedCreateWithoutAcceptedBidInput
    >;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutAcceptedBidInput;
    connect?: JobAssignmentWhereUniqueInput;
  };

  export type JobAssignmentUncheckedCreateNestedOneWithoutAcceptedBidInput = {
    create?: XOR<
      JobAssignmentCreateWithoutAcceptedBidInput,
      JobAssignmentUncheckedCreateWithoutAcceptedBidInput
    >;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutAcceptedBidInput;
    connect?: JobAssignmentWhereUniqueInput;
  };

  export type JobUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<JobCreateWithoutBidsInput, JobUncheckedCreateWithoutBidsInput>;
    connectOrCreate?: JobCreateOrConnectWithoutBidsInput;
    upsert?: JobUpsertWithoutBidsInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<JobUpdateToOneWithWhereWithoutBidsInput, JobUpdateWithoutBidsInput>,
      JobUncheckedUpdateWithoutBidsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput;
    upsert?: UserUpsertWithoutBidsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>,
      UserUncheckedUpdateWithoutBidsInput
    >;
  };

  export type JobAssignmentUpdateOneWithoutAcceptedBidNestedInput = {
    create?: XOR<
      JobAssignmentCreateWithoutAcceptedBidInput,
      JobAssignmentUncheckedCreateWithoutAcceptedBidInput
    >;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutAcceptedBidInput;
    upsert?: JobAssignmentUpsertWithoutAcceptedBidInput;
    disconnect?: JobAssignmentWhereInput | boolean;
    delete?: JobAssignmentWhereInput | boolean;
    connect?: JobAssignmentWhereUniqueInput;
    update?: XOR<
      XOR<
        JobAssignmentUpdateToOneWithWhereWithoutAcceptedBidInput,
        JobAssignmentUpdateWithoutAcceptedBidInput
      >,
      JobAssignmentUncheckedUpdateWithoutAcceptedBidInput
    >;
  };

  export type JobAssignmentUncheckedUpdateOneWithoutAcceptedBidNestedInput = {
    create?: XOR<
      JobAssignmentCreateWithoutAcceptedBidInput,
      JobAssignmentUncheckedCreateWithoutAcceptedBidInput
    >;
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutAcceptedBidInput;
    upsert?: JobAssignmentUpsertWithoutAcceptedBidInput;
    disconnect?: JobAssignmentWhereInput | boolean;
    delete?: JobAssignmentWhereInput | boolean;
    connect?: JobAssignmentWhereUniqueInput;
    update?: XOR<
      XOR<
        JobAssignmentUpdateToOneWithWhereWithoutAcceptedBidInput,
        JobAssignmentUpdateWithoutAcceptedBidInput
      >,
      JobAssignmentUncheckedUpdateWithoutAcceptedBidInput
    >;
  };

  export type JobCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<JobCreateWithoutAssignmentInput, JobUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: JobCreateOrConnectWithoutAssignmentInput;
    connect?: JobWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutJobAssignmentsAsCustomerInput = {
    create?: XOR<
      UserCreateWithoutJobAssignmentsAsCustomerInput,
      UserUncheckedCreateWithoutJobAssignmentsAsCustomerInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobAssignmentsAsCustomerInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutJobAssignmentsAsProviderInput = {
    create?: XOR<
      UserCreateWithoutJobAssignmentsAsProviderInput,
      UserUncheckedCreateWithoutJobAssignmentsAsProviderInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobAssignmentsAsProviderInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobBidCreateNestedOneWithoutAcceptedAssignmentInput = {
    create?: XOR<
      JobBidCreateWithoutAcceptedAssignmentInput,
      JobBidUncheckedCreateWithoutAcceptedAssignmentInput
    >;
    connectOrCreate?: JobBidCreateOrConnectWithoutAcceptedAssignmentInput;
    connect?: JobBidWhereUniqueInput;
  };

  export type JobUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<JobCreateWithoutAssignmentInput, JobUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: JobCreateOrConnectWithoutAssignmentInput;
    upsert?: JobUpsertWithoutAssignmentInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<JobUpdateToOneWithWhereWithoutAssignmentInput, JobUpdateWithoutAssignmentInput>,
      JobUncheckedUpdateWithoutAssignmentInput
    >;
  };

  export type UserUpdateOneRequiredWithoutJobAssignmentsAsCustomerNestedInput = {
    create?: XOR<
      UserCreateWithoutJobAssignmentsAsCustomerInput,
      UserUncheckedCreateWithoutJobAssignmentsAsCustomerInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobAssignmentsAsCustomerInput;
    upsert?: UserUpsertWithoutJobAssignmentsAsCustomerInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutJobAssignmentsAsCustomerInput,
        UserUpdateWithoutJobAssignmentsAsCustomerInput
      >,
      UserUncheckedUpdateWithoutJobAssignmentsAsCustomerInput
    >;
  };

  export type UserUpdateOneRequiredWithoutJobAssignmentsAsProviderNestedInput = {
    create?: XOR<
      UserCreateWithoutJobAssignmentsAsProviderInput,
      UserUncheckedCreateWithoutJobAssignmentsAsProviderInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobAssignmentsAsProviderInput;
    upsert?: UserUpsertWithoutJobAssignmentsAsProviderInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutJobAssignmentsAsProviderInput,
        UserUpdateWithoutJobAssignmentsAsProviderInput
      >,
      UserUncheckedUpdateWithoutJobAssignmentsAsProviderInput
    >;
  };

  export type JobBidUpdateOneWithoutAcceptedAssignmentNestedInput = {
    create?: XOR<
      JobBidCreateWithoutAcceptedAssignmentInput,
      JobBidUncheckedCreateWithoutAcceptedAssignmentInput
    >;
    connectOrCreate?: JobBidCreateOrConnectWithoutAcceptedAssignmentInput;
    upsert?: JobBidUpsertWithoutAcceptedAssignmentInput;
    disconnect?: JobBidWhereInput | boolean;
    delete?: JobBidWhereInput | boolean;
    connect?: JobBidWhereUniqueInput;
    update?: XOR<
      XOR<
        JobBidUpdateToOneWithWhereWithoutAcceptedAssignmentInput,
        JobBidUpdateWithoutAcceptedAssignmentInput
      >,
      JobBidUncheckedUpdateWithoutAcceptedAssignmentInput
    >;
  };

  export type JobCreateNestedOneWithoutConversationInput = {
    create?: XOR<JobCreateWithoutConversationInput, JobUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: JobCreateOrConnectWithoutConversationInput;
    connect?: JobWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutCustomerConversationsInput = {
    create?: XOR<
      UserCreateWithoutCustomerConversationsInput,
      UserUncheckedCreateWithoutCustomerConversationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCustomerConversationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutProviderConversationsInput = {
    create?: XOR<
      UserCreateWithoutProviderConversationsInput,
      UserUncheckedCreateWithoutProviderConversationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProviderConversationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?:
      | XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
      | MessageCreateWithoutConversationInput[]
      | MessageUncheckedCreateWithoutConversationInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutConversationInput
      | MessageCreateOrConnectWithoutConversationInput[];
    createMany?: MessageCreateManyConversationInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?:
      | XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
      | MessageCreateWithoutConversationInput[]
      | MessageUncheckedCreateWithoutConversationInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutConversationInput
      | MessageCreateOrConnectWithoutConversationInput[];
    createMany?: MessageCreateManyConversationInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type JobUpdateOneRequiredWithoutConversationNestedInput = {
    create?: XOR<JobCreateWithoutConversationInput, JobUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: JobCreateOrConnectWithoutConversationInput;
    upsert?: JobUpsertWithoutConversationInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<JobUpdateToOneWithWhereWithoutConversationInput, JobUpdateWithoutConversationInput>,
      JobUncheckedUpdateWithoutConversationInput
    >;
  };

  export type UserUpdateOneRequiredWithoutCustomerConversationsNestedInput = {
    create?: XOR<
      UserCreateWithoutCustomerConversationsInput,
      UserUncheckedCreateWithoutCustomerConversationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCustomerConversationsInput;
    upsert?: UserUpsertWithoutCustomerConversationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCustomerConversationsInput,
        UserUpdateWithoutCustomerConversationsInput
      >,
      UserUncheckedUpdateWithoutCustomerConversationsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutProviderConversationsNestedInput = {
    create?: XOR<
      UserCreateWithoutProviderConversationsInput,
      UserUncheckedCreateWithoutProviderConversationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProviderConversationsInput;
    upsert?: UserUpsertWithoutProviderConversationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProviderConversationsInput,
        UserUpdateWithoutProviderConversationsInput
      >,
      UserUncheckedUpdateWithoutProviderConversationsInput
    >;
  };

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?:
      | XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
      | MessageCreateWithoutConversationInput[]
      | MessageUncheckedCreateWithoutConversationInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutConversationInput
      | MessageCreateOrConnectWithoutConversationInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutConversationInput
      | MessageUpsertWithWhereUniqueWithoutConversationInput[];
    createMany?: MessageCreateManyConversationInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutConversationInput
      | MessageUpdateWithWhereUniqueWithoutConversationInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutConversationInput
      | MessageUpdateManyWithWhereWithoutConversationInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?:
      | XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
      | MessageCreateWithoutConversationInput[]
      | MessageUncheckedCreateWithoutConversationInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutConversationInput
      | MessageCreateOrConnectWithoutConversationInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutConversationInput
      | MessageUpsertWithWhereUniqueWithoutConversationInput[];
    createMany?: MessageCreateManyConversationInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutConversationInput
      | MessageUpdateWithWhereUniqueWithoutConversationInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutConversationInput
      | MessageUpdateManyWithWhereWithoutConversationInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      ConversationCreateWithoutMessagesInput,
      ConversationUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput;
    connect?: ConversationWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>;
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      ConversationCreateWithoutMessagesInput,
      ConversationUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput;
    upsert?: ConversationUpsertWithoutMessagesInput;
    connect?: ConversationWhereUniqueInput;
    update?: XOR<
      XOR<
        ConversationUpdateToOneWithWhereWithoutMessagesInput,
        ConversationUpdateWithoutMessagesInput
      >,
      ConversationUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>;
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput;
    upsert?: UserUpsertWithoutSentMessagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>,
      UserUncheckedUpdateWithoutSentMessagesInput
    >;
  };

  export type JobCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<JobCreateWithoutStatusHistoryInput, JobUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: JobCreateOrConnectWithoutStatusHistoryInput;
    connect?: JobWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutJobStatusHistoriesInput = {
    create?: XOR<
      UserCreateWithoutJobStatusHistoriesInput,
      UserUncheckedCreateWithoutJobStatusHistoriesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobStatusHistoriesInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<JobCreateWithoutStatusHistoryInput, JobUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: JobCreateOrConnectWithoutStatusHistoryInput;
    upsert?: JobUpsertWithoutStatusHistoryInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<JobUpdateToOneWithWhereWithoutStatusHistoryInput, JobUpdateWithoutStatusHistoryInput>,
      JobUncheckedUpdateWithoutStatusHistoryInput
    >;
  };

  export type UserUpdateOneWithoutJobStatusHistoriesNestedInput = {
    create?: XOR<
      UserCreateWithoutJobStatusHistoriesInput,
      UserUncheckedCreateWithoutJobStatusHistoriesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobStatusHistoriesInput;
    upsert?: UserUpsertWithoutJobStatusHistoriesInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutJobStatusHistoriesInput,
        UserUpdateWithoutJobStatusHistoriesInput
      >,
      UserUncheckedUpdateWithoutJobStatusHistoriesInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ProviderProfileCreateWithoutUserInput = {
    id?: string;
    businessName?: string | null;
    bio?: string | null;
    yearsExperience?: number | null;
    serviceAreaText?: string | null;
    suburb?: string | null;
    state?: string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProviderProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    businessName?: string | null;
    bio?: string | null;
    yearsExperience?: number | null;
    serviceAreaText?: string | null;
    suburb?: string | null;
    state?: string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProviderProfileCreateOrConnectWithoutUserInput = {
    where: ProviderProfileWhereUniqueInput;
    create: XOR<
      ProviderProfileCreateWithoutUserInput,
      ProviderProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type JobCreateWithoutCustomerInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutCustomerInput = {
    id?: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutCustomerInput = {
    where: JobWhereUniqueInput;
    create: XOR<JobCreateWithoutCustomerInput, JobUncheckedCreateWithoutCustomerInput>;
  };

  export type JobCreateManyCustomerInputEnvelope = {
    data: JobCreateManyCustomerInput | JobCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type JobCreateWithoutAssignedProviderInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutAssignedProviderInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutAssignedProviderInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutAssignedProviderInput,
      JobUncheckedCreateWithoutAssignedProviderInput
    >;
  };

  export type JobCreateManyAssignedProviderInputEnvelope = {
    data: JobCreateManyAssignedProviderInput | JobCreateManyAssignedProviderInput[];
    skipDuplicates?: boolean;
  };

  export type ProviderServiceCreateWithoutProviderInput = {
    id?: string;
    createdAt?: Date | string;
    category: ServiceCategoryCreateNestedOneWithoutProviderServicesInput;
  };

  export type ProviderServiceUncheckedCreateWithoutProviderInput = {
    id?: string;
    categoryId: string;
    createdAt?: Date | string;
  };

  export type ProviderServiceCreateOrConnectWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput;
    create: XOR<
      ProviderServiceCreateWithoutProviderInput,
      ProviderServiceUncheckedCreateWithoutProviderInput
    >;
  };

  export type ProviderServiceCreateManyProviderInputEnvelope = {
    data: ProviderServiceCreateManyProviderInput | ProviderServiceCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type JobBidCreateWithoutProviderInput = {
    id?: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    job: JobCreateNestedOneWithoutBidsInput;
    acceptedAssignment?: JobAssignmentCreateNestedOneWithoutAcceptedBidInput;
  };

  export type JobBidUncheckedCreateWithoutProviderInput = {
    id?: string;
    jobId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    acceptedAssignment?: JobAssignmentUncheckedCreateNestedOneWithoutAcceptedBidInput;
  };

  export type JobBidCreateOrConnectWithoutProviderInput = {
    where: JobBidWhereUniqueInput;
    create: XOR<JobBidCreateWithoutProviderInput, JobBidUncheckedCreateWithoutProviderInput>;
  };

  export type JobBidCreateManyProviderInputEnvelope = {
    data: JobBidCreateManyProviderInput | JobBidCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type JobAssignmentCreateWithoutCustomerInput = {
    id?: string;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    job: JobCreateNestedOneWithoutAssignmentInput;
    provider: UserCreateNestedOneWithoutJobAssignmentsAsProviderInput;
    acceptedBid?: JobBidCreateNestedOneWithoutAcceptedAssignmentInput;
  };

  export type JobAssignmentUncheckedCreateWithoutCustomerInput = {
    id?: string;
    jobId: string;
    providerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentCreateOrConnectWithoutCustomerInput = {
    where: JobAssignmentWhereUniqueInput;
    create: XOR<
      JobAssignmentCreateWithoutCustomerInput,
      JobAssignmentUncheckedCreateWithoutCustomerInput
    >;
  };

  export type JobAssignmentCreateManyCustomerInputEnvelope = {
    data: JobAssignmentCreateManyCustomerInput | JobAssignmentCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type JobAssignmentCreateWithoutProviderInput = {
    id?: string;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    job: JobCreateNestedOneWithoutAssignmentInput;
    customer: UserCreateNestedOneWithoutJobAssignmentsAsCustomerInput;
    acceptedBid?: JobBidCreateNestedOneWithoutAcceptedAssignmentInput;
  };

  export type JobAssignmentUncheckedCreateWithoutProviderInput = {
    id?: string;
    jobId: string;
    customerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentCreateOrConnectWithoutProviderInput = {
    where: JobAssignmentWhereUniqueInput;
    create: XOR<
      JobAssignmentCreateWithoutProviderInput,
      JobAssignmentUncheckedCreateWithoutProviderInput
    >;
  };

  export type JobAssignmentCreateManyProviderInputEnvelope = {
    data: JobAssignmentCreateManyProviderInput | JobAssignmentCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type ConversationCreateWithoutCustomerInput = {
    id?: string;
    createdAt?: Date | string;
    job: JobCreateNestedOneWithoutConversationInput;
    provider: UserCreateNestedOneWithoutProviderConversationsInput;
    messages?: MessageCreateNestedManyWithoutConversationInput;
  };

  export type ConversationUncheckedCreateWithoutCustomerInput = {
    id?: string;
    jobId: string;
    providerId: string;
    createdAt?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput;
  };

  export type ConversationCreateOrConnectWithoutCustomerInput = {
    where: ConversationWhereUniqueInput;
    create: XOR<
      ConversationCreateWithoutCustomerInput,
      ConversationUncheckedCreateWithoutCustomerInput
    >;
  };

  export type ConversationCreateManyCustomerInputEnvelope = {
    data: ConversationCreateManyCustomerInput | ConversationCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type ConversationCreateWithoutProviderInput = {
    id?: string;
    createdAt?: Date | string;
    job: JobCreateNestedOneWithoutConversationInput;
    customer: UserCreateNestedOneWithoutCustomerConversationsInput;
    messages?: MessageCreateNestedManyWithoutConversationInput;
  };

  export type ConversationUncheckedCreateWithoutProviderInput = {
    id?: string;
    jobId: string;
    customerId: string;
    createdAt?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput;
  };

  export type ConversationCreateOrConnectWithoutProviderInput = {
    where: ConversationWhereUniqueInput;
    create: XOR<
      ConversationCreateWithoutProviderInput,
      ConversationUncheckedCreateWithoutProviderInput
    >;
  };

  export type ConversationCreateManyProviderInputEnvelope = {
    data: ConversationCreateManyProviderInput | ConversationCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutSenderInput = {
    id?: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
    conversation: ConversationCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string;
    conversationId: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
  };

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput;
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>;
  };

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[];
    skipDuplicates?: boolean;
  };

  export type JobStatusHistoryCreateWithoutChangedByUserInput = {
    id?: string;
    oldStatus?: string | null;
    newStatus: string;
    note?: string | null;
    createdAt?: Date | string;
    job: JobCreateNestedOneWithoutStatusHistoryInput;
  };

  export type JobStatusHistoryUncheckedCreateWithoutChangedByUserInput = {
    id?: string;
    jobId: string;
    oldStatus?: string | null;
    newStatus: string;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type JobStatusHistoryCreateOrConnectWithoutChangedByUserInput = {
    where: JobStatusHistoryWhereUniqueInput;
    create: XOR<
      JobStatusHistoryCreateWithoutChangedByUserInput,
      JobStatusHistoryUncheckedCreateWithoutChangedByUserInput
    >;
  };

  export type JobStatusHistoryCreateManyChangedByUserInputEnvelope = {
    data:
      | JobStatusHistoryCreateManyChangedByUserInput
      | JobStatusHistoryCreateManyChangedByUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProviderProfileUpsertWithoutUserInput = {
    update: XOR<
      ProviderProfileUpdateWithoutUserInput,
      ProviderProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProviderProfileCreateWithoutUserInput,
      ProviderProfileUncheckedCreateWithoutUserInput
    >;
    where?: ProviderProfileWhereInput;
  };

  export type ProviderProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProviderProfileWhereInput;
    data: XOR<
      ProviderProfileUpdateWithoutUserInput,
      ProviderProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProviderProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessName?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null;
    serviceAreaText?: NullableStringFieldUpdateOperationsInput | string | null;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessName?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null;
    serviceAreaText?: NullableStringFieldUpdateOperationsInput | string | null;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUpsertWithWhereUniqueWithoutCustomerInput = {
    where: JobWhereUniqueInput;
    update: XOR<JobUpdateWithoutCustomerInput, JobUncheckedUpdateWithoutCustomerInput>;
    create: XOR<JobCreateWithoutCustomerInput, JobUncheckedCreateWithoutCustomerInput>;
  };

  export type JobUpdateWithWhereUniqueWithoutCustomerInput = {
    where: JobWhereUniqueInput;
    data: XOR<JobUpdateWithoutCustomerInput, JobUncheckedUpdateWithoutCustomerInput>;
  };

  export type JobUpdateManyWithWhereWithoutCustomerInput = {
    where: JobScalarWhereInput;
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCustomerInput>;
  };

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[];
    OR?: JobScalarWhereInput[];
    NOT?: JobScalarWhereInput | JobScalarWhereInput[];
    id?: UuidFilter<'Job'> | string;
    customerId?: UuidFilter<'Job'> | string;
    categoryId?: UuidFilter<'Job'> | string;
    title?: StringFilter<'Job'> | string;
    description?: StringFilter<'Job'> | string;
    locationText?: StringFilter<'Job'> | string;
    suburb?: StringNullableFilter<'Job'> | string | null;
    state?: StringNullableFilter<'Job'> | string | null;
    latitude?: FloatNullableFilter<'Job'> | number | null;
    longitude?: FloatNullableFilter<'Job'> | number | null;
    preferredDate?: DateTimeNullableFilter<'Job'> | Date | string | null;
    status?: StringFilter<'Job'> | string;
    assignedProviderId?: UuidNullableFilter<'Job'> | string | null;
    createdAt?: DateTimeFilter<'Job'> | Date | string;
    updatedAt?: DateTimeFilter<'Job'> | Date | string;
  };

  export type JobUpsertWithWhereUniqueWithoutAssignedProviderInput = {
    where: JobWhereUniqueInput;
    update: XOR<
      JobUpdateWithoutAssignedProviderInput,
      JobUncheckedUpdateWithoutAssignedProviderInput
    >;
    create: XOR<
      JobCreateWithoutAssignedProviderInput,
      JobUncheckedCreateWithoutAssignedProviderInput
    >;
  };

  export type JobUpdateWithWhereUniqueWithoutAssignedProviderInput = {
    where: JobWhereUniqueInput;
    data: XOR<
      JobUpdateWithoutAssignedProviderInput,
      JobUncheckedUpdateWithoutAssignedProviderInput
    >;
  };

  export type JobUpdateManyWithWhereWithoutAssignedProviderInput = {
    where: JobScalarWhereInput;
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutAssignedProviderInput>;
  };

  export type ProviderServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput;
    update: XOR<
      ProviderServiceUpdateWithoutProviderInput,
      ProviderServiceUncheckedUpdateWithoutProviderInput
    >;
    create: XOR<
      ProviderServiceCreateWithoutProviderInput,
      ProviderServiceUncheckedCreateWithoutProviderInput
    >;
  };

  export type ProviderServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput;
    data: XOR<
      ProviderServiceUpdateWithoutProviderInput,
      ProviderServiceUncheckedUpdateWithoutProviderInput
    >;
  };

  export type ProviderServiceUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderServiceScalarWhereInput;
    data: XOR<
      ProviderServiceUpdateManyMutationInput,
      ProviderServiceUncheckedUpdateManyWithoutProviderInput
    >;
  };

  export type ProviderServiceScalarWhereInput = {
    AND?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[];
    OR?: ProviderServiceScalarWhereInput[];
    NOT?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[];
    id?: UuidFilter<'ProviderService'> | string;
    providerId?: UuidFilter<'ProviderService'> | string;
    categoryId?: UuidFilter<'ProviderService'> | string;
    createdAt?: DateTimeFilter<'ProviderService'> | Date | string;
  };

  export type JobBidUpsertWithWhereUniqueWithoutProviderInput = {
    where: JobBidWhereUniqueInput;
    update: XOR<JobBidUpdateWithoutProviderInput, JobBidUncheckedUpdateWithoutProviderInput>;
    create: XOR<JobBidCreateWithoutProviderInput, JobBidUncheckedCreateWithoutProviderInput>;
  };

  export type JobBidUpdateWithWhereUniqueWithoutProviderInput = {
    where: JobBidWhereUniqueInput;
    data: XOR<JobBidUpdateWithoutProviderInput, JobBidUncheckedUpdateWithoutProviderInput>;
  };

  export type JobBidUpdateManyWithWhereWithoutProviderInput = {
    where: JobBidScalarWhereInput;
    data: XOR<JobBidUpdateManyMutationInput, JobBidUncheckedUpdateManyWithoutProviderInput>;
  };

  export type JobBidScalarWhereInput = {
    AND?: JobBidScalarWhereInput | JobBidScalarWhereInput[];
    OR?: JobBidScalarWhereInput[];
    NOT?: JobBidScalarWhereInput | JobBidScalarWhereInput[];
    id?: UuidFilter<'JobBid'> | string;
    jobId?: UuidFilter<'JobBid'> | string;
    providerId?: UuidFilter<'JobBid'> | string;
    bidAmount?: FloatNullableFilter<'JobBid'> | number | null;
    message?: StringNullableFilter<'JobBid'> | string | null;
    estimatedArrivalHours?: IntNullableFilter<'JobBid'> | number | null;
    status?: StringFilter<'JobBid'> | string;
    createdAt?: DateTimeFilter<'JobBid'> | Date | string;
    updatedAt?: DateTimeFilter<'JobBid'> | Date | string;
  };

  export type JobAssignmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: JobAssignmentWhereUniqueInput;
    update: XOR<
      JobAssignmentUpdateWithoutCustomerInput,
      JobAssignmentUncheckedUpdateWithoutCustomerInput
    >;
    create: XOR<
      JobAssignmentCreateWithoutCustomerInput,
      JobAssignmentUncheckedCreateWithoutCustomerInput
    >;
  };

  export type JobAssignmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: JobAssignmentWhereUniqueInput;
    data: XOR<
      JobAssignmentUpdateWithoutCustomerInput,
      JobAssignmentUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type JobAssignmentUpdateManyWithWhereWithoutCustomerInput = {
    where: JobAssignmentScalarWhereInput;
    data: XOR<
      JobAssignmentUpdateManyMutationInput,
      JobAssignmentUncheckedUpdateManyWithoutCustomerInput
    >;
  };

  export type JobAssignmentScalarWhereInput = {
    AND?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[];
    OR?: JobAssignmentScalarWhereInput[];
    NOT?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[];
    id?: UuidFilter<'JobAssignment'> | string;
    jobId?: UuidFilter<'JobAssignment'> | string;
    customerId?: UuidFilter<'JobAssignment'> | string;
    providerId?: UuidFilter<'JobAssignment'> | string;
    acceptedBidId?: UuidNullableFilter<'JobAssignment'> | string | null;
    assignedAt?: DateTimeFilter<'JobAssignment'> | Date | string;
    completedAt?: DateTimeNullableFilter<'JobAssignment'> | Date | string | null;
  };

  export type JobAssignmentUpsertWithWhereUniqueWithoutProviderInput = {
    where: JobAssignmentWhereUniqueInput;
    update: XOR<
      JobAssignmentUpdateWithoutProviderInput,
      JobAssignmentUncheckedUpdateWithoutProviderInput
    >;
    create: XOR<
      JobAssignmentCreateWithoutProviderInput,
      JobAssignmentUncheckedCreateWithoutProviderInput
    >;
  };

  export type JobAssignmentUpdateWithWhereUniqueWithoutProviderInput = {
    where: JobAssignmentWhereUniqueInput;
    data: XOR<
      JobAssignmentUpdateWithoutProviderInput,
      JobAssignmentUncheckedUpdateWithoutProviderInput
    >;
  };

  export type JobAssignmentUpdateManyWithWhereWithoutProviderInput = {
    where: JobAssignmentScalarWhereInput;
    data: XOR<
      JobAssignmentUpdateManyMutationInput,
      JobAssignmentUncheckedUpdateManyWithoutProviderInput
    >;
  };

  export type ConversationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ConversationWhereUniqueInput;
    update: XOR<
      ConversationUpdateWithoutCustomerInput,
      ConversationUncheckedUpdateWithoutCustomerInput
    >;
    create: XOR<
      ConversationCreateWithoutCustomerInput,
      ConversationUncheckedCreateWithoutCustomerInput
    >;
  };

  export type ConversationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ConversationWhereUniqueInput;
    data: XOR<
      ConversationUpdateWithoutCustomerInput,
      ConversationUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type ConversationUpdateManyWithWhereWithoutCustomerInput = {
    where: ConversationScalarWhereInput;
    data: XOR<
      ConversationUpdateManyMutationInput,
      ConversationUncheckedUpdateManyWithoutCustomerInput
    >;
  };

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[];
    OR?: ConversationScalarWhereInput[];
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[];
    id?: UuidFilter<'Conversation'> | string;
    jobId?: UuidFilter<'Conversation'> | string;
    customerId?: UuidFilter<'Conversation'> | string;
    providerId?: UuidFilter<'Conversation'> | string;
    createdAt?: DateTimeFilter<'Conversation'> | Date | string;
  };

  export type ConversationUpsertWithWhereUniqueWithoutProviderInput = {
    where: ConversationWhereUniqueInput;
    update: XOR<
      ConversationUpdateWithoutProviderInput,
      ConversationUncheckedUpdateWithoutProviderInput
    >;
    create: XOR<
      ConversationCreateWithoutProviderInput,
      ConversationUncheckedCreateWithoutProviderInput
    >;
  };

  export type ConversationUpdateWithWhereUniqueWithoutProviderInput = {
    where: ConversationWhereUniqueInput;
    data: XOR<
      ConversationUpdateWithoutProviderInput,
      ConversationUncheckedUpdateWithoutProviderInput
    >;
  };

  export type ConversationUpdateManyWithWhereWithoutProviderInput = {
    where: ConversationScalarWhereInput;
    data: XOR<
      ConversationUpdateManyMutationInput,
      ConversationUncheckedUpdateManyWithoutProviderInput
    >;
  };

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput;
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>;
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>;
  };

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput;
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>;
  };

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput;
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>;
  };

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[];
    OR?: MessageScalarWhereInput[];
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[];
    id?: UuidFilter<'Message'> | string;
    conversationId?: UuidFilter<'Message'> | string;
    senderId?: UuidFilter<'Message'> | string;
    messageText?: StringFilter<'Message'> | string;
    isRead?: BoolFilter<'Message'> | boolean;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
  };

  export type JobStatusHistoryUpsertWithWhereUniqueWithoutChangedByUserInput = {
    where: JobStatusHistoryWhereUniqueInput;
    update: XOR<
      JobStatusHistoryUpdateWithoutChangedByUserInput,
      JobStatusHistoryUncheckedUpdateWithoutChangedByUserInput
    >;
    create: XOR<
      JobStatusHistoryCreateWithoutChangedByUserInput,
      JobStatusHistoryUncheckedCreateWithoutChangedByUserInput
    >;
  };

  export type JobStatusHistoryUpdateWithWhereUniqueWithoutChangedByUserInput = {
    where: JobStatusHistoryWhereUniqueInput;
    data: XOR<
      JobStatusHistoryUpdateWithoutChangedByUserInput,
      JobStatusHistoryUncheckedUpdateWithoutChangedByUserInput
    >;
  };

  export type JobStatusHistoryUpdateManyWithWhereWithoutChangedByUserInput = {
    where: JobStatusHistoryScalarWhereInput;
    data: XOR<
      JobStatusHistoryUpdateManyMutationInput,
      JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserInput
    >;
  };

  export type JobStatusHistoryScalarWhereInput = {
    AND?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[];
    OR?: JobStatusHistoryScalarWhereInput[];
    NOT?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[];
    id?: UuidFilter<'JobStatusHistory'> | string;
    jobId?: UuidFilter<'JobStatusHistory'> | string;
    oldStatus?: StringNullableFilter<'JobStatusHistory'> | string | null;
    newStatus?: StringFilter<'JobStatusHistory'> | string;
    changedBy?: UuidNullableFilter<'JobStatusHistory'> | string | null;
    note?: StringNullableFilter<'JobStatusHistory'> | string | null;
    createdAt?: DateTimeFilter<'JobStatusHistory'> | Date | string;
  };

  export type UserCreateWithoutProviderProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutProviderProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutProviderProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProviderProfileInput,
      UserUncheckedCreateWithoutProviderProfileInput
    >;
  };

  export type UserUpsertWithoutProviderProfileInput = {
    update: XOR<
      UserUpdateWithoutProviderProfileInput,
      UserUncheckedUpdateWithoutProviderProfileInput
    >;
    create: XOR<
      UserCreateWithoutProviderProfileInput,
      UserUncheckedCreateWithoutProviderProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProviderProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProviderProfileInput,
      UserUncheckedUpdateWithoutProviderProfileInput
    >;
  };

  export type UserUpdateWithoutProviderProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProviderProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type ProviderServiceCreateWithoutCategoryInput = {
    id?: string;
    createdAt?: Date | string;
    provider: UserCreateNestedOneWithoutProviderServicesInput;
  };

  export type ProviderServiceUncheckedCreateWithoutCategoryInput = {
    id?: string;
    providerId: string;
    createdAt?: Date | string;
  };

  export type ProviderServiceCreateOrConnectWithoutCategoryInput = {
    where: ProviderServiceWhereUniqueInput;
    create: XOR<
      ProviderServiceCreateWithoutCategoryInput,
      ProviderServiceUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ProviderServiceCreateManyCategoryInputEnvelope = {
    data: ProviderServiceCreateManyCategoryInput | ProviderServiceCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type JobCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutCategoryInput = {
    id?: string;
    customerId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutCategoryInput = {
    where: JobWhereUniqueInput;
    create: XOR<JobCreateWithoutCategoryInput, JobUncheckedCreateWithoutCategoryInput>;
  };

  export type JobCreateManyCategoryInputEnvelope = {
    data: JobCreateManyCategoryInput | JobCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type ProviderServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProviderServiceWhereUniqueInput;
    update: XOR<
      ProviderServiceUpdateWithoutCategoryInput,
      ProviderServiceUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      ProviderServiceCreateWithoutCategoryInput,
      ProviderServiceUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ProviderServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProviderServiceWhereUniqueInput;
    data: XOR<
      ProviderServiceUpdateWithoutCategoryInput,
      ProviderServiceUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ProviderServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ProviderServiceScalarWhereInput;
    data: XOR<
      ProviderServiceUpdateManyMutationInput,
      ProviderServiceUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type JobUpsertWithWhereUniqueWithoutCategoryInput = {
    where: JobWhereUniqueInput;
    update: XOR<JobUpdateWithoutCategoryInput, JobUncheckedUpdateWithoutCategoryInput>;
    create: XOR<JobCreateWithoutCategoryInput, JobUncheckedCreateWithoutCategoryInput>;
  };

  export type JobUpdateWithWhereUniqueWithoutCategoryInput = {
    where: JobWhereUniqueInput;
    data: XOR<JobUpdateWithoutCategoryInput, JobUncheckedUpdateWithoutCategoryInput>;
  };

  export type JobUpdateManyWithWhereWithoutCategoryInput = {
    where: JobScalarWhereInput;
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCategoryInput>;
  };

  export type UserCreateWithoutProviderServicesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutProviderServicesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutProviderServicesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProviderServicesInput,
      UserUncheckedCreateWithoutProviderServicesInput
    >;
  };

  export type ServiceCategoryCreateWithoutProviderServicesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    jobs?: JobCreateNestedManyWithoutCategoryInput;
  };

  export type ServiceCategoryUncheckedCreateWithoutProviderServicesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    jobs?: JobUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type ServiceCategoryCreateOrConnectWithoutProviderServicesInput = {
    where: ServiceCategoryWhereUniqueInput;
    create: XOR<
      ServiceCategoryCreateWithoutProviderServicesInput,
      ServiceCategoryUncheckedCreateWithoutProviderServicesInput
    >;
  };

  export type UserUpsertWithoutProviderServicesInput = {
    update: XOR<
      UserUpdateWithoutProviderServicesInput,
      UserUncheckedUpdateWithoutProviderServicesInput
    >;
    create: XOR<
      UserCreateWithoutProviderServicesInput,
      UserUncheckedCreateWithoutProviderServicesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProviderServicesInput,
      UserUncheckedUpdateWithoutProviderServicesInput
    >;
  };

  export type UserUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type ServiceCategoryUpsertWithoutProviderServicesInput = {
    update: XOR<
      ServiceCategoryUpdateWithoutProviderServicesInput,
      ServiceCategoryUncheckedUpdateWithoutProviderServicesInput
    >;
    create: XOR<
      ServiceCategoryCreateWithoutProviderServicesInput,
      ServiceCategoryUncheckedCreateWithoutProviderServicesInput
    >;
    where?: ServiceCategoryWhereInput;
  };

  export type ServiceCategoryUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: ServiceCategoryWhereInput;
    data: XOR<
      ServiceCategoryUpdateWithoutProviderServicesInput,
      ServiceCategoryUncheckedUpdateWithoutProviderServicesInput
    >;
  };

  export type ServiceCategoryUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUpdateManyWithoutCategoryNestedInput;
  };

  export type ServiceCategoryUncheckedUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type UserCreateWithoutCustomerJobsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutCustomerJobsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutCustomerJobsInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutCustomerJobsInput, UserUncheckedCreateWithoutCustomerJobsInput>;
  };

  export type UserCreateWithoutAssignedJobsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutAssignedJobsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutAssignedJobsInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>;
  };

  export type ServiceCategoryCreateWithoutJobsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    providerServices?: ProviderServiceCreateNestedManyWithoutCategoryInput;
  };

  export type ServiceCategoryUncheckedCreateWithoutJobsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type ServiceCategoryCreateOrConnectWithoutJobsInput = {
    where: ServiceCategoryWhereUniqueInput;
    create: XOR<
      ServiceCategoryCreateWithoutJobsInput,
      ServiceCategoryUncheckedCreateWithoutJobsInput
    >;
  };

  export type JobBidCreateWithoutJobInput = {
    id?: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    provider: UserCreateNestedOneWithoutBidsInput;
    acceptedAssignment?: JobAssignmentCreateNestedOneWithoutAcceptedBidInput;
  };

  export type JobBidUncheckedCreateWithoutJobInput = {
    id?: string;
    providerId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    acceptedAssignment?: JobAssignmentUncheckedCreateNestedOneWithoutAcceptedBidInput;
  };

  export type JobBidCreateOrConnectWithoutJobInput = {
    where: JobBidWhereUniqueInput;
    create: XOR<JobBidCreateWithoutJobInput, JobBidUncheckedCreateWithoutJobInput>;
  };

  export type JobBidCreateManyJobInputEnvelope = {
    data: JobBidCreateManyJobInput | JobBidCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type JobAssignmentCreateWithoutJobInput = {
    id?: string;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    customer: UserCreateNestedOneWithoutJobAssignmentsAsCustomerInput;
    provider: UserCreateNestedOneWithoutJobAssignmentsAsProviderInput;
    acceptedBid?: JobBidCreateNestedOneWithoutAcceptedAssignmentInput;
  };

  export type JobAssignmentUncheckedCreateWithoutJobInput = {
    id?: string;
    customerId: string;
    providerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentCreateOrConnectWithoutJobInput = {
    where: JobAssignmentWhereUniqueInput;
    create: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>;
  };

  export type ConversationCreateWithoutJobInput = {
    id?: string;
    createdAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerConversationsInput;
    provider: UserCreateNestedOneWithoutProviderConversationsInput;
    messages?: MessageCreateNestedManyWithoutConversationInput;
  };

  export type ConversationUncheckedCreateWithoutJobInput = {
    id?: string;
    customerId: string;
    providerId: string;
    createdAt?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput;
  };

  export type ConversationCreateOrConnectWithoutJobInput = {
    where: ConversationWhereUniqueInput;
    create: XOR<ConversationCreateWithoutJobInput, ConversationUncheckedCreateWithoutJobInput>;
  };

  export type JobStatusHistoryCreateWithoutJobInput = {
    id?: string;
    oldStatus?: string | null;
    newStatus: string;
    note?: string | null;
    createdAt?: Date | string;
    changedByUser?: UserCreateNestedOneWithoutJobStatusHistoriesInput;
  };

  export type JobStatusHistoryUncheckedCreateWithoutJobInput = {
    id?: string;
    oldStatus?: string | null;
    newStatus: string;
    changedBy?: string | null;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type JobStatusHistoryCreateOrConnectWithoutJobInput = {
    where: JobStatusHistoryWhereUniqueInput;
    create: XOR<
      JobStatusHistoryCreateWithoutJobInput,
      JobStatusHistoryUncheckedCreateWithoutJobInput
    >;
  };

  export type JobStatusHistoryCreateManyJobInputEnvelope = {
    data: JobStatusHistoryCreateManyJobInput | JobStatusHistoryCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCustomerJobsInput = {
    update: XOR<UserUpdateWithoutCustomerJobsInput, UserUncheckedUpdateWithoutCustomerJobsInput>;
    create: XOR<UserCreateWithoutCustomerJobsInput, UserUncheckedCreateWithoutCustomerJobsInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCustomerJobsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutCustomerJobsInput, UserUncheckedUpdateWithoutCustomerJobsInput>;
  };

  export type UserUpdateWithoutCustomerJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCustomerJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUpsertWithoutAssignedJobsInput = {
    update: XOR<UserUpdateWithoutAssignedJobsInput, UserUncheckedUpdateWithoutAssignedJobsInput>;
    create: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAssignedJobsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutAssignedJobsInput, UserUncheckedUpdateWithoutAssignedJobsInput>;
  };

  export type UserUpdateWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type ServiceCategoryUpsertWithoutJobsInput = {
    update: XOR<
      ServiceCategoryUpdateWithoutJobsInput,
      ServiceCategoryUncheckedUpdateWithoutJobsInput
    >;
    create: XOR<
      ServiceCategoryCreateWithoutJobsInput,
      ServiceCategoryUncheckedCreateWithoutJobsInput
    >;
    where?: ServiceCategoryWhereInput;
  };

  export type ServiceCategoryUpdateToOneWithWhereWithoutJobsInput = {
    where?: ServiceCategoryWhereInput;
    data: XOR<
      ServiceCategoryUpdateWithoutJobsInput,
      ServiceCategoryUncheckedUpdateWithoutJobsInput
    >;
  };

  export type ServiceCategoryUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerServices?: ProviderServiceUpdateManyWithoutCategoryNestedInput;
  };

  export type ServiceCategoryUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type JobBidUpsertWithWhereUniqueWithoutJobInput = {
    where: JobBidWhereUniqueInput;
    update: XOR<JobBidUpdateWithoutJobInput, JobBidUncheckedUpdateWithoutJobInput>;
    create: XOR<JobBidCreateWithoutJobInput, JobBidUncheckedCreateWithoutJobInput>;
  };

  export type JobBidUpdateWithWhereUniqueWithoutJobInput = {
    where: JobBidWhereUniqueInput;
    data: XOR<JobBidUpdateWithoutJobInput, JobBidUncheckedUpdateWithoutJobInput>;
  };

  export type JobBidUpdateManyWithWhereWithoutJobInput = {
    where: JobBidScalarWhereInput;
    data: XOR<JobBidUpdateManyMutationInput, JobBidUncheckedUpdateManyWithoutJobInput>;
  };

  export type JobAssignmentUpsertWithoutJobInput = {
    update: XOR<JobAssignmentUpdateWithoutJobInput, JobAssignmentUncheckedUpdateWithoutJobInput>;
    create: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>;
    where?: JobAssignmentWhereInput;
  };

  export type JobAssignmentUpdateToOneWithWhereWithoutJobInput = {
    where?: JobAssignmentWhereInput;
    data: XOR<JobAssignmentUpdateWithoutJobInput, JobAssignmentUncheckedUpdateWithoutJobInput>;
  };

  export type JobAssignmentUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer?: UserUpdateOneRequiredWithoutJobAssignmentsAsCustomerNestedInput;
    provider?: UserUpdateOneRequiredWithoutJobAssignmentsAsProviderNestedInput;
    acceptedBid?: JobBidUpdateOneWithoutAcceptedAssignmentNestedInput;
  };

  export type JobAssignmentUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type ConversationUpsertWithoutJobInput = {
    update: XOR<ConversationUpdateWithoutJobInput, ConversationUncheckedUpdateWithoutJobInput>;
    create: XOR<ConversationCreateWithoutJobInput, ConversationUncheckedCreateWithoutJobInput>;
    where?: ConversationWhereInput;
  };

  export type ConversationUpdateToOneWithWhereWithoutJobInput = {
    where?: ConversationWhereInput;
    data: XOR<ConversationUpdateWithoutJobInput, ConversationUncheckedUpdateWithoutJobInput>;
  };

  export type ConversationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerConversationsNestedInput;
    provider?: UserUpdateOneRequiredWithoutProviderConversationsNestedInput;
    messages?: MessageUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput;
  };

  export type JobStatusHistoryUpsertWithWhereUniqueWithoutJobInput = {
    where: JobStatusHistoryWhereUniqueInput;
    update: XOR<
      JobStatusHistoryUpdateWithoutJobInput,
      JobStatusHistoryUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      JobStatusHistoryCreateWithoutJobInput,
      JobStatusHistoryUncheckedCreateWithoutJobInput
    >;
  };

  export type JobStatusHistoryUpdateWithWhereUniqueWithoutJobInput = {
    where: JobStatusHistoryWhereUniqueInput;
    data: XOR<
      JobStatusHistoryUpdateWithoutJobInput,
      JobStatusHistoryUncheckedUpdateWithoutJobInput
    >;
  };

  export type JobStatusHistoryUpdateManyWithWhereWithoutJobInput = {
    where: JobStatusHistoryScalarWhereInput;
    data: XOR<
      JobStatusHistoryUpdateManyMutationInput,
      JobStatusHistoryUncheckedUpdateManyWithoutJobInput
    >;
  };

  export type JobCreateWithoutBidsInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutBidsInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutBidsInput = {
    where: JobWhereUniqueInput;
    create: XOR<JobCreateWithoutBidsInput, JobUncheckedCreateWithoutBidsInput>;
  };

  export type UserCreateWithoutBidsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>;
  };

  export type JobAssignmentCreateWithoutAcceptedBidInput = {
    id?: string;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    job: JobCreateNestedOneWithoutAssignmentInput;
    customer: UserCreateNestedOneWithoutJobAssignmentsAsCustomerInput;
    provider: UserCreateNestedOneWithoutJobAssignmentsAsProviderInput;
  };

  export type JobAssignmentUncheckedCreateWithoutAcceptedBidInput = {
    id?: string;
    jobId: string;
    customerId: string;
    providerId: string;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentCreateOrConnectWithoutAcceptedBidInput = {
    where: JobAssignmentWhereUniqueInput;
    create: XOR<
      JobAssignmentCreateWithoutAcceptedBidInput,
      JobAssignmentUncheckedCreateWithoutAcceptedBidInput
    >;
  };

  export type JobUpsertWithoutBidsInput = {
    update: XOR<JobUpdateWithoutBidsInput, JobUncheckedUpdateWithoutBidsInput>;
    create: XOR<JobCreateWithoutBidsInput, JobUncheckedCreateWithoutBidsInput>;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutBidsInput = {
    where?: JobWhereInput;
    data: XOR<JobUpdateWithoutBidsInput, JobUncheckedUpdateWithoutBidsInput>;
  };

  export type JobUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>;
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>;
  };

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type JobAssignmentUpsertWithoutAcceptedBidInput = {
    update: XOR<
      JobAssignmentUpdateWithoutAcceptedBidInput,
      JobAssignmentUncheckedUpdateWithoutAcceptedBidInput
    >;
    create: XOR<
      JobAssignmentCreateWithoutAcceptedBidInput,
      JobAssignmentUncheckedCreateWithoutAcceptedBidInput
    >;
    where?: JobAssignmentWhereInput;
  };

  export type JobAssignmentUpdateToOneWithWhereWithoutAcceptedBidInput = {
    where?: JobAssignmentWhereInput;
    data: XOR<
      JobAssignmentUpdateWithoutAcceptedBidInput,
      JobAssignmentUncheckedUpdateWithoutAcceptedBidInput
    >;
  };

  export type JobAssignmentUpdateWithoutAcceptedBidInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    job?: JobUpdateOneRequiredWithoutAssignmentNestedInput;
    customer?: UserUpdateOneRequiredWithoutJobAssignmentsAsCustomerNestedInput;
    provider?: UserUpdateOneRequiredWithoutJobAssignmentsAsProviderNestedInput;
  };

  export type JobAssignmentUncheckedUpdateWithoutAcceptedBidInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type JobCreateWithoutAssignmentInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutAssignmentInput = {
    where: JobWhereUniqueInput;
    create: XOR<JobCreateWithoutAssignmentInput, JobUncheckedCreateWithoutAssignmentInput>;
  };

  export type UserCreateWithoutJobAssignmentsAsCustomerInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutJobAssignmentsAsCustomerInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutJobAssignmentsAsCustomerInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutJobAssignmentsAsCustomerInput,
      UserUncheckedCreateWithoutJobAssignmentsAsCustomerInput
    >;
  };

  export type UserCreateWithoutJobAssignmentsAsProviderInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutJobAssignmentsAsProviderInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutJobAssignmentsAsProviderInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutJobAssignmentsAsProviderInput,
      UserUncheckedCreateWithoutJobAssignmentsAsProviderInput
    >;
  };

  export type JobBidCreateWithoutAcceptedAssignmentInput = {
    id?: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    job: JobCreateNestedOneWithoutBidsInput;
    provider: UserCreateNestedOneWithoutBidsInput;
  };

  export type JobBidUncheckedCreateWithoutAcceptedAssignmentInput = {
    id?: string;
    jobId: string;
    providerId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobBidCreateOrConnectWithoutAcceptedAssignmentInput = {
    where: JobBidWhereUniqueInput;
    create: XOR<
      JobBidCreateWithoutAcceptedAssignmentInput,
      JobBidUncheckedCreateWithoutAcceptedAssignmentInput
    >;
  };

  export type JobUpsertWithoutAssignmentInput = {
    update: XOR<JobUpdateWithoutAssignmentInput, JobUncheckedUpdateWithoutAssignmentInput>;
    create: XOR<JobCreateWithoutAssignmentInput, JobUncheckedCreateWithoutAssignmentInput>;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: JobWhereInput;
    data: XOR<JobUpdateWithoutAssignmentInput, JobUncheckedUpdateWithoutAssignmentInput>;
  };

  export type JobUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type UserUpsertWithoutJobAssignmentsAsCustomerInput = {
    update: XOR<
      UserUpdateWithoutJobAssignmentsAsCustomerInput,
      UserUncheckedUpdateWithoutJobAssignmentsAsCustomerInput
    >;
    create: XOR<
      UserCreateWithoutJobAssignmentsAsCustomerInput,
      UserUncheckedCreateWithoutJobAssignmentsAsCustomerInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutJobAssignmentsAsCustomerInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutJobAssignmentsAsCustomerInput,
      UserUncheckedUpdateWithoutJobAssignmentsAsCustomerInput
    >;
  };

  export type UserUpdateWithoutJobAssignmentsAsCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutJobAssignmentsAsCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUpsertWithoutJobAssignmentsAsProviderInput = {
    update: XOR<
      UserUpdateWithoutJobAssignmentsAsProviderInput,
      UserUncheckedUpdateWithoutJobAssignmentsAsProviderInput
    >;
    create: XOR<
      UserCreateWithoutJobAssignmentsAsProviderInput,
      UserUncheckedCreateWithoutJobAssignmentsAsProviderInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutJobAssignmentsAsProviderInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutJobAssignmentsAsProviderInput,
      UserUncheckedUpdateWithoutJobAssignmentsAsProviderInput
    >;
  };

  export type UserUpdateWithoutJobAssignmentsAsProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutJobAssignmentsAsProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type JobBidUpsertWithoutAcceptedAssignmentInput = {
    update: XOR<
      JobBidUpdateWithoutAcceptedAssignmentInput,
      JobBidUncheckedUpdateWithoutAcceptedAssignmentInput
    >;
    create: XOR<
      JobBidCreateWithoutAcceptedAssignmentInput,
      JobBidUncheckedCreateWithoutAcceptedAssignmentInput
    >;
    where?: JobBidWhereInput;
  };

  export type JobBidUpdateToOneWithWhereWithoutAcceptedAssignmentInput = {
    where?: JobBidWhereInput;
    data: XOR<
      JobBidUpdateWithoutAcceptedAssignmentInput,
      JobBidUncheckedUpdateWithoutAcceptedAssignmentInput
    >;
  };

  export type JobBidUpdateWithoutAcceptedAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutBidsNestedInput;
    provider?: UserUpdateOneRequiredWithoutBidsNestedInput;
  };

  export type JobBidUncheckedUpdateWithoutAcceptedAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobCreateWithoutConversationInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutConversationInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutConversationInput = {
    where: JobWhereUniqueInput;
    create: XOR<JobCreateWithoutConversationInput, JobUncheckedCreateWithoutConversationInput>;
  };

  export type UserCreateWithoutCustomerConversationsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutCustomerConversationsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutCustomerConversationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCustomerConversationsInput,
      UserUncheckedCreateWithoutCustomerConversationsInput
    >;
  };

  export type UserCreateWithoutProviderConversationsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutProviderConversationsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutProviderConversationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProviderConversationsInput,
      UserUncheckedCreateWithoutProviderConversationsInput
    >;
  };

  export type MessageCreateWithoutConversationInput = {
    id?: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
    sender: UserCreateNestedOneWithoutSentMessagesInput;
  };

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string;
    senderId: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
  };

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutConversationInput,
      MessageUncheckedCreateWithoutConversationInput
    >;
  };

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[];
    skipDuplicates?: boolean;
  };

  export type JobUpsertWithoutConversationInput = {
    update: XOR<JobUpdateWithoutConversationInput, JobUncheckedUpdateWithoutConversationInput>;
    create: XOR<JobCreateWithoutConversationInput, JobUncheckedCreateWithoutConversationInput>;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutConversationInput = {
    where?: JobWhereInput;
    data: XOR<JobUpdateWithoutConversationInput, JobUncheckedUpdateWithoutConversationInput>;
  };

  export type JobUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type UserUpsertWithoutCustomerConversationsInput = {
    update: XOR<
      UserUpdateWithoutCustomerConversationsInput,
      UserUncheckedUpdateWithoutCustomerConversationsInput
    >;
    create: XOR<
      UserCreateWithoutCustomerConversationsInput,
      UserUncheckedCreateWithoutCustomerConversationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCustomerConversationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCustomerConversationsInput,
      UserUncheckedUpdateWithoutCustomerConversationsInput
    >;
  };

  export type UserUpdateWithoutCustomerConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCustomerConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUpsertWithoutProviderConversationsInput = {
    update: XOR<
      UserUpdateWithoutProviderConversationsInput,
      UserUncheckedUpdateWithoutProviderConversationsInput
    >;
    create: XOR<
      UserCreateWithoutProviderConversationsInput,
      UserUncheckedCreateWithoutProviderConversationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProviderConversationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProviderConversationsInput,
      UserUncheckedUpdateWithoutProviderConversationsInput
    >;
  };

  export type UserUpdateWithoutProviderConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProviderConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutConversationInput,
      MessageUncheckedUpdateWithoutConversationInput
    >;
    create: XOR<
      MessageCreateWithoutConversationInput,
      MessageUncheckedCreateWithoutConversationInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutConversationInput,
      MessageUncheckedUpdateWithoutConversationInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput;
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>;
  };

  export type ConversationCreateWithoutMessagesInput = {
    id?: string;
    createdAt?: Date | string;
    job: JobCreateNestedOneWithoutConversationInput;
    customer: UserCreateNestedOneWithoutCustomerConversationsInput;
    provider: UserCreateNestedOneWithoutProviderConversationsInput;
  };

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string;
    jobId: string;
    customerId: string;
    providerId: string;
    createdAt?: Date | string;
  };

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput;
    create: XOR<
      ConversationCreateWithoutMessagesInput,
      ConversationUncheckedCreateWithoutMessagesInput
    >;
  };

  export type UserCreateWithoutSentMessagesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    jobStatusHistories?: JobStatusHistoryCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    jobStatusHistories?: JobStatusHistoryUncheckedCreateNestedManyWithoutChangedByUserInput;
  };

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>;
  };

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<
      ConversationUpdateWithoutMessagesInput,
      ConversationUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      ConversationCreateWithoutMessagesInput,
      ConversationUncheckedCreateWithoutMessagesInput
    >;
    where?: ConversationWhereInput;
  };

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput;
    data: XOR<
      ConversationUpdateWithoutMessagesInput,
      ConversationUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutConversationNestedInput;
    customer?: UserUpdateOneRequiredWithoutCustomerConversationsNestedInput;
    provider?: UserUpdateOneRequiredWithoutProviderConversationsNestedInput;
  };

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>;
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>;
  };

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    jobStatusHistories?: JobStatusHistoryUpdateManyWithoutChangedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    jobStatusHistories?: JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserNestedInput;
  };

  export type JobCreateWithoutStatusHistoryInput = {
    id?: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: UserCreateNestedOneWithoutCustomerJobsInput;
    assignedProvider?: UserCreateNestedOneWithoutAssignedJobsInput;
    category: ServiceCategoryCreateNestedOneWithoutJobsInput;
    bids?: JobBidCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentCreateNestedOneWithoutJobInput;
    conversation?: ConversationCreateNestedOneWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutStatusHistoryInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: JobBidUncheckedCreateNestedManyWithoutJobInput;
    assignment?: JobAssignmentUncheckedCreateNestedOneWithoutJobInput;
    conversation?: ConversationUncheckedCreateNestedOneWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutStatusHistoryInput = {
    where: JobWhereUniqueInput;
    create: XOR<JobCreateWithoutStatusHistoryInput, JobUncheckedCreateWithoutStatusHistoryInput>;
  };

  export type UserCreateWithoutJobStatusHistoriesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileCreateNestedOneWithoutUserInput;
    customerJobs?: JobCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput;
    bids?: JobBidCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageCreateNestedManyWithoutSenderInput;
  };

  export type UserUncheckedCreateWithoutJobStatusHistoriesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    phone?: string | null;
    role?: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    providerProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput;
    customerJobs?: JobUncheckedCreateNestedManyWithoutCustomerInput;
    assignedJobs?: JobUncheckedCreateNestedManyWithoutAssignedProviderInput;
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput;
    bids?: JobBidUncheckedCreateNestedManyWithoutProviderInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedCreateNestedManyWithoutCustomerInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedCreateNestedManyWithoutProviderInput;
    customerConversations?: ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    providerConversations?: ConversationUncheckedCreateNestedManyWithoutProviderInput;
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput;
  };

  export type UserCreateOrConnectWithoutJobStatusHistoriesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutJobStatusHistoriesInput,
      UserUncheckedCreateWithoutJobStatusHistoriesInput
    >;
  };

  export type JobUpsertWithoutStatusHistoryInput = {
    update: XOR<JobUpdateWithoutStatusHistoryInput, JobUncheckedUpdateWithoutStatusHistoryInput>;
    create: XOR<JobCreateWithoutStatusHistoryInput, JobUncheckedCreateWithoutStatusHistoryInput>;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: JobWhereInput;
    data: XOR<JobUpdateWithoutStatusHistoryInput, JobUncheckedUpdateWithoutStatusHistoryInput>;
  };

  export type JobUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
  };

  export type UserUpsertWithoutJobStatusHistoriesInput = {
    update: XOR<
      UserUpdateWithoutJobStatusHistoriesInput,
      UserUncheckedUpdateWithoutJobStatusHistoriesInput
    >;
    create: XOR<
      UserCreateWithoutJobStatusHistoriesInput,
      UserUncheckedCreateWithoutJobStatusHistoriesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutJobStatusHistoriesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutJobStatusHistoriesInput,
      UserUncheckedUpdateWithoutJobStatusHistoriesInput
    >;
  };

  export type UserUpdateWithoutJobStatusHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput;
  };

  export type UserUncheckedUpdateWithoutJobStatusHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    providerProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput;
    customerJobs?: JobUncheckedUpdateManyWithoutCustomerNestedInput;
    assignedJobs?: JobUncheckedUpdateManyWithoutAssignedProviderNestedInput;
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput;
    bids?: JobBidUncheckedUpdateManyWithoutProviderNestedInput;
    jobAssignmentsAsCustomer?: JobAssignmentUncheckedUpdateManyWithoutCustomerNestedInput;
    jobAssignmentsAsProvider?: JobAssignmentUncheckedUpdateManyWithoutProviderNestedInput;
    customerConversations?: ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    providerConversations?: ConversationUncheckedUpdateManyWithoutProviderNestedInput;
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput;
  };

  export type JobCreateManyCustomerInput = {
    id?: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobCreateManyAssignedProviderInput = {
    id?: string;
    customerId: string;
    categoryId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProviderServiceCreateManyProviderInput = {
    id?: string;
    categoryId: string;
    createdAt?: Date | string;
  };

  export type JobBidCreateManyProviderInput = {
    id?: string;
    jobId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobAssignmentCreateManyCustomerInput = {
    id?: string;
    jobId: string;
    providerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type JobAssignmentCreateManyProviderInput = {
    id?: string;
    jobId: string;
    customerId: string;
    acceptedBidId?: string | null;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
  };

  export type ConversationCreateManyCustomerInput = {
    id?: string;
    jobId: string;
    providerId: string;
    createdAt?: Date | string;
  };

  export type ConversationCreateManyProviderInput = {
    id?: string;
    jobId: string;
    customerId: string;
    createdAt?: Date | string;
  };

  export type MessageCreateManySenderInput = {
    id?: string;
    conversationId: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
  };

  export type JobStatusHistoryCreateManyChangedByUserInput = {
    id?: string;
    jobId: string;
    oldStatus?: string | null;
    newStatus: string;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type JobUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUpdateWithoutAssignedProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    category?: ServiceCategoryUpdateOneRequiredWithoutJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutAssignedProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateManyWithoutAssignedProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: ServiceCategoryUpdateOneRequiredWithoutProviderServicesNestedInput;
  };

  export type ProviderServiceUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobBidUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutBidsNestedInput;
    acceptedAssignment?: JobAssignmentUpdateOneWithoutAcceptedBidNestedInput;
  };

  export type JobBidUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAssignment?: JobAssignmentUncheckedUpdateOneWithoutAcceptedBidNestedInput;
  };

  export type JobBidUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobAssignmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    job?: JobUpdateOneRequiredWithoutAssignmentNestedInput;
    provider?: UserUpdateOneRequiredWithoutJobAssignmentsAsProviderNestedInput;
    acceptedBid?: JobBidUpdateOneWithoutAcceptedAssignmentNestedInput;
  };

  export type JobAssignmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type JobAssignmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type JobAssignmentUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    job?: JobUpdateOneRequiredWithoutAssignmentNestedInput;
    customer?: UserUpdateOneRequiredWithoutJobAssignmentsAsCustomerNestedInput;
    acceptedBid?: JobBidUpdateOneWithoutAcceptedAssignmentNestedInput;
  };

  export type JobAssignmentUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type JobAssignmentUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null;
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type ConversationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutConversationNestedInput;
    provider?: UserUpdateOneRequiredWithoutProviderConversationsNestedInput;
    messages?: MessageUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ConversationUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutConversationNestedInput;
    customer?: UserUpdateOneRequiredWithoutCustomerConversationsNestedInput;
    messages?: MessageUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput;
  };

  export type ConversationUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversationId?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversationId?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryUpdateWithoutChangedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutStatusHistoryNestedInput;
  };

  export type JobStatusHistoryUncheckedUpdateWithoutChangedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryUncheckedUpdateManyWithoutChangedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceCreateManyCategoryInput = {
    id?: string;
    providerId: string;
    createdAt?: Date | string;
  };

  export type JobCreateManyCategoryInput = {
    id?: string;
    customerId: string;
    title: string;
    description: string;
    locationText: string;
    suburb?: string | null;
    state?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    preferredDate?: Date | string | null;
    status?: string;
    assignedProviderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProviderServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: UserUpdateOneRequiredWithoutProviderServicesNestedInput;
  };

  export type ProviderServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProviderServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: UserUpdateOneRequiredWithoutCustomerJobsNestedInput;
    assignedProvider?: UserUpdateOneWithoutAssignedJobsNestedInput;
    bids?: JobBidUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: JobBidUncheckedUpdateManyWithoutJobNestedInput;
    assignment?: JobAssignmentUncheckedUpdateOneWithoutJobNestedInput;
    conversation?: ConversationUncheckedUpdateOneWithoutJobNestedInput;
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customerId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    locationText?: StringFieldUpdateOperationsInput | string;
    suburb?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    assignedProviderId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobBidCreateManyJobInput = {
    id?: string;
    providerId: string;
    bidAmount?: number | null;
    message?: string | null;
    estimatedArrivalHours?: number | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobStatusHistoryCreateManyJobInput = {
    id?: string;
    oldStatus?: string | null;
    newStatus: string;
    changedBy?: string | null;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type JobBidUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: UserUpdateOneRequiredWithoutBidsNestedInput;
    acceptedAssignment?: JobAssignmentUpdateOneWithoutAcceptedBidNestedInput;
  };

  export type JobBidUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAssignment?: JobAssignmentUncheckedUpdateOneWithoutAcceptedBidNestedInput;
  };

  export type JobBidUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    bidAmount?: NullableFloatFieldUpdateOperationsInput | number | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    estimatedArrivalHours?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    changedByUser?: UserUpdateOneWithoutJobStatusHistoriesNestedInput;
  };

  export type JobStatusHistoryUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobStatusHistoryUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: StringFieldUpdateOperationsInput | string;
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateManyConversationInput = {
    id?: string;
    senderId: string;
    messageText: string;
    isRead?: boolean;
    createdAt?: Date | string;
  };

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    messageText?: StringFieldUpdateOperationsInput | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ServiceCategoryCountOutputTypeDefaultArgs instead
   */
  export type ServiceCategoryCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use JobCountOutputTypeDefaultArgs instead
   */
  export type JobCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = JobCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ConversationCountOutputTypeDefaultArgs instead
   */
  export type ConversationCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ConversationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProviderProfileDefaultArgs instead
   */
  export type ProviderProfileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ProviderProfileDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ServiceCategoryDefaultArgs instead
   */
  export type ServiceCategoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ServiceCategoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProviderServiceDefaultArgs instead
   */
  export type ProviderServiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ProviderServiceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use JobDefaultArgs instead
   */
  export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    JobDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use JobBidDefaultArgs instead
   */
  export type JobBidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    JobBidDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use JobAssignmentDefaultArgs instead
   */
  export type JobAssignmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = JobAssignmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ConversationDefaultArgs instead
   */
  export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ConversationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MessageDefaultArgs instead
   */
  export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    MessageDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use JobStatusHistoryDefaultArgs instead
   */
  export type JobStatusHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = JobStatusHistoryDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
