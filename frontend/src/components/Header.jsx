import React from 'react'
import { Link } from 'react-router-dom'
import { BsBank } from 'react-icons/bs'
import "@rainbow-me/rainbowkit/styles.css"
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit"
import {chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import {publicProvider} from "wagmi/providers/public"
import YourComponent from "./wallet.jsx"

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const Header = () => {

  return (
    <header className='flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0'>
    <Link to="/" className='flex justify-start items-center text-xl text-black space-x-1'><span> Team Develophers</span><BsBank /></Link>
     
        {/* <div className='flex space-x-2 justify-center'>
        <button type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700'>Connect Wallet</button>
        
     </div> */}
     {/* <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <YourComponent />
      </RainbowKitProvider>
    </WagmiConfig> */}
    </header>
  )
}

export default Header