import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import Layout from "../components/Dashboard/Dashboard";
function MyApp({ Component, pageProps }) {
  const supportedChainIds = [80001, 1, 3, 4, 5];
  const connectors = {
    injected: {},
  };
  return (
    <>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </ThirdwebWeb3Provider>
    </>
  );
}

export default MyApp;
