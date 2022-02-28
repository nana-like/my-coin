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
  quotes: {
    USD: {
      price: number;
    };
  };
}

function Home() {
  const [coins, setCoins] = useState([]);

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
      setCoins(json.slice(0, 5));
    })();
  }, []);

  return (
    <div className={cx('home')}>
      <Header />
      <div className={cx('inner')}>
        <article className={cx('article')}>
          <div className={cx('box')}>
            <h2 className={cx('title')}>Top Coins</h2>
            <CoinList list={coins} />
            <div className={cx('loadMore')}>
              <button>더 불러오기</button>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
