import React from "react";
import { FormControl, Select, MenuItem, Box } from "@mui/material";
import useProductCategories from "../../hooks/useProductCategories";

export default function ProductCategory() {
  const { categories, selectedCategory, handleCategoryChange } = useProductCategories();

  return (
    <Box sx={{ mb: 3 }}>
      <FormControl fullWidth variant="outlined">
        <Select
          value={selectedCategory || ""}
          onChange={(e) => handleCategoryChange(e.target.value)}
          displayEmpty
          renderValue={(selected) => {
            if (!selected) return "All Categories";
            return (
              categories.find((cat) => cat.id === selected)?.name || "Select a category"
            );
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
