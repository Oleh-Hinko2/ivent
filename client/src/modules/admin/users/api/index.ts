import { BASE_ADMIN_CONNECTION } from "../../../core/axios";
import { GetQueriesData } from "../../../core/models";
import Qs from "qs";

export const getUserList = async (queriesData: GetQueriesData) => {
  const query = Qs.stringify(queriesData, {
    arrayFormat: "brackets",
    addQueryPrefix: true,
  });

  return await BASE_ADMIN_CONNECTION.get(`/user${query}`);
};
