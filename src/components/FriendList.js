import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({items}) {
  return (<div className={css.container}>
    <ul className={css.list}>
      {items.map(item => (<li className={css.item} key={item.id}>
        <span className={`${css.status} ${item.isOnline ? css.isOnline : css.isOffline}`}></span>
        <img className={css.avatar} src={item.avatar} alt={item.name} width="48" />
        <p className={css.name}>{item.name}</p>
</li>))}
    </ul></div>
  )
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
}