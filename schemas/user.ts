import { defineField } from "sanity";

const user = {
  name: "user",
  title: "Utilisateur",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Admin",
      type: "boolean",
      description: "Vérifiez le status de l'utilisateur",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      //   readOnly: true,
      //   hidden: true,
    }),
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      description: "Nom de l'Utilisateur",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "email",
      type: "string",
      title: "E-mail",
    }),
    defineField({
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "A Propos",
      type: "text",
      description: "Brève description de l'utilisateur",
    }),
  ],
};

export default user;
