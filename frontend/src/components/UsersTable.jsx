import { useEffect, useState } from "react";

function UsersTable() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      setUsers(JSON.parse(localStorage.getItem("users")));
   }, []);

   return (
      <>
         {users ? (
               <div className="overflow-x-auto rounded-box border border-base-content/5 bg-gray-800 max-w-xl mx-auto mt-17">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th></th>
                        <th className="text-gray-300">Name</th>
                        <th className="text-gray-300">Department</th>
                        <th className="text-gray-300">Email ID</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users &&
                        users.map((u, index) => (
                           <tr key={index}>
                              <th>{index + 1}</th>
                              <td>{u.name}</td>
                              <td>{u.department}</td>
                              <td>{u.email}</td>
                           </tr>
                        ))}
                  </tbody>
               </table>
               </div>
            ) : (
               <h2 className="mt-20 text-gray-600 text-center text-3xl font-bold">
                  No Registrations..
               </h2>
            )}
      </>
   );
}

export default UsersTable;
