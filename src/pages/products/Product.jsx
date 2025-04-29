
import ProductListContainer from "./ProductListContainer";
import  ProductFilterPanel from "./ProductFilterPanel";
import {useState} from "react";


export default function Product() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState("priceLowToHigh");

  const availableBrands = [
    "Logitech", "Razer", "Apple", "Dell", "Asus", "HP"
  ];

  const handleApplyFilters = () => {
    console.log("Apply filters", {
      priceRange,
      selectedBrand,
      inStockOnly,
      sortOption,
    });
    // TODO: 调用过滤逻辑或更新商品列表
  };

  const handleClearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedBrand("");
    setInStockOnly(false);
    setSortOption("priceLowToHigh");
  };




  return (

      <div className="row">
        <div className="col-12 col-lg-9">
          {/* <ProductCategory /> */}
          <ProductListContainer />
        </div>
        <div className="col-12 col-lg-3">
          {/* <PlaceOrderSection /> */}

          <ProductFilterPanel
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            sortOption={sortOption}
            setSortOption={setSortOption}
            availableBrands={availableBrands}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>

  );
}
