import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import CoinList from '@/components/MyCoinList/MyCoinList';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { useEffect } from 'react';
const cx = classNames.bind(style);

function Home() {
  useEffect(() => {
    document.body.classList.add('hasGrayBg');
    return () => {
      document.body.classList.remove('hasGrayBg');
    };
  }, []);
  return (
    <div className={cx('home')}>
      <Header />
      <div className={cx('inner')}>
        <article className={cx('article')}>
          <div className={cx('box')}>
            <h2 className={cx('title')}>Top Coins</h2>
            <CoinList />
          </div>
        </article>
        <article className={cx('article')}>
          <div className={cx('box')}>
            <h2 className={cx('title')}>Coins</h2>
            <CoinList />
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
