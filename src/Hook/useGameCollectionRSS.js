import React, { useState, useEffect } from "react";
import { GameCollectionRSS } from "../Context/index";
import format from "string-format";

const useGameCollectionRSS = config => {
  const [rss, setRSS] = useState(null);

  useEffect(() => {

    let appliedConfig = {
      company: config.company || "All",
      collection: config.collection || "all",
      category: config.category || "all",
      type: config.type || "all",
      amount: config.amount || "100",
      mobile: config.mobile || "all",
      rewarded: config.rewarded || "all",
      title: config.title || config.category
    };

    let url =
      config.url ||
      `/proxy/rss/api/v1.0/rss/{company}/?collection={collection}&categories={category}&type={type}&mobile={mobile}&rewarded={rewarded}&format=json&amount={amount}`;

    url = format(url, appliedConfig);
    appliedConfig.url = appliedConfig.url;

    setRSS(new GameCollectionRSS(url, appliedConfig));
  }, [config]);

  return rss;
};

export default useGameCollectionRSS;
