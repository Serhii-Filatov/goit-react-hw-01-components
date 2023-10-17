import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';

import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import data from 'data/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from 'data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

import 'index.css';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
