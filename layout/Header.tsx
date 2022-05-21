import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { IoMdSettings, IoIosDocument } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { BiLogOut, BiSortAlt2 } from "react-icons/bi";
import logo from "../assets/img/cykura_logo.png";
import DarkMode from "./DarkMode";
import * as nearAPI from "near-api-js";

const { connect, keyStores, WalletConnection } = nearAPI;

const Header = () => {
  const [Account , SetAccount] = useState("Connect Wallet");

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

  return (
    <>
      <header className="header">
        <Navbar
          className="py-3"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container fluid className="px-3 px-md-4">
            <Navbar.Brand href="/Home" className="fw-bold fs-28 linear-wipe">
              <Image src={logo.src} className="img-fluid me-1" alt="Logo" />{" "}
              CykuraLabs
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/Home">
                  <BiSortAlt2 className="me-2" /> Trade
                </Nav.Link>
                <Nav.Link href="#">
                  <HiOutlineFingerPrint className="me-2" /> Infra
                </Nav.Link>
                <Nav.Link href="#">
                  <IoIosDocument className="me-2" /> Docs
                </Nav.Link>
                <Nav.Link href="#">
                  <RiBarChart2Fill className="me-2" /> Stats
                </Nav.Link>
                {/* <NavDropdown title="More" id="collasible-nav-dropdown" className="bg-dark">
                    <NavDropdown.Item href="#">
                    Twitter
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Discord
                    </NavDropdown.Item>
                    </NavDropdown> */}
              </Nav>
              <Nav>
                <DarkMode />
              </Nav>
              <Nav>
                <Nav.Link href="#" className="swapbtn px-4">
                  <IoMdSettings size="23" />
                </Nav.Link>
                <Nav.Link href="#" className="connectbtn px-4" onClick={ConnectWallet}>
                  {Account}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
