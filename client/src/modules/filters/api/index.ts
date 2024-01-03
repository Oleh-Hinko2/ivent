import Qs from "qs";
import { BASE_ADMIN_CONNECTION, BASE_REQUEST_HEADERS } from "../../core/axios";
import { GetQueriesData } from "../../core/models";
import { DeleteFilter, UpdateFilter, UpdateFilterStatus } from "../models";

export const getFilterList = async (queriesData: GetQueriesData) => {
  const query = Qs.stringify(queriesData, {
    arrayFormat: "brackets",
    addQueryPrefix: true,
  });

  return await BASE_ADMIN_CONNECTION.get(`/filters${query}`);
};

export const createNewFilter = async (data: FormData) => {
  return await BASE_ADMIN_CONNECTION.post(`/filters`, data, {
    headers: {
      ...BASE_REQUEST_HEADERS,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const deleteFilterById = async (data: DeleteFilter) => {
  return await BASE_ADMIN_CONNECTION.delete(`/filters/${data.id}`);
};

export const updateFilterById = async (data: UpdateFilter) => {
  return await BASE_ADMIN_CONNECTION.put(`/filters/${data._id}`, data);
};

export const updateFilterStatusById = async (data: UpdateFilterStatus) => {
  return await BASE_ADMIN_CONNECTION.put(`/filters/status/${data.id}`, data);
};
