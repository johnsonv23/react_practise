import { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    skills: [],
    course: "",
    address: ""
  });

  /* Handle text, radio, select, textarea */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /*  Handle checkbox */
  const handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(skill => skill !== value)
      });
    }
  };

  /*  Form submit */
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    console.log("Form Submitted Data:");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <br /><br />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <br /><br />

      {/* Gender */}
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
      </label>
      <br /><br />

      {/* Skills */}
      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleSkills}
        /> React
      </label>

      <label>
        <input
          type="checkbox"
          value="Java"
          onChange={handleSkills}
        /> Java
      </label>

      <label>
        <input
          type="checkbox"
          value="Node"
          onChange={handleSkills}
        /> Node
      </label>
      <br /><br />

      {/* Dropdown */}
      <select name="course" onChange={handleChange}>
        <option value="">Select Course</option>
        <option value="B.Tech">B.Tech</option>
        <option value="MCA">MCA</option>
        <option value="MBA">MBA</option>
      </select>
      <br /><br />

      {/* Address */}
      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;