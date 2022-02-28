import { Link } from 'react-router-dom';
import RightArrow from '@/assets/RightArrow';
import style from './MyCoinList.module.scss';
import classNames from 'classnames/bind';
import { CoinsProps } from '@/views/Home/Home';
const cx = classNames.bind(style);

interface CoinProps {
  name: string;
  price: number;
}
interface CoinListProps {
  list: CoinsProps[];
}

function CoinListItem({ name, price }: CoinProps) {
  return (
    <li className={cx('listItem')}>
      <Link to="/:coinId" className="hbox justify-content(space-between)">
        <div className="hbox">
          <img src="" alt="" />
          <div className="m(0/0/0/1.6rem)">
            <p className={cx('coinName')}>{name}</p>
            <p className={cx('coinValue')}>{price} USD</p>
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

function CoinList({ list = [] }: CoinListProps) {
  return (
    <ul className={cx('list')}>
      {list.map((coin) => {
        return (
          <CoinListItem
            key={coin.id}
            name={coin.name}
            price={coin.quotes.USD.price}
          />
        );
      })}
    </ul>
  );
}

export default CoinList;
