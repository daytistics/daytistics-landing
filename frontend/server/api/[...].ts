import { joinURL } from "ufo";
import { ProxyEndpoint } from "~/types/config-types";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const proxyEndpoints: ProxyEndpoint[] =
    (config.proxyEndpoints as ProxyEndpoint[]) || ([] as ProxyEndpoint[]);

  for (const proxyEndpoint of proxyEndpoints) {
    if (!event.path.startsWith(proxyEndpoint.endpoint)) {
      continue;
    }

    let path = event.path;

    if (proxyEndpoint.toReplace && proxyEndpoint.replaceWith) {
      path = path.replace(proxyEndpoint.toReplace, proxyEndpoint.replaceWith);
    }

    const target = joinURL(proxyEndpoint.target, path);

    const headers = {
      ...Object.fromEntries(
        Object.entries(event.headers).filter(([key]) => key !== "host"),
      ),
      Authorization: `Bearer 47a8a0443143fc4d4c498a8a353866322e5a5dec82e4531c845c0aa356ab7050cbda57cbbf9642444ba90811f4a0f01e5113082e07c97b2d10596aa1f54f1e34fe21bfd1407ba67a2af458c1f57055ef4732a1f57d7218af30f3774376a46a9e47c11d5a32d1ca062073ccad0270c65065d8d2cdcff50edeadc7f1fca3147f0e`,
    };

    return await proxyRequest(event, target, {
      headers: headers,
    });
  }
});
