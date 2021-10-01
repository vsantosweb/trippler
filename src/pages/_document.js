import Axios from 'axios';
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export const apiServer = Axios.create({
  baseURL: 'http://tripler.ws/api/v1',
});


export default class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage;

    // console.log(ctx.req.cookies.token)
    // if (ctx.req.cookies.token) {
    // }
    apiServer.defaults.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90cmlwbGVyLndzXC9hcGlcL3YxXC9jbGllbnRcL2N1c3RvbWVyXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzMzAwOTg0OSwiZXhwIjoxNjMzMjI1ODQ5LCJuYmYiOjE2MzMwMDk4NDksImp0aSI6IjloSTNEQmJPbVJOOHFJQkIiLCJzdWIiOjEsInBydiI6ImRhOWM1NTYwZGUxNjE1M2JhODE4MGM1ODkzZmQ3NDk0YWQ1OGFmOWUifQ.CMbhMzPclQRKwQ8Pjuk0CbCYv2ZDYjsM9BfjQRI_ww0`
   
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}