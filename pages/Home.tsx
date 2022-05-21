import React from "react";
import dynamic from 'next/dynamic';
import Footer from "../layout/Footer";
import CardTitle from "../components/Home/CardTitle";
import SwapCard from "../components/Home/SwapCard";
import SearchBox from "../components/Home/SearchBox";
import DarkMode from "../layout/DarkMode";

const DynamicComponentHead = dynamic(() => import('../layout/Header.tsx'), {ssr: false});
const DynamicComponentCW = dynamic(() => import('../components/Modals/ConnectWallet.tsx'), {ssr: false});

const Home = () => {
  return (
    <>
      <DynamicComponentHead />
      <SearchBox />
      <CardTitle />
      <SwapCard />
      <DynamicComponentCW />
      <Footer />
    </>
  );
};

export default Home;
