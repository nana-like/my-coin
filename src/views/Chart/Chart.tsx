import Header from '@/components/MyCoinHeader/MyCoinHeader';
import Footer from '@/components/MyCoinFooter/MyCoinFooter';
import classNames from 'classnames/bind';
import style from './Chart.module.scss';
import DropDown from '@/components/DropDown/DropDown';
const cx = classNames.bind(style);

function Chart() {
  return (
    <div className={cx('chart')}>
      <Header />
      <div className={cx('inner')}>
        <h2>Chart</h2>
        <DropDown />
        차아아아트!
      </div>
      <Footer />
    </div>
  );
}

export default Chart;
