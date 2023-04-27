import React from "react";
import './Workinghours.css';
import { useState } from "react";


const Workinghours =() =>
{

  const [timeSpent, setTimeSpent] = useState('');

  const handleInputChange = (event) => {
    setTimeSpent(event.target.value);
  };

  return (
    <form className="create-course-flow--response-form--9mwoJ">
     
        <div className="time-spent-options">
          <div className="time-spent-option">
            <label htmlFor="radio--26">
            &nbsp; &nbsp;
              <input
                name="time-spent"
                id="radio--26"
                type="radio"
                value="0-2 hours"
                checked={timeSpent === '0-2 hours'}
                onChange={handleInputChange}
              />
              <span className="ud-fake-toggle-input ud-fake-toggle-radio ud-fake-toggle-radio-large"></span>
              <div className="ud-toggle-input-block-outline"></div>
              <div className="ud-heading-md"><h3>I’m very busy right now (0-2 hours)</h3></div>
            </label>
          </div>
          <br></br>
          
          <div className="time-spent-option">
            <label htmlFor="radio--27">
            &nbsp; &nbsp;
              <input
                name="time-spent"
                id="radio--27"
                type="radio"
                value="2-4 hours"
                checked={timeSpent === '2-4 hours'}
                onChange={handleInputChange}
              />
              <span className="ud-fake-toggle-input ud-fake-toggle-radio ud-fake-toggle-radio-large"></span>
              <div className="ud-toggle-input-block-outline"></div>
              <div className="ud-heading-md"><h3>I’ll work on this on the side (2-4 hours)</h3></div>
            </label>
          </div>
          <br></br>
          <div className="time-spent-option">
            <label htmlFor="radio--28">
            &nbsp; &nbsp;
              <input
                name="time-spent"
                id="radio--28"
                type="radio"
                value="5+ hours"
                checked={timeSpent === '5+ hours'}
                onChange={handleInputChange}
              />
              <span className="ud-fake-toggle-input ud-fake-toggle-radio ud-fake-toggle-radio-large"></span>
              <div className="ud-toggle-input-block-outline"></div>
              <div className="ud-heading-md"><h3>I have lots of flexibility (5+ hours)</h3></div>
            </label>
          </div>
          <br></br>
          <div className="time-spent-option">
            <label htmlFor="radio--29">
            &nbsp; &nbsp;
              <input
                name="time-spent"
                id="radio--29"
                type="radio"
                value="undecided"
                checked={timeSpent === 'undecided'}
                onChange={handleInputChange}
              />
              <span className="ud-fake-toggle-input ud-fake-toggle-radio ud-fake-toggle-radio-large"></span>
              <div className="ud-toggle-input-block-outline"></div>
              <div className="ud-heading-md"><h3>I haven’t yet decided if I have time</h3></div>
            </label>
          </div>
        </div>
      
    </form>
 


);

}

export default Workinghours;