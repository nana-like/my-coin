import classNames from 'classnames/bind';
import MyCoinLogo from '@/assets/MyCoinLogo';
import style from './MyCoinFooter.module.scss';
const cx = classNames.bind(style);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <MyCoinLogo />
        </div>
        <p className="c(#999)">
          <a
            href="//nykim.work"
            target="_blank"
            rel="noopener"
            className="hover:text-decoration(underline)"
          >
            Nana
          </a>
          <i className="font-size(90%)">&nbsp;with&nbsp;</i>
          <a
            href="//nomadcoders.co/react-masterclass"
            target="_blank"
            rel="noopener"
            className="hover:text-decoration(underline)"
          >
            NomadCoders
          </a>
          &nbsp;
          <i>💙</i>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
