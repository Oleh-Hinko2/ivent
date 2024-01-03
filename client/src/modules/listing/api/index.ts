// import { BASE_ADMIN_CONNECTION } from "../../core/axios";

export const getListingList = async () => {
  const res = await fetch(`http:/127.0.0.1:3001/announcement`, {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      accept: "application/json",
    },
  });

  const data = await res.json();

  return { data };
};
