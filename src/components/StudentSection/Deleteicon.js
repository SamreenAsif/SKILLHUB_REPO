import React, { useState } from 'react';

function Deleteicon() {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    // Remove the input box from state
    // This will cause it to be removed from the DOM
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing && <button onClick={handleDelete}>🗑</button>}
      <input
        type="text"
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
      />
    </div>
  );
}

export default Deleteicon;
