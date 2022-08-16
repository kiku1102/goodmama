import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCard from "../components/Products/ProductCard";
import { useSelector } from "react-redux";
import ProductFilter from "../components/Products/ProductFilter";
function ProductList() {
  const [rows, setRows] = useState([]);
  //Limit: số lượng bản ghi trên 1 trang
  const limit = 12;
  //số trang: tổng số lượng sản phẩm / limit - Số lớn hơn gần nhất
  const [noPage, setNoPage] = useState(0);
  //Trang hiện tại
  const [page, setPage] = useState(1);

  const { filterInfo } = useSelector((reduxData) => reduxData.filterReducer);

  const onChangePagination = (event, value) => {
    setPage(value);
  };

  const breadcrumbArray = [
    {
      name: "Trang chủ",
      url: "/",
    },
  ];

  const getData = async (paramUrl, paramOptions = {}) => {
    const response = await fetch(paramUrl, paramOptions);
    const responseData = await response.json();
    return responseData;
  };
  // name=${taskFilterNameInput}
  // &type=${taskFilterProductType}
  // &promotionPriceMax=${taskFilterMaxPriceInput}
  // &promotionPriceMin=${taskFilterMinPriceInput}

  useEffect(() => {
    getData(
      `http://goodmamabackend.herokuapp.com/products?name=${filterInfo.name}&type=${filterInfo.type}&promotionPriceMax=${filterInfo.promotionPriceMax}&promotionPriceMin=${filterInfo.promotionPriceMin}`
    )
      .then((data) => {
        console.log(data.data);
        setNoPage(Math.ceil(data.data.length / limit));
        setRows(data.data.slice((page - 1) * limit, page * limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, filterInfo]);
  return (
    <div style={{ backgroundColor: "#ECB390", "fontFamily": "Dancing Script" }}>
      <Header />
      <BreadCrumb breadcrumbArray={breadcrumbArray} pageName="Tất cả sản phẩm" />
      <ProductFilter />
      <Grid container>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Grid container textAlign="center" p={3}>
            {rows.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12} >
          <Grid container justifyContent={{ xs: "center", sm: "flex-end" }} >
            <Pagination
              count={noPage}
              defaultPage={1}
              onChange={onChangePagination}
              component="div"
            />
          </Grid>

        </Grid>

      </Grid>
      <Footer />

    </div>

  );
}
export default ProductList;
