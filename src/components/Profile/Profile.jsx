import { ProfileItem } from './ProfileItem';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width={200}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <ProfileItem title="Followers" props={stats.followers} />
        <ProfileItem title="Views" props={stats.views} />
        <ProfileItem title="Likes" props={stats.likes} />
      </ul>
    </div>
  );
};
