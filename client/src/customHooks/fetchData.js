import { useState, useEffect } from "react";

import axios from "axios";

export const FetchData = (initVal) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetch(url, method, data, numOfFetch) {
    setLoading(true);
    try {
      const result = await axios({
        url,
        method,
        data,
        headers: {
          "content-type": "Application/Json",
        },
      });
      setData(result.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  }
  return [data, fetch, loading, error, setData, setError];
};
