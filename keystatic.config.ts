// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    references: collection({
      label: "Références",
      slugField: "title",
      path: "src/content/references/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        client: fields.text({ label: "Client" }),
        location: fields.text({ label: "Lieu" }),
        year: fields.text({ label: "Année" }),
        domain: fields.select({
          label: "Domaine",
          options: [
            { label: "Festival", value: "festival" },
            { label: "Salle", value: "salle" },
            { label: "Musée", value: "musee" },
            { label: "Sport", value: "sport" },
            { label: "Collectivité", value: "collectivite" },
            { label: "Association", value: "association" },
          ],
          defaultValue: "festival",
        }),
        featured: fields.checkbox({
          label: "Mise en avant",
          defaultValue: false,
        }),
        // logo: fields.text({ label: "Logo (chemin)" }),
        // cover: fields.text({ label: "Image de couverture (chemin)" }),
        stats: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            value: fields.text({ label: "Valeur" }),
          }),
          {
            label: "Chiffres clés",
            itemLabel: (props) => props.fields.label.value,
          },
        ),
        services: fields.array(fields.text({ label: "Service" }), {
          label: "Services réalisés",
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: "Contenu", extension: "md" }),
      },
    }),
    expertises: collection({
      label: "Expertises",
      slugField: "title",
      path: "src/content/expertises/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        icon: fields.text({ label: "Icône" }),
        order: fields.integer({ label: "Ordre d'affichage" }),
        color: fields.text({
          label: "Couleur (hex)",
          defaultValue: "#3A86FF",
        }),
        description: fields.text({
          label: "Description courte",
          multiline: true,
        }),
        methods: fields.array(fields.text({ label: "Méthode" }), {
          label: "Méthodes",
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: "Contenu", extension: "md" }),
      },
    }),
    temoignages: collection({
      label: "Témoignages",
      slugField: "author",
      path: "src/content/temoignages/*",
      format: { contentField: "content" },
      schema: {
        author: fields.slug({ name: { label: "Auteur" } }),
        role: fields.text({ label: "Rôle" }),
        organization: fields.text({ label: "Organisation" }),
        // logo: fields.text({ label: "Logo (chemin)" }),
        featured: fields.checkbox({
          label: "Mise en avant",
          defaultValue: false,
        }),
        content: fields.markdoc({ label: "Contenu", extension: "md" }),
      },
    }),
  },
});
