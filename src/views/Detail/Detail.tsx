import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import classNames from 'classnames/bind';
import style from './Detail.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCoinDetail } from '@/utils/api';
import { useQuery } from 'react-query';
import { CoinProps } from '@/components/MyCoinList/MyCoinList';
import BackArrow from '@/assets/BackArrow';
const cx = classNames.bind(style);

interface DetailProps extends CoinProps {
  rank: number;
  hash_algorithm: string;
  links: {
    website: string;
  };
  description: string;
}

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CoinProps;
  const { data } = useQuery<DetailProps>(
    ['CoinDetail', state.id],
    () => fetchCoinDetail(state.id),
    {
      refetchInterval: 5000
    }
  );

  return (
    <div className={cx('detail')}>
      <Header />
      <div className={cx('inner')}>
        <a
          href="/"
          aria-label="Go Back"
          className={cx('back')}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <BackArrow />
        </a>
        <div className={cx('head')}>
          <div>
            <h2>{state?.name}</h2>
            <p>{state?.price.toFixed(3)} USD</p>
          </div>
          <img
            src={`https://cryptoicon-api.vercel.app/api/icon/${state?.symbol.toLowerCase()}`}
            alt={state?.name}
          />
        </div>
        <div className={cx('body')}>
          <ul>
            <li>
              <strong>Rank</strong>
              <span>#{data?.rank}</span>
            </li>
            <li>
              <strong>Symbol</strong>
              <span>{state?.symbol}</span>
            </li>
            <li>
              <strong>Algorithm</strong>
              <span>
                {data?.hash_algorithm !== 'None' &&
                data?.hash_algorithm !== null
                  ? data?.hash_algorithm
                  : '-'}
              </span>
            </li>
            <li>
              <strong>Website</strong>
              <span>
                <a href={data?.links.website[0]} target="_blank" rel="noopener">
                  {data?.links.website[0]}
                </a>
              </span>
            </li>
          </ul>
          <p className={cx('desc')}>{data?.description}</p>
        </div>
        <button className={cx('seeChart')}>Chart</button>
      </div>
      <Footer />
    </div>
  );
}
