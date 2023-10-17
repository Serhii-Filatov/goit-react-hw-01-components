import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? '#FF5733' : 'green' }}
      ></span>
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
};
