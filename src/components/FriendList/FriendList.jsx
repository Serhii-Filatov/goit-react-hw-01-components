import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        const color = isOnline ? '#FF5733' : 'green';
        const statusStyle = {
          backgroundColor: color,
        };
        return (
          <li key={id} className={css.item}>
            <span className={css.status} style={statusStyle}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="100"
              height="100"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
