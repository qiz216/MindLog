import React, { useState, Fragment } from "react";
import "antd/dist/antd.css";
import { TimePicker, Button } from "antd";

export function TimeSelector() {
  const [times, setTimes] = useState([]);

  // we will need to do use effect here to check if the
  // user already has some times scheduled.
  //also we will want a times list to add some CRUD
  //functionality for the scheduler.

  function onChange(time, timeString) {
    setTimes([...times, timeString]);
  }
  function handleDelete(idx) {
    const new_times = times.filter((time, id) => id !== idx);
    console.log(`ID to delete is ${idx}`);
    console.log(`Times:: ${new_times}`);
    setTimes(new_times);
  }
  return (
    <Fragment>
      <div>
        <div className="card card-body mt-4 mb-4">
          <h2>Schedule Your Journaling Reminders</h2>
          <TimePicker
            use12Hours
            minuteStep={15}
            disabled={times.length > 2 ? true : false}
            format="h:mm a"
            onChange={onChange}
          />
        </div>
        {times.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Your Schedule</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {times.map((time, idx) => (
                <tr key={idx}>
                  <td>{time}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Fragment>
  );
}

export default TimeSelector;