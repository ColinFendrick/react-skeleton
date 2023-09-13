import { useEffect } from "react";
import AppService from "../../services/AppService";

const Home = () => {
  useEffect(() => {
    (async () => {
      const x = await AppService.getItems();
      console.log(x);
    })();
  }, []);

  return <div>React Skeleton</div>;
};

export default Home;
