import React from "react";

const context = {
    url: null,
    playLink: null,
    header: null
};

const useCard = item => {
    const [gameContext, setGameContext] = React.useState(context);

    const updateData = () => {
        const dataContext = {
            url: item.assetList[0].name,
            playLink: item.url,
            header: item.title
        };
        setGameContext(dataContext);
    }
    React.useEffect(() => {
       if(item != undefined) updateData();
    }, [item]);

    return gameContext;
};

export default useCard;
