import Typography from '../../../components/Typography'
import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { searchQueryAtom } from './context/atoms'
import rssSVG from '../../../../public/rss.svg'
import Image from 'next/image'

export const SearchCategoryLabel: FC = () => {
  const searchQuery = useRecoilValue(searchQueryAtom)

  return (
    <div className="py-2 flex flex-row justify-between items-center">
      <Typography variant="base" className="text-high-emphesis" weight={700}>
        {searchQuery ? `Search results for '${searchQuery}'` : 'Top Liquidity Pools'}
      </Typography>
      <div className="flex gap-1">
        <Image src={rssSVG} alt="rss icon" />
        <div className="text-xs text-secondary">*Pairs with this symbol have a TWAP oracle.</div>
      </div>
    </div>
  )
}
