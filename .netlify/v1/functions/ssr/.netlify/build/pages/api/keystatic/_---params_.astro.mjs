import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "github",
    repo: "xaviersenente/huedata"
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
            { label: "Association", value: "association" }
          ],
          defaultValue: "festival"
        }),
        featured: fields.checkbox({
          label: "Mise en avant",
          defaultValue: false
        }),
        // logo: fields.text({ label: "Logo (chemin)" }),
        // cover: fields.text({ label: "Image de couverture (chemin)" }),
        stats: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            value: fields.text({ label: "Valeur" })
          }),
          {
            label: "Chiffres clés",
            itemLabel: (props) => props.fields.label.value
          }
        ),
        services: fields.array(fields.text({ label: "Service" }), {
          label: "Services réalisés",
          itemLabel: (props) => props.value
        }),
        content: fields.markdoc({ label: "Contenu", extension: "md" })
      }
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
          defaultValue: "#3A86FF"
        }),
        description: fields.text({
          label: "Description courte",
          multiline: true
        }),
        methods: fields.array(fields.text({ label: "Méthode" }), {
          label: "Méthodes",
          itemLabel: (props) => props.value
        }),
        content: fields.markdoc({ label: "Contenu", extension: "md" })
      }
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
          defaultValue: false
        }),
        content: fields.markdoc({ label: "Contenu", extension: "md" })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
