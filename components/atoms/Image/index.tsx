import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ImageProps {
  src?: string
}

const Img = styled('img')`
  max-width: 100%;
  height: auto;
`

const placeholderUrl = require('../../../public/static/img/projects/default.png?webp')

export const Image: FunctionComponent<ImageProps> = ({
  src = placeholderUrl
}) => {
  return (
    <picture>
      <source srcSet={placeholderUrl} type='image/webp' />
      <Img src={require('../../../public/static/img/projects/default.png')} />
    </picture>
  )
}
