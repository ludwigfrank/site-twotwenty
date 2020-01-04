import {
  typographyTitlePresets,
  TypographyTitlePresetKeys
} from '../../../theme/base/typography'
import { FunctionComponent } from 'react'
import { Base } from './Base'

interface TitleProps {
  variant: TypographyTitlePresetKeys
}

export const Title: FunctionComponent<TitleProps> = ({ variant, children }) => {
  const preset = typographyTitlePresets[variant]

  return <Base preset={preset}>{children}</Base>
}
