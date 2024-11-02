import { joinURL } from "ufo";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const target = joinURL(config.apiAddress, event.path);

  const headers = {
    ...Object.fromEntries(
      Object.entries(event.headers).filter(([key]) => key !== "host")
    ),
    Authorization: `Bearer d18922a728b17b2f4ede7d38d83380c008767d0e5f9edd77fd53219da1e2ec4f5df39c4d4f1e526a55ff06fc8c43764fb77cda51a875c74f0a7dedc5a67e334c876199b55a24fc0ef636b30085e6923452235ca4b18bafda71d2533081c9bd3ef7fabf0f07a85ae026a1d40d0834ab7623640ca7745bc46f8a80ea6be2b2a039`,
  };

  // proxy it!
  const response = await proxyRequest(event, target, {
    headers: headers,
  });

  return response;
});
