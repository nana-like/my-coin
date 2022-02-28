import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import CoinList from '@/components/MyCoinList/MyCoinList';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style);

export interface CoinsProps {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    USD: {
      price: number;
    };
  };
}

function Home() {
  const [topCoins, setTopCoins] = useState<CoinsProps[]>([]);
  const [coins, setCoins] = useState<CoinsProps[]>([]);

  useEffect(() => {
    document.body.classList.add('hasGrayBg');
    return () => {
      document.body.classList.remove('hasGrayBg');
    };
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/tickers');
      const json = await response.json();
      console.log(json);
      setTopCoins(json.slice(0, 5));
      setCoins(json.slice(5, 20));
    })();
  }, []);

  return (
    <div className={cx('home')}>
      <Header />
      <div className={cx('inner')}>
        <CoinList title="Top Coins" list={topCoins} />
        <CoinList title="Coins" list={coins} loadMore />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
