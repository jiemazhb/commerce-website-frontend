import React from "react";
import ProductCategory from "./ProductCategory";
import {
  Box,
  Typography,
  Slider,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";

export default function ProductFilterPanel({
  priceRange = [0, 1000],
  setPriceRange,
  selectedBrand,
  setSelectedBrand,
  inStockOnly,
  setInStockOnly,
  sortOption,
  setSortOption,
  availableBrands = [],
  onApplyFilters,
  onClearFilters,
}) {
  return (
    <Fade in={true} timeout={500}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={(theme) => ({
            p: 3,
            borderRadius: 4,
            minWidth: 260,
            minHeight: 550,
            boxShadow: theme.palette.mode === "dark" ? "0 4px 30px rgba(0,0,0,0.6)" : 4,
            background: theme.palette.mode === "dark"
              ? "linear-gradient(145deg, rgba(40,40,40,0.95), rgba(20,20,20,0.95))"
              : `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            border: theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.08)" : "1px solid #ddd",
            backdropFilter: theme.palette.mode === "dark" ? "blur(8px)" : "none",
          })}
          
      >
        <Typography variant="h6" fontWeight={700} mb={2}>
          🔍 Filter & Sort
        </Typography>
        <ProductCategory />
        <Typography gutterBottom>
          Price Range (${priceRange[0]} - ${priceRange[1]})
        </Typography>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          min={0}
          max={1000}
          step={10}
          valueLabelDisplay="auto"
          sx={{ color: "primary.main" }}
        />

        <Divider sx={{ my: 2 }} />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            label="Sort by"
          >
            <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
            <MenuItem value="ratingHighToLow">Rating: High to Low</MenuItem>
            <MenuItem value="nameAZ">Name: A to Z</MenuItem>
            <MenuItem value="nameZA">Name: Z to A</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              color="primary"
            />
          }
          label="In Stock Only"
        />

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Brand</InputLabel>
          <Select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            label="Brand"
          >
            <MenuItem value="">All</MenuItem>
            {availableBrands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Search keyword"
          variant="outlined"
          sx={{ mt: 2 }}
        />

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Minimum Rating</InputLabel>
          <Select label="Minimum Rating">
            <MenuItem value="">Any</MenuItem>
            <MenuItem value={4}>4 stars & up</MenuItem>
            <MenuItem value={3}>3 stars & up</MenuItem>
            <MenuItem value={2}>2 stars & up</MenuItem>
            <MenuItem value={1}>1 star & up</MenuItem>
          </Select>
        </FormControl>

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button variant="outlined" onClick={onClearFilters}>
            Clear
          </Button>
          <Button variant="contained" onClick={onApplyFilters}>
            Apply
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}