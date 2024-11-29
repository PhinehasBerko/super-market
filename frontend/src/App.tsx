import BannerCategories from "./ui/BannerCategories";
import Blog from "./ui/Blog";
import Categories from "./ui/Categories";
import DiscountedBanner from "./ui/DiscountedBanner";
import Hightlights from "./ui/Hightlights";
import HomeBanner from "./ui/HomeBanner";
import Paginated from "./ui/Pagination";
import ProductList from "./ui/ProductList";

const App = () => {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Hightlights />
      <Categories />
      <ProductList />
      <Paginated />
      {/* DiscountedBanner */}
      <DiscountedBanner />
      {/* Blog */}
      <Blog />
    </main>
  );
};

export default App;
