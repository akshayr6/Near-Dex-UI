import { useState } from 'react';
import Head from 'next/head';
import * as nearAPI from "near-api-js";
const { connect, keyStores, WalletConnection } = nearAPI;

export default function NearComp() {
  const [Account , SetAccount] = useState("");

  const TheConfig = () => {
    const config = {
      networkId: "testnet",
      keyStore: (new keyStores.BrowserLocalStorageKeyStore()),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
    return config;
  }

  const ConnectWallet = async() => {
    const config = TheConfig();
    const near = await connect(config);
    const wallet = new WalletConnection(near); 
    wallet.requestSignIn("senpaitraxh.testnet");
  }

  const DisconnectWallet = async() => {
    const config = TheConfig();
    const near = await connect(config);
    const wallet = new WalletConnection(near);
    wallet.signOut();
    SetAccount("")
  }

  const CheckConnect = async () => {
    const config = TheConfig();
    const near = await connect(config);
    const wallet = new WalletConnection(near);
    if(wallet.isSignedIn() == true) {
      SetAccount(wallet.getAccountId());
    }
  }

  CheckConnect();

  return (
    <div>
      <main>
        <button onClick={ConnectWallet}>Connect</button>
        <button onClick={DisconnectWallet}>Disconnect</button>
        <p>Your Account: {Account}</p>
      </main>
    </div>
  )
}
