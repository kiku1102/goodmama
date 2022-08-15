import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div style={{ backgroundColor: "#ECB390" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
