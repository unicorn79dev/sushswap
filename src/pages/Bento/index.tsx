import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import { SwapPoolTabs } from '../../components/NavigationTabs'

import { ExternalLink, TYPE, HideSmall } from '../../theme'
import { Text } from 'rebass'
import { RowBetween, RowFixed } from '../../components/Row'
import { ButtonPrimary, ButtonSecondary, ButtonEmpty } from '../../components/Button'
import { AutoColumn } from '../../components/Column'

import { useActiveWeb3React } from '../../hooks'
import { CardSection, DataCard } from '../../components/earn/styled'
import { transparentize } from 'polished'

import { DarkCard, BaseCard } from '../../components/Card'
import useBentoBox from 'sushi-hooks/useBentoBox'

export const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const VoteCard = styled(DataCard)`
  background: ${({ theme }) => transparentize(0.5, theme.bg1)};
  /* border: 1px solid ${({ theme }) => theme.text4}; */
  overflow: hidden;
`

const TitleRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`

const ButtonRow = styled(RowFixed)`
  gap: 8px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`

const ResponsiveExternalLink = styled(ExternalLink)`
  width: fit-content;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 48%;
  `};
`

const StyledBaseCard = styled(BaseCard)`
border: none
background: ${({ theme }) => transparentize(0.6, theme.bg1)};
position: relative;
overflow: hidden;
`

export default function Pool() {
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  useBentoBox()

  return (
    <>
      <PageWrapper>
        <SwapPoolTabs active={'pool'} />
        <VoteCard>
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600} color={theme.text1}>
                  BentoBox
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14} color={theme.text2}>
                  {`BentoBox is a revolutionary new way from SUSHI to interact with dapps on L1 in a highly gas efficient manner. In order to use any one of the decentralized BentoApps below you'll need to first enable BentoBox and deposit any erc20 asset to your Bentobox balance.`}
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
        </VoteCard>

        <AutoColumn gap="md" justify="center">
          <AutoColumn gap="md" style={{ width: '100%' }}>
            <TitleRow style={{ marginTop: '1rem', marginBottom: '1rem' }} padding={'0'}>
              <HideSmall>
                <TYPE.mediumHeader style={{ marginTop: '0.5rem', justifySelf: 'flex-start' }}>
                  Dapps in BentoBox
                </TYPE.mediumHeader>
              </HideSmall>
              <ButtonRow>
                {/* <ResponsiveExternalLink href={''}>
                  <ButtonSecondary padding="6px 8px" borderRadius="20px">
                    Request a Tool
                  </ButtonSecondary>
                </ResponsiveExternalLink> */}
                <ButtonSecondary padding="6px 8px" borderRadius="20px">
                  <Text fontWeight={500} fontSize={16}>
                    Enable BentoBox
                  </Text>
                </ButtonSecondary>
              </ButtonRow>
            </TitleRow>
            {/* List of Tools */}
            <StyledBaseCard>
              <DarkCard>
                <AutoColumn gap="12px">
                  <FixedHeightRow>
                    <RowFixed>
                      <Text fontWeight={500} fontSize={16}>
                        Kashi Lending
                      </Text>
                    </RowFixed>
                  </FixedHeightRow>
                  <FixedHeightRow>
                    <RowFixed>
                      {/* <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin={true} size={20} /> */}
                      <Text fontWeight={500} fontSize={14}>
                        Supply, Borrow, and Leverage
                      </Text>
                    </RowFixed>
                    <RowFixed>
                      <ButtonEmpty
                        padding="6px 8px"
                        borderRadius="20px"
                        width="fit-content"
                        as={Link}
                        to={`/bento/kashi`}
                      >
                        View
                      </ButtonEmpty>
                    </RowFixed>
                  </FixedHeightRow>
                </AutoColumn>
              </DarkCard>
            </StyledBaseCard>
          </AutoColumn>
        </AutoColumn>
      </PageWrapper>
    </>
  )
}
