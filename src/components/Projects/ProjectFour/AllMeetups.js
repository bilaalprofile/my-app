import React from "react";
import MeetUpList from "./MeetUpList";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect } from "react";
const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-start-1e8d9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <div className="spinManage">
          <ThreeDots color="blue" height={20} />
        </div>
      </section>
    );
  }
  return <MeetUpList meetups={loadedMeetups} />;
};

export default AllMeetups;
