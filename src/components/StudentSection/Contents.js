/*import React, { useState } from "react";
import "./Contents.css";

const Contents = () => {
  const [isChecked, setIsChecked] = useState([false]);
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const handleCheckboxClick = (values, res) => {
    isChecked=res
    return{...values, res};
  };

  const tableData = [
    {
      heading: "Section 1:",
      content: "Welcome ! Course Introduction",
      subtopics : [
        {
           lecture1 :"What Does the Course Cover?",
           lecture2 :"Everything We Will Learn Has a Practical Application",
           lecture3 :"The Best way to Take This Course",
           lecture4 :"Download All Course Materials and FAQ",
        }
      ]
    },
    {
      heading: "Section 2:",
      content: "Microsoft Excel -Quick Introduction",
      subtopics : [
        {
           lecture1 :"Microsoft Excel: The World's Office Software",
           lecture2 :"A Beginner's Guide to Excel Spreadsheets",
           lecture3 :"Data Entry Techniques in Excel",
           lecture4 :"How to Make Your Spreadsheets Look Professional",
        }
      ]
    },
    {
      heading: "Section 3:",
      content: "Microsoft Excel - Useful Tools",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
      heading: "Section 4:",
      content: "Microsoft Excel - Best Practice That Will Make a Difference ",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
      heading: "Section 5:",
      content: "Microsoft Excel - Beginner , Intermediate & Advanced Fun",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
      heading: "Section 6:",
      content: "Microsoft Excel - Financial Functions in Excel",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
        heading: "Section 2:",
        content: "Microsoft Excel -Quick Introduction",
        subtopics : [
          {
             lecture1 :"Microsoft Excel: The World's Office Software",
             lecture2 :"A Beginner's Guide to Excel Spreadsheets",
             lecture3 :"Data Entry Techniques in Excel",
             lecture4 :"How to Make Your Spreadsheets Look Professional",
          }
        ]
      },
     
  ];

  return (
    <table className="contentstable  smalltable">
  <tbody>
    {tableData.map((data, index) => (
      <tr className ="subheadings" key={index}>
        <td className="contentheading ">{data.heading}{data.content}</td>
        <tr >
          {data.subtopics.map((subtopic, index) => (
            <div >
              <ul>
                        <input
                type="checkbox"
                checked={isChecked[index]}
                onChange={(e) =>
                  setIsChecked((prevState) => {
                    const newState = [...prevState];
                    newState[index] = e.target.checked;
                    return newState;
                  })
                }/><a href="#"><li>{subtopic.lecture1}</li></a> 
             <br></br>
             <br></br>
              <input
      type="checkbox"
      checked={isChecked[index]}
      onChange={(e) =>
        setIsChecked((prevState) => {
          const newState = [...prevState];
          newState[index] = e.target.checked;
          return newState;
        })
      }/><a href="#"><li>{subtopic.lecture2}</li></a> 
              <br></br>
              <br></br>
              <input
      type="checkbox"
      checked={isChecked[index]}
      onChange={(e) =>
        setIsChecked((prevState) => {
          const newState = [...prevState];
          newState[index] = e.target.checked;
          return newState;
        })
      }/><a href=""><li>{subtopic.lecture3}</li></a> 
              <br></br>
              <br></br>
              <input
      type="checkbox"
      checked={isChecked[index]}
      onChange={(e) =>
        setIsChecked((prevState) => {
          const newState = [...prevState];
          newState[index] = e.target.checked;
          return newState;
        })
       } /><a href=""> <li>{subtopic.lecture4}</li></a> 
              <br></br>
              <br></br>
              </ul>
            </div>
          ))}
        </tr>
        <br></br>
        <hr></hr> 
      </tr>
    ))}
  </tbody>
</table>

  
  );
};

export default Contents;*/

