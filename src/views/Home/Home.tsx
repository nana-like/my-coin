import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import CoinList from '@/components/MyCoinList/MyCoinList';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchTickers } from '@/utils/api';
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

export default function Home() {
  useEffect(() => {
    document.body.classList.add('hasGrayBg');
    return () => {
      document.body.classList.remove('hasGrayBg');
    };
  }, []);

  const { data } = useQuery<CoinsProps[]>('allTickers', fetchTickers, {
    refetchInterval: 10000
  });

  return (
    <div className={cx('home')}>
      <Header />
      <div className={cx('inner')}>
        <CoinList title="Top Coins" list={data?.slice(0, 5)} />
        <CoinList title="Coins" list={data?.slice(5, 30)} />
      </div>
      <Footer />
    </div>
  );
}
