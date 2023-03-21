import React from "react";

import MeetUpsItem from "./MeetUpsItem";

const MeetUpList = (props) => {
  return (
    <div>
      {props.meetups.map((meetup) => (
        <MeetUpsItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </div>
  );
};

export default MeetUpList;
