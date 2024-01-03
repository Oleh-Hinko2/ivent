export interface DefaultTheme {
  borderRadius: {
    button: string
    modal: string
    content: string
  }
  fontSize: {
    h6: string
    h5: string
    h4: string
  }
}

export const myTheme: DefaultTheme = {
  borderRadius: {
    button: '15px',
    modal: '4px 0px 0px 4px',
    content: '4px'
  },
  fontSize: {
    h6: '16px',
    h5: '18px',
    h4: '20px'
  }
}
