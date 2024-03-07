import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        const user = await prismadb.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error("Email does not exist");
        }

        const isCorrectpassword = await compare(
          credentials.password,
          user?.hashedPassword
        );

        if (!isCorrectpassword) {
          throw new Error("Incorrect Password");
        }

        return user;
      },
    }),
  ],
  pages: { signIn: "/auth" },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXT_SECRET,
};

export default NextAuth(authOptions);
