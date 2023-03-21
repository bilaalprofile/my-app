import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const [Data, setData] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
      );
      const res = await get.json();
      setData(res[0]);
    }
    getData();
  }, []);

  return (
    <div className="singleData">
      <h4>
        <span className="tagsTo">Id</span> {Data.id}
      </h4>
      <h4>
        <span className="tagsTo">FirstName</span> {Data.firstName}
      </h4>
      <h4>
        <span className="tagsTo"> LastName</span> {Data.lastName}
      </h4>
      <h4>
        <span className="tagsTo">D-o-b</span> {Data.dob}
      </h4>
      <h4>
        <span className="tagsTo"> Phone No</span> {Data.contactNumber}
      </h4>
    </div>
  );
};

export default UserDetails;
