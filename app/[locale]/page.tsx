import { HomeContainer } from "@/features/Home";
import { generatePageMetadata, IParams } from "@/features";

import styles from "./styles.module.scss";

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "home");
}

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeContainer />
    </div>
  );
}

export default Home;
