import { useEffect, useState } from "react";
import LeaveRequestsTable from "./LeaveRequestTable";

function ApplyLeavePage() {

   const [prevRequests, setPrevRequests] = useState([])

   const [formData, setFormData] = useState({
      name: "",
      fromDate: "",
      toDate: "",
      reason: "",
      status: "pending",
   });

   const [checkSubmitted, setCheckSubmitted] = useState(0);

   const handleFormSubmit = (e) => {
      e.preventDefault();

      if (formData.fromDate > formData.toDate) {
         return alert("From date should be lesser than to date");
      }

      const leaveRequests = JSON.parse(localStorage.getItem("leaveRequests"));

      if (leaveRequests) {
         localStorage.setItem(
            "leaveRequests",
            JSON.stringify([...leaveRequests, formData])
         );
      } else {
         localStorage.setItem("leaveRequests", JSON.stringify([formData]));
      }

      setFormData({
         name: "",
         fromDate: "",
         toDate: "",
         reason: "",
         status: "pending",
      });

      alert("Applied for leave")

      setCheckSubmitted(prev => prev + 1);

      return;
   };

   useEffect(() => {
      setPrevRequests(JSON.parse(localStorage.getItem("leaveRequests")))
   }, [checkSubmitted])

   return (
      <div className="px-5">
         <h1 className="text-4xl md:text-5xl font-bold text-center my-10">
            Apply for Leave
         </h1>
         <form
            onSubmit={handleFormSubmit}
            className="space-y-3 max-w-md mx-auto px-5 pt-5"
         >
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

            <label className="input w-full">
               <span className="label">From:</span>
               <input
                  type="date"
                  required
                  placeholder="From Date"
                  min="2025-01-01"
                  max="2025-12-31"
                  title="Must be valid URL"
                  onChange={(e) =>
                     setFormData({ ...formData, fromDate: e.target.value })
                  }
                  value={formData.fromDate}
               />
            </label>

            <label className="input w-full">
               <span className="label">To:</span>
               <input
                  type="date"
                  required
                  placeholder="To Date"
                  min="2025-01-01"
                  max="2025-12-31"
                  title="Must be valid URL"
                  onChange={(e) =>
                     setFormData({ ...formData, toDate: e.target.value })
                  }
                  value={formData.toDate}
               />
            </label>

            <textarea
               className="input validator textarea w-full"
               placeholder="Reason for leave"
               minLength="3"
               maxLength="300"
               required
               onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
               }
               value={formData.reason}
            ></textarea>
            <button type="submit" className="btn btn-primary btn-block mt-5">
               Submit
            </button>
         </form>

         <h2 className="mt-20 text-xl text-center">Previous leave requests ({prevRequests ? prevRequests.length : 0})</h2>
         <LeaveRequestsTable prevRequests={prevRequests}/>
      </div>
   );
}

export default ApplyLeavePage;
