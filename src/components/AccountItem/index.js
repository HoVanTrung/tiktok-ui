import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Anime from '../../assets/images/anime.jpg';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <img className={cx('avatar-icon')} src={Anime} alt="Hoaa" />
      </div>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Hello Thăn Thăn</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>hovantrung</span>
      </div>
    </div>
  );
}

export default AccountItem;
