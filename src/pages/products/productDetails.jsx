import { Box, Typography, Button, TextField, Rating, Paper } from "@mui/material";

export default function ProductDetail({ product, onBack, OnAddToCart, quantity, setQuantity }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        m: 3,
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      {/* 返回按钮 */}
      <Box mb={2}>
        <Button variant="text" onClick={onBack}>
          ← Back to Products
        </Button>
      </Box>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* 图片 */}
        <Box flex={1}>
          <img
            src="https://via.placeholder.com/500"
            alt="Product"
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </Box>

        {/* 信息 */}
        <Box flex={1}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            {product.name}
          </Typography>

          <Rating value={4} readOnly />

          <Typography variant="h5" color="primary" mt={2}>
            ${product.price}
          </Typography>

          <Typography variant="body1" mt={2} color="text.secondary">
            {product.description}
          </Typography>

          <Box mt={3} display="flex" alignItems="center" gap={2}>
            <Typography>Quantity:</Typography>
            <TextField
              type="number"
              size="small"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              inputProps={{ min: 1 }}
              sx={{ width: 80 }}
            />
          </Box>

          <Box mt={4} display="flex" gap={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => OnAddToCart({ ...product, quantity })}
            >
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary">
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
