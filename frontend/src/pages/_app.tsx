import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/footer.css'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../config/graphQl'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp