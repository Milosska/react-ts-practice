import React, { FC } from "react";
import Card, { CardVariant } from "../components/Card";
// import UserList from "../components/UserList";
import EventsExample from "../components/EventsExample";

const OtherPage: FC = () => {
  return (
    <>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => {
          console.log("Click! -", num);
        }}
      >
        <p>Add some text!</p>
        <button>Click me!</button>
      </Card>
      {/* <UserList users={users} /> */}
      <EventsExample />
    </>
  );
};

export default OtherPage;
