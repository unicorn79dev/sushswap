import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Token } from '@sushiswap/core-sdk'
import Chip from 'app/components/Chip'
import Typography from 'app/components/Typography'
import AuctionCardPrice from 'app/features/miso/AuctionCard/AuctionCardPrice'
import AuctionCardTimer from 'app/features/miso/AuctionCard/AuctionCardTimer'
import AuctionChart from 'app/features/miso/AuctionChart'
import AuctionIcon from 'app/features/miso/AuctionIcon'
import { AuctionStatus } from 'app/features/miso/context/types'
import { AuctionStatusById, AuctionTitleByTemplateId } from 'app/features/miso/context/utils'
import Link from 'next/link'
import { FC } from 'react'

import { Auction } from '../context/Auction'
import AuctionSkeleton from './AuctionSkeleton'

const AuctionCard: FC<{ auction?: Auction<Token, Token> }> = ({ auction }) => {
  const { i18n } = useLingui()

  if (!auction) {
    return <AuctionSkeleton />
  }

  return (
    <Link href={`/miso/${auction.auctionInfo.addr}`} passHref={true}>
      <div className="cursor-pointer rounded bg-dark-900 border border-dark-800 pt-5 overflow-hidden transition-all shadow-md hover:translate-y-[-3px] hover:shadow-xl hover:shadow-pink/5">
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-between px-5">
            <div className="flex gap-1">
              <Typography variant="xxs" weight={700} className="text-secondary">
                {i18n._(t`Private`)}
              </Typography>
              <Typography variant="xxs" weight={700} className="text-secondary">
                {i18n._(t`Restricted`)}
              </Typography>
            </div>
            <Chip label={i18n._(t`Defi`)} color="blue" />
          </div>
          <div className="flex flex-col px-5">
            <Typography variant="sm" weight={700} className="text-secondary">
              {auction.auctionToken.symbol}
            </Typography>
            <Typography variant="h3" weight={700} className="text-high-emphesis">
              {auction.auctionToken.name}
            </Typography>
          </div>
          <div className="flex justify-between bg-dark-800 px-5 py-3 items-center ">
            <div className="flex gap-3">
              <AuctionIcon auctionTemplate={auction.template} width={18} height={14} />
              <Typography variant="xs" weight={700}>
                {AuctionTitleByTemplateId(i18n)[auction.template]}
              </Typography>
            </div>
            <Typography
              variant="xs"
              weight={700}
              className={
                auction.status === AuctionStatus.LIVE
                  ? 'text-green'
                  : auction.status === AuctionStatus.FINISHED
                  ? 'text-pink'
                  : auction.status === AuctionStatus.UPCOMING
                  ? 'text-blue'
                  : ''
              }
            >
              {AuctionStatusById(i18n)[auction.status]}
            </Typography>
          </div>
          <div className="flex justify-between px-5">
            <div className="flex flex-col">
              <Typography variant="xxs" weight={700} className="text-secondary uppercase">
                {i18n._(t`Current token value`)}
              </Typography>
              <Typography variant="sm" weight={700}>
                {auction.tokenPrice?.toSignificant(6)} {auction.tokenPrice?.quoteCurrency.symbol}
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography variant="xxs" weight={700} className="text-secondary uppercase">
                {i18n._(t`Amount for sale`)}
              </Typography>
              <Typography variant="sm" weight={700}>
                {auction.totalTokens?.toSignificant(6)} {auction.totalTokens?.currency.symbol}
              </Typography>
            </div>
          </div>
          <div>
            <AuctionChart auction={auction} />
          </div>
          <div className="grid grid-cols-2 gap-3 px-5 py-4 bg-dark-800 flex-grow">
            <div className="flex flex-col gap-0.5">
              <Typography variant="xs" weight={700} className="text-secondary">
                {i18n._(t`Current Price`)}
              </Typography>
              <Typography variant="sm" weight={700} className="text-high-emphesis">
                <AuctionCardPrice auction={auction} />
              </Typography>
            </div>
            <div className="flex flex-col gap-0.5">
              <Typography variant="xs" weight={700} className="text-secondary">
                {i18n._(t`Time Remaining`)}
              </Typography>
              <Typography variant="sm" weight={700}>
                <AuctionCardTimer auction={auction} />
              </Typography>
            </div>
            <div className="flex flex-col gap-0.5">
              <Typography variant="xs" weight={700} className="text-secondary">
                {i18n._(t`Total Raised`)}
              </Typography>
              <Typography variant="sm" weight={700}>
                {auction.commitmentsTotal?.toSignificant(6)} {auction?.commitmentsTotal?.currency.symbol}
              </Typography>
            </div>
            <div className="flex flex-col gap-0.5">
              {auction.reservePrice && (
                <>
                  <Typography variant="xs" weight={700} className="text-secondary">
                    {i18n._(t`Reserve price`)}
                  </Typography>
                  <Typography weight={700}>
                    {auction.reservePrice?.toSignificant(6)} {auction.reservePrice?.quoteCurrency.symbol}
                  </Typography>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AuctionCard
