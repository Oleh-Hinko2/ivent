import { Grid, Typography } from '@mui/material'
import styled from 'styled-components'

export const CheckEmailWrapper = styled(Grid)`
  height: 100vh;
`

export const CheckEmailContentWrapper = styled(Grid)`
  border: 1px solid #edebe5;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 375px;
  min-height: 440px;
  padding: 40px 40px 56px;
`

export const CheckEmailDescriptionWrapper = styled(Grid)`
  margin-top: 40px;
`

export const CheckEmailTitle = styled(Typography)`
  && {
    color: white;
    margin-top: 24px;
    text-align: center;
  }
`

export const CheckEmailSubTitle = styled(Typography)`
  && {
    margin-top: 12px;
    font-weight: 500;
    color: white;
    font-size: 0.875rem;
  }
`

export const CheckEmailDescription = styled(Grid)`
  color: white;
  font-size: 0.875rem;
  margin-top: 70px;
  text-align: center;
`

export const CancelButtonWrapper = styled(Grid)`
  margin-top: 24px;
  color: white;
  width: 100%;
`

export const TryAnotherEmailButton = styled.a`
  color: white;
  cursor: pointer;
`
