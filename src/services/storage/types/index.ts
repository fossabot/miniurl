import type { UrlStorageDriver } from './url'

export interface StorageDriver {
	initialize(): Promise<void>
	shutdown(): Promise<void>

	url: UrlStorageDriver
}
