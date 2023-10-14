import friends from './friends.json';
export const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(({id, avatar, name, isOnline}) => {
        return (
          <li key={id} className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
