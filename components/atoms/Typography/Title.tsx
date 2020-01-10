import {
  typographyTitlePresets,
  TypographyTitlePresetKeys
} from '../../../theme/base/typography'
import { FunctionComponent } from 'react'
import { Base } from './Base'
import { SpaceProps } from 'styled-system'

interface TitleProps extends SpaceProps {
  variant: TypographyTitlePresetKeys
}

export const Title: FunctionComponent<TitleProps> = ({
  variant,
  children,
  ...props
}) => {
  const preset = typographyTitlePresets[variant]

  return (
    <Base preset={preset} {...props}>
      {children}
    </Base>
  )
}
