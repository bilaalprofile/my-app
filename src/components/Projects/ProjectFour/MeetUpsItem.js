import React from "react";
import Card from "./Card";
import { useContext } from "react";
import FavoriteContext from "../../../contextStore/FavoriteContext";
const MeetUpsItem = (props) => {
  const FavoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = FavoriteCtx.itemIsFavorite(props.id);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      FavoriteCtx.removeFavorite(props.id);
    } else {
      FavoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  };
  return (
    <li className="newMeetUps">
      <Card>
        <div>
          <img
            className="cardImage"
            width="100%"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="extraWrap">
          <div>
            <div>
              <h3 className="cardTitle">{props.title}</h3>
              <address className="cardAddress">{props.address}</address>
              <p className="desBox">{props.description}</p>
            </div>

            <button className="AddToFav" onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpsItem;
