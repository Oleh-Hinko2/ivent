import { BaseSyntheticEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State } from "../../core/models";

import {
  PersonType,
  SignInData,
  SignUpLegalPersonData,
  SignUpNaturalPersonData,
  UserData,
} from "../models";
import {
  createLegalPersonAction,
  createNaturalPersonAction,
  setPersonTypeAction,
  signInAction,
} from "../slices";

interface FiltersFacade {
  setPersonType: (e: BaseSyntheticEvent) => void;
  personType: PersonType;
  createNewPerson: (
    data: SignUpNaturalPersonData | SignUpLegalPersonData
  ) => void;
  signIn: (data: SignInData) => void;
  user: UserData | null;
}

export const useAuthFacade = (): FiltersFacade => {
  const dispatch = useDispatch();

  const personType = useSelector(
    (state: State): PersonType => state.auth.personType
  );

  const user = useSelector((state: State): UserData | null => state.auth.user);

  const setPersonType = useCallback((e: BaseSyntheticEvent) => {
    const currentPersonType: PersonType = e.target.value;

    dispatch(setPersonTypeAction(currentPersonType));
  }, []);

  const createNewPerson = useCallback(
    (data: SignUpNaturalPersonData | SignUpLegalPersonData) => {
      personType === PersonType.natural
        ? dispatch(createNaturalPersonAction(data as SignUpNaturalPersonData))
        : dispatch(createLegalPersonAction(data as SignUpLegalPersonData));
    },
    [personType]
  );

  const signIn = useCallback(
    (data: SignInData) => {
      dispatch(signInAction(data));
    },
    [personType]
  );

  return {
    personType,
    setPersonType,

    createNewPerson,

    signIn,

    user,
  };
};
