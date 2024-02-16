import appleAuth, {
  AppleRequestResponse,
} from '@invertase/react-native-apple-authentication';

export const appleClient = {
  fetchLogin: async (): Promise<AppleRequestResponse> => {
    const response = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    return response;
  },
  getUserAuthState: async (user: string) => {
    const response = await appleAuth.getCredentialStateForUser(user);
    return response;
  },
};
