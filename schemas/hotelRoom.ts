import { defineField } from "sanity";

const roomTypes = [
  { title: "Basique", value: "basique" },
  { title: "Luxe", value: "luxe" },
  { title: "Suite", value: "suite" },
];

const hotelRoom = {
  name: "hotelRoom",
  title: "Chambre d'Hôtel",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("50 caractères maximum"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("100 caractères minimum"),
    }),
    defineField({
      name: "price",
      title: "Prix",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(100).error("100 caractères minimum"),
    }),
    defineField({
      name: "discount",
      title: "Promo",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "Fichier" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3).error("3 images minimum"),
    }),
    defineField({
      name: "coverImage",
      title: "Affiche",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "Fichier" },
      ],
      validation: (Rule) => Rule.required().error("L'affiche est requise"),
    }),
    defineField({
      name: "type",
      title: "Type de Chambre",
      type: "string",
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "basic",
    }),
    defineField({
      name: "specialNote",
      title: "Particularité",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Heure du check-in est 12:00 PM, l'heure du check-out est à 11:59 AM. En cas d'oubli d'effets personnels, merci de contacter la réception.",
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberOfBeds",
      title: "Nombre de Lits",
      type: "number",
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: "offeredAmenities",
      title: "Commodités Offertes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icone", type: "string" },
            { name: "amenity", title: "Commodité", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "isBooked",
      title: "Réservé",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Tête d'Affiche",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reviews",
      title: "Avis",
      type: "array",
      of: [{ type: "review" }],
    }),
  ],
};

export default hotelRoom;
