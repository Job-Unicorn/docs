# NEAR

### Interface `NearConfig`

- `networkId`: string

- `nodeUrl`: string

- `masterAccount?`: string 

- `walletUrl?`: string 

- `helperUrl?`: string 

- `explorerUrl?`: string 

- `keyPath?`: string 

### function `getConfig()`

> This function returns the current configuration according to the environment.

**Parameters**: 

- `env` : `"TEST`" or `"MAIN"`

Tasks performed by this function:

- If the environment is `"TEST"`, the configuration is loaded from the file `TESTNET_CONFIG`.

- If the environment is `"MAIN"`, the configuration is loaded from the file `MAINNET_CONFIG`.

- Otherwise throws an error.

### Mainnet Configuration

```ts
const MAINNET_CONFIG : NearConfig = {
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://wallet.near.org',
  helperUrl: 'https://helper.mainnet.near.org',
  explorerUrl: 'https://explorer.mainnet.near.org',
}
```

### Testnet Configuration

```ts
const TESTNET_CONFIG : NearConfig = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
}
```