import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import MeetUpsForm from "./MeetUpsForm";
const NewMeetups = (props) => {
  const navigate = useNavigate();
  const addMeetUpHandler = (Submit_data) => {
    fetch(
      "https://react-getting-start-1e8d9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(Submit_data),
        Headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate(-1));
  };
  return (
    <div>
      <MeetUpsForm onAddMeetUpData={addMeetUpHandler} />
    </div>
  );
};

export default NewMeetups;
