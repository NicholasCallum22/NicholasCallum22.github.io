import React, { Suspense, lazy } from "react";

export const load = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Component {...props} />
    </Suspense>
  );
};

export const loadLazy = <P extends object>(
  importFunc: () => Promise<{ default: React.ComponentType<P> }>,
) => {
  return load(lazy(importFunc));
};
