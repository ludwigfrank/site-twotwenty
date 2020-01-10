import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { words } from './words'
import { Body, Title } from '../../atoms/Typography'

interface ProjectTileProps {
  title: string
  description?: string
  authors?: string[]
}

const Wrapper = styled('div')`
  width: 100%;
`

const TitleWrapper = styled('div')`
  position: relative;
  overflow: hidden;
  padding-top: 24px;
  padding-bottom: 24px;
`

const Button = styled('div')`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-family: 'Söhne Mono';
  font-size: 14px;
  padding: 16px 16px 20px;
  margin-top: 32px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.84);
  cursor: pointer;
  transition: background 250ms ease-out;
  :hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12),
      0px 5px 8px rgba(0, 0, 0, 0.18);
    background: white;
  }
`

export const ProjectTile: FunctionComponent<ProjectTileProps> = ({
  children,
  title,
  authors,
  ...props
}) => {
  const word = words[Math.floor(Math.random() * words.length)].word

  return (
    <Wrapper>
      <TitleWrapper>
        <Title variant='title1' mb={0}>
          {title}
        </Title>
      </TitleWrapper>
      {authors.map(author => (
        <Body variant='body2' mt={0} color='colorTextLowContrast'>
          {author}
        </Body>
      ))}
      <Button>{word}</Button>
    </Wrapper>
  )
}
