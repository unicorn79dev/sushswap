import { Currency, CurrencyAmount, ZERO } from '@sushiswap/core-sdk'
import React, { FC, ReactNode } from 'react'

import { classNames } from '../../functions'
import { useUSDCValue } from '../../hooks/useUSDCPrice'
import Chip from '../Chip'
import CurrencyLogo from '../CurrencyLogo'
import Typography from '../Typography'

interface ListPanelProps {
  header?: ReactNode
  items?: ReactNode[]
  footer?: ReactNode
  className?: string
}

const ListPanel = ({ header, items, footer, className = '' }: ListPanelProps) => {
  return (
    <div className={classNames(className, 'flex flex-col')}>
      {header && <div className="overflow-hidden border rounded-t border-dark-700">{header}</div>}
      {items && (
        <div
          className={classNames(
            header ? '' : 'border-t rounded-t',
            footer ? 'bg-dark-800' : 'border-b rounded-b bg-dark-900',
            'border-l border-r border-dark-700 divide-y overflow-hidden'
          )}
        >
          {items}
        </div>
      )}
      {footer && <div className="overflow-hidden border rounded-b bg-dark-900 border-dark-700">{footer}</div>}
    </div>
  )
}

interface ListPanelFooterProps {
  title: string
  value?: string
}

// Default ListPanelFooter component, please note that you are not obliged to pass this to a ListPanel component
// If you need different styling, please create another component and leave this one as is.
const ListPanelFooter: FC<ListPanelFooterProps> = ({ title, value }) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2">
      <Typography variant="xs" weight={400} className="text-high-emphesis">
        {title}
      </Typography>
      {value && (
        <Typography className="text-high-emphesis" variant="sm" weight={700}>
          {value}
        </Typography>
      )}
    </div>
  )
}

interface ListPanelHeaderProps {
  title: string
  value?: string
  subValue?: string
  className?: string
}

// Default ListPanelHeader component, please note that you are not obliged to pass this to a ListPanel component
// If you need different styling, please create another component and leave this one as is.
const ListPanelHeader: FC<ListPanelHeaderProps> = ({ title, value, subValue, className = '' }) => {
  return (
    <div className={classNames(className, 'flex flex-row justify-between px-4 py-[10px] items-center')}>
      <Typography variant="lg" className="text-high-emphesis" weight={700}>
        {title}
      </Typography>
      {(value || subValue) && (
        <div className="flex flex-col text-right">
          {value && (
            <Typography className="text-high-emphesis" weight={700}>
              {value}
            </Typography>
          )}
          {subValue && (
            <Typography className="text-secondary" variant="xxs" weight={700}>
              {subValue}
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}

interface ListPanelItemProps {
  left: ReactNode
  right: ReactNode
}

// Default ListPanelFooter component, please note that you are not obliged to pass this to a ListPanel component
// If you need different styling, please create another component and leave this one as is.
const ListPanelItem = ({ left, right }: ListPanelItemProps) => {
  return (
    <div className="flex grid items-center grid-cols-2 gap-2 px-3 lg:px-4 py-3 border-dark-700">
      {left}
      {right}
    </div>
  )
}

interface ListPanelItemLeftProps {
  amount: CurrencyAmount<Currency> | undefined
  startAdornment?: ReactNode
}

const ListPanelItemLeft: FC<ListPanelItemLeftProps> = ({ amount, startAdornment }) => {
  return (
    <div className="flex flex-row gap-1.5 lg:gap-3 items-center">
      {startAdornment && startAdornment}
      <CurrencyLogo currency={amount?.currency} size={20} className="rounded-full" />
      <Typography variant="sm" className="text-high-emphesis" weight={700}>
        {amount?.greaterThan(ZERO) ? amount?.toSignificant(6) : '0.00'} {amount?.currency.symbol}
      </Typography>
    </div>
  )
}

const ListPanelItemRight: FC = ({ children }) => {
  return (
    <Typography variant="xs" weight={400} className="text-right">
      {children}
    </Typography>
  )
}

interface CurrencyAmountItemProps {
  amount?: CurrencyAmount<Currency>
  weight?: string
  displayTokenAmount?: boolean
}

// ListPanelItem for displaying a CurrencyAmount
const CurrencyAmountItem: FC<CurrencyAmountItemProps> = ({ amount, weight, displayTokenAmount = false }) => {
  const usdcValue = useUSDCValue(amount)

  if (!displayTokenAmount)
    return (
      <ListPanel.Item
        left={
          <ListPanel.Item.Left
            amount={amount}
            {...(weight && { startAdornment: <Chip color="default" label={weight} size="sm" /> })}
          />
        }
        right={<ListPanel.Item.Right>${usdcValue ? usdcValue?.toFixed(2) : '0.00'}</ListPanel.Item.Right>}
        key={0}
      />
    )

  return (
    <div className="flex grid items-center grid-cols-3 gap-2 px-3 lg:px-4 py-3 border-dark-700">
      <div className="flex gap-3 items-center -ml-1">
        <CurrencyLogo currency={amount?.currency} size={30} className="rounded-full" />
        <Typography className="text-high-emphesis" weight={700}>
          {amount?.currency.symbol}
        </Typography>
      </div>
      <Typography className="text-high-emphesis text-right" weight={700}>
        {amount?.toSignificant(6)}
      </Typography>
      <Typography className="text-right" variant="sm">
        ${usdcValue?.toSignificant(6)}
      </Typography>
    </div>
  )
}

ListPanel.Header = ListPanelHeader
ListPanelItem.Left = ListPanelItemLeft
ListPanelItem.Right = ListPanelItemRight
ListPanel.Item = ListPanelItem
ListPanel.CurrencyAmountItem = CurrencyAmountItem
ListPanel.Footer = ListPanelFooter

export default ListPanel
