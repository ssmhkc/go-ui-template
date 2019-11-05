import React from "react";

const useGameCollection = collection => {
  const [gameList, setGameList] = React.useState([]);

  const fetchData = async () => {
    if (!collection) {
      setGameList([]);
    } else {
      const result = await collection.getItems();
      const data = result.data;

      if (data !== undefined && data.length) {
        result.data.forEach(game => {
          let parts = game.url.split("/");
          game.id = parts[parts.length - 2];
        });
        setGameList(result.data);
      }
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [collection]);

  return gameList;
};

export default useGameCollection;
