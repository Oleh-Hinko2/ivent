import { Grid, Typography } from '@mui/material'
import styled from 'styled-components'

export const ResetPasswordWrapper = styled(Grid)`
  height: 100vh;
`

export const ResetPasswordFormWrapper = styled(Grid)`
  margin-top: 40px;
`

export const ResetFormContainer = styled(Grid)`
  border: 1px solid #edebe5;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 375px;
  min-height: 440px;
  padding: 40px 40px 56px;
`

export const ResetPasswordFormTitle = styled(Typography)`
  && {
    color: white;
    font-size: 1.25rem;
    margin-bottom: 24px;
  }
`

export const InputWrapper = styled(Grid)`
  margin-bottom: 20px;
`

export const CancelButtonWrapper = styled(Grid)`
  margin-top: 15px;
`
