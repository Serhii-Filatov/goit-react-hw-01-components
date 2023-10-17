import css from './Profile.module.css';

export const ProfileItem = ({ title, props }) => {
  return (
    <>
      <li className={css.flexItem}>
        <span className={css.label}>{title}</span>
        <span className={css.quantity}>{props}</span>
      </li>
    </>
  );
};
