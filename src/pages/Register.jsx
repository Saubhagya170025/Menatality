import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/firebase";  // Correct import for firebase

const RegisterPage = () => {
  const firebase = useFirebase();
  const navigate =useNavigate();
  console.log("Firebase Object: ", firebase);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> {
    if(firebase.isLoggedIn)
    {
        //navigate to Homepage
        navigate("/")
    }
},[firebase, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the default form submission behavior
    console.log("Signing up a user with email: ", email);

    try {
      const result = await firebase.signupUserWithEmailAndPassword(email, password);
      console.log("Signup successful!", result);
    } catch (error) {
      console.error("Error signing up the user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>  {/* Properly handle form submission */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Capture email input
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Capture password input
          />
        </Form.Group>

        <Button variant="primary" type="submit">  {/* Submit button */}
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
