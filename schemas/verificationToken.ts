import { defineField } from "sanity";

const verificationToken = {
  name: "verification-token",
  title: "Token de sécurité",
  type: "document",
  fields: [
    defineField({
      name: "identifier",
      title: "Identifiant",
      type: "string",
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
    }),
    defineField({
      name: "expires",
      title: "Expiration",
      type: "datetime",
    }),
  ],
};

export default verificationToken;
