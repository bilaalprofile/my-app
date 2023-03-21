import React from "react";
import Card from "./Card";
import { useRef } from "react";
import userEvent from "@testing-library/user-event";
const MeetUpsForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const Submit_data = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetUpData(Submit_data);
  };
  return (
    <Card>
      <div className="formData">
        <h1 className="formTitle">Add Meetups</h1>
        <form className="meetsupForm" onSubmit={formHandler}>
          <div className="meetupinput">
            <label className="formLabel" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              //   placeholder="Title"
              required
              ref={titleInputRef}
              name="title"
              id="title"
            />
          </div>
          <div className="meetupinput">
            <label className="formLabel" htmlFor="image">
              Image
            </label>
            <input
              type="url"
              //   placeholder="Image Url"
              required
              ref={imageInputRef}
              name="image"
              id="image"
            />
          </div>
          <div className="meetupinput">
            <label className="formLabel" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              //   placeholder="Address"
              required
              ref={addressInputRef}
              id="address"
            />
          </div>
          <div className="meetupinput">
            <label className="formLabel" htmlFor="description">
              Description
            </label>
            <textarea
              className="TextArea"
              required
              ref={descriptionInputRef}
              type="text"
              rows="5"
              id="description"
            />
          </div>
          <div>
            <button className="subMeetup">Add Meetup</button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default MeetUpsForm;
