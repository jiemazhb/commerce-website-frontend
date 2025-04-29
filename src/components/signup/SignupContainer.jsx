import React, { useState } from "react";
import SignupForm from "./SignupForm";
import { registerUser } from "../../services";

export default function SignupContainer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Sign up successfully");
      window.location.href = "/";
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
    }
  };

  return <SignupForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
}
