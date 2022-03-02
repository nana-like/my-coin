import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import classNames from 'classnames/bind';
import style from './ChartView.module.scss';
import DropDown from '@/components/DropDown/DropDown';
import Chart from '@/components/MyCoinChart/MyCoinChart';
const cx = classNames.bind(style);

export default function ChartView() {
  return (
    <div className={cx('chart')}>
      <Header />
      <div className={cx('inner')}>
        <h2>Chart</h2>
        <DropDown />
        <Chart />
      </div>
      <Footer />
    </div>
  );
}
