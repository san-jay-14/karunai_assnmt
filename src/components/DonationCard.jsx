import React from "react";
import { Button } from "@mui/material";

function DonationCard({ donation }) {
  return (
    <div className="border border-blue-500 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Card Image */}
      <div className="h-50 relative overflow-hidden m-4">
        <img
          src="https://highlandpost.com/wp-content/uploads/2024/03/DSC_1204.jpeg"
          alt="Donation items"
          className="w-full h-full object-cover rounded-l-xl rounded-r-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2">
          <h3 className="text-gray-800 font-medium">Institute Name</h3>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-x-4">
          {/* Slot Date */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs">Slot Date</p>
            <div className="h-px bg-gray-200 w-full my-1"></div>
            <p className="font-medium text-sm">{donation.slotDate}</p>
          </div>

          {/* Booked Date */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs text-right">Booked Date</p>
            <div className="h-px bg-gray-200 w-full my-1"></div>
            <p className="font-medium text-sm text-right">
              {donation.bookedDate}
            </p>
          </div>

          {/* Status */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs">Status</p>
            <div className="h-px bg-gray-200 w-full my-1"></div>
            <p className="font-medium text-sm">{donation.status}</p>
          </div>

          {/* Mode */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs text-right">Mode</p>
            <div className="h-px bg-gray-200 w-full my-1"></div>
            <p className="font-medium text-sm text-right">{donation.mode}</p>
          </div>

          {/* Start Time */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs">Start Time</p>
            <div className="h-px bg-gray-200 w-full my-1"></div>
            <p className="font-medium text-sm">{donation.startTime}</p>
          </div>

          {/* End Time */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs text-right">End Time</p>
            <div className="h-px bg-gray-200 w-full my-1"></div>
            <p className="font-medium text-sm text-right">{donation.endTime}</p>
          </div>
        </div>

        {/* Donation Items Section - Centered and stacked */}
        <div className="mt-2 flex flex-col items-center">
          <p className="text-gray-500 text-xs mb-1">Donation Items</p>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#90caf9",
              color: "#2196f3",
              textTransform: "none",
              fontSize: "0.75rem",
              padding: "1px 12px",
              minWidth: "50px",
              borderRadius: "16px",
              height: "22px",
            }}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
