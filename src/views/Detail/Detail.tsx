import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import classNames from 'classnames/bind';
import style from './Detail.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchCoinDetail, fetchCoinTickers } from '@/utils/api';
import { useQuery } from 'react-query';
import { CoinProps } from '@/components/MyCoinList/MyCoinList';
import { CoinsProps } from '../Home/Home';
import BackArrow from '@/assets/BackArrow';
import MyCoinChart from '@/components/MyCoinChart/MyCoinChart';
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
  const { coinId } = useParams();
  const { data: coinDetail } = useQuery<DetailProps>(
    ['CoinDetail', coinId],
    () => fetchCoinDetail(coinId),
    {
      refetchInterval: 10000
    }
  );

  const { data: coinPrice } = useQuery<CoinsProps>(
    ['CoinPrice', coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 10000
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
            <h2>{state?.name || coinDetail?.name}</h2>
            <p>
              {state?.price.toFixed(3) ||
                coinPrice?.quotes.USD.price.toFixed(3)}{' '}
              USD
            </p>
          </div>
          <img
            src={`https://cryptoicon-api.vercel.app/api/icon/${
              state?.symbol.toLowerCase() || coinDetail?.symbol.toLowerCase()
            }`}
            alt={state?.name}
          />
        </div>
        <div className={cx('body')}>
          <ul>
            <li>
              <strong>Rank</strong>
              <span>#{coinDetail?.rank}</span>
            </li>
            <li>
              <strong>Symbol</strong>
              <span>{state?.symbol || coinDetail?.symbol}</span>
            </li>
            <li>
              <strong>Algorithm</strong>
              <span>
                {coinDetail?.hash_algorithm !== 'None' &&
                coinDetail?.hash_algorithm !== null
                  ? coinDetail?.hash_algorithm
                  : '-'}
              </span>
            </li>
            <li>
              <strong>Website</strong>
              <span>
                <a
                  href={coinDetail?.links.website[0]}
                  target="_blank"
                  rel="noopener"
                >
                  {coinDetail?.links.website[0]}
                </a>
              </span>
            </li>
          </ul>
          <p className={cx('desc')}>{coinDetail?.description}</p>
        </div>
        <MyCoinChart />
      </div>
      <Footer />
    </div>
  );
}
