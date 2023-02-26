import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    direction: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Direction:
        <select name="direction" value={formData.direction} onChange={handleInputChange}>
          <option value="">Select a direction</option>
          <option value="sagital">Sagital</option>
          <option value="axial">Axial</option>
          <option value="coronal">Coronal</option>
        </select>
      </label>
    </form>
  );
}

export default MyForm;