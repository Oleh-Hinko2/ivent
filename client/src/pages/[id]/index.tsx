import React, { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import * as S from "./Listing.module";
import { Typography } from "@mui/material";
import { Announcement } from "../../modules/listing/models";
import { useTranslation } from "next-i18next";
import { BasicLayout } from "../../modules/shared";

interface Query {
  id: string;
}

interface ServerSideProps {
  locale: string;
  query: Query;
}

interface AnnouncementShowRouteProps {
  data: Announcement;
}

export const getServerSideProps = async ({
  locale,
  query,
}: ServerSideProps) => {
  const { id } = query;

  const res = await fetch(`http:/127.0.0.1:3001/announcement/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      accept: "application/json",
    },
  });
  const data = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, [
        "en-US",
        "no",
      ])),
      data,
    },
  };
};

const AnnouncementShowRoute = ({ data }: AnnouncementShowRouteProps) => {
  const { t } = useTranslation("common");

  return (
    <S.Content>
      <S.Wrapper>
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="body1">{data.description}</Typography>
        <Typography variant="body1">{data.watch_number}</Typography>
        <Typography variant="body1">
          {t("price")}: {data.price || 0}
        </Typography>
      </S.Wrapper>
    </S.Content>
  );
};

export default AnnouncementShowRoute;

AnnouncementShowRoute.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
