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
        <div className="hbox gap(4rem) h(100%)">
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

{
  /*
  - 결국 글로벌스타일은 따로 작성해야 할 듯..
  - nav > a 와 같이 다중 선택이 필요한 경우는 따로 작성해야 할까?
  - after 요소 스타일링이 어려움
  => 주요 요소는 클래스네임으로 잡고, 굳이 클래스네임 붙일 필요 없는 레이아웃 용도(flex등)만 어도러블로 처리

  Q. 글로벌 스타일을 어떻게 줄까?
  Q. 이미지, SVG 어떻게 가져올까?
  Q. 스크립트 어떻게 할까? (특정 컴포넌트엘게 먹는 스크롤 이벤트 등)
  */
}
