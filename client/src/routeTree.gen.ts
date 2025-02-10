/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as LayoutImport } from "./routes/_layout"
import { Route as LayoutIndexImport } from "./routes/_layout/index"
import { Route as LayoutAuthenticatedImport } from "./routes/_layout/_authenticated"
import { Route as LayoutAuthenticatedProfileImport } from "./routes/_layout/_authenticated/profile"
import { Route as LayoutAuthenticatedDashboardImport } from "./routes/_layout/_authenticated/dashboard"
import { Route as LayoutauthSignupImport } from "./routes/_layout/(auth)/signup"
import { Route as LayoutauthLoginImport } from "./routes/_layout/(auth)/login"

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: "/_layout",
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAuthenticatedRoute = LayoutAuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAuthenticatedProfileRoute = LayoutAuthenticatedProfileImport.update(
  {
    id: "/profile",
    path: "/profile",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any,
)

const LayoutAuthenticatedDashboardRoute =
  LayoutAuthenticatedDashboardImport.update({
    id: "/dashboard",
    path: "/dashboard",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutauthSignupRoute = LayoutauthSignupImport.update({
  id: "/(auth)/signup",
  path: "/signup",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutauthLoginRoute = LayoutauthLoginImport.update({
  id: "/(auth)/login",
  path: "/login",
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_layout": {
      id: "/_layout"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    "/_layout/_authenticated": {
      id: "/_layout/_authenticated"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof LayoutAuthenticatedImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/": {
      id: "/_layout/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/(auth)/login": {
      id: "/_layout/(auth)/login"
      path: "/login"
      fullPath: "/login"
      preLoaderRoute: typeof LayoutauthLoginImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/(auth)/signup": {
      id: "/_layout/(auth)/signup"
      path: "/signup"
      fullPath: "/signup"
      preLoaderRoute: typeof LayoutauthSignupImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/_authenticated/dashboard": {
      id: "/_layout/_authenticated/dashboard"
      path: "/dashboard"
      fullPath: "/dashboard"
      preLoaderRoute: typeof LayoutAuthenticatedDashboardImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/profile": {
      id: "/_layout/_authenticated/profile"
      path: "/profile"
      fullPath: "/profile"
      preLoaderRoute: typeof LayoutAuthenticatedProfileImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
  }
}

// Create and export the route tree

interface LayoutAuthenticatedRouteChildren {
  LayoutAuthenticatedDashboardRoute: typeof LayoutAuthenticatedDashboardRoute
  LayoutAuthenticatedProfileRoute: typeof LayoutAuthenticatedProfileRoute
}

const LayoutAuthenticatedRouteChildren: LayoutAuthenticatedRouteChildren = {
  LayoutAuthenticatedDashboardRoute: LayoutAuthenticatedDashboardRoute,
  LayoutAuthenticatedProfileRoute: LayoutAuthenticatedProfileRoute,
}

const LayoutAuthenticatedRouteWithChildren =
  LayoutAuthenticatedRoute._addFileChildren(LayoutAuthenticatedRouteChildren)

interface LayoutRouteChildren {
  LayoutAuthenticatedRoute: typeof LayoutAuthenticatedRouteWithChildren
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutauthLoginRoute: typeof LayoutauthLoginRoute
  LayoutauthSignupRoute: typeof LayoutauthSignupRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAuthenticatedRoute: LayoutAuthenticatedRouteWithChildren,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutauthLoginRoute: LayoutauthLoginRoute,
  LayoutauthSignupRoute: LayoutauthSignupRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  "": typeof LayoutAuthenticatedRouteWithChildren
  "/": typeof LayoutIndexRoute
  "/login": typeof LayoutauthLoginRoute
  "/signup": typeof LayoutauthSignupRoute
  "/dashboard": typeof LayoutAuthenticatedDashboardRoute
  "/profile": typeof LayoutAuthenticatedProfileRoute
}

export interface FileRoutesByTo {
  "": typeof LayoutAuthenticatedRouteWithChildren
  "/": typeof LayoutIndexRoute
  "/login": typeof LayoutauthLoginRoute
  "/signup": typeof LayoutauthSignupRoute
  "/dashboard": typeof LayoutAuthenticatedDashboardRoute
  "/profile": typeof LayoutAuthenticatedProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/_layout": typeof LayoutRouteWithChildren
  "/_layout/_authenticated": typeof LayoutAuthenticatedRouteWithChildren
  "/_layout/": typeof LayoutIndexRoute
  "/_layout/(auth)/login": typeof LayoutauthLoginRoute
  "/_layout/(auth)/signup": typeof LayoutauthSignupRoute
  "/_layout/_authenticated/dashboard": typeof LayoutAuthenticatedDashboardRoute
  "/_layout/_authenticated/profile": typeof LayoutAuthenticatedProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: "" | "/" | "/login" | "/signup" | "/dashboard" | "/profile"
  fileRoutesByTo: FileRoutesByTo
  to: "" | "/" | "/login" | "/signup" | "/dashboard" | "/profile"
  id:
    | "__root__"
    | "/_layout"
    | "/_layout/_authenticated"
    | "/_layout/"
    | "/_layout/(auth)/login"
    | "/_layout/(auth)/signup"
    | "/_layout/_authenticated/dashboard"
    | "/_layout/_authenticated/profile"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_authenticated",
        "/_layout/",
        "/_layout/(auth)/login",
        "/_layout/(auth)/signup"
      ]
    },
    "/_layout/_authenticated": {
      "filePath": "_layout/_authenticated.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_authenticated/dashboard",
        "/_layout/_authenticated/profile"
      ]
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/(auth)/login": {
      "filePath": "_layout/(auth)/login.tsx",
      "parent": "/_layout"
    },
    "/_layout/(auth)/signup": {
      "filePath": "_layout/(auth)/signup.tsx",
      "parent": "/_layout"
    },
    "/_layout/_authenticated/dashboard": {
      "filePath": "_layout/_authenticated/dashboard.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/profile": {
      "filePath": "_layout/_authenticated/profile.tsx",
      "parent": "/_layout/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
