import React from "react";
import Card from "./Card";
const MeetUpsItem = (props) => {
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

            <button className="AddToFav">To Favorites</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpsItem;
