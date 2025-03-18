import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function FilterBar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState("pending");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setStatus("pending");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div className="flex items-center">
          <span className="mr-2 text-gray-700">Start Date:</span>
          <DatePicker
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                size: "small",
                placeholder: "dd/mm/yyyy",
                sx: { width: "140px" },
              },
            }}
          />
        </div>

        <div className="flex items-center">
          <span className="mr-2 text-gray-700">End Date:</span>
          <DatePicker
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                size: "small",
                placeholder: "dd/mm/yyyy",
                sx: { width: "140px" },
              },
            }}
          />
        </div>

        <div className="flex items-center">
          <span className="mr-2 text-gray-700">Status:</span>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={status}
              onChange={handleStatusChange}
              displayEmpty
              className="bg-gray-200 rounded"
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          variant="contained"
          className="ml-auto"
          onClick={handleClearFilters}
          sx={{
            backgroundColor: "#ff3366",
            "&:hover": { backgroundColor: "#e61e4d" },
            borderRadius: "4px",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          Clear Filters
        </Button>
      </div>
    </LocalizationProvider>
  );
}

export default FilterBar;
