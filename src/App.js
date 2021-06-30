import React from "react";
import Profile from "./components/SocialProfile";
import user from "./data/user.json";

import Statistics from "./components/Statistics";
import statisticalData from "./data/statistical-data.json";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
};

export default App;
