import React, { ReactElement } from "react";

import { BasicLayout, RadioGroups } from "../../../modules/shared";

import * as uuid from "uuid";
import * as S from "./SignUp.module";
import { PersonType } from "../../../modules/auth/models";
import {
  SignUpLegalPerson,
  SignUpNaturalPerson,
} from "../../../modules/auth/components";
import { useAuthFacade } from "../../../modules/auth";
import { useRouter } from "next/router";

const radioGroupsData = [
  {
    id: uuid.v4(),
    label: "приватна",
    value: PersonType.natural,
  },
  {
    id: uuid.v4(),
    label: "юридична",
    value: PersonType.legal,
  },
];

const SignUpRoute = () => {
  const { personType, setPersonType, createNewPerson, user } = useAuthFacade();

  const { push } = useRouter();

  if (user) {
    push("/");
  }

  return (
    <S.Wrapper
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <S.FormWrapper>
        <S.Title>Реєстрація</S.Title>
        <RadioGroups
          name="person_type"
          title="Виберіть тип особи"
          row={true}
          groups={radioGroupsData}
          onChange={setPersonType}
          value={personType}
        />
        {personType === PersonType.natural ? (
          <SignUpNaturalPerson onSubmit={createNewPerson} />
        ) : (
          <SignUpLegalPerson onSubmit={createNewPerson} />
        )}
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default SignUpRoute;

SignUpRoute.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout footerVisible={false}>{page}</BasicLayout>;
};
