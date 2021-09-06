/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './Home.css';

import Carroussel from '../../components/React3DCarousel';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import CardNews from '../../components/CardNews';

import Card from '../../components/Card';

function Home() {
  let cards = [
    {
      key: 1,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/tzhsFr6.gif'}
          Title={'DOGE Waifu - CW #0001'}
          Stars={5}
          rarity={'UR'}
          Description={
            'Only one image of "Doge Waifu" was created, it is classified as ultra rare'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809201680797663233'
          }
        />
      ),
    },
    {
      key: 2,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/aAqk5Cv.gif'}
          Title={'BNB Waifu - CW #0002'}
          Description={'BNB Description'}
          Stars={2}
          rarity={'UC'}
          Description={
            'A hundred images of "BNB Waifu" were created, it is classified as uncommon'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809202780309291043'
          }
        />
      ),
    },
    {
      key: 3,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/hppDCQJ.gif'}
          Title={'SOL Waifu - CW #0003'}
          Description={'SOL Description'}
          Stars={3}
          rarity={'R'}
          Description={
            'Ten images of "SOL Waifu" were created, it is classified as rare'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809203879820918799'
          }
        />
      ),
    },
    {
      key: 4,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/RfZGY23.gif'}
          Title={'EURS Waifu - CW #0004'}
          Description={'EUR Description'}
          Stars={1}
          rarity={'C'}
          Description={
            'A thousand images of "EURS Waifu" were created, it is classified as common'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809212675913941042'
          }
        />
      ),
    },
    {
      key: 5,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/eTnTpB4.gif'}
          Title={'CAKE Waifu - CW #0005'}
          Description={'CAKE Description'}
          Stars={2}
          rarity={'UC'}
          Description={
            'A hundred images of "CAKE Waifu" were created, it is classified as uncommon'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809206078844174371'
          }
        />
      ),
    },
    {
      key: 6,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/to3Y4jd.gif'}
          Title={'BTC Waifu - CW #0006'}
          Description={'BTC Description'}
          Stars={4}
          rarity={'SR'}
          Description={
            'Five images of "BTC Waifu" were created, it is classified as super rare'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809207178355802117'
          }
        />
      ),
    },
    {
      key: 7,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/wR7sFOe.gif'}
          Title={'NANO Waifu - CW #0007'}
          Description={'NANO Description'}
          Stars={3}
          rarity={'R'}
          Description={
            'Ten images of "NANO Waifu" were created, it is classified as rare'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809208277867429903'
          }
        />
      ),
    },
    {
      key: 8,
      content: (
        <CardNews
          Waifu={'https://i.imgur.com/bscdmAB.gif'}
          Title={'MATIC Waifu - CW #0008'}
          Description={'MATIC Description'}
          Stars={2}
          rarity={'UC'}
          Description={
            'A hundred images of "MATIC Waifu" were created, it is classified as uncommon'
          }
          link={
            'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/57779295695536594360886812976274743278416095183057660459690809209377379057699'
          }
        />
      ),
    },
  ];

  /* let CurrencyInfo = [
     {
       key: 1,
       content: <CardNews Waifu={"https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389__180.png"} Title={"What is BNB?"} Description={"Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol. BNB was initially based on the Ethereum network but is now the native currency of Binance's own blockchain, the Binance chain."} Stars={2} />
     },
     {
       key: 2,
       content: <CardNews Waifu={"https://coingolive.com/assets/img/coin/solana.png"} Title={"What is SOL?"} Description={"Solana is a crypto computing platform that aims to achieve high transaction speeds without sacrificing decentralization. It employs a bundle of novel approaches, including the “proof of history” mechanism. Solana's native cryptocurrency is SOL, which is used to pay transaction fees and for staking."} Stars={3} />
     },
     {
       key: 3,
       content: <CardNews Waifu={"waifu3"} Title={"EURS Waifu"} Description={"EUR Description"} Stars={1} />
     },
     {
       key: 4,
       content: <CardNews Waifu={"https://cryptologos.cc/logos/pancakeswap-cake-logo.png"} Title={"What is CAKE?"} Description={"CAKE Description"} Stars={2} />
     },
     {
       key: 5,
       content: <CardNews Waifu={"https://static.currencyrate.today/f/flags/doge.svg"} Title={"What is DOGE?"} Description={"DOGE Description"} Stars={5} />
     },
     {
       key: 6,
       content: <CardNews Waifu={"https://img.freepik.com/vetores-gratis/simbolo-bitcoin-em-fundo-laranja_1017-9631.jpg?size=338&ext=jpg"} Title={"BTC Waifu"} Description={"Bitcoin is a digital currency created in 2009 by a mysterious figure using the alias Satoshi Nakamoto. It can be used to buy or sell items from people and companies that accept bitcoin as payment, but it differs in several key ways from traditional currencies."} Stars={4} />
     },
   ];*/

  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [goToSlide, setGoToSlide] = useState();

  return (
    <>
      <Menu />
      <div className="teste">
        <Carroussel cards={cards} table={table} goToSlide={goToSlide} />
      </div>
      <div className="teste2">
        <Card info={goToSlide} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
