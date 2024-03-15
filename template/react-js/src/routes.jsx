import { lazy, Suspense } from "react";
const Index = lazy(() => import("@/pages/index"));

export const routes = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    ),
  }
];

export default routes;