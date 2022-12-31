import React from "react";
import { useState, useEffect } from "react";
import View from "./View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("wine");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Info = () => {
  // main array of objects state || wine state || wine array of objects
  const [wine, setWine] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [alContent, setAlContent] = useState("");

  // form submit event
  const handleAddWineSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let wines = {
      name,
      type,
      alContent,
    };
    setWine([...wine, wines]);
    setName("");
    setType("");
    setAlContent("");
  };

  // delete entry from LS
  const deleteEntry = (name) => {
    const filteredWines = wine.filter((element, index) => {
      return element.name !== name;
    });
    setWine(filteredWines);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("wine", JSON.stringify(wine));
  }, [wine]);

  return (
    <div className="wrapper">
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddWineSubmit}
            >
            <h3>Select Wine</h3>
            <label>Beer Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label>Beer Type</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
            <br />
            <label>Alcohol Content</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAlContent(e.target.value)}
              value={alContent}
            />
            <br />
            <button type="submit" className="btn btn-success btn-md">
              Submit
            </button>
          </form>
        </div>

        <div className="view-container">
          {wine.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Beer Name</th>
                      <th>Beer Type</th>
                      <th>Alcohol Content</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <View wine={wine} deleteEntry={deleteEntry} /> */}
                    <View wine={wine} deleteEntry={deleteEntry} />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setWine([])}
              >
                Remove All
              </button>
            </>
          )}
          {wine.length < 1 && <div>No entries submit yet.</div>}
        </div>
      </div>
    </div>
  );
};

export default Info;
