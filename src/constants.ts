import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  // MAINNET = 56,
  MAINNET = 592,
  // SHIDEN = 336,
  TESTNET = 336,
  // FTM = 250,
  // BSC = 56,

}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}
// pancake's
// export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
// Arthswap's PancakeFactory.
// export const FACTORY_ADDRESS = '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3'
// // TWINKLE
// export const FACTORY_ADDRESS = '0x3B722DFF27f558240f696B992aB168c4486ba682'
export const FACTORY_ADDRESS = '0xAd518E06364d3391fddbD13CEB63aFfF852d244b'
// https://blockscout.com/astar/address/0xA9473608514457b4bF083f9045fA63ae5810A03E/contracts

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17'
}

// pancake's 
// export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

// Arthswap's INIT_CODE_PAIR_HASH
// export const  INIT_CODE_HASH = '0x613b36de6401276e4d938ad0db4063490e66bb3ab2e4aec17cab78a15ea7a0b6';
// // Twinkle 
// export const INIT_CODE_HASH='0xaab6d9fe8e8c8627186599e654ba3c30cf9502ae32e81271fe236755e6be3b17';
// Twinkle
export const INIT_CODE_HASH='0xeec62f1ff80e89799270b899c20f4d15ac937d8dfae75f489baa5bbdcb5be1c4';
export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
