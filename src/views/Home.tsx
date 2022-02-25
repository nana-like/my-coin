import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import CoinList from '@/components/MyCoinList/MyCoinList';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('home')}>
      <Header />
      <h1>Home</h1>
      <CoinList />
      <Footer />
    </div>
  );
}

export default Home;
