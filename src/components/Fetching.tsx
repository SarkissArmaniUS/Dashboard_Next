"use client";

import { useEffect, useState } from "react";
import { chartData } from "@/api/data";

const Fetching = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getChartsData = async () => {
      try {
        const result = await chartData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    getChartsData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.month}>
            desktop: {item.desktop}
            mobile: {item.mobile}
        </div>
      ))}
    </div>
  );
};

export default Fetching;