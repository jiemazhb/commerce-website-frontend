import React from "react";
import { Box, Typography, Paper, Button, Divider, TextField, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: 5,
        minHeight: "100vh",
        background: theme.palette.mode === "dark"
          ? "linear-gradient(145deg, #1e1e1e, #121212)"
          : "linear-gradient(145deg, #f5f7fa, #e4ecf5)",
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={4}>
        💳 Checkout
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left: Order Summary */}
        <Paper
          elevation={4}
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={2}>
            🧾 Order Summary
          </Typography>

          <Box mb={2}>
            <Typography>Gaming Keyboard 1 x 2 — $259.98</Typography>
            <Typography>Ergonomic Keyboard x 1 — $109.99</Typography>
            <Typography>4K Monitor x 2 — $799.98</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography>Subtotal: $1169.95</Typography>
          <Typography>Tax (8.5%): $99.45</Typography>

          <Typography variant="h6" mt={2}>
            Total: <strong>$1269.40</strong>
          </Typography>
        </Paper>

        {/* Right: Payment Info */}
        <Paper
          elevation={4}
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={2}>
            💳 Payment Details
          </Typography>

          <TextField fullWidth label="Card Number" variant="outlined" margin="normal" />
          <TextField fullWidth label="Name on Card" variant="outlined" margin="normal" />
          <Box display="flex" gap={2}>
            <TextField label="Expiry" fullWidth />
            <TextField label="CVV" fullWidth />
          </Box>

          <TextField
            fullWidth
            label="Billing Address"
            variant="outlined"
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
          >
            Confirm Payment
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
