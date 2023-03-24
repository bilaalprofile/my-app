import React from "react";
import MeetUpList from "./MeetUpList";
import FavoriteContext from "../../../contextStore/FavoriteContext";
import { useContext } from "react";
const Favorites = () => {
  const FavoriteCtx = useContext(FavoriteContext);

  let content;
  if (FavoriteCtx.totalfavorites === 0) {
    content = <p className="IfNoFav">You don't have favorites yet.</p>;
  } else {
    content = <MeetUpList meetups={FavoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1 className="wnhavefav">My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
