import React from "react";
import DonationCard from "./DonationCard";

function DonationGrid({ donations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 md:p-2">
      {donations.map((donation) => (
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </div>
  );
}

export default DonationGrid;
