import { ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../configuration/firebase";
import { RiseLoader } from "react-spinners";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ShowData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userRef = ref(database, "users");

    const unsubscribe = onValue(userRef, (sn) => {
      const data = sn.val();

      if (data) {
        const userArray = Object.entries(data).map(([id, user]) => ({
          id,
          ...user,
        }));

        setUsers(userArray);
      } else {
        setUsers([]);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 mx-auto max-w-7xl">
      <div className="">
       <div className="text-black font-bold text-2xl mb-5 bg-indigo-600 w-10 h-10 flex justify-center items-center-safe text-center rounded-full cursor-pointer active:scale-95" onClick={handleClick}><IoChevronBackOutline color="white" /></div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              User Data
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and view all registered users
            </p>
          </div>

          <div className="rounded-xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            Total Users:  {users.length == 0 ?<span className="loading loading-ball loading-md"></span>: <span className="mx-2">{users.length}</span>}
          </div>
        </div>

        
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
         
          <div className="border-b border-gray-200 px-5 py-4">
            <h2 className="font-semibold text-gray-800">Registered Users</h2>
          </div>

          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-600 text-white ">
                  <th className="px-10 py-4 text-left font-semibold">Name</th>

                  <th className="px-6 py-4 text-left font-semibold">
                    Password
                  </th>

                  <th className="px-6 py-4 text-left font-semibold">Phone</th>

                  <th className="px-6 py-4 font-semibold">Age</th>

                  <th className="px-6 py-4 text-left font-semibold">Gender</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-0">
                      <div className="flex h-60 items-center justify-center">
                        <RiseLoader color="#4F39F6" size={6}/>
                      </div>
                    </td>
                  </tr>
                ) : users.length > 0 ? (
                  /* Users */
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="odd:bg-indigo-50 even:bg-white hover:bg-indigo-200 transition-colors duration-200"
                    >
                      <td className="px-10 py-4 font-medium text-left capitalize text-gray-800">
                        {user.username}
                      </td>

                      <td className="px-6 py-4 text-left text-gray-500">
                        {user.password}
                      </td>

                      <td className="px-6 py-4 text-left text-gray-600">{user.phone}</td>

                      <td className="px-6 py-4 text-center">
                        <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600">
                          {user.age}
                        </span>
                      </td>

                      <td className="px-6 py-4 capitalize text-left text-gray-600">
                        {user.gender}
                      </td>
                    </tr>
                  ))
                ) : (
                  /* No Data */
                  <tr>
                    <td colSpan={5}>
                      <div className="flex h-64 flex-col items-center justify-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                          <span className="text-2xl">📭</span>
                        </div>

                        <h3 className="font-semibold text-gray-700">
                          No Data Found
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                          There are no registered users yet.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
