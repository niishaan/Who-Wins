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
import { Route as LayoutAuthenticatedSettingsImport } from "./routes/_layout/_authenticated/settings"
import { Route as LayoutAuthenticatedEventsImport } from "./routes/_layout/_authenticated/events"
import { Route as LayoutAuthenticatedCreateImport } from "./routes/_layout/_authenticated/create"
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

const LayoutAuthenticatedSettingsRoute =
  LayoutAuthenticatedSettingsImport.update({
    id: "/settings",
    path: "/settings",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedEventsRoute = LayoutAuthenticatedEventsImport.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => LayoutAuthenticatedRoute,
} as any)

const LayoutAuthenticatedCreateRoute = LayoutAuthenticatedCreateImport.update({
  id: "/create",
  path: "/create",
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
    "/_layout/_authenticated/create": {
      id: "/_layout/_authenticated/create"
      path: "/create"
      fullPath: "/create"
      preLoaderRoute: typeof LayoutAuthenticatedCreateImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/events": {
      id: "/_layout/_authenticated/events"
      path: "/events"
      fullPath: "/events"
      preLoaderRoute: typeof LayoutAuthenticatedEventsImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/settings": {
      id: "/_layout/_authenticated/settings"
      path: "/settings"
      fullPath: "/settings"
      preLoaderRoute: typeof LayoutAuthenticatedSettingsImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
  }
}

// Create and export the route tree

interface LayoutAuthenticatedRouteChildren {
  LayoutAuthenticatedCreateRoute: typeof LayoutAuthenticatedCreateRoute
  LayoutAuthenticatedEventsRoute: typeof LayoutAuthenticatedEventsRoute
  LayoutAuthenticatedSettingsRoute: typeof LayoutAuthenticatedSettingsRoute
}

const LayoutAuthenticatedRouteChildren: LayoutAuthenticatedRouteChildren = {
  LayoutAuthenticatedCreateRoute: LayoutAuthenticatedCreateRoute,
  LayoutAuthenticatedEventsRoute: LayoutAuthenticatedEventsRoute,
  LayoutAuthenticatedSettingsRoute: LayoutAuthenticatedSettingsRoute,
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
  "/create": typeof LayoutAuthenticatedCreateRoute
  "/events": typeof LayoutAuthenticatedEventsRoute
  "/settings": typeof LayoutAuthenticatedSettingsRoute
}

export interface FileRoutesByTo {
  "": typeof LayoutAuthenticatedRouteWithChildren
  "/": typeof LayoutIndexRoute
  "/login": typeof LayoutauthLoginRoute
  "/signup": typeof LayoutauthSignupRoute
  "/create": typeof LayoutAuthenticatedCreateRoute
  "/events": typeof LayoutAuthenticatedEventsRoute
  "/settings": typeof LayoutAuthenticatedSettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/_layout": typeof LayoutRouteWithChildren
  "/_layout/_authenticated": typeof LayoutAuthenticatedRouteWithChildren
  "/_layout/": typeof LayoutIndexRoute
  "/_layout/(auth)/login": typeof LayoutauthLoginRoute
  "/_layout/(auth)/signup": typeof LayoutauthSignupRoute
  "/_layout/_authenticated/create": typeof LayoutAuthenticatedCreateRoute
  "/_layout/_authenticated/events": typeof LayoutAuthenticatedEventsRoute
  "/_layout/_authenticated/settings": typeof LayoutAuthenticatedSettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ""
    | "/"
    | "/login"
    | "/signup"
    | "/create"
    | "/events"
    | "/settings"
  fileRoutesByTo: FileRoutesByTo
  to: "" | "/" | "/login" | "/signup" | "/create" | "/events" | "/settings"
  id:
    | "__root__"
    | "/_layout"
    | "/_layout/_authenticated"
    | "/_layout/"
    | "/_layout/(auth)/login"
    | "/_layout/(auth)/signup"
    | "/_layout/_authenticated/create"
    | "/_layout/_authenticated/events"
    | "/_layout/_authenticated/settings"
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
        "/_layout/_authenticated/create",
        "/_layout/_authenticated/events",
        "/_layout/_authenticated/settings"
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
    "/_layout/_authenticated/create": {
      "filePath": "_layout/_authenticated/create.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/events": {
      "filePath": "_layout/_authenticated/events.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/settings": {
      "filePath": "_layout/_authenticated/settings.tsx",
      "parent": "/_layout/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
