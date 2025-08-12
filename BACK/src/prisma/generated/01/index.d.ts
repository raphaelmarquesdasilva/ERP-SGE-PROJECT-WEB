
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AcessoUsuario
 * 
 */
export type AcessoUsuario = $Result.DefaultSelection<Prisma.$AcessoUsuarioPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AcessoUsuarios
 * const acessoUsuarios = await prisma.acessoUsuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AcessoUsuarios
   * const acessoUsuarios = await prisma.acessoUsuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.acessoUsuario`: Exposes CRUD operations for the **AcessoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcessoUsuarios
    * const acessoUsuarios = await prisma.acessoUsuario.findMany()
    * ```
    */
  get acessoUsuario(): Prisma.AcessoUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AcessoUsuario: 'AcessoUsuario',
    Usuarios: 'Usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "acessoUsuario" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AcessoUsuario: {
        payload: Prisma.$AcessoUsuarioPayload<ExtArgs>
        fields: Prisma.AcessoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcessoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcessoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.AcessoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcessoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>
          }
          findMany: {
            args: Prisma.AcessoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>[]
          }
          create: {
            args: Prisma.AcessoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>
          }
          createMany: {
            args: Prisma.AcessoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcessoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>
          }
          update: {
            args: Prisma.AcessoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.AcessoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcessoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcessoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.AcessoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcessoUsuario>
          }
          groupBy: {
            args: Prisma.AcessoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcessoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcessoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<AcessoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    acessoUsuario?: AcessoUsuarioOmit
    usuarios?: UsuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AcessoUsuario
   */

  export type AggregateAcessoUsuario = {
    _count: AcessoUsuarioCountAggregateOutputType | null
    _avg: AcessoUsuarioAvgAggregateOutputType | null
    _sum: AcessoUsuarioSumAggregateOutputType | null
    _min: AcessoUsuarioMinAggregateOutputType | null
    _max: AcessoUsuarioMaxAggregateOutputType | null
  }

  export type AcessoUsuarioAvgAggregateOutputType = {
    Id_Usuario: number | null
    Acesso: number | null
  }

  export type AcessoUsuarioSumAggregateOutputType = {
    Id_Usuario: number | null
    Acesso: number | null
  }

  export type AcessoUsuarioMinAggregateOutputType = {
    Id_Usuario: number | null
    Opcao: string | null
    Acesso: number | null
  }

  export type AcessoUsuarioMaxAggregateOutputType = {
    Id_Usuario: number | null
    Opcao: string | null
    Acesso: number | null
  }

  export type AcessoUsuarioCountAggregateOutputType = {
    Id_Usuario: number
    Opcao: number
    Acesso: number
    _all: number
  }


  export type AcessoUsuarioAvgAggregateInputType = {
    Id_Usuario?: true
    Acesso?: true
  }

  export type AcessoUsuarioSumAggregateInputType = {
    Id_Usuario?: true
    Acesso?: true
  }

  export type AcessoUsuarioMinAggregateInputType = {
    Id_Usuario?: true
    Opcao?: true
    Acesso?: true
  }

  export type AcessoUsuarioMaxAggregateInputType = {
    Id_Usuario?: true
    Opcao?: true
    Acesso?: true
  }

  export type AcessoUsuarioCountAggregateInputType = {
    Id_Usuario?: true
    Opcao?: true
    Acesso?: true
    _all?: true
  }

  export type AcessoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcessoUsuario to aggregate.
     */
    where?: AcessoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoUsuarios to fetch.
     */
    orderBy?: AcessoUsuarioOrderByWithRelationInput | AcessoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcessoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcessoUsuarios
    **/
    _count?: true | AcessoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcessoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcessoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessoUsuarioMaxAggregateInputType
  }

  export type GetAcessoUsuarioAggregateType<T extends AcessoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateAcessoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcessoUsuario[P]>
      : GetScalarType<T[P], AggregateAcessoUsuario[P]>
  }




  export type AcessoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessoUsuarioWhereInput
    orderBy?: AcessoUsuarioOrderByWithAggregationInput | AcessoUsuarioOrderByWithAggregationInput[]
    by: AcessoUsuarioScalarFieldEnum[] | AcessoUsuarioScalarFieldEnum
    having?: AcessoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessoUsuarioCountAggregateInputType | true
    _avg?: AcessoUsuarioAvgAggregateInputType
    _sum?: AcessoUsuarioSumAggregateInputType
    _min?: AcessoUsuarioMinAggregateInputType
    _max?: AcessoUsuarioMaxAggregateInputType
  }

  export type AcessoUsuarioGroupByOutputType = {
    Id_Usuario: number
    Opcao: string
    Acesso: number | null
    _count: AcessoUsuarioCountAggregateOutputType | null
    _avg: AcessoUsuarioAvgAggregateOutputType | null
    _sum: AcessoUsuarioSumAggregateOutputType | null
    _min: AcessoUsuarioMinAggregateOutputType | null
    _max: AcessoUsuarioMaxAggregateOutputType | null
  }

  type GetAcessoUsuarioGroupByPayload<T extends AcessoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], AcessoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type AcessoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_Usuario?: boolean
    Opcao?: boolean
    Acesso?: boolean
  }, ExtArgs["result"]["acessoUsuario"]>



  export type AcessoUsuarioSelectScalar = {
    Id_Usuario?: boolean
    Opcao?: boolean
    Acesso?: boolean
  }

  export type AcessoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_Usuario" | "Opcao" | "Acesso", ExtArgs["result"]["acessoUsuario"]>

  export type $AcessoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcessoUsuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id_Usuario: number
      Opcao: string
      Acesso: number | null
    }, ExtArgs["result"]["acessoUsuario"]>
    composites: {}
  }

  type AcessoUsuarioGetPayload<S extends boolean | null | undefined | AcessoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$AcessoUsuarioPayload, S>

  type AcessoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcessoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcessoUsuarioCountAggregateInputType | true
    }

  export interface AcessoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcessoUsuario'], meta: { name: 'AcessoUsuario' } }
    /**
     * Find zero or one AcessoUsuario that matches the filter.
     * @param {AcessoUsuarioFindUniqueArgs} args - Arguments to find a AcessoUsuario
     * @example
     * // Get one AcessoUsuario
     * const acessoUsuario = await prisma.acessoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcessoUsuarioFindUniqueArgs>(args: SelectSubset<T, AcessoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcessoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcessoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a AcessoUsuario
     * @example
     * // Get one AcessoUsuario
     * const acessoUsuario = await prisma.acessoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcessoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, AcessoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcessoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioFindFirstArgs} args - Arguments to find a AcessoUsuario
     * @example
     * // Get one AcessoUsuario
     * const acessoUsuario = await prisma.acessoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcessoUsuarioFindFirstArgs>(args?: SelectSubset<T, AcessoUsuarioFindFirstArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcessoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioFindFirstOrThrowArgs} args - Arguments to find a AcessoUsuario
     * @example
     * // Get one AcessoUsuario
     * const acessoUsuario = await prisma.acessoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcessoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, AcessoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcessoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcessoUsuarios
     * const acessoUsuarios = await prisma.acessoUsuario.findMany()
     * 
     * // Get first 10 AcessoUsuarios
     * const acessoUsuarios = await prisma.acessoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `Id_Usuario`
     * const acessoUsuarioWithId_UsuarioOnly = await prisma.acessoUsuario.findMany({ select: { Id_Usuario: true } })
     * 
     */
    findMany<T extends AcessoUsuarioFindManyArgs>(args?: SelectSubset<T, AcessoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcessoUsuario.
     * @param {AcessoUsuarioCreateArgs} args - Arguments to create a AcessoUsuario.
     * @example
     * // Create one AcessoUsuario
     * const AcessoUsuario = await prisma.acessoUsuario.create({
     *   data: {
     *     // ... data to create a AcessoUsuario
     *   }
     * })
     * 
     */
    create<T extends AcessoUsuarioCreateArgs>(args: SelectSubset<T, AcessoUsuarioCreateArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcessoUsuarios.
     * @param {AcessoUsuarioCreateManyArgs} args - Arguments to create many AcessoUsuarios.
     * @example
     * // Create many AcessoUsuarios
     * const acessoUsuario = await prisma.acessoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcessoUsuarioCreateManyArgs>(args?: SelectSubset<T, AcessoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AcessoUsuario.
     * @param {AcessoUsuarioDeleteArgs} args - Arguments to delete one AcessoUsuario.
     * @example
     * // Delete one AcessoUsuario
     * const AcessoUsuario = await prisma.acessoUsuario.delete({
     *   where: {
     *     // ... filter to delete one AcessoUsuario
     *   }
     * })
     * 
     */
    delete<T extends AcessoUsuarioDeleteArgs>(args: SelectSubset<T, AcessoUsuarioDeleteArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcessoUsuario.
     * @param {AcessoUsuarioUpdateArgs} args - Arguments to update one AcessoUsuario.
     * @example
     * // Update one AcessoUsuario
     * const acessoUsuario = await prisma.acessoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcessoUsuarioUpdateArgs>(args: SelectSubset<T, AcessoUsuarioUpdateArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcessoUsuarios.
     * @param {AcessoUsuarioDeleteManyArgs} args - Arguments to filter AcessoUsuarios to delete.
     * @example
     * // Delete a few AcessoUsuarios
     * const { count } = await prisma.acessoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcessoUsuarioDeleteManyArgs>(args?: SelectSubset<T, AcessoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcessoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcessoUsuarios
     * const acessoUsuario = await prisma.acessoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcessoUsuarioUpdateManyArgs>(args: SelectSubset<T, AcessoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcessoUsuario.
     * @param {AcessoUsuarioUpsertArgs} args - Arguments to update or create a AcessoUsuario.
     * @example
     * // Update or create a AcessoUsuario
     * const acessoUsuario = await prisma.acessoUsuario.upsert({
     *   create: {
     *     // ... data to create a AcessoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcessoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends AcessoUsuarioUpsertArgs>(args: SelectSubset<T, AcessoUsuarioUpsertArgs<ExtArgs>>): Prisma__AcessoUsuarioClient<$Result.GetResult<Prisma.$AcessoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcessoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioCountArgs} args - Arguments to filter AcessoUsuarios to count.
     * @example
     * // Count the number of AcessoUsuarios
     * const count = await prisma.acessoUsuario.count({
     *   where: {
     *     // ... the filter for the AcessoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends AcessoUsuarioCountArgs>(
      args?: Subset<T, AcessoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcessoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcessoUsuarioAggregateArgs>(args: Subset<T, AcessoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetAcessoUsuarioAggregateType<T>>

    /**
     * Group by AcessoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUsuarioGroupByArgs} args - Group by arguments.
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
      T extends AcessoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcessoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: AcessoUsuarioGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcessoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcessoUsuario model
   */
  readonly fields: AcessoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcessoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcessoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcessoUsuario model
   */
  interface AcessoUsuarioFieldRefs {
    readonly Id_Usuario: FieldRef<"AcessoUsuario", 'Int'>
    readonly Opcao: FieldRef<"AcessoUsuario", 'String'>
    readonly Acesso: FieldRef<"AcessoUsuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AcessoUsuario findUnique
   */
  export type AcessoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which AcessoUsuario to fetch.
     */
    where: AcessoUsuarioWhereUniqueInput
  }

  /**
   * AcessoUsuario findUniqueOrThrow
   */
  export type AcessoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which AcessoUsuario to fetch.
     */
    where: AcessoUsuarioWhereUniqueInput
  }

  /**
   * AcessoUsuario findFirst
   */
  export type AcessoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which AcessoUsuario to fetch.
     */
    where?: AcessoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoUsuarios to fetch.
     */
    orderBy?: AcessoUsuarioOrderByWithRelationInput | AcessoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcessoUsuarios.
     */
    cursor?: AcessoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcessoUsuarios.
     */
    distinct?: AcessoUsuarioScalarFieldEnum | AcessoUsuarioScalarFieldEnum[]
  }

  /**
   * AcessoUsuario findFirstOrThrow
   */
  export type AcessoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which AcessoUsuario to fetch.
     */
    where?: AcessoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoUsuarios to fetch.
     */
    orderBy?: AcessoUsuarioOrderByWithRelationInput | AcessoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcessoUsuarios.
     */
    cursor?: AcessoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcessoUsuarios.
     */
    distinct?: AcessoUsuarioScalarFieldEnum | AcessoUsuarioScalarFieldEnum[]
  }

  /**
   * AcessoUsuario findMany
   */
  export type AcessoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which AcessoUsuarios to fetch.
     */
    where?: AcessoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoUsuarios to fetch.
     */
    orderBy?: AcessoUsuarioOrderByWithRelationInput | AcessoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcessoUsuarios.
     */
    cursor?: AcessoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoUsuarios.
     */
    skip?: number
    distinct?: AcessoUsuarioScalarFieldEnum | AcessoUsuarioScalarFieldEnum[]
  }

  /**
   * AcessoUsuario create
   */
  export type AcessoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a AcessoUsuario.
     */
    data: XOR<AcessoUsuarioCreateInput, AcessoUsuarioUncheckedCreateInput>
  }

  /**
   * AcessoUsuario createMany
   */
  export type AcessoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcessoUsuarios.
     */
    data: AcessoUsuarioCreateManyInput | AcessoUsuarioCreateManyInput[]
  }

  /**
   * AcessoUsuario update
   */
  export type AcessoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a AcessoUsuario.
     */
    data: XOR<AcessoUsuarioUpdateInput, AcessoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which AcessoUsuario to update.
     */
    where: AcessoUsuarioWhereUniqueInput
  }

  /**
   * AcessoUsuario updateMany
   */
  export type AcessoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcessoUsuarios.
     */
    data: XOR<AcessoUsuarioUpdateManyMutationInput, AcessoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which AcessoUsuarios to update
     */
    where?: AcessoUsuarioWhereInput
    /**
     * Limit how many AcessoUsuarios to update.
     */
    limit?: number
  }

  /**
   * AcessoUsuario upsert
   */
  export type AcessoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the AcessoUsuario to update in case it exists.
     */
    where: AcessoUsuarioWhereUniqueInput
    /**
     * In case the AcessoUsuario found by the `where` argument doesn't exist, create a new AcessoUsuario with this data.
     */
    create: XOR<AcessoUsuarioCreateInput, AcessoUsuarioUncheckedCreateInput>
    /**
     * In case the AcessoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcessoUsuarioUpdateInput, AcessoUsuarioUncheckedUpdateInput>
  }

  /**
   * AcessoUsuario delete
   */
  export type AcessoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
    /**
     * Filter which AcessoUsuario to delete.
     */
    where: AcessoUsuarioWhereUniqueInput
  }

  /**
   * AcessoUsuario deleteMany
   */
  export type AcessoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcessoUsuarios to delete
     */
    where?: AcessoUsuarioWhereInput
    /**
     * Limit how many AcessoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * AcessoUsuario without action
   */
  export type AcessoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoUsuario
     */
    select?: AcessoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoUsuario
     */
    omit?: AcessoUsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    Id_Usuario: number | null
    Id_Filial: number | null
    Id_Vendedor: number | null
    SeusMov: number | null
    SolicAutCanc: number | null
    LiberaDebito: number | null
    LiberaEstoque: number | null
    MostraPreco: number | null
    Faturamento: number | null
    liberapreco: number | null
    MultplaInstancia: number | null
    AlteraFinanceiro: number | null
    AlterarProduto: number | null
    AlterarPessoa: number | null
    AlterarInstalacao: number | null
    ImpResumido: number | null
    EmailAltPrd: number | null
    id_entregador: number | null
    SemMovEst: number | null
    VERIFICARESTMIN: number | null
    EnviarFinanc: number | null
    LIMPAESTOQUE: number | null
    ATUALIZAESTOQUE: number | null
    ExcluirReg: number | null
    ATLZ_BD: number | null
    ALTITEMVD: number | null
    BLOQDESC: number | null
    telemarketing: number | null
    CadDistrib: number | null
    VerSldDeposito: number | null
    AtivarProduto: number | null
    CancelarNF: number | null
    CancVenda: number | null
    AlterarVenda: number | null
    IgnoraDescVd: number | null
    CancAmostra: number | null
    CancMovEst: number | null
    AltSenha: number | null
    VendedorBalcao: number | null
    PrcDistrib: number | null
    Aut_CadPF: number | null
    UsuCaixaLj: number | null
    LiberaPrcCusto: number | null
    MostraCustoVd: number | null
    BxVdFrenteLj: number | null
    UsaPrcEspDist: number | null
    Id_Promocao: number | null
    liberatroca: number | null
    CancMapaEntr: number | null
    TpAtend: number | null
    EmailCobranca: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    Id_Usuario: number | null
    Id_Filial: number | null
    Id_Vendedor: number | null
    SeusMov: number | null
    SolicAutCanc: number | null
    LiberaDebito: number | null
    LiberaEstoque: number | null
    MostraPreco: number | null
    Faturamento: number | null
    liberapreco: number | null
    MultplaInstancia: number | null
    AlteraFinanceiro: number | null
    AlterarProduto: number | null
    AlterarPessoa: number | null
    AlterarInstalacao: number | null
    ImpResumido: number | null
    EmailAltPrd: number | null
    id_entregador: number | null
    SemMovEst: number | null
    VERIFICARESTMIN: number | null
    EnviarFinanc: number | null
    LIMPAESTOQUE: number | null
    ATUALIZAESTOQUE: number | null
    ExcluirReg: number | null
    ATLZ_BD: number | null
    ALTITEMVD: number | null
    BLOQDESC: number | null
    telemarketing: number | null
    CadDistrib: number | null
    VerSldDeposito: number | null
    AtivarProduto: number | null
    CancelarNF: number | null
    CancVenda: number | null
    AlterarVenda: number | null
    IgnoraDescVd: number | null
    CancAmostra: number | null
    CancMovEst: number | null
    AltSenha: number | null
    VendedorBalcao: number | null
    PrcDistrib: number | null
    Aut_CadPF: number | null
    UsuCaixaLj: number | null
    LiberaPrcCusto: number | null
    MostraCustoVd: number | null
    BxVdFrenteLj: number | null
    UsaPrcEspDist: number | null
    Id_Promocao: number | null
    liberatroca: number | null
    CancMapaEntr: number | null
    TpAtend: number | null
    EmailCobranca: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    Id_Usuario: number | null
    Usuario: string | null
    Senha: string | null
    DtHrUltAcesso: Date | null
    Id_Filial: number | null
    Id_Vendedor: number | null
    SeusMov: number | null
    SolicAutCanc: number | null
    LiberaDebito: number | null
    LiberaEstoque: number | null
    MostraPreco: number | null
    Faturamento: number | null
    liberapreco: number | null
    MultplaInstancia: number | null
    AlteraFinanceiro: number | null
    AlterarProduto: number | null
    AlterarPessoa: number | null
    AlterarInstalacao: number | null
    ImpResumido: number | null
    email: string | null
    EmailAltPrd: number | null
    id_entregador: number | null
    SemMovEst: number | null
    VERIFICARESTMIN: number | null
    EnviarFinanc: number | null
    LIMPAESTOQUE: number | null
    ATUALIZAESTOQUE: number | null
    ExcluirReg: number | null
    ATLZ_BD: number | null
    ALTITEMVD: number | null
    BLOQDESC: number | null
    telemarketing: number | null
    CadDistrib: number | null
    VerSldDeposito: number | null
    AtivarProduto: number | null
    CancelarNF: number | null
    CancVenda: number | null
    AlterarVenda: number | null
    IgnoraDescVd: number | null
    CancAmostra: number | null
    CancMovEst: number | null
    AltSenha: number | null
    VendedorBalcao: number | null
    PrcDistrib: number | null
    Aut_CadPF: number | null
    UsuCaixaLj: number | null
    LiberaPrcCusto: number | null
    MostraCustoVd: number | null
    BxVdFrenteLj: number | null
    UsaPrcEspDist: number | null
    Id_Promocao: number | null
    liberatroca: number | null
    CancMapaEntr: number | null
    TpAtend: number | null
    EmailCobranca: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    Id_Usuario: number | null
    Usuario: string | null
    Senha: string | null
    DtHrUltAcesso: Date | null
    Id_Filial: number | null
    Id_Vendedor: number | null
    SeusMov: number | null
    SolicAutCanc: number | null
    LiberaDebito: number | null
    LiberaEstoque: number | null
    MostraPreco: number | null
    Faturamento: number | null
    liberapreco: number | null
    MultplaInstancia: number | null
    AlteraFinanceiro: number | null
    AlterarProduto: number | null
    AlterarPessoa: number | null
    AlterarInstalacao: number | null
    ImpResumido: number | null
    email: string | null
    EmailAltPrd: number | null
    id_entregador: number | null
    SemMovEst: number | null
    VERIFICARESTMIN: number | null
    EnviarFinanc: number | null
    LIMPAESTOQUE: number | null
    ATUALIZAESTOQUE: number | null
    ExcluirReg: number | null
    ATLZ_BD: number | null
    ALTITEMVD: number | null
    BLOQDESC: number | null
    telemarketing: number | null
    CadDistrib: number | null
    VerSldDeposito: number | null
    AtivarProduto: number | null
    CancelarNF: number | null
    CancVenda: number | null
    AlterarVenda: number | null
    IgnoraDescVd: number | null
    CancAmostra: number | null
    CancMovEst: number | null
    AltSenha: number | null
    VendedorBalcao: number | null
    PrcDistrib: number | null
    Aut_CadPF: number | null
    UsuCaixaLj: number | null
    LiberaPrcCusto: number | null
    MostraCustoVd: number | null
    BxVdFrenteLj: number | null
    UsaPrcEspDist: number | null
    Id_Promocao: number | null
    liberatroca: number | null
    CancMapaEntr: number | null
    TpAtend: number | null
    EmailCobranca: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    Id_Usuario: number
    Usuario: number
    Senha: number
    DtHrUltAcesso: number
    Id_Filial: number
    Id_Vendedor: number
    SeusMov: number
    SolicAutCanc: number
    LiberaDebito: number
    LiberaEstoque: number
    MostraPreco: number
    Faturamento: number
    liberapreco: number
    MultplaInstancia: number
    AlteraFinanceiro: number
    AlterarProduto: number
    AlterarPessoa: number
    AlterarInstalacao: number
    ImpResumido: number
    email: number
    EmailAltPrd: number
    id_entregador: number
    SemMovEst: number
    VERIFICARESTMIN: number
    EnviarFinanc: number
    LIMPAESTOQUE: number
    ATUALIZAESTOQUE: number
    ExcluirReg: number
    ATLZ_BD: number
    ALTITEMVD: number
    BLOQDESC: number
    telemarketing: number
    CadDistrib: number
    VerSldDeposito: number
    AtivarProduto: number
    CancelarNF: number
    CancVenda: number
    AlterarVenda: number
    IgnoraDescVd: number
    CancAmostra: number
    CancMovEst: number
    AltSenha: number
    VendedorBalcao: number
    PrcDistrib: number
    Aut_CadPF: number
    UsuCaixaLj: number
    LiberaPrcCusto: number
    MostraCustoVd: number
    BxVdFrenteLj: number
    UsaPrcEspDist: number
    Id_Promocao: number
    liberatroca: number
    CancMapaEntr: number
    TpAtend: number
    EmailCobranca: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    Id_Usuario?: true
    Id_Filial?: true
    Id_Vendedor?: true
    SeusMov?: true
    SolicAutCanc?: true
    LiberaDebito?: true
    LiberaEstoque?: true
    MostraPreco?: true
    Faturamento?: true
    liberapreco?: true
    MultplaInstancia?: true
    AlteraFinanceiro?: true
    AlterarProduto?: true
    AlterarPessoa?: true
    AlterarInstalacao?: true
    ImpResumido?: true
    EmailAltPrd?: true
    id_entregador?: true
    SemMovEst?: true
    VERIFICARESTMIN?: true
    EnviarFinanc?: true
    LIMPAESTOQUE?: true
    ATUALIZAESTOQUE?: true
    ExcluirReg?: true
    ATLZ_BD?: true
    ALTITEMVD?: true
    BLOQDESC?: true
    telemarketing?: true
    CadDistrib?: true
    VerSldDeposito?: true
    AtivarProduto?: true
    CancelarNF?: true
    CancVenda?: true
    AlterarVenda?: true
    IgnoraDescVd?: true
    CancAmostra?: true
    CancMovEst?: true
    AltSenha?: true
    VendedorBalcao?: true
    PrcDistrib?: true
    Aut_CadPF?: true
    UsuCaixaLj?: true
    LiberaPrcCusto?: true
    MostraCustoVd?: true
    BxVdFrenteLj?: true
    UsaPrcEspDist?: true
    Id_Promocao?: true
    liberatroca?: true
    CancMapaEntr?: true
    TpAtend?: true
    EmailCobranca?: true
  }

  export type UsuariosSumAggregateInputType = {
    Id_Usuario?: true
    Id_Filial?: true
    Id_Vendedor?: true
    SeusMov?: true
    SolicAutCanc?: true
    LiberaDebito?: true
    LiberaEstoque?: true
    MostraPreco?: true
    Faturamento?: true
    liberapreco?: true
    MultplaInstancia?: true
    AlteraFinanceiro?: true
    AlterarProduto?: true
    AlterarPessoa?: true
    AlterarInstalacao?: true
    ImpResumido?: true
    EmailAltPrd?: true
    id_entregador?: true
    SemMovEst?: true
    VERIFICARESTMIN?: true
    EnviarFinanc?: true
    LIMPAESTOQUE?: true
    ATUALIZAESTOQUE?: true
    ExcluirReg?: true
    ATLZ_BD?: true
    ALTITEMVD?: true
    BLOQDESC?: true
    telemarketing?: true
    CadDistrib?: true
    VerSldDeposito?: true
    AtivarProduto?: true
    CancelarNF?: true
    CancVenda?: true
    AlterarVenda?: true
    IgnoraDescVd?: true
    CancAmostra?: true
    CancMovEst?: true
    AltSenha?: true
    VendedorBalcao?: true
    PrcDistrib?: true
    Aut_CadPF?: true
    UsuCaixaLj?: true
    LiberaPrcCusto?: true
    MostraCustoVd?: true
    BxVdFrenteLj?: true
    UsaPrcEspDist?: true
    Id_Promocao?: true
    liberatroca?: true
    CancMapaEntr?: true
    TpAtend?: true
    EmailCobranca?: true
  }

  export type UsuariosMinAggregateInputType = {
    Id_Usuario?: true
    Usuario?: true
    Senha?: true
    DtHrUltAcesso?: true
    Id_Filial?: true
    Id_Vendedor?: true
    SeusMov?: true
    SolicAutCanc?: true
    LiberaDebito?: true
    LiberaEstoque?: true
    MostraPreco?: true
    Faturamento?: true
    liberapreco?: true
    MultplaInstancia?: true
    AlteraFinanceiro?: true
    AlterarProduto?: true
    AlterarPessoa?: true
    AlterarInstalacao?: true
    ImpResumido?: true
    email?: true
    EmailAltPrd?: true
    id_entregador?: true
    SemMovEst?: true
    VERIFICARESTMIN?: true
    EnviarFinanc?: true
    LIMPAESTOQUE?: true
    ATUALIZAESTOQUE?: true
    ExcluirReg?: true
    ATLZ_BD?: true
    ALTITEMVD?: true
    BLOQDESC?: true
    telemarketing?: true
    CadDistrib?: true
    VerSldDeposito?: true
    AtivarProduto?: true
    CancelarNF?: true
    CancVenda?: true
    AlterarVenda?: true
    IgnoraDescVd?: true
    CancAmostra?: true
    CancMovEst?: true
    AltSenha?: true
    VendedorBalcao?: true
    PrcDistrib?: true
    Aut_CadPF?: true
    UsuCaixaLj?: true
    LiberaPrcCusto?: true
    MostraCustoVd?: true
    BxVdFrenteLj?: true
    UsaPrcEspDist?: true
    Id_Promocao?: true
    liberatroca?: true
    CancMapaEntr?: true
    TpAtend?: true
    EmailCobranca?: true
  }

  export type UsuariosMaxAggregateInputType = {
    Id_Usuario?: true
    Usuario?: true
    Senha?: true
    DtHrUltAcesso?: true
    Id_Filial?: true
    Id_Vendedor?: true
    SeusMov?: true
    SolicAutCanc?: true
    LiberaDebito?: true
    LiberaEstoque?: true
    MostraPreco?: true
    Faturamento?: true
    liberapreco?: true
    MultplaInstancia?: true
    AlteraFinanceiro?: true
    AlterarProduto?: true
    AlterarPessoa?: true
    AlterarInstalacao?: true
    ImpResumido?: true
    email?: true
    EmailAltPrd?: true
    id_entregador?: true
    SemMovEst?: true
    VERIFICARESTMIN?: true
    EnviarFinanc?: true
    LIMPAESTOQUE?: true
    ATUALIZAESTOQUE?: true
    ExcluirReg?: true
    ATLZ_BD?: true
    ALTITEMVD?: true
    BLOQDESC?: true
    telemarketing?: true
    CadDistrib?: true
    VerSldDeposito?: true
    AtivarProduto?: true
    CancelarNF?: true
    CancVenda?: true
    AlterarVenda?: true
    IgnoraDescVd?: true
    CancAmostra?: true
    CancMovEst?: true
    AltSenha?: true
    VendedorBalcao?: true
    PrcDistrib?: true
    Aut_CadPF?: true
    UsuCaixaLj?: true
    LiberaPrcCusto?: true
    MostraCustoVd?: true
    BxVdFrenteLj?: true
    UsaPrcEspDist?: true
    Id_Promocao?: true
    liberatroca?: true
    CancMapaEntr?: true
    TpAtend?: true
    EmailCobranca?: true
  }

  export type UsuariosCountAggregateInputType = {
    Id_Usuario?: true
    Usuario?: true
    Senha?: true
    DtHrUltAcesso?: true
    Id_Filial?: true
    Id_Vendedor?: true
    SeusMov?: true
    SolicAutCanc?: true
    LiberaDebito?: true
    LiberaEstoque?: true
    MostraPreco?: true
    Faturamento?: true
    liberapreco?: true
    MultplaInstancia?: true
    AlteraFinanceiro?: true
    AlterarProduto?: true
    AlterarPessoa?: true
    AlterarInstalacao?: true
    ImpResumido?: true
    email?: true
    EmailAltPrd?: true
    id_entregador?: true
    SemMovEst?: true
    VERIFICARESTMIN?: true
    EnviarFinanc?: true
    LIMPAESTOQUE?: true
    ATUALIZAESTOQUE?: true
    ExcluirReg?: true
    ATLZ_BD?: true
    ALTITEMVD?: true
    BLOQDESC?: true
    telemarketing?: true
    CadDistrib?: true
    VerSldDeposito?: true
    AtivarProduto?: true
    CancelarNF?: true
    CancVenda?: true
    AlterarVenda?: true
    IgnoraDescVd?: true
    CancAmostra?: true
    CancMovEst?: true
    AltSenha?: true
    VendedorBalcao?: true
    PrcDistrib?: true
    Aut_CadPF?: true
    UsuCaixaLj?: true
    LiberaPrcCusto?: true
    MostraCustoVd?: true
    BxVdFrenteLj?: true
    UsaPrcEspDist?: true
    Id_Promocao?: true
    liberatroca?: true
    CancMapaEntr?: true
    TpAtend?: true
    EmailCobranca?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    Id_Usuario: number
    Usuario: string | null
    Senha: string | null
    DtHrUltAcesso: Date | null
    Id_Filial: number | null
    Id_Vendedor: number | null
    SeusMov: number | null
    SolicAutCanc: number | null
    LiberaDebito: number | null
    LiberaEstoque: number | null
    MostraPreco: number | null
    Faturamento: number | null
    liberapreco: number | null
    MultplaInstancia: number | null
    AlteraFinanceiro: number | null
    AlterarProduto: number | null
    AlterarPessoa: number | null
    AlterarInstalacao: number | null
    ImpResumido: number | null
    email: string | null
    EmailAltPrd: number | null
    id_entregador: number | null
    SemMovEst: number | null
    VERIFICARESTMIN: number | null
    EnviarFinanc: number | null
    LIMPAESTOQUE: number | null
    ATUALIZAESTOQUE: number | null
    ExcluirReg: number | null
    ATLZ_BD: number | null
    ALTITEMVD: number | null
    BLOQDESC: number | null
    telemarketing: number | null
    CadDistrib: number | null
    VerSldDeposito: number | null
    AtivarProduto: number | null
    CancelarNF: number | null
    CancVenda: number | null
    AlterarVenda: number | null
    IgnoraDescVd: number | null
    CancAmostra: number | null
    CancMovEst: number | null
    AltSenha: number | null
    VendedorBalcao: number | null
    PrcDistrib: number | null
    Aut_CadPF: number | null
    UsuCaixaLj: number | null
    LiberaPrcCusto: number | null
    MostraCustoVd: number | null
    BxVdFrenteLj: number | null
    UsaPrcEspDist: number | null
    Id_Promocao: number | null
    liberatroca: number | null
    CancMapaEntr: number | null
    TpAtend: number | null
    EmailCobranca: number | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_Usuario?: boolean
    Usuario?: boolean
    Senha?: boolean
    DtHrUltAcesso?: boolean
    Id_Filial?: boolean
    Id_Vendedor?: boolean
    SeusMov?: boolean
    SolicAutCanc?: boolean
    LiberaDebito?: boolean
    LiberaEstoque?: boolean
    MostraPreco?: boolean
    Faturamento?: boolean
    liberapreco?: boolean
    MultplaInstancia?: boolean
    AlteraFinanceiro?: boolean
    AlterarProduto?: boolean
    AlterarPessoa?: boolean
    AlterarInstalacao?: boolean
    ImpResumido?: boolean
    email?: boolean
    EmailAltPrd?: boolean
    id_entregador?: boolean
    SemMovEst?: boolean
    VERIFICARESTMIN?: boolean
    EnviarFinanc?: boolean
    LIMPAESTOQUE?: boolean
    ATUALIZAESTOQUE?: boolean
    ExcluirReg?: boolean
    ATLZ_BD?: boolean
    ALTITEMVD?: boolean
    BLOQDESC?: boolean
    telemarketing?: boolean
    CadDistrib?: boolean
    VerSldDeposito?: boolean
    AtivarProduto?: boolean
    CancelarNF?: boolean
    CancVenda?: boolean
    AlterarVenda?: boolean
    IgnoraDescVd?: boolean
    CancAmostra?: boolean
    CancMovEst?: boolean
    AltSenha?: boolean
    VendedorBalcao?: boolean
    PrcDistrib?: boolean
    Aut_CadPF?: boolean
    UsuCaixaLj?: boolean
    LiberaPrcCusto?: boolean
    MostraCustoVd?: boolean
    BxVdFrenteLj?: boolean
    UsaPrcEspDist?: boolean
    Id_Promocao?: boolean
    liberatroca?: boolean
    CancMapaEntr?: boolean
    TpAtend?: boolean
    EmailCobranca?: boolean
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
    Id_Usuario?: boolean
    Usuario?: boolean
    Senha?: boolean
    DtHrUltAcesso?: boolean
    Id_Filial?: boolean
    Id_Vendedor?: boolean
    SeusMov?: boolean
    SolicAutCanc?: boolean
    LiberaDebito?: boolean
    LiberaEstoque?: boolean
    MostraPreco?: boolean
    Faturamento?: boolean
    liberapreco?: boolean
    MultplaInstancia?: boolean
    AlteraFinanceiro?: boolean
    AlterarProduto?: boolean
    AlterarPessoa?: boolean
    AlterarInstalacao?: boolean
    ImpResumido?: boolean
    email?: boolean
    EmailAltPrd?: boolean
    id_entregador?: boolean
    SemMovEst?: boolean
    VERIFICARESTMIN?: boolean
    EnviarFinanc?: boolean
    LIMPAESTOQUE?: boolean
    ATUALIZAESTOQUE?: boolean
    ExcluirReg?: boolean
    ATLZ_BD?: boolean
    ALTITEMVD?: boolean
    BLOQDESC?: boolean
    telemarketing?: boolean
    CadDistrib?: boolean
    VerSldDeposito?: boolean
    AtivarProduto?: boolean
    CancelarNF?: boolean
    CancVenda?: boolean
    AlterarVenda?: boolean
    IgnoraDescVd?: boolean
    CancAmostra?: boolean
    CancMovEst?: boolean
    AltSenha?: boolean
    VendedorBalcao?: boolean
    PrcDistrib?: boolean
    Aut_CadPF?: boolean
    UsuCaixaLj?: boolean
    LiberaPrcCusto?: boolean
    MostraCustoVd?: boolean
    BxVdFrenteLj?: boolean
    UsaPrcEspDist?: boolean
    Id_Promocao?: boolean
    liberatroca?: boolean
    CancMapaEntr?: boolean
    TpAtend?: boolean
    EmailCobranca?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_Usuario" | "Usuario" | "Senha" | "DtHrUltAcesso" | "Id_Filial" | "Id_Vendedor" | "SeusMov" | "SolicAutCanc" | "LiberaDebito" | "LiberaEstoque" | "MostraPreco" | "Faturamento" | "liberapreco" | "MultplaInstancia" | "AlteraFinanceiro" | "AlterarProduto" | "AlterarPessoa" | "AlterarInstalacao" | "ImpResumido" | "email" | "EmailAltPrd" | "id_entregador" | "SemMovEst" | "VERIFICARESTMIN" | "EnviarFinanc" | "LIMPAESTOQUE" | "ATUALIZAESTOQUE" | "ExcluirReg" | "ATLZ_BD" | "ALTITEMVD" | "BLOQDESC" | "telemarketing" | "CadDistrib" | "VerSldDeposito" | "AtivarProduto" | "CancelarNF" | "CancVenda" | "AlterarVenda" | "IgnoraDescVd" | "CancAmostra" | "CancMovEst" | "AltSenha" | "VendedorBalcao" | "PrcDistrib" | "Aut_CadPF" | "UsuCaixaLj" | "LiberaPrcCusto" | "MostraCustoVd" | "BxVdFrenteLj" | "UsaPrcEspDist" | "Id_Promocao" | "liberatroca" | "CancMapaEntr" | "TpAtend" | "EmailCobranca", ExtArgs["result"]["usuarios"]>

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id_Usuario: number
      Usuario: string | null
      Senha: string | null
      DtHrUltAcesso: Date | null
      Id_Filial: number | null
      Id_Vendedor: number | null
      SeusMov: number | null
      SolicAutCanc: number | null
      LiberaDebito: number | null
      LiberaEstoque: number | null
      MostraPreco: number | null
      Faturamento: number | null
      liberapreco: number | null
      MultplaInstancia: number | null
      AlteraFinanceiro: number | null
      AlterarProduto: number | null
      AlterarPessoa: number | null
      AlterarInstalacao: number | null
      ImpResumido: number | null
      email: string | null
      EmailAltPrd: number | null
      id_entregador: number | null
      SemMovEst: number | null
      VERIFICARESTMIN: number | null
      EnviarFinanc: number | null
      LIMPAESTOQUE: number | null
      ATUALIZAESTOQUE: number | null
      ExcluirReg: number | null
      ATLZ_BD: number | null
      ALTITEMVD: number | null
      BLOQDESC: number | null
      telemarketing: number | null
      CadDistrib: number | null
      VerSldDeposito: number | null
      AtivarProduto: number | null
      CancelarNF: number | null
      CancVenda: number | null
      AlterarVenda: number | null
      IgnoraDescVd: number | null
      CancAmostra: number | null
      CancMovEst: number | null
      AltSenha: number | null
      VendedorBalcao: number | null
      PrcDistrib: number | null
      Aut_CadPF: number | null
      UsuCaixaLj: number | null
      LiberaPrcCusto: number | null
      MostraCustoVd: number | null
      BxVdFrenteLj: number | null
      UsaPrcEspDist: number | null
      Id_Promocao: number | null
      liberatroca: number | null
      CancMapaEntr: number | null
      TpAtend: number | null
      EmailCobranca: number | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `Id_Usuario`
     * const usuariosWithId_UsuarioOnly = await prisma.usuarios.findMany({ select: { Id_Usuario: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly Id_Usuario: FieldRef<"Usuarios", 'Int'>
    readonly Usuario: FieldRef<"Usuarios", 'String'>
    readonly Senha: FieldRef<"Usuarios", 'String'>
    readonly DtHrUltAcesso: FieldRef<"Usuarios", 'DateTime'>
    readonly Id_Filial: FieldRef<"Usuarios", 'Int'>
    readonly Id_Vendedor: FieldRef<"Usuarios", 'Int'>
    readonly SeusMov: FieldRef<"Usuarios", 'Int'>
    readonly SolicAutCanc: FieldRef<"Usuarios", 'Int'>
    readonly LiberaDebito: FieldRef<"Usuarios", 'Int'>
    readonly LiberaEstoque: FieldRef<"Usuarios", 'Int'>
    readonly MostraPreco: FieldRef<"Usuarios", 'Int'>
    readonly Faturamento: FieldRef<"Usuarios", 'Int'>
    readonly liberapreco: FieldRef<"Usuarios", 'Int'>
    readonly MultplaInstancia: FieldRef<"Usuarios", 'Int'>
    readonly AlteraFinanceiro: FieldRef<"Usuarios", 'Int'>
    readonly AlterarProduto: FieldRef<"Usuarios", 'Int'>
    readonly AlterarPessoa: FieldRef<"Usuarios", 'Int'>
    readonly AlterarInstalacao: FieldRef<"Usuarios", 'Int'>
    readonly ImpResumido: FieldRef<"Usuarios", 'Int'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly EmailAltPrd: FieldRef<"Usuarios", 'Int'>
    readonly id_entregador: FieldRef<"Usuarios", 'Int'>
    readonly SemMovEst: FieldRef<"Usuarios", 'Int'>
    readonly VERIFICARESTMIN: FieldRef<"Usuarios", 'Int'>
    readonly EnviarFinanc: FieldRef<"Usuarios", 'Int'>
    readonly LIMPAESTOQUE: FieldRef<"Usuarios", 'Int'>
    readonly ATUALIZAESTOQUE: FieldRef<"Usuarios", 'Int'>
    readonly ExcluirReg: FieldRef<"Usuarios", 'Int'>
    readonly ATLZ_BD: FieldRef<"Usuarios", 'Int'>
    readonly ALTITEMVD: FieldRef<"Usuarios", 'Int'>
    readonly BLOQDESC: FieldRef<"Usuarios", 'Int'>
    readonly telemarketing: FieldRef<"Usuarios", 'Int'>
    readonly CadDistrib: FieldRef<"Usuarios", 'Int'>
    readonly VerSldDeposito: FieldRef<"Usuarios", 'Int'>
    readonly AtivarProduto: FieldRef<"Usuarios", 'Int'>
    readonly CancelarNF: FieldRef<"Usuarios", 'Int'>
    readonly CancVenda: FieldRef<"Usuarios", 'Int'>
    readonly AlterarVenda: FieldRef<"Usuarios", 'Int'>
    readonly IgnoraDescVd: FieldRef<"Usuarios", 'Int'>
    readonly CancAmostra: FieldRef<"Usuarios", 'Int'>
    readonly CancMovEst: FieldRef<"Usuarios", 'Int'>
    readonly AltSenha: FieldRef<"Usuarios", 'Int'>
    readonly VendedorBalcao: FieldRef<"Usuarios", 'Int'>
    readonly PrcDistrib: FieldRef<"Usuarios", 'Int'>
    readonly Aut_CadPF: FieldRef<"Usuarios", 'Int'>
    readonly UsuCaixaLj: FieldRef<"Usuarios", 'Int'>
    readonly LiberaPrcCusto: FieldRef<"Usuarios", 'Int'>
    readonly MostraCustoVd: FieldRef<"Usuarios", 'Int'>
    readonly BxVdFrenteLj: FieldRef<"Usuarios", 'Int'>
    readonly UsaPrcEspDist: FieldRef<"Usuarios", 'Int'>
    readonly Id_Promocao: FieldRef<"Usuarios", 'Int'>
    readonly liberatroca: FieldRef<"Usuarios", 'Int'>
    readonly CancMapaEntr: FieldRef<"Usuarios", 'Int'>
    readonly TpAtend: FieldRef<"Usuarios", 'Int'>
    readonly EmailCobranca: FieldRef<"Usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AcessoUsuarioScalarFieldEnum: {
    Id_Usuario: 'Id_Usuario',
    Opcao: 'Opcao',
    Acesso: 'Acesso'
  };

  export type AcessoUsuarioScalarFieldEnum = (typeof AcessoUsuarioScalarFieldEnum)[keyof typeof AcessoUsuarioScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    Id_Usuario: 'Id_Usuario',
    Usuario: 'Usuario',
    Senha: 'Senha',
    DtHrUltAcesso: 'DtHrUltAcesso',
    Id_Filial: 'Id_Filial',
    Id_Vendedor: 'Id_Vendedor',
    SeusMov: 'SeusMov',
    SolicAutCanc: 'SolicAutCanc',
    LiberaDebito: 'LiberaDebito',
    LiberaEstoque: 'LiberaEstoque',
    MostraPreco: 'MostraPreco',
    Faturamento: 'Faturamento',
    liberapreco: 'liberapreco',
    MultplaInstancia: 'MultplaInstancia',
    AlteraFinanceiro: 'AlteraFinanceiro',
    AlterarProduto: 'AlterarProduto',
    AlterarPessoa: 'AlterarPessoa',
    AlterarInstalacao: 'AlterarInstalacao',
    ImpResumido: 'ImpResumido',
    email: 'email',
    EmailAltPrd: 'EmailAltPrd',
    id_entregador: 'id_entregador',
    SemMovEst: 'SemMovEst',
    VERIFICARESTMIN: 'VERIFICARESTMIN',
    EnviarFinanc: 'EnviarFinanc',
    LIMPAESTOQUE: 'LIMPAESTOQUE',
    ATUALIZAESTOQUE: 'ATUALIZAESTOQUE',
    ExcluirReg: 'ExcluirReg',
    ATLZ_BD: 'ATLZ_BD',
    ALTITEMVD: 'ALTITEMVD',
    BLOQDESC: 'BLOQDESC',
    telemarketing: 'telemarketing',
    CadDistrib: 'CadDistrib',
    VerSldDeposito: 'VerSldDeposito',
    AtivarProduto: 'AtivarProduto',
    CancelarNF: 'CancelarNF',
    CancVenda: 'CancVenda',
    AlterarVenda: 'AlterarVenda',
    IgnoraDescVd: 'IgnoraDescVd',
    CancAmostra: 'CancAmostra',
    CancMovEst: 'CancMovEst',
    AltSenha: 'AltSenha',
    VendedorBalcao: 'VendedorBalcao',
    PrcDistrib: 'PrcDistrib',
    Aut_CadPF: 'Aut_CadPF',
    UsuCaixaLj: 'UsuCaixaLj',
    LiberaPrcCusto: 'LiberaPrcCusto',
    MostraCustoVd: 'MostraCustoVd',
    BxVdFrenteLj: 'BxVdFrenteLj',
    UsaPrcEspDist: 'UsaPrcEspDist',
    Id_Promocao: 'Id_Promocao',
    liberatroca: 'liberatroca',
    CancMapaEntr: 'CancMapaEntr',
    TpAtend: 'TpAtend',
    EmailCobranca: 'EmailCobranca'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AcessoUsuarioWhereInput = {
    AND?: AcessoUsuarioWhereInput | AcessoUsuarioWhereInput[]
    OR?: AcessoUsuarioWhereInput[]
    NOT?: AcessoUsuarioWhereInput | AcessoUsuarioWhereInput[]
    Id_Usuario?: IntFilter<"AcessoUsuario"> | number
    Opcao?: StringFilter<"AcessoUsuario"> | string
    Acesso?: IntNullableFilter<"AcessoUsuario"> | number | null
  }

  export type AcessoUsuarioOrderByWithRelationInput = {
    Id_Usuario?: SortOrder
    Opcao?: SortOrder
    Acesso?: SortOrderInput | SortOrder
  }

  export type AcessoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    Id_Usuario?: number
    AND?: AcessoUsuarioWhereInput | AcessoUsuarioWhereInput[]
    OR?: AcessoUsuarioWhereInput[]
    NOT?: AcessoUsuarioWhereInput | AcessoUsuarioWhereInput[]
    Opcao?: StringFilter<"AcessoUsuario"> | string
    Acesso?: IntNullableFilter<"AcessoUsuario"> | number | null
  }, "Id_Usuario">

  export type AcessoUsuarioOrderByWithAggregationInput = {
    Id_Usuario?: SortOrder
    Opcao?: SortOrder
    Acesso?: SortOrderInput | SortOrder
    _count?: AcessoUsuarioCountOrderByAggregateInput
    _avg?: AcessoUsuarioAvgOrderByAggregateInput
    _max?: AcessoUsuarioMaxOrderByAggregateInput
    _min?: AcessoUsuarioMinOrderByAggregateInput
    _sum?: AcessoUsuarioSumOrderByAggregateInput
  }

  export type AcessoUsuarioScalarWhereWithAggregatesInput = {
    AND?: AcessoUsuarioScalarWhereWithAggregatesInput | AcessoUsuarioScalarWhereWithAggregatesInput[]
    OR?: AcessoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: AcessoUsuarioScalarWhereWithAggregatesInput | AcessoUsuarioScalarWhereWithAggregatesInput[]
    Id_Usuario?: IntWithAggregatesFilter<"AcessoUsuario"> | number
    Opcao?: StringWithAggregatesFilter<"AcessoUsuario"> | string
    Acesso?: IntNullableWithAggregatesFilter<"AcessoUsuario"> | number | null
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Id_Usuario?: IntFilter<"Usuarios"> | number
    Usuario?: StringNullableFilter<"Usuarios"> | string | null
    Senha?: StringNullableFilter<"Usuarios"> | string | null
    DtHrUltAcesso?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    Id_Filial?: IntNullableFilter<"Usuarios"> | number | null
    Id_Vendedor?: IntNullableFilter<"Usuarios"> | number | null
    SeusMov?: IntNullableFilter<"Usuarios"> | number | null
    SolicAutCanc?: IntNullableFilter<"Usuarios"> | number | null
    LiberaDebito?: IntNullableFilter<"Usuarios"> | number | null
    LiberaEstoque?: IntNullableFilter<"Usuarios"> | number | null
    MostraPreco?: IntNullableFilter<"Usuarios"> | number | null
    Faturamento?: IntNullableFilter<"Usuarios"> | number | null
    liberapreco?: IntNullableFilter<"Usuarios"> | number | null
    MultplaInstancia?: IntNullableFilter<"Usuarios"> | number | null
    AlteraFinanceiro?: IntNullableFilter<"Usuarios"> | number | null
    AlterarProduto?: IntNullableFilter<"Usuarios"> | number | null
    AlterarPessoa?: IntNullableFilter<"Usuarios"> | number | null
    AlterarInstalacao?: IntNullableFilter<"Usuarios"> | number | null
    ImpResumido?: IntNullableFilter<"Usuarios"> | number | null
    email?: StringNullableFilter<"Usuarios"> | string | null
    EmailAltPrd?: IntNullableFilter<"Usuarios"> | number | null
    id_entregador?: IntNullableFilter<"Usuarios"> | number | null
    SemMovEst?: IntNullableFilter<"Usuarios"> | number | null
    VERIFICARESTMIN?: IntNullableFilter<"Usuarios"> | number | null
    EnviarFinanc?: IntNullableFilter<"Usuarios"> | number | null
    LIMPAESTOQUE?: IntNullableFilter<"Usuarios"> | number | null
    ATUALIZAESTOQUE?: IntNullableFilter<"Usuarios"> | number | null
    ExcluirReg?: IntNullableFilter<"Usuarios"> | number | null
    ATLZ_BD?: IntNullableFilter<"Usuarios"> | number | null
    ALTITEMVD?: IntNullableFilter<"Usuarios"> | number | null
    BLOQDESC?: IntNullableFilter<"Usuarios"> | number | null
    telemarketing?: IntNullableFilter<"Usuarios"> | number | null
    CadDistrib?: IntNullableFilter<"Usuarios"> | number | null
    VerSldDeposito?: IntNullableFilter<"Usuarios"> | number | null
    AtivarProduto?: IntNullableFilter<"Usuarios"> | number | null
    CancelarNF?: IntNullableFilter<"Usuarios"> | number | null
    CancVenda?: IntNullableFilter<"Usuarios"> | number | null
    AlterarVenda?: IntNullableFilter<"Usuarios"> | number | null
    IgnoraDescVd?: IntNullableFilter<"Usuarios"> | number | null
    CancAmostra?: IntNullableFilter<"Usuarios"> | number | null
    CancMovEst?: IntNullableFilter<"Usuarios"> | number | null
    AltSenha?: IntNullableFilter<"Usuarios"> | number | null
    VendedorBalcao?: IntNullableFilter<"Usuarios"> | number | null
    PrcDistrib?: IntNullableFilter<"Usuarios"> | number | null
    Aut_CadPF?: IntNullableFilter<"Usuarios"> | number | null
    UsuCaixaLj?: IntNullableFilter<"Usuarios"> | number | null
    LiberaPrcCusto?: IntNullableFilter<"Usuarios"> | number | null
    MostraCustoVd?: IntNullableFilter<"Usuarios"> | number | null
    BxVdFrenteLj?: IntNullableFilter<"Usuarios"> | number | null
    UsaPrcEspDist?: IntNullableFilter<"Usuarios"> | number | null
    Id_Promocao?: IntNullableFilter<"Usuarios"> | number | null
    liberatroca?: IntNullableFilter<"Usuarios"> | number | null
    CancMapaEntr?: IntNullableFilter<"Usuarios"> | number | null
    TpAtend?: IntNullableFilter<"Usuarios"> | number | null
    EmailCobranca?: IntNullableFilter<"Usuarios"> | number | null
  }

  export type UsuariosOrderByWithRelationInput = {
    Id_Usuario?: SortOrder
    Usuario?: SortOrderInput | SortOrder
    Senha?: SortOrderInput | SortOrder
    DtHrUltAcesso?: SortOrderInput | SortOrder
    Id_Filial?: SortOrderInput | SortOrder
    Id_Vendedor?: SortOrderInput | SortOrder
    SeusMov?: SortOrderInput | SortOrder
    SolicAutCanc?: SortOrderInput | SortOrder
    LiberaDebito?: SortOrderInput | SortOrder
    LiberaEstoque?: SortOrderInput | SortOrder
    MostraPreco?: SortOrderInput | SortOrder
    Faturamento?: SortOrderInput | SortOrder
    liberapreco?: SortOrderInput | SortOrder
    MultplaInstancia?: SortOrderInput | SortOrder
    AlteraFinanceiro?: SortOrderInput | SortOrder
    AlterarProduto?: SortOrderInput | SortOrder
    AlterarPessoa?: SortOrderInput | SortOrder
    AlterarInstalacao?: SortOrderInput | SortOrder
    ImpResumido?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    EmailAltPrd?: SortOrderInput | SortOrder
    id_entregador?: SortOrderInput | SortOrder
    SemMovEst?: SortOrderInput | SortOrder
    VERIFICARESTMIN?: SortOrderInput | SortOrder
    EnviarFinanc?: SortOrderInput | SortOrder
    LIMPAESTOQUE?: SortOrderInput | SortOrder
    ATUALIZAESTOQUE?: SortOrderInput | SortOrder
    ExcluirReg?: SortOrderInput | SortOrder
    ATLZ_BD?: SortOrderInput | SortOrder
    ALTITEMVD?: SortOrderInput | SortOrder
    BLOQDESC?: SortOrderInput | SortOrder
    telemarketing?: SortOrderInput | SortOrder
    CadDistrib?: SortOrderInput | SortOrder
    VerSldDeposito?: SortOrderInput | SortOrder
    AtivarProduto?: SortOrderInput | SortOrder
    CancelarNF?: SortOrderInput | SortOrder
    CancVenda?: SortOrderInput | SortOrder
    AlterarVenda?: SortOrderInput | SortOrder
    IgnoraDescVd?: SortOrderInput | SortOrder
    CancAmostra?: SortOrderInput | SortOrder
    CancMovEst?: SortOrderInput | SortOrder
    AltSenha?: SortOrderInput | SortOrder
    VendedorBalcao?: SortOrderInput | SortOrder
    PrcDistrib?: SortOrderInput | SortOrder
    Aut_CadPF?: SortOrderInput | SortOrder
    UsuCaixaLj?: SortOrderInput | SortOrder
    LiberaPrcCusto?: SortOrderInput | SortOrder
    MostraCustoVd?: SortOrderInput | SortOrder
    BxVdFrenteLj?: SortOrderInput | SortOrder
    UsaPrcEspDist?: SortOrderInput | SortOrder
    Id_Promocao?: SortOrderInput | SortOrder
    liberatroca?: SortOrderInput | SortOrder
    CancMapaEntr?: SortOrderInput | SortOrder
    TpAtend?: SortOrderInput | SortOrder
    EmailCobranca?: SortOrderInput | SortOrder
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    Id_Usuario?: number
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Usuario?: StringNullableFilter<"Usuarios"> | string | null
    Senha?: StringNullableFilter<"Usuarios"> | string | null
    DtHrUltAcesso?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    Id_Filial?: IntNullableFilter<"Usuarios"> | number | null
    Id_Vendedor?: IntNullableFilter<"Usuarios"> | number | null
    SeusMov?: IntNullableFilter<"Usuarios"> | number | null
    SolicAutCanc?: IntNullableFilter<"Usuarios"> | number | null
    LiberaDebito?: IntNullableFilter<"Usuarios"> | number | null
    LiberaEstoque?: IntNullableFilter<"Usuarios"> | number | null
    MostraPreco?: IntNullableFilter<"Usuarios"> | number | null
    Faturamento?: IntNullableFilter<"Usuarios"> | number | null
    liberapreco?: IntNullableFilter<"Usuarios"> | number | null
    MultplaInstancia?: IntNullableFilter<"Usuarios"> | number | null
    AlteraFinanceiro?: IntNullableFilter<"Usuarios"> | number | null
    AlterarProduto?: IntNullableFilter<"Usuarios"> | number | null
    AlterarPessoa?: IntNullableFilter<"Usuarios"> | number | null
    AlterarInstalacao?: IntNullableFilter<"Usuarios"> | number | null
    ImpResumido?: IntNullableFilter<"Usuarios"> | number | null
    email?: StringNullableFilter<"Usuarios"> | string | null
    EmailAltPrd?: IntNullableFilter<"Usuarios"> | number | null
    id_entregador?: IntNullableFilter<"Usuarios"> | number | null
    SemMovEst?: IntNullableFilter<"Usuarios"> | number | null
    VERIFICARESTMIN?: IntNullableFilter<"Usuarios"> | number | null
    EnviarFinanc?: IntNullableFilter<"Usuarios"> | number | null
    LIMPAESTOQUE?: IntNullableFilter<"Usuarios"> | number | null
    ATUALIZAESTOQUE?: IntNullableFilter<"Usuarios"> | number | null
    ExcluirReg?: IntNullableFilter<"Usuarios"> | number | null
    ATLZ_BD?: IntNullableFilter<"Usuarios"> | number | null
    ALTITEMVD?: IntNullableFilter<"Usuarios"> | number | null
    BLOQDESC?: IntNullableFilter<"Usuarios"> | number | null
    telemarketing?: IntNullableFilter<"Usuarios"> | number | null
    CadDistrib?: IntNullableFilter<"Usuarios"> | number | null
    VerSldDeposito?: IntNullableFilter<"Usuarios"> | number | null
    AtivarProduto?: IntNullableFilter<"Usuarios"> | number | null
    CancelarNF?: IntNullableFilter<"Usuarios"> | number | null
    CancVenda?: IntNullableFilter<"Usuarios"> | number | null
    AlterarVenda?: IntNullableFilter<"Usuarios"> | number | null
    IgnoraDescVd?: IntNullableFilter<"Usuarios"> | number | null
    CancAmostra?: IntNullableFilter<"Usuarios"> | number | null
    CancMovEst?: IntNullableFilter<"Usuarios"> | number | null
    AltSenha?: IntNullableFilter<"Usuarios"> | number | null
    VendedorBalcao?: IntNullableFilter<"Usuarios"> | number | null
    PrcDistrib?: IntNullableFilter<"Usuarios"> | number | null
    Aut_CadPF?: IntNullableFilter<"Usuarios"> | number | null
    UsuCaixaLj?: IntNullableFilter<"Usuarios"> | number | null
    LiberaPrcCusto?: IntNullableFilter<"Usuarios"> | number | null
    MostraCustoVd?: IntNullableFilter<"Usuarios"> | number | null
    BxVdFrenteLj?: IntNullableFilter<"Usuarios"> | number | null
    UsaPrcEspDist?: IntNullableFilter<"Usuarios"> | number | null
    Id_Promocao?: IntNullableFilter<"Usuarios"> | number | null
    liberatroca?: IntNullableFilter<"Usuarios"> | number | null
    CancMapaEntr?: IntNullableFilter<"Usuarios"> | number | null
    TpAtend?: IntNullableFilter<"Usuarios"> | number | null
    EmailCobranca?: IntNullableFilter<"Usuarios"> | number | null
  }, "Id_Usuario">

  export type UsuariosOrderByWithAggregationInput = {
    Id_Usuario?: SortOrder
    Usuario?: SortOrderInput | SortOrder
    Senha?: SortOrderInput | SortOrder
    DtHrUltAcesso?: SortOrderInput | SortOrder
    Id_Filial?: SortOrderInput | SortOrder
    Id_Vendedor?: SortOrderInput | SortOrder
    SeusMov?: SortOrderInput | SortOrder
    SolicAutCanc?: SortOrderInput | SortOrder
    LiberaDebito?: SortOrderInput | SortOrder
    LiberaEstoque?: SortOrderInput | SortOrder
    MostraPreco?: SortOrderInput | SortOrder
    Faturamento?: SortOrderInput | SortOrder
    liberapreco?: SortOrderInput | SortOrder
    MultplaInstancia?: SortOrderInput | SortOrder
    AlteraFinanceiro?: SortOrderInput | SortOrder
    AlterarProduto?: SortOrderInput | SortOrder
    AlterarPessoa?: SortOrderInput | SortOrder
    AlterarInstalacao?: SortOrderInput | SortOrder
    ImpResumido?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    EmailAltPrd?: SortOrderInput | SortOrder
    id_entregador?: SortOrderInput | SortOrder
    SemMovEst?: SortOrderInput | SortOrder
    VERIFICARESTMIN?: SortOrderInput | SortOrder
    EnviarFinanc?: SortOrderInput | SortOrder
    LIMPAESTOQUE?: SortOrderInput | SortOrder
    ATUALIZAESTOQUE?: SortOrderInput | SortOrder
    ExcluirReg?: SortOrderInput | SortOrder
    ATLZ_BD?: SortOrderInput | SortOrder
    ALTITEMVD?: SortOrderInput | SortOrder
    BLOQDESC?: SortOrderInput | SortOrder
    telemarketing?: SortOrderInput | SortOrder
    CadDistrib?: SortOrderInput | SortOrder
    VerSldDeposito?: SortOrderInput | SortOrder
    AtivarProduto?: SortOrderInput | SortOrder
    CancelarNF?: SortOrderInput | SortOrder
    CancVenda?: SortOrderInput | SortOrder
    AlterarVenda?: SortOrderInput | SortOrder
    IgnoraDescVd?: SortOrderInput | SortOrder
    CancAmostra?: SortOrderInput | SortOrder
    CancMovEst?: SortOrderInput | SortOrder
    AltSenha?: SortOrderInput | SortOrder
    VendedorBalcao?: SortOrderInput | SortOrder
    PrcDistrib?: SortOrderInput | SortOrder
    Aut_CadPF?: SortOrderInput | SortOrder
    UsuCaixaLj?: SortOrderInput | SortOrder
    LiberaPrcCusto?: SortOrderInput | SortOrder
    MostraCustoVd?: SortOrderInput | SortOrder
    BxVdFrenteLj?: SortOrderInput | SortOrder
    UsaPrcEspDist?: SortOrderInput | SortOrder
    Id_Promocao?: SortOrderInput | SortOrder
    liberatroca?: SortOrderInput | SortOrder
    CancMapaEntr?: SortOrderInput | SortOrder
    TpAtend?: SortOrderInput | SortOrder
    EmailCobranca?: SortOrderInput | SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    Id_Usuario?: IntWithAggregatesFilter<"Usuarios"> | number
    Usuario?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    Senha?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    DtHrUltAcesso?: DateTimeNullableWithAggregatesFilter<"Usuarios"> | Date | string | null
    Id_Filial?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    Id_Vendedor?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    SeusMov?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    SolicAutCanc?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    LiberaDebito?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    LiberaEstoque?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    MostraPreco?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    Faturamento?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    liberapreco?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    MultplaInstancia?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AlteraFinanceiro?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AlterarProduto?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AlterarPessoa?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AlterarInstalacao?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    ImpResumido?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    email?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    EmailAltPrd?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    id_entregador?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    SemMovEst?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    VERIFICARESTMIN?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    EnviarFinanc?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    LIMPAESTOQUE?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    ATUALIZAESTOQUE?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    ExcluirReg?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    ATLZ_BD?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    ALTITEMVD?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    BLOQDESC?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    telemarketing?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    CadDistrib?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    VerSldDeposito?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AtivarProduto?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    CancelarNF?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    CancVenda?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AlterarVenda?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    IgnoraDescVd?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    CancAmostra?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    CancMovEst?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    AltSenha?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    VendedorBalcao?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    PrcDistrib?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    Aut_CadPF?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    UsuCaixaLj?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    LiberaPrcCusto?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    MostraCustoVd?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    BxVdFrenteLj?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    UsaPrcEspDist?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    Id_Promocao?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    liberatroca?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    CancMapaEntr?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    TpAtend?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    EmailCobranca?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
  }

  export type AcessoUsuarioCreateInput = {
    Id_Usuario: number
    Opcao: string
    Acesso?: number | null
  }

  export type AcessoUsuarioUncheckedCreateInput = {
    Id_Usuario: number
    Opcao: string
    Acesso?: number | null
  }

  export type AcessoUsuarioUpdateInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Opcao?: StringFieldUpdateOperationsInput | string
    Acesso?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AcessoUsuarioUncheckedUpdateInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Opcao?: StringFieldUpdateOperationsInput | string
    Acesso?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AcessoUsuarioCreateManyInput = {
    Id_Usuario: number
    Opcao: string
    Acesso?: number | null
  }

  export type AcessoUsuarioUpdateManyMutationInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Opcao?: StringFieldUpdateOperationsInput | string
    Acesso?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AcessoUsuarioUncheckedUpdateManyInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Opcao?: StringFieldUpdateOperationsInput | string
    Acesso?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateInput = {
    Id_Usuario: number
    Usuario?: string | null
    Senha?: string | null
    DtHrUltAcesso?: Date | string | null
    Id_Filial?: number | null
    Id_Vendedor?: number | null
    SeusMov?: number | null
    SolicAutCanc?: number | null
    LiberaDebito?: number | null
    LiberaEstoque?: number | null
    MostraPreco?: number | null
    Faturamento?: number | null
    liberapreco?: number | null
    MultplaInstancia?: number | null
    AlteraFinanceiro?: number | null
    AlterarProduto?: number | null
    AlterarPessoa?: number | null
    AlterarInstalacao?: number | null
    ImpResumido?: number | null
    email?: string | null
    EmailAltPrd?: number | null
    id_entregador?: number | null
    SemMovEst?: number | null
    VERIFICARESTMIN?: number | null
    EnviarFinanc?: number | null
    LIMPAESTOQUE?: number | null
    ATUALIZAESTOQUE?: number | null
    ExcluirReg?: number | null
    ATLZ_BD?: number | null
    ALTITEMVD?: number | null
    BLOQDESC?: number | null
    telemarketing?: number | null
    CadDistrib?: number | null
    VerSldDeposito?: number | null
    AtivarProduto?: number | null
    CancelarNF?: number | null
    CancVenda?: number | null
    AlterarVenda?: number | null
    IgnoraDescVd?: number | null
    CancAmostra?: number | null
    CancMovEst?: number | null
    AltSenha?: number | null
    VendedorBalcao?: number | null
    PrcDistrib?: number | null
    Aut_CadPF?: number | null
    UsuCaixaLj?: number | null
    LiberaPrcCusto?: number | null
    MostraCustoVd?: number | null
    BxVdFrenteLj?: number | null
    UsaPrcEspDist?: number | null
    Id_Promocao?: number | null
    liberatroca?: number | null
    CancMapaEntr?: number | null
    TpAtend?: number | null
    EmailCobranca?: number | null
  }

  export type UsuariosUncheckedCreateInput = {
    Id_Usuario: number
    Usuario?: string | null
    Senha?: string | null
    DtHrUltAcesso?: Date | string | null
    Id_Filial?: number | null
    Id_Vendedor?: number | null
    SeusMov?: number | null
    SolicAutCanc?: number | null
    LiberaDebito?: number | null
    LiberaEstoque?: number | null
    MostraPreco?: number | null
    Faturamento?: number | null
    liberapreco?: number | null
    MultplaInstancia?: number | null
    AlteraFinanceiro?: number | null
    AlterarProduto?: number | null
    AlterarPessoa?: number | null
    AlterarInstalacao?: number | null
    ImpResumido?: number | null
    email?: string | null
    EmailAltPrd?: number | null
    id_entregador?: number | null
    SemMovEst?: number | null
    VERIFICARESTMIN?: number | null
    EnviarFinanc?: number | null
    LIMPAESTOQUE?: number | null
    ATUALIZAESTOQUE?: number | null
    ExcluirReg?: number | null
    ATLZ_BD?: number | null
    ALTITEMVD?: number | null
    BLOQDESC?: number | null
    telemarketing?: number | null
    CadDistrib?: number | null
    VerSldDeposito?: number | null
    AtivarProduto?: number | null
    CancelarNF?: number | null
    CancVenda?: number | null
    AlterarVenda?: number | null
    IgnoraDescVd?: number | null
    CancAmostra?: number | null
    CancMovEst?: number | null
    AltSenha?: number | null
    VendedorBalcao?: number | null
    PrcDistrib?: number | null
    Aut_CadPF?: number | null
    UsuCaixaLj?: number | null
    LiberaPrcCusto?: number | null
    MostraCustoVd?: number | null
    BxVdFrenteLj?: number | null
    UsaPrcEspDist?: number | null
    Id_Promocao?: number | null
    liberatroca?: number | null
    CancMapaEntr?: number | null
    TpAtend?: number | null
    EmailCobranca?: number | null
  }

  export type UsuariosUpdateInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    Senha?: NullableStringFieldUpdateOperationsInput | string | null
    DtHrUltAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Filial?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Vendedor?: NullableIntFieldUpdateOperationsInput | number | null
    SeusMov?: NullableIntFieldUpdateOperationsInput | number | null
    SolicAutCanc?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaDebito?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaEstoque?: NullableIntFieldUpdateOperationsInput | number | null
    MostraPreco?: NullableIntFieldUpdateOperationsInput | number | null
    Faturamento?: NullableIntFieldUpdateOperationsInput | number | null
    liberapreco?: NullableIntFieldUpdateOperationsInput | number | null
    MultplaInstancia?: NullableIntFieldUpdateOperationsInput | number | null
    AlteraFinanceiro?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarPessoa?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarInstalacao?: NullableIntFieldUpdateOperationsInput | number | null
    ImpResumido?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAltPrd?: NullableIntFieldUpdateOperationsInput | number | null
    id_entregador?: NullableIntFieldUpdateOperationsInput | number | null
    SemMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    VERIFICARESTMIN?: NullableIntFieldUpdateOperationsInput | number | null
    EnviarFinanc?: NullableIntFieldUpdateOperationsInput | number | null
    LIMPAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ATUALIZAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ExcluirReg?: NullableIntFieldUpdateOperationsInput | number | null
    ATLZ_BD?: NullableIntFieldUpdateOperationsInput | number | null
    ALTITEMVD?: NullableIntFieldUpdateOperationsInput | number | null
    BLOQDESC?: NullableIntFieldUpdateOperationsInput | number | null
    telemarketing?: NullableIntFieldUpdateOperationsInput | number | null
    CadDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    VerSldDeposito?: NullableIntFieldUpdateOperationsInput | number | null
    AtivarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    CancelarNF?: NullableIntFieldUpdateOperationsInput | number | null
    CancVenda?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarVenda?: NullableIntFieldUpdateOperationsInput | number | null
    IgnoraDescVd?: NullableIntFieldUpdateOperationsInput | number | null
    CancAmostra?: NullableIntFieldUpdateOperationsInput | number | null
    CancMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    AltSenha?: NullableIntFieldUpdateOperationsInput | number | null
    VendedorBalcao?: NullableIntFieldUpdateOperationsInput | number | null
    PrcDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    Aut_CadPF?: NullableIntFieldUpdateOperationsInput | number | null
    UsuCaixaLj?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaPrcCusto?: NullableIntFieldUpdateOperationsInput | number | null
    MostraCustoVd?: NullableIntFieldUpdateOperationsInput | number | null
    BxVdFrenteLj?: NullableIntFieldUpdateOperationsInput | number | null
    UsaPrcEspDist?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Promocao?: NullableIntFieldUpdateOperationsInput | number | null
    liberatroca?: NullableIntFieldUpdateOperationsInput | number | null
    CancMapaEntr?: NullableIntFieldUpdateOperationsInput | number | null
    TpAtend?: NullableIntFieldUpdateOperationsInput | number | null
    EmailCobranca?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosUncheckedUpdateInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    Senha?: NullableStringFieldUpdateOperationsInput | string | null
    DtHrUltAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Filial?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Vendedor?: NullableIntFieldUpdateOperationsInput | number | null
    SeusMov?: NullableIntFieldUpdateOperationsInput | number | null
    SolicAutCanc?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaDebito?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaEstoque?: NullableIntFieldUpdateOperationsInput | number | null
    MostraPreco?: NullableIntFieldUpdateOperationsInput | number | null
    Faturamento?: NullableIntFieldUpdateOperationsInput | number | null
    liberapreco?: NullableIntFieldUpdateOperationsInput | number | null
    MultplaInstancia?: NullableIntFieldUpdateOperationsInput | number | null
    AlteraFinanceiro?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarPessoa?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarInstalacao?: NullableIntFieldUpdateOperationsInput | number | null
    ImpResumido?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAltPrd?: NullableIntFieldUpdateOperationsInput | number | null
    id_entregador?: NullableIntFieldUpdateOperationsInput | number | null
    SemMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    VERIFICARESTMIN?: NullableIntFieldUpdateOperationsInput | number | null
    EnviarFinanc?: NullableIntFieldUpdateOperationsInput | number | null
    LIMPAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ATUALIZAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ExcluirReg?: NullableIntFieldUpdateOperationsInput | number | null
    ATLZ_BD?: NullableIntFieldUpdateOperationsInput | number | null
    ALTITEMVD?: NullableIntFieldUpdateOperationsInput | number | null
    BLOQDESC?: NullableIntFieldUpdateOperationsInput | number | null
    telemarketing?: NullableIntFieldUpdateOperationsInput | number | null
    CadDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    VerSldDeposito?: NullableIntFieldUpdateOperationsInput | number | null
    AtivarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    CancelarNF?: NullableIntFieldUpdateOperationsInput | number | null
    CancVenda?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarVenda?: NullableIntFieldUpdateOperationsInput | number | null
    IgnoraDescVd?: NullableIntFieldUpdateOperationsInput | number | null
    CancAmostra?: NullableIntFieldUpdateOperationsInput | number | null
    CancMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    AltSenha?: NullableIntFieldUpdateOperationsInput | number | null
    VendedorBalcao?: NullableIntFieldUpdateOperationsInput | number | null
    PrcDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    Aut_CadPF?: NullableIntFieldUpdateOperationsInput | number | null
    UsuCaixaLj?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaPrcCusto?: NullableIntFieldUpdateOperationsInput | number | null
    MostraCustoVd?: NullableIntFieldUpdateOperationsInput | number | null
    BxVdFrenteLj?: NullableIntFieldUpdateOperationsInput | number | null
    UsaPrcEspDist?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Promocao?: NullableIntFieldUpdateOperationsInput | number | null
    liberatroca?: NullableIntFieldUpdateOperationsInput | number | null
    CancMapaEntr?: NullableIntFieldUpdateOperationsInput | number | null
    TpAtend?: NullableIntFieldUpdateOperationsInput | number | null
    EmailCobranca?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateManyInput = {
    Id_Usuario: number
    Usuario?: string | null
    Senha?: string | null
    DtHrUltAcesso?: Date | string | null
    Id_Filial?: number | null
    Id_Vendedor?: number | null
    SeusMov?: number | null
    SolicAutCanc?: number | null
    LiberaDebito?: number | null
    LiberaEstoque?: number | null
    MostraPreco?: number | null
    Faturamento?: number | null
    liberapreco?: number | null
    MultplaInstancia?: number | null
    AlteraFinanceiro?: number | null
    AlterarProduto?: number | null
    AlterarPessoa?: number | null
    AlterarInstalacao?: number | null
    ImpResumido?: number | null
    email?: string | null
    EmailAltPrd?: number | null
    id_entregador?: number | null
    SemMovEst?: number | null
    VERIFICARESTMIN?: number | null
    EnviarFinanc?: number | null
    LIMPAESTOQUE?: number | null
    ATUALIZAESTOQUE?: number | null
    ExcluirReg?: number | null
    ATLZ_BD?: number | null
    ALTITEMVD?: number | null
    BLOQDESC?: number | null
    telemarketing?: number | null
    CadDistrib?: number | null
    VerSldDeposito?: number | null
    AtivarProduto?: number | null
    CancelarNF?: number | null
    CancVenda?: number | null
    AlterarVenda?: number | null
    IgnoraDescVd?: number | null
    CancAmostra?: number | null
    CancMovEst?: number | null
    AltSenha?: number | null
    VendedorBalcao?: number | null
    PrcDistrib?: number | null
    Aut_CadPF?: number | null
    UsuCaixaLj?: number | null
    LiberaPrcCusto?: number | null
    MostraCustoVd?: number | null
    BxVdFrenteLj?: number | null
    UsaPrcEspDist?: number | null
    Id_Promocao?: number | null
    liberatroca?: number | null
    CancMapaEntr?: number | null
    TpAtend?: number | null
    EmailCobranca?: number | null
  }

  export type UsuariosUpdateManyMutationInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    Senha?: NullableStringFieldUpdateOperationsInput | string | null
    DtHrUltAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Filial?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Vendedor?: NullableIntFieldUpdateOperationsInput | number | null
    SeusMov?: NullableIntFieldUpdateOperationsInput | number | null
    SolicAutCanc?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaDebito?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaEstoque?: NullableIntFieldUpdateOperationsInput | number | null
    MostraPreco?: NullableIntFieldUpdateOperationsInput | number | null
    Faturamento?: NullableIntFieldUpdateOperationsInput | number | null
    liberapreco?: NullableIntFieldUpdateOperationsInput | number | null
    MultplaInstancia?: NullableIntFieldUpdateOperationsInput | number | null
    AlteraFinanceiro?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarPessoa?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarInstalacao?: NullableIntFieldUpdateOperationsInput | number | null
    ImpResumido?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAltPrd?: NullableIntFieldUpdateOperationsInput | number | null
    id_entregador?: NullableIntFieldUpdateOperationsInput | number | null
    SemMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    VERIFICARESTMIN?: NullableIntFieldUpdateOperationsInput | number | null
    EnviarFinanc?: NullableIntFieldUpdateOperationsInput | number | null
    LIMPAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ATUALIZAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ExcluirReg?: NullableIntFieldUpdateOperationsInput | number | null
    ATLZ_BD?: NullableIntFieldUpdateOperationsInput | number | null
    ALTITEMVD?: NullableIntFieldUpdateOperationsInput | number | null
    BLOQDESC?: NullableIntFieldUpdateOperationsInput | number | null
    telemarketing?: NullableIntFieldUpdateOperationsInput | number | null
    CadDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    VerSldDeposito?: NullableIntFieldUpdateOperationsInput | number | null
    AtivarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    CancelarNF?: NullableIntFieldUpdateOperationsInput | number | null
    CancVenda?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarVenda?: NullableIntFieldUpdateOperationsInput | number | null
    IgnoraDescVd?: NullableIntFieldUpdateOperationsInput | number | null
    CancAmostra?: NullableIntFieldUpdateOperationsInput | number | null
    CancMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    AltSenha?: NullableIntFieldUpdateOperationsInput | number | null
    VendedorBalcao?: NullableIntFieldUpdateOperationsInput | number | null
    PrcDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    Aut_CadPF?: NullableIntFieldUpdateOperationsInput | number | null
    UsuCaixaLj?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaPrcCusto?: NullableIntFieldUpdateOperationsInput | number | null
    MostraCustoVd?: NullableIntFieldUpdateOperationsInput | number | null
    BxVdFrenteLj?: NullableIntFieldUpdateOperationsInput | number | null
    UsaPrcEspDist?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Promocao?: NullableIntFieldUpdateOperationsInput | number | null
    liberatroca?: NullableIntFieldUpdateOperationsInput | number | null
    CancMapaEntr?: NullableIntFieldUpdateOperationsInput | number | null
    TpAtend?: NullableIntFieldUpdateOperationsInput | number | null
    EmailCobranca?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    Id_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    Senha?: NullableStringFieldUpdateOperationsInput | string | null
    DtHrUltAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Filial?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Vendedor?: NullableIntFieldUpdateOperationsInput | number | null
    SeusMov?: NullableIntFieldUpdateOperationsInput | number | null
    SolicAutCanc?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaDebito?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaEstoque?: NullableIntFieldUpdateOperationsInput | number | null
    MostraPreco?: NullableIntFieldUpdateOperationsInput | number | null
    Faturamento?: NullableIntFieldUpdateOperationsInput | number | null
    liberapreco?: NullableIntFieldUpdateOperationsInput | number | null
    MultplaInstancia?: NullableIntFieldUpdateOperationsInput | number | null
    AlteraFinanceiro?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarPessoa?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarInstalacao?: NullableIntFieldUpdateOperationsInput | number | null
    ImpResumido?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAltPrd?: NullableIntFieldUpdateOperationsInput | number | null
    id_entregador?: NullableIntFieldUpdateOperationsInput | number | null
    SemMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    VERIFICARESTMIN?: NullableIntFieldUpdateOperationsInput | number | null
    EnviarFinanc?: NullableIntFieldUpdateOperationsInput | number | null
    LIMPAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ATUALIZAESTOQUE?: NullableIntFieldUpdateOperationsInput | number | null
    ExcluirReg?: NullableIntFieldUpdateOperationsInput | number | null
    ATLZ_BD?: NullableIntFieldUpdateOperationsInput | number | null
    ALTITEMVD?: NullableIntFieldUpdateOperationsInput | number | null
    BLOQDESC?: NullableIntFieldUpdateOperationsInput | number | null
    telemarketing?: NullableIntFieldUpdateOperationsInput | number | null
    CadDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    VerSldDeposito?: NullableIntFieldUpdateOperationsInput | number | null
    AtivarProduto?: NullableIntFieldUpdateOperationsInput | number | null
    CancelarNF?: NullableIntFieldUpdateOperationsInput | number | null
    CancVenda?: NullableIntFieldUpdateOperationsInput | number | null
    AlterarVenda?: NullableIntFieldUpdateOperationsInput | number | null
    IgnoraDescVd?: NullableIntFieldUpdateOperationsInput | number | null
    CancAmostra?: NullableIntFieldUpdateOperationsInput | number | null
    CancMovEst?: NullableIntFieldUpdateOperationsInput | number | null
    AltSenha?: NullableIntFieldUpdateOperationsInput | number | null
    VendedorBalcao?: NullableIntFieldUpdateOperationsInput | number | null
    PrcDistrib?: NullableIntFieldUpdateOperationsInput | number | null
    Aut_CadPF?: NullableIntFieldUpdateOperationsInput | number | null
    UsuCaixaLj?: NullableIntFieldUpdateOperationsInput | number | null
    LiberaPrcCusto?: NullableIntFieldUpdateOperationsInput | number | null
    MostraCustoVd?: NullableIntFieldUpdateOperationsInput | number | null
    BxVdFrenteLj?: NullableIntFieldUpdateOperationsInput | number | null
    UsaPrcEspDist?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Promocao?: NullableIntFieldUpdateOperationsInput | number | null
    liberatroca?: NullableIntFieldUpdateOperationsInput | number | null
    CancMapaEntr?: NullableIntFieldUpdateOperationsInput | number | null
    TpAtend?: NullableIntFieldUpdateOperationsInput | number | null
    EmailCobranca?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AcessoUsuarioCountOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Opcao?: SortOrder
    Acesso?: SortOrder
  }

  export type AcessoUsuarioAvgOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Acesso?: SortOrder
  }

  export type AcessoUsuarioMaxOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Opcao?: SortOrder
    Acesso?: SortOrder
  }

  export type AcessoUsuarioMinOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Opcao?: SortOrder
    Acesso?: SortOrder
  }

  export type AcessoUsuarioSumOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Acesso?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuariosCountOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Usuario?: SortOrder
    Senha?: SortOrder
    DtHrUltAcesso?: SortOrder
    Id_Filial?: SortOrder
    Id_Vendedor?: SortOrder
    SeusMov?: SortOrder
    SolicAutCanc?: SortOrder
    LiberaDebito?: SortOrder
    LiberaEstoque?: SortOrder
    MostraPreco?: SortOrder
    Faturamento?: SortOrder
    liberapreco?: SortOrder
    MultplaInstancia?: SortOrder
    AlteraFinanceiro?: SortOrder
    AlterarProduto?: SortOrder
    AlterarPessoa?: SortOrder
    AlterarInstalacao?: SortOrder
    ImpResumido?: SortOrder
    email?: SortOrder
    EmailAltPrd?: SortOrder
    id_entregador?: SortOrder
    SemMovEst?: SortOrder
    VERIFICARESTMIN?: SortOrder
    EnviarFinanc?: SortOrder
    LIMPAESTOQUE?: SortOrder
    ATUALIZAESTOQUE?: SortOrder
    ExcluirReg?: SortOrder
    ATLZ_BD?: SortOrder
    ALTITEMVD?: SortOrder
    BLOQDESC?: SortOrder
    telemarketing?: SortOrder
    CadDistrib?: SortOrder
    VerSldDeposito?: SortOrder
    AtivarProduto?: SortOrder
    CancelarNF?: SortOrder
    CancVenda?: SortOrder
    AlterarVenda?: SortOrder
    IgnoraDescVd?: SortOrder
    CancAmostra?: SortOrder
    CancMovEst?: SortOrder
    AltSenha?: SortOrder
    VendedorBalcao?: SortOrder
    PrcDistrib?: SortOrder
    Aut_CadPF?: SortOrder
    UsuCaixaLj?: SortOrder
    LiberaPrcCusto?: SortOrder
    MostraCustoVd?: SortOrder
    BxVdFrenteLj?: SortOrder
    UsaPrcEspDist?: SortOrder
    Id_Promocao?: SortOrder
    liberatroca?: SortOrder
    CancMapaEntr?: SortOrder
    TpAtend?: SortOrder
    EmailCobranca?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Id_Filial?: SortOrder
    Id_Vendedor?: SortOrder
    SeusMov?: SortOrder
    SolicAutCanc?: SortOrder
    LiberaDebito?: SortOrder
    LiberaEstoque?: SortOrder
    MostraPreco?: SortOrder
    Faturamento?: SortOrder
    liberapreco?: SortOrder
    MultplaInstancia?: SortOrder
    AlteraFinanceiro?: SortOrder
    AlterarProduto?: SortOrder
    AlterarPessoa?: SortOrder
    AlterarInstalacao?: SortOrder
    ImpResumido?: SortOrder
    EmailAltPrd?: SortOrder
    id_entregador?: SortOrder
    SemMovEst?: SortOrder
    VERIFICARESTMIN?: SortOrder
    EnviarFinanc?: SortOrder
    LIMPAESTOQUE?: SortOrder
    ATUALIZAESTOQUE?: SortOrder
    ExcluirReg?: SortOrder
    ATLZ_BD?: SortOrder
    ALTITEMVD?: SortOrder
    BLOQDESC?: SortOrder
    telemarketing?: SortOrder
    CadDistrib?: SortOrder
    VerSldDeposito?: SortOrder
    AtivarProduto?: SortOrder
    CancelarNF?: SortOrder
    CancVenda?: SortOrder
    AlterarVenda?: SortOrder
    IgnoraDescVd?: SortOrder
    CancAmostra?: SortOrder
    CancMovEst?: SortOrder
    AltSenha?: SortOrder
    VendedorBalcao?: SortOrder
    PrcDistrib?: SortOrder
    Aut_CadPF?: SortOrder
    UsuCaixaLj?: SortOrder
    LiberaPrcCusto?: SortOrder
    MostraCustoVd?: SortOrder
    BxVdFrenteLj?: SortOrder
    UsaPrcEspDist?: SortOrder
    Id_Promocao?: SortOrder
    liberatroca?: SortOrder
    CancMapaEntr?: SortOrder
    TpAtend?: SortOrder
    EmailCobranca?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Usuario?: SortOrder
    Senha?: SortOrder
    DtHrUltAcesso?: SortOrder
    Id_Filial?: SortOrder
    Id_Vendedor?: SortOrder
    SeusMov?: SortOrder
    SolicAutCanc?: SortOrder
    LiberaDebito?: SortOrder
    LiberaEstoque?: SortOrder
    MostraPreco?: SortOrder
    Faturamento?: SortOrder
    liberapreco?: SortOrder
    MultplaInstancia?: SortOrder
    AlteraFinanceiro?: SortOrder
    AlterarProduto?: SortOrder
    AlterarPessoa?: SortOrder
    AlterarInstalacao?: SortOrder
    ImpResumido?: SortOrder
    email?: SortOrder
    EmailAltPrd?: SortOrder
    id_entregador?: SortOrder
    SemMovEst?: SortOrder
    VERIFICARESTMIN?: SortOrder
    EnviarFinanc?: SortOrder
    LIMPAESTOQUE?: SortOrder
    ATUALIZAESTOQUE?: SortOrder
    ExcluirReg?: SortOrder
    ATLZ_BD?: SortOrder
    ALTITEMVD?: SortOrder
    BLOQDESC?: SortOrder
    telemarketing?: SortOrder
    CadDistrib?: SortOrder
    VerSldDeposito?: SortOrder
    AtivarProduto?: SortOrder
    CancelarNF?: SortOrder
    CancVenda?: SortOrder
    AlterarVenda?: SortOrder
    IgnoraDescVd?: SortOrder
    CancAmostra?: SortOrder
    CancMovEst?: SortOrder
    AltSenha?: SortOrder
    VendedorBalcao?: SortOrder
    PrcDistrib?: SortOrder
    Aut_CadPF?: SortOrder
    UsuCaixaLj?: SortOrder
    LiberaPrcCusto?: SortOrder
    MostraCustoVd?: SortOrder
    BxVdFrenteLj?: SortOrder
    UsaPrcEspDist?: SortOrder
    Id_Promocao?: SortOrder
    liberatroca?: SortOrder
    CancMapaEntr?: SortOrder
    TpAtend?: SortOrder
    EmailCobranca?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Usuario?: SortOrder
    Senha?: SortOrder
    DtHrUltAcesso?: SortOrder
    Id_Filial?: SortOrder
    Id_Vendedor?: SortOrder
    SeusMov?: SortOrder
    SolicAutCanc?: SortOrder
    LiberaDebito?: SortOrder
    LiberaEstoque?: SortOrder
    MostraPreco?: SortOrder
    Faturamento?: SortOrder
    liberapreco?: SortOrder
    MultplaInstancia?: SortOrder
    AlteraFinanceiro?: SortOrder
    AlterarProduto?: SortOrder
    AlterarPessoa?: SortOrder
    AlterarInstalacao?: SortOrder
    ImpResumido?: SortOrder
    email?: SortOrder
    EmailAltPrd?: SortOrder
    id_entregador?: SortOrder
    SemMovEst?: SortOrder
    VERIFICARESTMIN?: SortOrder
    EnviarFinanc?: SortOrder
    LIMPAESTOQUE?: SortOrder
    ATUALIZAESTOQUE?: SortOrder
    ExcluirReg?: SortOrder
    ATLZ_BD?: SortOrder
    ALTITEMVD?: SortOrder
    BLOQDESC?: SortOrder
    telemarketing?: SortOrder
    CadDistrib?: SortOrder
    VerSldDeposito?: SortOrder
    AtivarProduto?: SortOrder
    CancelarNF?: SortOrder
    CancVenda?: SortOrder
    AlterarVenda?: SortOrder
    IgnoraDescVd?: SortOrder
    CancAmostra?: SortOrder
    CancMovEst?: SortOrder
    AltSenha?: SortOrder
    VendedorBalcao?: SortOrder
    PrcDistrib?: SortOrder
    Aut_CadPF?: SortOrder
    UsuCaixaLj?: SortOrder
    LiberaPrcCusto?: SortOrder
    MostraCustoVd?: SortOrder
    BxVdFrenteLj?: SortOrder
    UsaPrcEspDist?: SortOrder
    Id_Promocao?: SortOrder
    liberatroca?: SortOrder
    CancMapaEntr?: SortOrder
    TpAtend?: SortOrder
    EmailCobranca?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    Id_Usuario?: SortOrder
    Id_Filial?: SortOrder
    Id_Vendedor?: SortOrder
    SeusMov?: SortOrder
    SolicAutCanc?: SortOrder
    LiberaDebito?: SortOrder
    LiberaEstoque?: SortOrder
    MostraPreco?: SortOrder
    Faturamento?: SortOrder
    liberapreco?: SortOrder
    MultplaInstancia?: SortOrder
    AlteraFinanceiro?: SortOrder
    AlterarProduto?: SortOrder
    AlterarPessoa?: SortOrder
    AlterarInstalacao?: SortOrder
    ImpResumido?: SortOrder
    EmailAltPrd?: SortOrder
    id_entregador?: SortOrder
    SemMovEst?: SortOrder
    VERIFICARESTMIN?: SortOrder
    EnviarFinanc?: SortOrder
    LIMPAESTOQUE?: SortOrder
    ATUALIZAESTOQUE?: SortOrder
    ExcluirReg?: SortOrder
    ATLZ_BD?: SortOrder
    ALTITEMVD?: SortOrder
    BLOQDESC?: SortOrder
    telemarketing?: SortOrder
    CadDistrib?: SortOrder
    VerSldDeposito?: SortOrder
    AtivarProduto?: SortOrder
    CancelarNF?: SortOrder
    CancVenda?: SortOrder
    AlterarVenda?: SortOrder
    IgnoraDescVd?: SortOrder
    CancAmostra?: SortOrder
    CancMovEst?: SortOrder
    AltSenha?: SortOrder
    VendedorBalcao?: SortOrder
    PrcDistrib?: SortOrder
    Aut_CadPF?: SortOrder
    UsuCaixaLj?: SortOrder
    LiberaPrcCusto?: SortOrder
    MostraCustoVd?: SortOrder
    BxVdFrenteLj?: SortOrder
    UsaPrcEspDist?: SortOrder
    Id_Promocao?: SortOrder
    liberatroca?: SortOrder
    CancMapaEntr?: SortOrder
    TpAtend?: SortOrder
    EmailCobranca?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}