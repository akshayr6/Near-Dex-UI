import React, { useState } from "react";
import { Image, Col } from "react-bootstrap";
import cryptologo from "../../assets/img/bnb.png";
import near from "../../assets/img/near.png";
import * as nearAPI from "near-api-js";

const { connect, keyStores, WalletConnection } = nearAPI;

const CryptoBtn = () => {
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

  if (typeof window !== undefined) {
    CheckConnect();
  }

  const WallBtn = [
    {
      Img: near,
      Title: "near",
    } 
  ];
  return (
    <>
      {WallBtn.map((item) => (
        <Col md={6} className="mb-3" key={item.ID}>
          <div className="walconect-btn text-start mx-1" onClick={ConnectWallet}>
            <div className="btnbox d-flex align-items-center">
              <Image src={item.Img.src} alt="" className="img-fluid" />
              <span className="ms-3">{item.Title}</span>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default CryptoBtn;
