import { useState } from "react";

function RegisterPage() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      department: "",
   });

   const handleFormSubmit = (e) => {
      e.preventDefault();

      const users = JSON.parse(localStorage.getItem("users"));

      const userExists = users && users.find((u) => u.email === formData.email);

      if (userExists) {
         return alert("User Already Exist");
      }

      if (users) {
         localStorage.setItem("users", JSON.stringify([...users, formData]));
      }else{
         localStorage.setItem("users", JSON.stringify([formData]));
      }

      alert("User registered successfully");

      setFormData({
         name: "",
         email: "",
         password: "",
         department: "",
      });

      return;
   };
   return (
      <>
         <h1 className="text-5xl font-bold text-center mt-10">Register</h1>
         <div className="form-container max-w-md mx-auto mt-15 p-4">
            <form className="space-y-2" onSubmit={handleFormSubmit}>
               <input
                  type="text"
                  placeholder="Enter your name"
                  className="input validator w-full"
                  required
                  minLength="3"
                  maxLength="30"
                  onChange={(e) =>
                     setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
               />
               <input
                  className="input validator w-full"
                  type="email"
                  required
                  placeholder="mail@site.com"
                  onChange={(e) =>
                     setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
               />
               <input
                  type="password"
                  className="input validator w-full"
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  onChange={(e) =>
                     setFormData({ ...formData, password: e.target.value })
                  }
                  value={formData.password}
               />
               <select
                  className="select w-full mt-2"
                  required
                  onChange={(e) =>
                     setFormData({ ...formData, department: e.target.value })
                  }
                  value={formData.department}
               >
                  <option value={""} disabled hidden>
                     Department
                  </option>
                  <option>Developer</option>
                  <option>Designing</option>
                  <option>Sales & Marketing</option>
                  <option>HR</option>
               </select>
               <button type="submit" className="btn btn-primary btn-block mt-5">
                  Submit
               </button>
            </form>
         </div>
      </>
   );
}

export default RegisterPage;
