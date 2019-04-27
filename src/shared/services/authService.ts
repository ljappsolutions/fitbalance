import Auth from '@aws-amplify/auth';
import { CognitoUser, CognitoUserSession, CognitoAccessToken } from 'amazon-cognito-identity-js';
import { ICredentials } from '@aws-amplify/core';

const CognitoClientGroup = 'Clients';

const AuthService = {
  async getGroups(): Promise<string[]> {
    try {
      let authenticatedUser: CognitoUser | any = null;
      authenticatedUser = await Auth.currentAuthenticatedUser();
      return this.getGroupsFromUser(authenticatedUser);
    } catch (error) {
      console.log(error);
    }
    return [];
  },
  getGroupsFromUser(authenticatedUser: CognitoUser | any) {
    const userSession: CognitoUserSession = authenticatedUser.getSignInUserSession();
    if (userSession) {
      return userSession.getIdToken().payload['cognito:groups'];
    }
    return [];
  },
  getClientToken: async (): Promise<CognitoAccessToken | null> => {
    const userWithoutCast = await Auth.currentAuthenticatedUser();
    const user = userWithoutCast as CognitoUser;
    const userSession = user.getSignInUserSession();
    return (userSession) ? userSession.getIdToken() : null;
  },
  getUser: async (): Promise<CognitoUser | any> => {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  },
  getUsername: async (): Promise<string> => {
    const userWithoutCast = await Auth.currentAuthenticatedUser();
    const user = userWithoutCast as CognitoUser;
    const username = user.getUsername();
    return username;
  },
  getCredentials: async (): Promise<ICredentials> => {
    const credentials = await Auth.currentUserCredentials();
    return credentials;
  },
  async isAuthenticated(): Promise<boolean> {
    const user = await this.getUser();
    return user !== undefined;
  },
  async isClient(): Promise<boolean> {
    const groups = await this.getGroups();
    return groups.includes(CognitoClientGroup);
  },
  async getClientNameFromClient(): Promise<string> {
    const isClient = await this.isClient();
    if (isClient) {
      const user = await this.getUser();
      const attributes = await Auth.userAttributes(user);
      return attributes.filter(attribute => attribute.getName() === 'custom:clientNm')[0].getValue();
    }
    return '';
  }
};

export default AuthService;