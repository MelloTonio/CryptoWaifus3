import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Card.css';

let cards = [
  {
    key: 1,
    content: 'DOGE',
    image:
      'https://e7.pngegg.com/pngimages/707/440/png-clipart-dogecoin-cryptocurrency-scalable-graphics-dogecoin-text-trademark.png',
    description:
      'Dogecoin is primarily used for tipping users on Reddit and Twitter, but it is also accepted as a method of payment by a few dozen merchants. It can be used to buy food, household supplies and even website domains.',
  },
  {
    key: 2,
    content: 'BNB',
    image: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
    description:
      "Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol. BNB was initially based on the Ethereum network but is now the native currency of Binance's own blockchain, the Binance chain.",
  },
  {
    key: 3,
    content: 'SOL',
    image:
      'https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452',
    description:
      "Solana is a crypto computing platform that aims to achieve high transaction speeds without sacrificing decentralization. It employs a bundle of novel approaches, including the “proof of history” mechanism. Solana's native cryptocurrency is SOL, which is used to pay transaction fees and for staking.",
  },
  {
    key: 4,
    content: 'EURS',

    image:
      'https://cdn.discordapp.com/attachments/853072668274458664/884290568556015716/2989.png',
    description:
      'Produced by STASIS, EURS was developed to tokenize the traditional fiat asset known around the world as the Euro. EURS mirrors the value of the Euro on the blockchain, and is said to be supported by liquidity assurance mechanisms combining the benefits of a global fiat with the transparency, immutability and efficiency of the blockchain.',
  },
  {
    key: 5,
    content: 'CAKE',
    image: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png',
    description:
      "PancakeSwap is a decentralized exchange for swapping BEP20 tokens on Binance Smart Chain. PancakeSwap uses an automated market maker (AMM) model where users trade against a liquidity pool. Such pools are filled with users' funds. They deposit them into the pool, receiving liquidity provider (or LP) tokens in return.",
  },
  {
    key: 6,
    content: 'BTC',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg',
    description:
      'Bitcoin is a digital currency created in 2009 by a mysterious figure using the alias Satoshi Nakamoto. It can be used to buy or sell items from people and companies that accept bitcoin as payment, but it differs in several key ways from traditional currencies.',
  },
  {
    key: 7,
    content: 'NANO',
    image:
      'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Nano-icon.png',
    description:
      'Nano is a software designed to facilitate fee-free cryptocurrency transactions. To make a transaction, an account owner signs a transaction that updates their own ledger, and broadcasts it out to the Nano network.',
  },
  {
    key: 7,
    content: 'MATIC',
    image: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
    description:
      'Polygon, previously known as MATIC network, is an interchain scalability solution that gives an infrastructure for creating blockchain networks that can interface with each other. It intends to bring the adaptability and scalability of alt chains along with Ethereums security, liquidity, and interoperability.',
  },
];

const useStyles = makeStyles({
  root: {
    width: 463,
    height: 650,
  },
  bullet: {},
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return props.info ? (
    <Card className={classes.root + ' cardDefault'}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <div className="same">
            <div className="unflex-title">
              <img
                className="Logo"
                src={cards[props.info].image}
                style={{ height: 100, width: 100 }}
              />
            </div>
            <div className="unflex-name">{cards[props.info].content}</div>
          </div>
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          <br />
          <br />
          <div className="unflex text">{cards[props.info].description}</div>
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Card className={classes.root + ' cardDefault'}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <div className="same">
            <div className="unflex-title">
              <img
                className="Logo"
                src={cards[0].image}
                style={{ height: 100, width: 100 }}
              />{' '}
            </div>
            <div className="unflex-name">{cards[0].content}</div>
          </div>
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          <br />
          <br />
          <div className="unflex text">{cards[0].description}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
