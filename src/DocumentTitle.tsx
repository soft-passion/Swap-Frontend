import useTitle from 'hooks/useTitle'
import { usePriceSaltBusd } from 'state/hooks'

interface DocumentTitleProps {
  title?: string
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title }) => {
  const saltPriceUsd = usePriceSaltBusd()

  useTitle(`$${saltPriceUsd.toFixed(3)} - ${title}`)

  return null
}

export default DocumentTitle
