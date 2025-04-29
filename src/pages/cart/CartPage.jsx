// pages/cart/CartPage.jsx
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Button,
  Divider,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useCartActions} from '../../hooks'

export default function CartPage() {
  const navigate = useNavigate();
  const {totalPrice, increase, decrease, remove, totalItems, items} = useCartActions()

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        🛒 Your Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          Your cart is empty. Go explore something!
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} key={item.Id}>
                <Paper elevation={3} sx={{ p: 2, display: "flex", alignItems: "center", borderRadius: 2 }}>
                  <Avatar
                    variant="rounded"
                    src={item.imageUrl || "https://via.placeholder.com/100"}
                    sx={{ width: 100, height: 100, mr: 2 }}
                  />

                  <Box flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price.toFixed(2)}
                    </Typography>

                    <Box mt={1} display="flex" alignItems="center" gap={1}>
                      <IconButton
                        size="small"
                        onClick={() => decrease(item)}
                        sx={{ border: "1px solid #ccc", width: 32, height: 32 }}
                      >
                        –
                      </IconButton>

                      <Typography>{item.quantity}</Typography>

                      <IconButton
                        size="small"
                        onClick={() => increase(item)}
                        sx={{ border: "1px solid #ccc", width: 32, height: 32 }}
                      >
                        +
                      </IconButton>
                    </Box>
                  </Box>

                  <IconButton
                    onClick={() => remove(item)}
                    sx={{ color: "error.main" }}
                  >
                    ✕
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box textAlign="right">
            <Typography variant="h5" fontWeight={600} mb={2}>
             Total: ${totalPrice.toFixed(2)}
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={ handleCheckOut}>
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
