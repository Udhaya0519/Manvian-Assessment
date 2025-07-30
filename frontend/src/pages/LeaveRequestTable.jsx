function LeaveRequestsTable({prevRequests}) {
   return (
      <>
         {prevRequests && (
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-gray-800 max-w-3xl mx-auto mt-8 mb-20">
               <table className="table">
                  <thead>
                     <tr>
                        <th></th>
                        <th className="text-gray-300">Name</th>
                        <th className="text-gray-300">From - To Date</th>
                        <th className="text-gray-300">Reason</th>
                        <th className="text-gray-300">Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {prevRequests &&
                        prevRequests.map((r, index) => (
                           <tr key={index}>
                              <th>{index + 1}</th>
                              <td className="whitespace-nowrap">{r.name}</td>
                              <td className="whitespace-nowrap">{r.fromDate + " - " + r.toDate}</td>
                              <td>{r.reason}</td>
                              <td className="text-green-400">{r.status}</td>
                           </tr>
                        ))}
                  </tbody>
               </table>
            </div>
         )}
      </>
   );
}

export default LeaveRequestsTable;
