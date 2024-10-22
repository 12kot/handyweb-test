import { HomeContainer } from "@/features/Home";
import { generatePageMetadata, IParams, IProduct, sendSsrRequest } from "@/features";

import styles from "./styles.module.scss";

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "home");
}

const Home = async () => {
  const data = await sendSsrRequest<IProduct[]>('products?sort=desc&limit=6', [])

  return (
    <div className={styles.container}>
      <HomeContainer products={data} />
    </div>
  );
};

export default Home;
