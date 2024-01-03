import React from "react";
import { FilterCarousel } from "../modules/filters";
import { Announcement } from "../modules/listing/components";
import { ListingProps } from "../modules/listing/models";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { ReactElement } from "react";

import * as S from "./Home.module";
import { BasicLayout } from "../modules/shared";
import { BASE_REQUEST_HEADERS } from "../modules/core/axios";
interface ServerSideProps {
  locale: string;
}

export const getServerSideProps = async ({ locale }: ServerSideProps) => {
  const dataRes = await fetch(`http:/127.0.0.1:3001/announcement`, {
    method: "GET",
    headers: BASE_REQUEST_HEADERS,
  });

  const filtersDataRes = await fetch(
    `http:/127.0.0.1:3001/filters?status=active`,
    {
      method: "GET",
      headers: BASE_REQUEST_HEADERS,
    }
  );

  const data = await dataRes.json();
  const filterData = await filtersDataRes.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, [
        "en-US",
        "no",
      ])),
      data: data.items,
      locale,
      filters: filterData.items,
    },
  };
};

const ListingIndexRoute = ({ data, filters, locale }: ListingProps) => {
  return (
    <S.Content>
      {!!filters.length && <FilterCarousel filters={filters} />}
      <S.Wrapper>
        {data.map((announcement) => (
          <Announcement
            key={announcement._id}
            announcement={announcement}
            locale={locale}
          />
        ))}
      </S.Wrapper>
    </S.Content>
  );
};

export default ListingIndexRoute;

ListingIndexRoute.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
