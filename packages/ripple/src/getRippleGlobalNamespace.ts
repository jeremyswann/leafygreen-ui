interface ModuleType {
  '@leafygreen-ui/ripple': {
    // @ts-expect-error using HTMLElements to index as it provides a faster lookup when deciding if we should create a ripple effect on a given element
    registeredRippleElements: { [K: HTMLElement]: {} };
    setRippleListener: boolean;
  };
}

type LGWindow = Window &
  typeof globalThis & {
    __LEAFYGREEN_UTILS__: {
      modules: ModuleType;
    };
  };

export function getRippleGlobalNamespace() {
  // Handles SSR
  if (typeof window === 'undefined') {
    return;
  }

  if ((window as LGWindow).__LEAFYGREEN_UTILS__) {
    (window as LGWindow).__LEAFYGREEN_UTILS__.modules[
      '@leafygreen-ui/ripple'
    ] = {
      setRippleListener: false,
      registeredRippleElements: {},
    };
  } else {
    const rippleModule = {
      '@leafygreen-ui/ripple': {
        setRippleListener: false,
        registeredRippleElements: {},
      },
    };

    (window as LGWindow).__LEAFYGREEN_UTILS__ = { modules: rippleModule };
  }

  return (window as LGWindow).__LEAFYGREEN_UTILS__.modules[
    '@leafygreen-ui/ripple'
  ];
}