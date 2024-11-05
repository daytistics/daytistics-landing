interface ProxyEndpoint {
  endpoint: string;
  target: string;
  toReplace?: string;
  replaceWith?: string;
}

export type { ProxyEndpoint };
