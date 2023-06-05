import { ThirdwebProvider } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "binance";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain} autoConnect={false}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
