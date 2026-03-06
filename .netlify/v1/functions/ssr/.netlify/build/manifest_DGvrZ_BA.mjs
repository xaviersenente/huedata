import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_BzFlDmxy.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/xsenente/Documents/GitHub/huedata/","cacheDir":"file:///Users/xsenente/Documents/GitHub/huedata/node_modules/.astro/","outDir":"file:///Users/xsenente/Documents/GitHub/huedata/dist/","srcDir":"file:///Users/xsenente/Documents/GitHub/huedata/src/","publicDir":"file:///Users/xsenente/Documents/GitHub/huedata/public/","buildClientDir":"file:///Users/xsenente/Documents/GitHub/huedata/dist/","buildServerDir":"file:///Users/xsenente/Documents/GitHub/huedata/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"a-propos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/a-propos","isIndex":false,"type":"page","pattern":"^\\/a-propos\\/?$","segments":[[{"content":"a-propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a-propos.astro","pathname":"/a-propos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"expertises/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/expertises","isIndex":false,"type":"page","pattern":"^\\/expertises\\/?$","segments":[[{"content":"expertises","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/expertises.astro","pathname":"/expertises","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"references/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/references","isIndex":true,"type":"page","pattern":"^\\/references\\/?$","segments":[[{"content":"references","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/references/index.astro","pathname":"/references","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/components/sections/ExpertisesPreview.astro",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/components/sections/ReferencesPreview.astro",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/components/sections/Testimonials.astro",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/pages/expertises.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/expertises@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/pages/references/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/references/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/pages/references/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/references/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/xsenente/Documents/GitHub/huedata/src/pages/a-propos.astro",{"propagation":"none","containsHead":true}],["/Users/xsenente/Documents/GitHub/huedata/src/pages/contact.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/a-propos@_@astro":"pages/a-propos.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/expertises@_@astro":"pages/expertises.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/references/[slug]@_@astro":"pages/references/_slug_.astro.mjs","\u0000@astro-page:src/pages/references/index@_@astro":"pages/references.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DGvrZ_BA.mjs","/Users/xsenente/Documents/GitHub/huedata/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/Users/xsenente/Documents/GitHub/huedata/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/xsenente/Documents/GitHub/huedata/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CCTaYgFn.mjs","/Users/xsenente/Documents/GitHub/huedata/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.DCf9GM8W.js","@astrojs/react/client.js":"_astro/client.BJGBxOWp.js","/Users/xsenente/Documents/GitHub/huedata/src/pages/a-propos.astro?astro&type=script&index=0&lang.ts":"_astro/a-propos.astro_astro_type_script_index_0_lang.UCpUJ8Zx.js","/Users/xsenente/Documents/GitHub/huedata/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.CjBpEKg-.js","/Users/xsenente/Documents/GitHub/huedata/src/pages/references/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.BijKQpxF.js","/Users/xsenente/Documents/GitHub/huedata/src/pages/references/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.HtemcH3l.js","/Users/xsenente/Documents/GitHub/huedata/src/pages/expertises.astro?astro&type=script&index=0&lang.ts":"_astro/expertises.astro_astro_type_script_index_0_lang.BTpo4z69.js","/Users/xsenente/Documents/GitHub/huedata/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.D-Wmri89.js","/Users/xsenente/Documents/GitHub/huedata/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.BZvMykqd.js","/Users/xsenente/Documents/GitHub/huedata/src/components/sections/Stats.astro?astro&type=script&index=0&lang.ts":"_astro/Stats.astro_astro_type_script_index_0_lang.Cd_N_Uf-.js","/Users/xsenente/Documents/GitHub/huedata/src/components/sections/ExpertisesPreview.astro?astro&type=script&index=0&lang.ts":"_astro/ExpertisesPreview.astro_astro_type_script_index_0_lang.XfYjkueC.js","/Users/xsenente/Documents/GitHub/huedata/src/components/sections/ReferencesPreview.astro?astro&type=script&index=0&lang.ts":"_astro/ReferencesPreview.astro_astro_type_script_index_0_lang.CHwdFnAb.js","/Users/xsenente/Documents/GitHub/huedata/src/components/sections/Testimonials.astro?astro&type=script&index=0&lang.ts":"_astro/Testimonials.astro_astro_type_script_index_0_lang.jUDvrbQO.js","/Users/xsenente/Documents/GitHub/huedata/src/components/sections/CTA.astro?astro&type=script&index=0&lang.ts":"_astro/CTA.astro_astro_type_script_index_0_lang.DXDTQO02.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/xsenente/Documents/GitHub/huedata/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"site-nav\"),a=document.getElementById(\"menu-toggle\"),n=document.getElementById(\"mobile-menu\"),e=document.querySelectorAll(\".menu-bar\");window.addEventListener(\"scroll\",()=>{window.scrollY>60?s?.classList.add(\"bg-noir/95\",\"backdrop-blur-md\"):s?.classList.remove(\"bg-noir/95\",\"backdrop-blur-md\")},{passive:!0});let t=!1;a?.addEventListener(\"click\",()=>{t=!t,a.setAttribute(\"aria-expanded\",String(t)),n?.classList.toggle(\"hidden\",!t),t?(e[0]?.classList.add(\"rotate-45\",\"translate-y-2\"),e[1]?.classList.add(\"opacity-0\"),e[2]?.classList.add(\"-rotate-45\",\"-translate-y-2\",\"w-6\")):(e[0]?.classList.remove(\"rotate-45\",\"translate-y-2\"),e[1]?.classList.remove(\"opacity-0\"),e[2]?.classList.remove(\"-rotate-45\",\"-translate-y-2\",\"w-6\"))});"]],"assets":["/_astro/steph.DcLKYMRy.avif","/_astro/space-grotesk-latin-ext-wght-normal.D9tNdqV9.woff2","/_astro/inter-greek-ext-wght-normal.DlzME5K_.woff2","/_astro/space-grotesk-vietnamese-wght-normal.D0rl6rjA.woff2","/_astro/inter-cyrillic-ext-wght-normal.BOeWTOD4.woff2","/_astro/inter-cyrillic-wght-normal.DqGufNeO.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/space-grotesk-latin-wght-normal.BhU9QXUp.woff2","/_astro/inter-greek-wght-normal.CkhJZR-_.woff2","/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2","/_astro/inter-latin-ext-wght-normal.DO1Apj_S.woff2","/_astro/a-propos.Bbk8XCep.css","/favicon.ico","/favicon.svg","/_astro/CTA.astro_astro_type_script_index_0_lang.DXDTQO02.js","/_astro/ExpertisesPreview.astro_astro_type_script_index_0_lang.XfYjkueC.js","/_astro/Hero.astro_astro_type_script_index_0_lang.BZvMykqd.js","/_astro/ReferencesPreview.astro_astro_type_script_index_0_lang.CHwdFnAb.js","/_astro/ScrollTrigger.Cv03IO65.js","/_astro/Stats.astro_astro_type_script_index_0_lang.Cd_N_Uf-.js","/_astro/Testimonials.astro_astro_type_script_index_0_lang.jUDvrbQO.js","/_astro/_slug_.astro_astro_type_script_index_0_lang.BijKQpxF.js","/_astro/a-propos.astro_astro_type_script_index_0_lang.UCpUJ8Zx.js","/_astro/client.BJGBxOWp.js","/_astro/contact.astro_astro_type_script_index_0_lang.CjBpEKg-.js","/_astro/expertises.astro_astro_type_script_index_0_lang.BTpo4z69.js","/_astro/index.BbrLBU_f.js","/_astro/index.CB87Sc6I.js","/_astro/index.astro_astro_type_script_index_0_lang.HtemcH3l.js","/_astro/keystatic-page.DCf9GM8W.js","/a-propos/index.html","/contact/index.html","/expertises/index.html","/references/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"rPzBJKX1rtJ9FHVypP9UXBM28oLkWgOH2JWB01Bw6Q4=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
