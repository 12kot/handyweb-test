import {
  generatePageMetadata,
  IParams,
  IProduct,
  sendSsrRequest,
} from "@/features";
import { HomeContainer } from "@/components";

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "home");
}

const Home = async () => {
  const data = await sendSsrRequest<IProduct[]>(
    "products?sort=desc&limit=6",
    []
  );

  return <HomeContainer products={data} />;
};

export default Home;
