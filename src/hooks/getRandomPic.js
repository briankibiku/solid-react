import React, { useState, useEffect } from "react";

export default function GetRandomPic() {
  const [imageUrl, setImageUrl] = useState({});
  useEffect(() => {
    setImageUrl(() =>
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((data) =>
        data.json()
      )
    );
  }, []);
  return imageUrl;
}
