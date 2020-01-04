import {
  typographyBodyPresets,
  TypographyBodyPresetKeys
} from '../../../theme/base/typography'
import { FunctionComponent } from 'react'
import { Base } from './Base'

interface BodyProps {
  variant: TypographyBodyPresetKeys
}

export const Body: FunctionComponent<BodyProps> = ({ variant, children }) => {
  const preset = typographyBodyPresets[variant]

  return <Base preset={preset}>{children}</Base>
}