/*import React, { useState } from "react";
import "./Contents.css";

const Contents = () => {
  const [isChecked, setIsChecked] = useState([false]);
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const handleCheckboxClick = (values, res) => {
    isChecked=res
    return{...values, res};
  };

  const tableData = [
    {
      heading: "Section 1:",
      content: "Welcome ! Course Introduction",
      subtopics : [
        {
           lecture1 :"What Does the Course Cover?",
           lecture2 :"Everything We Will Learn Has a Practical Application",
           lecture3 :"The Best way to Take This Course",
           lecture4 :"Download All Course Materials and FAQ",
        }
      ]
    },
    {
      heading: "Section 2:",
      content: "Microsoft Excel -Quick Introduction",
      subtopics : [
        {
           lecture1 :"Microsoft Excel: The World's Office Software",
           lecture2 :"A Beginner's Guide to Excel Spreadsheets",
           lecture3 :"Data Entry Techniques in Excel",
           lecture4 :"How to Make Your Spreadsheets Look Professional",
        }
      ]
    },
    {
      heading: "Section 3:",
      content: "Microsoft Excel - Useful Tools",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
      heading: "Section 4:",
      content: "Microsoft Excel - Best Practice That Will Make a Difference ",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
      heading: "Section 5:",
      content: "Microsoft Excel - Beginner , Intermediate & Advanced Fun",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
      heading: "Section 6:",
      content: "Microsoft Excel - Financial Functions in Excel",
      subtopics : [
        {
           lecture1 :"Quiz 1 : Data Entry Techniques in Excel",
           lecture2 :"Inserting , Deleting and Modifying Rows and Columns ",
           lecture3 :"Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
           lecture4 :"Excel Formulas for Beginners",
        }
      ]
    },
    {
        heading: "Section 2:",
        content: "Microsoft Excel -Quick Introduction",
        subtopics : [
          {
             lecture1 :"Microsoft Excel: The World's Office Software",
             lecture2 :"A Beginner's Guide to Excel Spreadsheets",
             lecture3 :"Data Entry Techniques in Excel",
             lecture4 :"How to Make Your Spreadsheets Look Professional",
          }
        ]
      },
  ];

  return (
    <table className="contentstable">
      <tbody>
        {tableData.map((data, index) => (
          <tr className="subheadings" key={index}>
            <td className="contentheading">{data.heading}{data.content}</td>
            <tr>
              {data.subtopics.map((subtopic, index) => (
                <div key={index}>
                  <ul>
                    <input
                      type="checkbox"
                      checked={isChecked[index]}
                      onChange={(e) =>
                        setIsChecked((prevState) => {
                          const newState = [...prevState];
                          newState[index] = e.target.checked;
                          return newState;
                        })
                      }
                    />
                    <a href="#">
                      <li>{subtopic.lecture1}</li>
                    </a>
                    <br />
                    <br />
                    <input
                      type="checkbox"
                      checked={isChecked[index]}
                      onChange={(e) =>
                        setIsChecked((prevState) => {
                          const newState = [...prevState];
                          newState[index] = e.target.checked;
                          return newState;
                        })
                      }
                    />
                    <a href="#">
                      <li>{subtopic.lecture2}</li>
                    </a>
                    <br />
                    <br />
                    <input
                      type="checkbox"
                      checked={isChecked[index]}
                      onChange={(e) =>
                        setIsChecked((prevState) => {
                          const newState = [...prevState];
                          newState[index] = e.target.checked;
                          return newState;
                        })
                      }
                    />
                    <a href="#">
                      <li>{subtopic.lecture3}</li>
                    </a>
                    <br />
                    <br />
                    <input
                      type="checkbox"
                      checked={isChecked[index]}
                      onChange={(e) =>
                        setIsChecked((prevState) => {
                          const newState = [...prevState];
                          newState[index] = e.target.checked;
                          return newState;
                        })
                      }
                    />
                    <a href="#">
                      <li>{subtopic.lecture4}</li>
                    </a>
                    <br />
                    <br />
                  </ul>
                </div>
              ))}
            </tr>
            <br />
            <hr />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contents;*/

import React, { useState } from "react";
import "./Contents.css";

