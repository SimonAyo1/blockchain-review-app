import Home from "./pages/Home";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { baseSepolia, mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { watchAccount } from "@wagmi/core";
import { switchChain } from "@wagmi/core";

import "./App.css";
import Companies from "./pages/Companies";
import CompanyProfile from "./pages/CompanyProfile";
import About from "./pages/About";
import Faq from "./pages/Faq";
import { useEffect, useState } from "react";
import useScrollToTop from "./shared/utils/useScrollToTop";
import HowItWorks from "./pages/HowItWorks";

const queryClient = new QueryClient();

const projectId = "a4fb9360f196efc572542e470e026a2c";

const metadata = {
  name: "Review App",
  description: "Review App",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [baseSepolia] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

watchAccount(config, {
  async onChange(data) {
    if (data.chain?.name != "baseSepolia") {
      await switchChain(config, {
        chainId: mainnet.id,
      });
    }
  },
});

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "companies",
      Component: Companies,
    },
    {
      path: "about",
      Component: About,
    },
    {
      path: "faq",
      Component: Faq,
    },
    {
      path: "how-it-works",
      Component: HowItWorks,
    },
    {
      path: "companies/:id",
      Component: CompanyProfile,
    },
  ]);

  const [show, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  }, []);

  return (
    show && (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Footer />

          <ToastContainer />
        </QueryClientProvider>
      </WagmiProvider>
    )
  );
}

export default App;
