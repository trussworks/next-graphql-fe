# FE-002 Frontend Framework is ReactJS

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/8/2021

## Context

A frontend framework or library is needed to create a dynamic, modern user interface. Frontend frameworks are critical in building user interfaces that are maintainable, scalable, efficient/performant, and testable. The current leading frontend framework options are React, Angular, Vue, and Svelte.

## Decision

Use **React** as the frontend framework (library). It's relative maturity and flexibility, combined with team familiarity, makes it a great fit for the project. Neither Vue and Svelte feel mature enough to confidently select for the project and Angular is a bit too big of a hammer. React is both more mature than Vue/Svelte (with great resources) and does not include all the bulky, full-framework features of Angular.

## Consequences

The chosen fronted framework effects much of what can and will be used throughout the frontend, including potentially locking in what languages can be used, what can use for testing (Jest, RTL, Karma, Jasmine), and how the code is structured and maintained.

## Options Considered

### [React](https://reactjs.org/)

A JavaScript library developed and maintained by Facebook for building declarative, component-based user interfaces. React utilizes one-way data binding and allows for web applications to change data without reloading the page using a ‘VirtualDOM’.

- `+` Just a small JavaScript library
- `+` Large, thriving community of users and developers
- `+` Most popular among considered options
- `+` Flexible with no initial dependencies
- `+` Easy to learn and use with ample documentation and training resources
- `+` VirtualDOM (enhanced performance, great user experience)
- `+` Abundance of development tools and extensions
- `+` Can use ES5, ES6, or TypeScript
- `+` Component based (reusable code)
- `-` Need 3rd party libraries for much of the functionality present in full frameworks
- `-` High pace of development, hard to stay up to date w/ latest skills and best practices
- `-` Community divided on best way to write CSS in React
- `-` JSX syntax is controversial amongst developers (HTML, CSS, JS can all be in same file)

### [Angular](https://angular.io/)

A framework written in TypeScript developed and maintained by Google. It is a full frontend framework with a collection of well integrated libraries and features such as routing, client-server communication, form validation, and more.

- `+` All-in-one, full framework - don't need to add additional packages
- `+` Good set of out-of-the-box tools (routing, form validation, HttpClient)
- `+` Google product with active support community
- `+` Two-way data biding
- `+` Easy to scale
- `+` Component based (reusable code)
- `-` Steep learning curve
- `-` All-in-one framework, usually more than is needed (500+ KB)
- `-` Basic documentation
- `-` Worst performance of considered options
- `-` Must use TypeScript
- `-` Numerous versions causing split community
- `-` Every new version differs significantly from the previous

### [Vue](https://vuejs.org/)

A JavaScript library backed by open source contributors. It was developed to address challenges present in Angular and React, in an attempt to be the best of worlds. Vue combines concepts like the ‘VirtualDom’ from React, with two-way data binding from Angular. Most of Vue’s weaknesses are related to the frameworks level of maturity.

- `+` Just a small JavaScript library
- `+` Utilizes many of the best concepts from React and Angular (VirtualDom, two-way data binding)
- `+` Easy to learn with extensive, intuitive documentation
- `+` JavaScript code, templates, and CSS code are not mixed
- `+` Can use ES5, ES6, or TypeScript
- `+` Component based (reusable code)
- `-` Small community
- `-` Limited scalability, typically for smaller applications
- `-` Often too flexible, too many options which end up making projects overly complex
- `-` Small ecosystem of tools and plugins
- `-` Relatively new with no major companies endorsement or financial backing

### [Svelte](https://svelte.dev/)

The newest option, quickly gaining in popularity. The main distinction of Svelte is that it is really more of a compiler than a framework. Instead of doing most the work in the browser with a virtual DOM (like the other options), the work is done when you build the app and it is compiled into efficient vanilla JavaScript. This means that relatively heavy techniques like 'DOM diffing' can be avoided and instead Svelte writes code that surgically updates the DOM when the state of an app changes.

- `+` Really is just a frontend compiler
- `+` The fastest/most performant (~30% faster than other frameworks)
- `+` The ability to compile code to vanilla javascript without using VirtualDOM, reducing number of digital layers between browser and app
- `+` Very lightweight (4.1KB minified)
- `+` Readable, compact code
- `+` Automatic updates- can declare vars that update the UI automatically when data changes
- `+` Can use ES5, ES6, or TypeScript
- `+` Component based (reusable code)
- `-` Limited best practices
- `-` Smallest community
- `-` Lack of tooling, IDE support
- `-` Relatively new with no major companies endorsement or financial backing, currently is a volunteer effort

## Resources

- [Most popular JavaScript frameworks of 2021 - strengths, weaknesses, and use cases](https://kruschecompany.com/ember-jquery-angular-react-vue-what-to-choose/)
- [One-way vs two-way data binding](https://stackoverflow.com/a/37566693)
- [Advantages of React](https://www.telerik.com/blogs/5-benefits-of-reactjs-to-brighten-a-cloudy-day)
- [Advantages of Angular](https://light-it.net/blog/8-advantages-of-angular-for-businesses-and-developers/)
- [Advantages of Vue](https://procoders.tech/blog/advantages-of-vue-js/)
- [Svelte ecosystem overview and top resources](https://daily.dev/blog/building-with-svelte-all-you-need-to-know-before-you-start)
- [React vs. Angular: The Complete Comparison](https://programmingwithmosh.com/react/react-vs-angular/)
- [Svelte vs Vue](https://www.simform.com/blog/svelte-vs-vue/)
- [React vs Svelte](https://www.simform.com/blog/react-vs-svelte/)
- [React vs Vue vs Angular vs Svelte](https://dev.to/hb/react-vs-vue-vs-angular-vs-svelte-1fdm)
- [Angular vs React 2021: Which JS Framework your Project Requires](https://www.simform.com/blog/angular-vs-react/)