const Contents = () => {
  const [isChecked, setIsChecked] = useState([false]);
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const tableData = [
    {
      heading: "Section 1:",
      content: "Welcome ! Course Introduction",
      subtopics: [
        {
          lecture1: "What Does the Course Cover?",
          lecture2: "Everything We Will Learn Has a Practical Application",
          lecture3: "The Best way to Take This Course",
          lecture4: "Download All Course Materials and FAQ",
        },
      ],
    },
    {
      heading: "Section 2:",
      content: "Microsoft Excel -Quick Introduction",
      subtopics: [
        {
          lecture1: "Microsoft Excel: The World's Office Software",
          lecture2: "A Beginner's Guide to Excel Spreadsheets",
          lecture3: "Data Entry Techniques in Excel",
          lecture4: "How to Make Your Spreadsheets Look Professional",
        },
      ],
    },
    {
      heading: "Section 3:",
      content: "Microsoft Excel - Useful Tools",
      subtopics: [
        {
          lecture1: "Quiz 1 : Data Entry Techniques in Excel",
          lecture2: "Inserting , Deleting and Modifying Rows and Columns ",
          lecture3:
            "Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
          lecture4: "Excel Formulas for Beginners",
        },
      ],
    },
    {
      heading: "Section 4:",
      content: "Microsoft Excel - Best Practice That Will Make a Difference ",
      subtopics: [
        {
          lecture1: "Quiz 1 : Data Entry Techniques in Excel",
          lecture2: "Inserting , Deleting and Modifying Rows and Columns ",
          lecture3:
            "Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
          lecture4: "Excel Formulas for Beginners",
        },
      ],
    },
    {
      heading: "Section 5:",
      content: "Microsoft Excel - Beginner , Intermediate & Advanced Fun",
      subtopics: [
        {
          lecture1: "Quiz 1 : Data Entry Techniques in Excel",
          lecture2: "Inserting , Deleting and Modifying Rows and Columns ",
          lecture3:
            "Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
          lecture4: "Excel Formulas for Beginners",
        },
      ],
    },
    {
      heading: "Section 6:",
      content: "Microsoft Excel - Financial Functions in Excel",
      subtopics: [
        {
          lecture1: "Quiz 1 : Data Entry Techniques in Excel",
          lecture2: "Inserting , Deleting and Modifying Rows and Columns ",
          lecture3:
            "Quiz 2 :Inserting , Deleting and Modifying Rows and Columns ",
          lecture4: "Excel Formulas for Beginners",
        },
      ],
    },
    {
      heading: "Section 2:",
      content: "Microsoft Excel -Quick Introduction",
      subtopics: [
        {
          lecture1: "Microsoft Excel: The World's Office Software",
          lecture2: "A Beginner's Guide to Excel Spreadsheets",
          lecture3: "Data Entry Techniques in Excel",
          lecture4: "How to Make Your Spreadsheets Look Professional",
        },
      ],
    },
  ];

  return (
    <div className="en-content-container">
      <div className="table-responsive">
        <table className="table table-light table-hover" id="t1">
          <tbody>
            {tableData.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <tr class="table-row" onClick={() => handleDropdown(index)}>
                    <td
                      class="table-row"
                      style={{ textAlign: "left", position: "relative" }}
                    >
                      <h4 id="contents-h4">
                        {val.heading} {val.content}
                      </h4>
                      <select
                        className="courses"
                        id="courses"
                        style={{ position: "absolute", right: "0" }}
                      ></select>
                    </td>
                  </tr>
                  {dropdown === index && (
                    <tr>
                      <td>
                        <div>
                          <div>
                            <div>
                              <table>
                                <tbody>
                                  {val.subtopics.map((values, index) => {
                                    return (
                                      <>
                                        <tr>
                                          <td>
                                            <h5 id="contents-h5">
                                              {" "}
                                              <input
                                                type="checkbox"
                                                checked={this}
                                                onClick={handleCheckboxClick}
                                              />
                                              {values.lecture1}
                                            </h5>
                                          </td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                          <td>
                                            <h5 id="contents-h5">
                                              <input
                                                type="checkbox"
                                                checked={this}
                                                onClick={handleCheckboxClick}
                                              />
                                              {values.lecture2}
                                            </h5>
                                          </td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                          <td>
                                            <h5 id="contents-h5">
                                              <input
                                                type="checkbox"
                                                checked={this}
                                                onClick={handleCheckboxClick}
                                              />
                                              {values.lecture3}{" "}
                                            </h5>
                                          </td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                          <td>
                                            <h5 id="contents-h5">
                                              <input
                                                type="checkbox"
                                                checked={this}
                                                onClick={handleCheckboxClick}
                                              />
                                              {values.lecture4}
                                            </h5>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ); 
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contents;
