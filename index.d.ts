import type { CryptoKeyStorage as CoreCryptoKeyStorage } from "webcrypto-core";

interface CryptoKeyStorage extends CoreCryptoKeyStorage {
    readonly directory: string;
}

export interface CryptoOptions {
    directory?: string;
}

interface Crypto extends globalThis.Crypto {
    keyStorage: CryptoKeyStorage;
}

export var Crypto: {
    prototype: Crypto;
    new(options?: CryptoOptions): Crypto;
}
