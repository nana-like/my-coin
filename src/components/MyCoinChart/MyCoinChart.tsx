import ApexChart from 'react-apexcharts';
import { fetchCoinHistory } from '@/utils/api';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import classNames from 'classnames';
import style from './MyCoinChart.module.scss';
const cx = classNames.bind(style);

interface CoinHistoryProps {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart() {
  const { coinId } = useParams();
  const { data } = useQuery<CoinHistoryProps[]>(['CoinHistory', coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <>
      <ApexChart
        type="candlestick"
        series={[
          {
            data: data?.map((price) => {
              return {
                x: price.time_open,
                y: [
                  price.open.toFixed(3),
                  price.high.toFixed(3),
                  price.low.toFixed(3),
                  price.close.toFixed(3)
                ]
              };
            })
          }
        ]}
        options={{
          chart: {
            toolbar: {
              show: false
            },
            height: 350,
            type: 'candlestick'
          },
          xaxis: {
            type: 'category',
            tickPlacement: 'between',
            labels: {
              show: true,
              rotateAlways: false,
              hideOverlappingLabels: false,
              showDuplicates: false,
              trim: false,
              style: {
                fontFamily: 'Open Sans'
              },
              formatter: function (val: any) {
                return dayjs(val).format('MM/DD');
              }
            }
          },
          yaxis: {
            tooltip: {
              enabled: true
            },
            labels: {
              show: true,
              maxWidth: 150,
              style: {
                colors: [],
                fontSize: '12px',
                fontFamily: 'Open Sans',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label'
              }
            }
          }
        }}
      />
    </>
  );
}
