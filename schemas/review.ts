import { defineField } from "sanity";

const review = {
  name: "review",
  title: "Avis",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "Utilisateur",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hotelRoom",
      title: "Chambre d'Hôtel",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Commentaire",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userRating",
      title: "Retour Utilisateur",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Notation entre 1 et 5"),
    }),
  ],
};

export default review;
