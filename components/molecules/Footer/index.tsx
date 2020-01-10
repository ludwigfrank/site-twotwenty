import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled('div')`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

const InnerWrapper = styled('div')`
  display: flex;
  width: 100%;
  max-width: 1056px;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 24px 0px;
`

const FooterItem = styled('a')`
  font-family: 'Söhne Mono';
  font-size: 14px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.54);
  margin: 0px;
  margin: 24px 24px 32px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

export const Footer: FunctionComponent = ({ children, ...props }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <FooterItem>FH Potsdam</FooterItem>
        <FooterItem>Impressum</FooterItem>
        <FooterItem>Datenschutzhinweis</FooterItem>
      </InnerWrapper>
    </Wrapper>
  )
}
