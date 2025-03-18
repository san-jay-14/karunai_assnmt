import React from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import DonationGrid from "./components/DonationGrid";

function App() {
  // Sample data for demonstration
  const donations = [
    {
      id: 1,
      institute_name: "Institute 1",
      slotDate: "12/09/2024",
      bookedDate: "12/09/2024",
      status: "Pending",
      mode: "Online",
      startTime: "09:00 am",
      endTime: "10:00 am",
    },
    {
      id: 2,
      institute_name: "Institute 2",
      slotDate: "12/09/2024",
      bookedDate: "12/09/2024",
      status: "Pending",
      mode: "Online",
      startTime: "09:00 am",
      endTime: "10:00 am",
    },
    {
      id: 3,
      institute_name: "Institute 3",
      slotDate: "12/09/2024",
      bookedDate: "12/09/2024",
      status: "Pending",
      mode: "Online",
      startTime: "09:00 am",
      endTime: "10:00 am",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <Header />
        <FilterBar />
        <DonationGrid donations={donations} />
      </div>
    </div>
  );
}

export default App;
