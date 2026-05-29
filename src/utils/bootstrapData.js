const DEFAULT_BOOTSTRAP_DATA = {
  config: {
    appName: 'YCL Python 四级互动教学课件',
    environment: 'development'
  },
  request: {
    path: '/'
  },
  generatedAt: null
};

export function getBootstrapData() {
  if (typeof window === 'undefined' || !window.__BOOTSTRAP_DATA__) {
    return DEFAULT_BOOTSTRAP_DATA;
  }

  return {
    ...DEFAULT_BOOTSTRAP_DATA,
    ...window.__BOOTSTRAP_DATA__,
    config: {
      ...DEFAULT_BOOTSTRAP_DATA.config,
      ...window.__BOOTSTRAP_DATA__.config
    }
  };
}

export default getBootstrapData;
