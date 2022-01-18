# FE-003 React JS Framework is Next.js

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/10/2021

## Context

We have decided to use React on the project. We could just start from scratch and begin manually building out our React application from nothing, however, there are a few existing options to jump start this process and provide a toolchain or framework for the development of the React application. The first and traditionally most common option is [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) (CRA). This is a popular way to get a single page React application up and running quickly with a pre-configured toolchain/packages. This is a viable, production-ready option but does come with some limitations that are hard to overcome without [ejecting](https://create-react-app.dev/docs/available-scripts#npm-run-eject) the application. The alternative option being considered is to use Next.js as the framework for the project. This allows for a quick jump start much like CRA but comes with significantly more flexibility and additional features like server-side rendering.

## Decision

Use **Next.js** for the React JS Framework. At this early stage of the project the flexibility and customization allowed by Next.js will leave our options open as we further define what the product will look like. Going with CRA will lock us in more strictly than we are willing to commit to at this point and we do not want to get stuck 'ejecting’ our CRA down the road when this can be avoided by simply starting off with Next.js. In addition to the flexibility aspect, Next.js will give us much better performance and has some great features that will help us as the project grows (API endpoints, file-based routing, SSR, ect).

## Consequences

This is a pretty significant decision as it is hard to go back on in the future. The choice of React JS framework locks us into how we will deal with and customize Babel, Webpack, and project dependencies. It also determines what the options are for things like routing, server side vs client side rendering, and deployment/hosting.

## Options Considered

### [Create React App (CRA) ](https://reactjs.org/docs/create-a-new-react-app.html)

A comfortable environment for learning React and the best way to set up the scaffolding of a new single page React application.

- `+` Very quick to get set up and start building
- `+` Comes with many common packages like Babel and Webpack preconfigured
- `+` Client-side rendering is easier to work with and reason about
- `+` Experience with CRA on team
- `+` Easy to deploy
- `*` Routing - No routing out of the box. Need to set up client side routing using a package like [react-router](https://nextjs.org/docs/routing/introduction). Not as good for SEO as there is really only one ‘page’ (index.js) with routing setup within it.
- `-` hard to customize, cant modify babel or web-pack config
- `-` no SSR
- `-` really only for single-page apps
- `-` lower performance than next.js apps
- `-` pinned dependencies

### [Next.js](https://nextjs.org/)

A full-stack web framework built on a NodeJS server for building React applications. Much less limiting that CRA, Next.js enables several extra features (like SSR) and greatly improved customization.

- `+` Simple to setup, build, and host
- `+` Highly configurable, easy customization
- `+` Comes with many common packages like Babel and Webpack preconfigured and they can easily be customized
- `+` SSR out of the box
- `+` Automatic code splitting
- `+` Extremely fast
- `+` Easy deployment (not as easy as CRA though)
- `+` Great documentation
- `+` File-based routing out of the box
- `+` Allows for API endpoints
- `*` [Routing](https://nextjs.org/docs/routing/introduction) - Must use the built in NextJS file-system based routing. This routing works by aligning the URL to a folder structure in the project. So a url like `/cases` would show whatever was in the project file at `/pages/cases.ts.` Dynamic routing can be done with square braces, so the route `/cases/123` will use file `/pages/cases/[caseId].ts` and the caseId of `123` would be available as a prop in the `[caseId].ts` file. This is much better for SEO as there are true pages that can be picked up rather than just a single index.js like in CRA.
- `-` SSR adds complexity
- `-` Limited Next.js experience on team
- `-` SSR loses some usefulness on sites where a user must be ‘logged in’.

### [No React JS Framework, roll your own adventure]()

- `+` Unlimited customization
- `-` Unlimited customization
- `-` Nothing pre-configured or out of the box
- `-` Slow, manual effort to get started

## Resources

- [Next.js documentation](https://nextjs.org/docs/getting-started)
- [How to deploy Next.js](https://nextjs.org/docs/deployment)
- [Difference between Next.js and CRA](https://frontend-digest.com/whats-the-difference-between-nextjs-and-create-react-app-11b55650a612)
- [Next.js vs CRA: Which one should you go with?](https://medium.com/@OPTASY.com/create-react-app-vs-next-js-which-one-should-you-go-with-for-building-your-next-app-c025159dc0b)
- [Next.js vs CRA](https://pagepro.co/blog/nextjs-vs-react/)
- [Next.js or CRA for your next app?](https://www.optasy.com/blog/create-react-app-vs-nextjs-which-one-should-you-go-building-your-next-app)
- [Next.js vs CRA developer experience](https://blog.logrocket.com/next-js-vs-react-developer-experience/)
- [Don’t eject your Create React App](https://medium.com/curated-by-versett/dont-eject-your-create-react-app-b123c5247741)
