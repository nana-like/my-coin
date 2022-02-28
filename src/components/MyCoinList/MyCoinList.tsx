import { Link } from 'react-router-dom';
import RightArrow from '@/assets/RightArrow';
import style from './MyCoinList.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

const tempCoinList = [
  {
    name: 'Bitcoin'
  },
  {
    name: 'Ethereum'
  },
  {
    name: 'c'
  },
  {
    name: 'd'
  },
  {
    name: 'e'
  }
];

interface ICoin {
  name: string;
}

function CoinListItem({ name }: ICoin) {
  return (
    <li className={cx('listItem')}>
      <Link to="/:coinId" className="hbox justify-content(space-between)">
        <div className="hbox">
          <img src="" alt="" />
          <div className="m(0/0/0/1.6rem)">
            <p className={cx('coinName')}>{name}</p>
            <p className={cx('coinValue')}>34334.1 USD</p>
          </div>
        </div>
        <div className={cx('rightArrow')}>
          <i>See more</i>
          <RightArrow />
        </div>
      </Link>
    </li>
  );
}

function CoinList() {
  return (
    <ul className={cx('list')}>
      {tempCoinList.map((coin, i) => (
        <CoinListItem name={coin.name} />
      ))}
    </ul>
  );
}

export default CoinList;
