import React from "react";
import Profile from "./components/SocialProfile";
import user from "./data/user.json";

import Statistics from "./components/Statistics";
import statisticalData from "./data/statistical-data.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
};

export default App;