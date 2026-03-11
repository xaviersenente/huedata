// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV
    ? { kind: "local" }
    : { kind: "cloud" },
  cloud: {
    project: "huedata/huedata",
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
        sortYear: fields.integer({
          label: "Année de tri",
          description: "Année la plus récente du projet (utilisée pour le tri)",
        }),
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
        marquee: fields.checkbox({
          label: "Afficher dans le bandeau",
          defaultValue: false,
        }),
        url: fields.url({
          label: "Site web",
          description: "Lien vers le site de la structure",
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
        testimonial: fields.conditional(
          fields.checkbox({
            label: "Ajouter un témoignage",
            defaultValue: false,
          }),
          {
            true: fields.object({
              author: fields.text({ label: "Auteur" }),
              role: fields.text({ label: "Rôle" }),
              quote: fields.text({ label: "Citation", multiline: true }),
            }),
            false: fields.empty(),
          },
        ),
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
        icon: fields.select({
          label: "Icône",
          options: [
            { label: "Graphique", value: "chart" },
            { label: "Discussion", value: "chat" },
            { label: "Cible", value: "target" },
            { label: "Carte", value: "map" },
          ],
          defaultValue: "chart",
        }),
        order: fields.integer({ label: "Ordre d'affichage" }),
        color: fields.select({
          label: "Couleur",
          options: [
            { label: "Bleu électrique", value: "electric" },
            { label: "Magenta", value: "magenta" },
            { label: "Moutarde", value: "mustard" },
            { label: "Sauge", value: "sage" },
          ],
          defaultValue: "electric",
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
