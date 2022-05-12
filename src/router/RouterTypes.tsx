export type TopLevelStackParams = {
  WelcomeScreen: undefined;
};

// Type navigation globally
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TopLevelStackParams {}
  }
}
