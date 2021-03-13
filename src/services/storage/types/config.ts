import type { InMemoryStorageDriverConfig } from '../drivers/inMemory/types'
import type { RelationalStorageDriverConfig } from '../drivers/relational/types'
import { RedisStorageDriverConfig } from '../drivers/redis/types'

export enum StorageDriverName {
	InMemory = 'InMemory',
	Relational = 'Relational',
	Redis = 'Redis',
}

export interface BaseConfig {
	appName: string
}

export interface RelationalStorageConfig extends BaseConfig {
	driverName: StorageDriverName.Relational
	driverConfig: RelationalStorageDriverConfig
}

export interface InMemoryStorageConfig extends BaseConfig {
	driverName: StorageDriverName.InMemory
	driverConfig: InMemoryStorageDriverConfig
}

export interface RedisStorageConfig extends BaseConfig {
	driverName: StorageDriverName.Redis
	driverConfig: RedisStorageDriverConfig
}

export type StorageConfig = RelationalStorageConfig | InMemoryStorageConfig | RedisStorageConfig
