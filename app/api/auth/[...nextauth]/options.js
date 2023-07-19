import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "Your username",
    //     },
    //     password: {
    //       label: "Password:",
    //       type: "password",
    //       placeholder: "Your password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     // retrieve data from db or other source here
    //     // configuration/providers/credentials DOCS
    //     const user = { id: "42", name: "Martin", password: "nextauth" };

    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async session({ session }) {
      // STORE CURRENT USER SOMEWHERE IDK

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      
      // DOING STUFF WITH DATABASE

      return true;
    },
  },
};
