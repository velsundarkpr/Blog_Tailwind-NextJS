'use client'
import React, { useState,useEffect } from "react";

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      fullName,
      email,
      city,
    };
    setSubmittedData([...submittedData, newData]);
    setFullName("");
    setEmail("");
    setCity("");
  };
  useEffect(() => {
    const storedData = localStorage.getItem("submittedData");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  return (
    <div id="Submit">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sundaravel's blog With tailwind and NextJs
          </h1>
          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Submitted Data:</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Full Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">City</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{data.fullName}</td>
                    <td className="border px-4 py-2">{data.email}</td>
                    <td className="border px-4 py-2">{data.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}