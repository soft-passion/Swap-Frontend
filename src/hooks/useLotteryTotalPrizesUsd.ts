import { usePriceSaltBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const saltPriceBusd = usePriceSaltBusd()

  return totalCake * saltPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
