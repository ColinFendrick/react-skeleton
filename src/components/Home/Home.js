import { useEffect } from "react";
import AppService from "../../services/AppService";

const Home = () => {
  useEffect(() => {
    (async () => {
      const x = await AppService.getItems();
      console.log(x);
    })();
  }, []);

  return <div className="text-3xl font-bold underline">React Skeleton</div>;
};

export default Home;
