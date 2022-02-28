import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import classNames from 'classnames/bind';
import style from './Detail.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

export default function Detail() {
  return (
    <div className={cx('detail')}>
      <Header />
      <div className={cx('inner')}>
        <Link className={cx('back')} to="/" aria-label="Go Back">
          {/* 클릭한 위치지점으로 백할 수 있을까?? */}
        </Link>
        <div className={cx('head')}>
          <div>
            <h2>BitCoin</h2>
            <p>12345.11 USD</p>
          </div>
          <img src="asd.png" alt="" />
        </div>
        <div className={cx('body')}>
          <ul>
            <li>
              <strong>RANK</strong>
              <span>1</span>
            </li>
            <li>
              <strong>SYMBOL</strong>
              <span>$BTC</span>
            </li>
            <li>
              <strong>ABCDE</strong>
              <span>123123</span>
            </li>
            <li>
              <strong>ABCDE</strong>
              <span>123123</span>
            </li>
            <li>
              <strong>ABCDE</strong>
              <span>123123</span>
            </li>
          </ul>
          <p className={cx('desc')}>
            Incididunt enim in irure eiusmod exercitation elit esse est.
            Occaecat anim amet ex incididunt ullamco irure ad est aliqua ex
            Lorem. Voluptate sunt magna ex est adipisicing tempor dolore aliqua
            officia esse. Cupidatat enim officia veniam proident incididunt
            voluptate labore culpa sint magna nulla commodo officia.
          </p>
        </div>
        <button className={cx('seeChart')}>Chart</button>
      </div>
      <Footer />
    </div>
  );
}
