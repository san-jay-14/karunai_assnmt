import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">My Karunai</h1>
      <div className="w-80">
        <TextField
          placeholder="Search Institutions"
          fullWidth
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="text-gray-400" />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "10px",
              backgroundColor: "white",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Header;
