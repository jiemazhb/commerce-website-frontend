import React from "react";
import { FormControl, Select, MenuItem, Box } from "@mui/material";

export default function PaymentMethodSelector({ paymentMethod, setPaymentMethod }) {
  return (
    <Box sx={{ mb: 2 }}>
      <FormControl fullWidth variant="outlined">
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          displayEmpty
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: 1,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.disabled",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          }}
        >
          <MenuItem value="">
            <em>Select payment method</em>
          </MenuItem>
          <MenuItem value="PAYPAL">PAYPAL</MenuItem>
          <MenuItem value="CREDIT_CARD">CREDIT CARD</MenuItem>
          <MenuItem value="VISA">VISA</MenuItem>
          <MenuItem value="MASTER_CARD">MASTER CARD</MenuItem>
          <MenuItem value="BITCOIN">BITCOIN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
