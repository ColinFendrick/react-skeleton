import { useEffect } from "react";
import { getItems, getUsers } from "../../services/AppService";

const Home = () => {
  useEffect(() => {
    (async () => {
      const x = await getItems();
      const y = await getUsers();
      console.log(x, y);
    })();
  }, []);

  return (
    <div className="text-3xl font-bold underline my-custom-style">
      React Skeleton
    </div>
  );
};

export default Home;
