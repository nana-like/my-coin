import { Link } from 'react-router-dom';
import RightArrow from '@/assets/RightArrow';
import style from './MyCoinList.module.scss';
import classNames from 'classnames/bind';
import { CoinsProps } from '@/views/Home/Home';
const cx = classNames.bind(style);

export interface CoinProps {
  id: string;
  name: string;
  price: number;
  symbol: string;
}
interface CoinListProps {
  title: string;
  list: CoinsProps[] | undefined;
  loadMore?: boolean;
}

function CoinListItem({ id, name, price, symbol }: CoinProps) {
  return (
    <li>
      <Link
        to={`/${id}`}
        state={{ id, name, price, symbol }}
        className="hbox justify-content(space-between)"
      >
        <div className="hbox">
          <img
            src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
            alt={name}
          />
          <div className="m(0/0/0/1.6rem)">
            <p className={cx('coinName')}>{name}</p>
            <p className={cx('coinPrice')}>{price.toFixed(3)} USD</p>
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

function CoinList({ title, list = [], loadMore = false }: CoinListProps) {
  return (
    <article className={cx('article')}>
      <div className={cx('box')}>
        <h2 className={cx('title')}>{title}</h2>
        <ul className={cx('list')}>
          {list.map((coin) => {
            return (
              <CoinListItem
                key={coin.id}
                id={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.quotes.USD.price}
              />
            );
          })}
        </ul>
        {loadMore ? (
          <button className={cx('loadMore')}>Load More</button>
        ) : null}
      </div>
    </article>
  );
}

export default CoinList;
