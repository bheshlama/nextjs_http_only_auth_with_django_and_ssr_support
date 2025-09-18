"use client";

import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "core/slices/authRootSlice";
// import { logout } from "actions/logout";
// import AppTopBar from "./AppTopBar";
import AppTopBar from "views/containers/AppTopBarContainer/AppTopBar";
// import GenericAuthForm from "components/containers/Authentication/GenericAuthForm/GenericAuthForm";
import { AuthType } from "core/types/auth";
import { SOCIAL_ACCOUNT_TYPE } from "core/types/enums";
import { useTypedSelector, useTypedDispatch } from "core/hooks";
import { logout } from "core/actions/auth";

// import { actionSetAuthState } from "core/slices/authRootSlice";

// type,
// handleRedirectToAuthType,
// handleSocialLogin,
// closeModal,

const AppTopBarContainer = () => {
  const [activeAuthPage, setActiveAuthPage] = useState(AuthType.LOGIN);
  const dispatch = useTypedDispatch();

  // const dispatch = useDispatch();

  const handleLogoutClick = () => {
    //TODO: Implement the logout logic here.....
    // setIsAuth(prev => !prev);
    // dispatch(actionSetAuthState(null));
    // dispatch(logout());

    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
  };

  const handleRedirectToAuthType = (redirectType: AuthType) => {
    setActiveAuthPage(redirectType);
  };

  // const handleGoogleLogin = async () => {
  // await firebaseSignInWithPopup(firebaseAuth, firebaseGoogleProvider).then(res => {
  //   const { user } = res;
  //   dispatch(actionSetUserState({ user: { ...user }, isAuth: true }));
  //   closeAuthModal();
  // });
  // };

  // const handleFacebookLogin = async () => {
  // await firebaseSignInWithPopup(firebaseAuth, firebaseFacebookProvider).then(() => {
  //   dispatch(actionSetAuthState(true));
  //   closeAuthModal();
  // });
  // };

  // const handleSocialLogin = (socialType: SOCIAL_ACCOUNT_TYPE) => {
  //   switch (socialType) {
  //     case SOCIAL_ACCOUNT_TYPE.GOOGLE:
  //       handleGoogleLogin();
  //       break;
  //     case SOCIAL_ACCOUNT_TYPE.FACEBOOK:
  //       handleFacebookLogin();
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <AppTopBar handleLogoutClick={handleLogoutClick} />
      {/* TODO: Learn how ModalWrapper is working and apply it here. */}
      {/* <ModalWrapper    
        hideModal={handleOnModalClose}
        isOpen={isAuthOpen}
        wrapperClassName="max-w-[590px]"
        modalClassName="!items-center"
      > */}
      {/* <GenericAuthForm
        type={activeAuthPage}
        handleRedirectToAuthType={handleRedirectToAuthType}
        handleSocialLogin={handleSocialLogin}
        // closeModal={closeAuthModal}
      /> */}
      {/* </ModalWrapper> */}
    </>
  );
};

export default AppTopBarContainer;
