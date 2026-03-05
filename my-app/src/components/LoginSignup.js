import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    address: "",
    dob: "",
    role: "customer",
    age: "",
    vehicleNumber: "",
    licenseNumber: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (isRegister) {
      if (!formData.name.trim()) tempErrors.name = "Name is required";
      if (!formData.contact.trim()) tempErrors.contact = "Contact is required";
      else if (!/^\d{10}$/.test(formData.contact)) tempErrors.contact = "Contact number must be 10 digits";
      if (!formData.gender) tempErrors.gender = "Gender is required";
      if (!formData.dob) tempErrors.dob = "Date of Birth is required";
      if (!formData.address.trim()) tempErrors.address = "Address is required";

      if (formData.role === "delivery") {
        if (!formData.age) tempErrors.age = "Age is required";
        else if (formData.age < 18) tempErrors.age = "Must be 18 or older";
        if (!formData.vehicleNumber.trim()) tempErrors.vehicleNumber = "Vehicle Number is required";
        if (!formData.licenseNumber.trim()) tempErrors.licenseNumber = "License Number is required";
      }
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (isRegister && formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const url = isRegister
      ? "http://127.0.0.1:8000/api/register/"
      : "http://127.0.0.1:8000/api/login/";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) {
          // It's an HTTP error (e.g., 400 or 500)
          return res.json().then(err => { throw new Error(err.message || "Something went wrong") });
        }
        return res.json();
      })
      .then(data => {
        alert(data.message);

        if (data.message === "Login Successful" || data.message === "Registration Successful") {
          // If login, take role from API response. If register, take role from formData.
          const userRole = data.role || formData.role;
          const userName = data.name || formData.name;

          console.log("User role:", userRole);

          // Save role and name in localStorage for protected routes
          localStorage.setItem("role", userRole);
          localStorage.setItem("name", userName);

          // role-based redirect using useNavigate
          if (userRole === "seller") {
            navigate("/Seller");
            onClose(); // close the popup if applicable
          } else if (userRole === "delivery") {
            navigate("/delivery");
            onClose();
          } else {
            navigate("/products");
            onClose();
          }
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        alert("Error: " + error.message);
      });
  };

  const errorStyle = { color: "red", fontSize: "12px", textAlign: "left", marginTop: "-10px", marginBottom: "10px", width: "100%", display: "block" };

  return (
    <div className="popup-overlay">
      <div className="login-box">

        <div className="login-header">
          <h2>{isRegister ? "Register" : "Login"}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div className="login-body">

          {isRegister && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
              {errors.name && <span style={errorStyle}>{errors.name}</span>}

              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                onChange={handleChange}
              />
              {errors.contact && <span style={errorStyle}>{errors.contact}</span>}

              <select name="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span style={errorStyle}>{errors.gender}</span>}

              <input
                type="date"
                name="dob"
                onChange={handleChange}
              />
              {errors.dob && <span style={errorStyle}>{errors.dob}</span>}

              <textarea
                name="address"
                placeholder="Address"
                onChange={handleChange}
                rows="3"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />
              {errors.address && <span style={errorStyle}>{errors.address}</span>}

              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="delivery">Delivery Person</option>
              </select>

              {formData.role === "delivery" && (
                <>
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  {errors.age && <span style={errorStyle}>{errors.age}</span>}

                  <input
                    type="text"
                    name="vehicleNumber"
                    placeholder="Vehicle Number"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                  />
                  {errors.vehicleNumber && <span style={errorStyle}>{errors.vehicleNumber}</span>}

                  <input
                    type="text"
                    name="licenseNumber"
                    placeholder="License Number"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                  />
                  {errors.licenseNumber && <span style={errorStyle}>{errors.licenseNumber}</span>}
                </>
              )}
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <span style={errorStyle}>{errors.password}</span>}

          <button onClick={handleSubmit}>
            {isRegister ? "Register" : "Login"}
          </button>

          <p>
            {isRegister ? (
              <>Already have an account? <span onClick={() => { setIsRegister(false); setErrors({}); }}>Login</span></>
            ) : (
              <>New user? <span onClick={() => { setIsRegister(true); setErrors({}); }}>Register</span></>
            )}
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


// import axios from "axios";
// import { useState } from "react";

// // 🔥 IMPORTANT: allow cookies (session)
// axios.defaults.withCredentials = true;

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/login/",
//         {
//           email: email,
//           password: password,
//         },
//         { withCredentials: true }
//       );

//       console.log("Login response:", response.data);
//       alert("Login successful");
//     } catch (error) {
//       console.error(error);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginSignup;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./LoginSignup.css";

// const LoginSignup = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [isRegister, setIsRegister] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact: "",
//     gender: "",
//     address: "",
//     dob: "",
//     role: "customer"
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       if (isRegister) {
//         // 🔹 REGISTER API
//         const response = await axios.post(
//           "http://127.0.0.1:8000/api/register/",
//           formData
//         );

//         alert(response.data.message);
//         setIsRegister(false); // switch to login after register
//       } else {
//         // 🔹 LOGIN API
//         const response = await axios.post(
//           "http://127.0.0.1:8000/api/login/",
//           {
//             email: formData.email,
//             password: formData.password
//           }
//         );

//         const role = response.data.role;

//         alert(response.data.message);

//         // ✅ Store role
//         localStorage.setItem("role", role);
//         localStorage.setItem("name", response.data.name);

//         // ✅ Role Based Redirect
//         if (role === "seller") {
//           navigate("/seller");
//         } else if (role === "delivery") {
//           navigate("/products");
//         } else {
//           navigate("/products");
//         }
//       }
//     } catch (error) {
//       alert("Something went wrong");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="product-grid">
//       <div className="popup-overlay">
//         <div className="login-box">

//           <div className="login-header">
//             <h2>{isRegister ? "Register" : "Login"}</h2>
//             <button className="close-btn" onClick={onClose}>✖</button>
//           </div>

//           <div className="login-body">

//             {isRegister && (
//               <>
//                 <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
//                 <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} />

//                 <select name="gender" onChange={handleChange}>
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>

//                 <input type="date" name="dob" onChange={handleChange} />

//                 <textarea
//                   name="address"
//                   placeholder="Address"
//                   onChange={handleChange}
//                   rows="3"
//                 />

//                 <select name="role" onChange={handleChange}>
//                   <option value="customer">Customer</option>
//                   <option value="seller">Seller</option>
//                   <option value="delivery">Delivery Person</option>
//                 </select>
//               </>
//             )}

//             <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} />

//             <button onClick={handleSubmit}>
//               {isRegister ? "Register" : "Login"}
//             </button>

//             <p>
//               {isRegister ? (
//                 <>Already have an account? <span onClick={() => setIsRegister(false)}>Login</span></>
//               ) : (
//                 <>New user? <span onClick={() => setIsRegister(true)}>Register</span></>
//               )}
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;