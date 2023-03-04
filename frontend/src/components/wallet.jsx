import { ConnectButton } from "@rainbow-me/rainbowkit";

import React from 'react'

const wallet = () => {
  return (
   
      <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ConnectButton />
    </div>
   
  )
}

export default wallet
