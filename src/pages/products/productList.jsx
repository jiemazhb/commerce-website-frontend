import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  IconButton,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductList({ productList, onProductClick, onAddToCart }) {
  const theme = useTheme();

  return (
    <Box>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell sx={{ fontWeight: "bold", color: theme.palette.primary.contrastText }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: theme.palette.primary.contrastText }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: theme.palette.primary.contrastText }}>Price</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", color: theme.palette.primary.contrastText }}>Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((p, index) => (
              <TableRow
                key={p.id || index}
                onClick={() => onProductClick(p)}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                    transform: "scale(1.01)",
                  },
                }}
              >
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.description}</TableCell>
                <TableCell>${p.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Add to Cart">
                    <IconButton
                      color="primary"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart({ ...p, quantity: 1 });
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}