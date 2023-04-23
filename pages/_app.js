import "../styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.BinanceSmartChainMainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <div className="toast-wrapper">
        <ToastContainer />
      </div>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp