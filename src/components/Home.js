import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { TailSpin, ThreeDots, RotatingSquare } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(3);
  const [Data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      setLoading(false);
    }
    getData();
    document.title = `(${state}) Peoples Data`;
  }, [state]);

  return (
    <div>
      <div className="ChangingBtn">
        <button className="btn" onClick={() => setState(state + 1)}>
          Add
        </button>
        <button className="btn" onClick={() => setState(state - 1)}>
          Remove
        </button>
      </div>

      {loading ? (
        <div className="spinManage">
          <ThreeDots color="blue" height={20} />
        </div>
      ) : (
        Data.map((element, index) => {
          return (
            <Link key={element.id} to={`/${element.id}`}>
              <div className="data" key={index}>
                <h5>{element.firstName}</h5>
                <h5>{element.lastName}</h5>
                <h5>{element.contactNumber}</h5>
                <h5>{element.age}</h5>
              </div>
            </Link>
          );
        })
      )}
      <div className="spinnerclass"></div>
    </div>
  );
};

export default Home;
