import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function FilterBar() {
  return (
    <div className="flex flex-wrap gap-8 items-center mb-6">
      <div className="flex items-center">
        <span className="mr-2 text-gray-700 font-bold">Start Date:</span>
        <TextField
          placeholder="dd/mm/yyyy"
          size="small"
          InputProps={{
            endAdornment: (
              <CalendarTodayIcon className="text-gray-400 text-sm" />
            ),
            sx: { width: "140px" },
          }}
        />
      </div>

      <div className="flex items-center">
        <span className="mr-2 text-gray-700 font-bold">End Date:</span>
        <TextField
          placeholder="dd/mm/yyyy"
          size="small"
          InputProps={{
            endAdornment: (
              <CalendarTodayIcon className="text-gray-400 text-sm" />
            ),
            sx: { width: "140px" },
          }}
        />
      </div>

      <div className="flex items-center">
        <span className="mr-2 text-gray-700 font-bold">Status:</span>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select value="pending" displayEmpty className="bg-gray-200 rounded">
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button
        variant="contained"
        className="ml-auto"
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
  );
}

export default FilterBar;
