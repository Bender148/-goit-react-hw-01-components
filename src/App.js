import React from "react";
import Section from "./components/Section/Section";
import PageTitle from "./components/PageTitle/PageTitle";
import Title from "./components/Title/Title";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import { username, tag, location, avatar, stats } from "./dataBase/user.json";
import statisticalData from "./dataBase/data.json";
import friends from "./dataBase/friends.json";
import transactions from "./dataBase/transactions.json";

function App() {
  return (
    <>
      <PageTitle text="React Homework. Module 1. Components" />
      <Section>
        <Title text="Task One. My Social Media Profile" />
        <Profile
          name={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Section>
      <Section type="highlighted">
        <Title text="Task Two. My Statistics" />
        {/* Statistics component with title prop */}
        <Statistics title="Upload stats" stats={statisticalData} />
        {/* Statistics component without title prop */}
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <Title text="Task Three. My Friends List" />
        <FriendList friends={friends} />
      </Section>
      <Section type="highlighted">
        <Title text="Task Four. My Transactions History" />
        <TransactionHistory items={transactions} />
      </Section>
      <Section>
        <Title text="See you in next Home Work..." />
      </Section>
    </>
  );
}

export default App;
