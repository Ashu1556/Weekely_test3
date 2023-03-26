import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const Fetchdata = () => {
  const [data1, setData1] = useState([]);

  const api = "https://randomuser.me/api/?results=50";

  const fetchdata = (api) => {
    axios
      .get(api)
      .then((res) => {
        setData1(res.data.results);
        console.log(res.data.results);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const maledata = () => {
    const newdata = data1.filter((item) => {
      return item.gender === "male";
    });
    console.log(newdata);
    setData1(newdata);
  };

  const femaledata = () => {
    const newdata = data1.filter((item) => {
      return item.gender === "female";
    });
    setData1(newdata);
  };
  useEffect(() => {
    fetchdata(api);
    maledata();
    femaledata();
  }, []);

  return (
    <div>
      {
        <>
          <table>
            <div className="table-container111">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "50%",
                }}
              >
                <div>
                  <input
                    type="radio"
                    value={data1}
                    onChange={() => fetchdata(api)}
                  />

                  <label>All</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value={data1}
                    onChange={() => maledata()}
                  />
                  <label>male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value={data1}
                    onChange={() => femaledata()}
                  />
                  <label>Female</label>
                </div>
              </div>
              <tr className="table-container">
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>

              {data1.map((item) => (
                <div className="table-container11">
                  <tr className="table-container1">
                    <td>
                      <img src={item.picture.medium} alt="image_of_profile" />
                    </td>
                    <td>{item.name.first}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                  </tr>
                </div>
              ))}
            </div>
          </table>
        </>
      }
    </div>
  );
};

export default Fetchdata;
