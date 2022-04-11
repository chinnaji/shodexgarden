import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
  theme: "light",
  callbacks: {
    // async jwt(token, account) {
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken;
    //   }
    //   return token;
    // },
    redirect: async (url, _baseUrl) => {
      if (url === "/") {
        return Promise.resolve("/admin");
      }
      return Promise.resolve("/admin");
    },
    signIn: async ({ user, account, profile, email, credentials }) => {
      const isAllowedToSignIn =
        user.email === process.env.MAIN_ADMIN ? true : false;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
});
