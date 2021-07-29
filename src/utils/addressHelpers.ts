import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getCakeAddress = () => addresses.dino[chainId]
export const getMasterChefAddress = () => addresses.masterChef[chainId]
export const getMulticallAddress = () => addresses.mulltiCall[chainId]
export const getWbnbAddress = () => addresses.wbnb[chainId]
export const getLotteryAddress = () => addresses.lottery[chainId]
export const getLotteryTicketAddress = () => addresses.lotteryNFT[chainId]
