const DEFAULT_APP_NAME = 'YCL Python 四级互动教学课件';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/bootstrap') {
      const data = await buildBootstrapData(env, url.pathname, request.headers);
      return json(data, {
        'Cache-Control': 'no-store'
      });
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return env.ASSETS.fetch(request);
    }

    if (isRootStaticAsset(url.pathname)) {
      return env.ASSETS.fetch(request);
    }

    const dataPromise = Promise.resolve(buildBootstrapData(env, url.pathname));
    const shell = await env.ASSETS.fetch(request);

    if (!isHtmlResponse(shell)) {
      return shell;
    }

    return new HTMLRewriter()
      .on('body', new BootstrapDataInjector(dataPromise))
      .transform(shell);
  }
};

class BootstrapDataInjector {
  constructor(dataPromise) {
    this.dataPromise = dataPromise;
  }

  async element(element) {
    const data = await this.dataPromise;

    element.prepend(
      `<script>window.__BOOTSTRAP_DATA__=${serializeForScript(data)}</script>`,
      { html: true }
    );
  }
}

function buildBootstrapData(env, pathname) {
  const config = {
    appName: env.PUBLIC_APP_NAME || DEFAULT_APP_NAME,
    environment: env.APP_ENV || 'production'
  };

  return {
    config,
    request: {
      path: pathname
    },
    generatedAt: new Date().toISOString()
  };
}

function isRootStaticAsset(pathname) {
  return /\.\w+$/.test(pathname) && !pathname.endsWith('.html');
}

function isHtmlResponse(response) {
  return response.headers.get('Content-Type')?.includes('text/html');
}

function json(data, headers = {}) {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers
    }
  });
}

function serializeForScript(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
