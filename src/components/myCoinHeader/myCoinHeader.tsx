import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './MyCoinHeader.module.scss';
import MyCoinLogo from '@/assets/MyCoinLogo';
const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <Link className={cx('logo', 'hbox')} to="/">
          <h1>MyCoin</h1>
          <MyCoinLogo />
        </Link>
        <div className="hbox h(100%)">
          <nav className={cx('navi')}>
            <Link to="/">Home</Link>
            <Link to="/chart">Chart</Link>
          </nav>
          <button
            className={cx('toggle')}
            aria-label="Turn to Dark Theme"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
