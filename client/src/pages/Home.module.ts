import { Box } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`

export const Content = styled(Box)`
  padding: 20px 40px;
`
