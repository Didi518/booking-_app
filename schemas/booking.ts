import { defineField } from "sanity";

const booking = {
  name: "booking",
  title: "Réservation",
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
      name: "checkinDate",
      title: "Date du Check-in",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkoutDate",
      title: "Date du Check-out",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "numberOfDays",
      title: "Nombre de Jours",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "discount",
      title: "Promo",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "adults",
      title: "Adultes",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "children",
      title: "Enfants",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "totalPrice",
      title: "Prix Total",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
};

export default booking;
