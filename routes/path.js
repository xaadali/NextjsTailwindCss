// ------------------------Main Routes----------------------------------------------
const ROOTS_AUTH = "/";
const ROOTS_DASHBOARD = "/Dashboard";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/"),
  register: path(ROOTS_AUTH, "/sign-up"),
  resetPassword: path(ROOTS_AUTH, "/forget-password"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};
