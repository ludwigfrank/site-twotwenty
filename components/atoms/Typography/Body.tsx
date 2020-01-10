import {
  typographyBodyPresets,
  TypographyBodyPresetKeys
} from '../../../theme/base/typography'
import { FunctionComponent } from 'react'
import { Base } from './Base'
import { SpaceProps } from 'styled-system'
import { ThemeTextColorKeys } from '../../../theme/base/colors'

interface BodyProps extends SpaceProps {
  variant: TypographyBodyPresetKeys
  color?: ThemeTextColorKeys
}

export const Body: FunctionComponent<BodyProps> = ({
  variant,
  children,
  color,
  ...props
}) => {
  const preset = typographyBodyPresets[variant]

  return (
    <Base preset={preset} color={color} {...props}>
      {children}
    </Base>
  )
}
