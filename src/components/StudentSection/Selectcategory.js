import React from "react";
import { useState } from "react";
import './Selectcategory.css';
const Selectcategory =() =>
{
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <select id="category" value={category} onChange={handleChange}>
        <option  className ="categoryoption" value=""> &nbsp;&nbsp;&nbsp;&nbsp;choose   a   category</option>
        <option value="category1">Health and Fitness</option>
        <option value="category2">Photography and Video</option>
     
        <option value="category3">Finance and Accounting</option>
        <option value="category4">Teaching and Academics</option>
        <option value="category5">Music</option>
        <option value="category6">IT and Software</option>
        <option value="category7">Business</option>
        <option value="category8">Development</option>
        <option value="category9">Lifestyle</option>
        <option value="category10">Marketing</option>
        <option value="category11">Design</option>
        <option value="category12">Personal Development</option>
        <option value="category13">Office Productivity</option>
        <option value="category14">I dont't Know Yet</option>
      </select>
    </div>
  );
}
export default Selectcategory;
