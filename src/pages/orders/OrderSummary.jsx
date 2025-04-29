import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function OrderSummary({
  reference = "",
  tax = 0,
  subTotal = 0,
  total = 0,
  orderCount = 0,
}) {
  return (
    <Box sx={{ mt: 5, p: 2, bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Summary
      </Typography>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography color="text.primary" fontWeight="bold">
            Reference :
          </Typography>
          <Typography color="error.main" fontWeight="bold">
            {reference}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography color="text.primary" fontWeight="bold">
            Total Orders:
          </Typography>
          <Typography color="error.main" fontWeight="bold">
            {orderCount}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography color="text.primary" fontWeight="bold">
            Tax :
          </Typography>
          <Typography color="text.secondary" fontWeight="bold">
            {tax.toFixed(2)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography color="text.primary" fontWeight="bold">
            Subtotal :
          </Typography>
          <Typography color="text.secondary" fontWeight="bold">
            {subTotal.toFixed(2)}
          </Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "divider" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Total :</Typography>
          <Typography variant="h5">{total.toFixed(2)}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
