# FE-006 Distributed Tracing Instrumentation is OpenTelemetry

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/10/2021

## Context

Observability is defined as the ability of the internal states of a system to be determined by its external outputs. It involves collecting, visualizing, and analyzing metrics, logs, and traces to gain a holistic understanding of a system’s operation. Observability lets you understand *why* something is wrong, compared with monitoring, which simply tells you *when* something is wrong.

This ADR is focused on how we will add the tracing aspect of observability throughout the codebase (or ‘instrument' the codebase for tracing). The other aspects of observability (metrics and logs) are worthy own their own ADRs.

Some of the benefits of distributed tracing, as outlined in [this](https://petabridge.com/blog/why-use-distributed-tracing/) article are:

- radically improves developer productivity and output
- works across multiple applications, programming languages, and transports
- improve time to market
- facilitates excellent cross-team communication and cooperation

Here are several example scenarios or questions that distributed tracing can help answer:

- As a new engineer on the team, I want to understand how many separate systems are involved when a certain user type logs in and the first page is rendered.
- As an operations engineer, I want to know how many SQL queries are executed for a given endpoint or interaction.
- As a product manager, I want to know if a new feature is being used by a certain cohort of users on a regular basis.
- As an engineer, I want to prove that an optimization I wrote is effective in a production environment.
- As a load tester, after I have shown that a problem exists, I want to understand how the system is interacting so I can debug and fix the issue.

## ADR Goals and Anti-goals

- Goal: Choose which set of libraries to use at callsites (across programming languages) within the codebase, which will be used to generate distributed tracing data

  - Sub-goal: Leaving open as many options as possible for the backend

- Anti-goal: Committing to a specific "backend", i.e. platform or service for gathering, exploring, and displaying trace information

## Decision

Use **OpenTelemetry** to instrument codebase for distributed tracing. This choice allows us to instrument tracing in the application in an industry standard way, without locking us into any specific vendor(s). The flexibility to use a variety of back-ends to collect trace data in different environments will also be invaluable on this project.

## Consequences

Instrumentation will be done across the stack, so it would be best if our choice has quality instrumentation libraries available for all parts/languages of our application.

## Options Considered

### [OpenTelemetry](https://opentelemetry.io/)

- `+` Emerging as an industry standard
- `+` Vendor agnostic - Tracing information can be sent to hosted services (e.g. [Honeycomb.io](http://honeycomb.io/), AWS X-Ray, etc) or self-hosted Open Source implementations (e.g. Zipkin, Jaeger, etc)
- `+` If left unconfigured, OpenTelemetry instrumentation calls default to lightweight/noop executions
- `+` OpenTelemetry has well-maintained libraries for the all languages considered on the project
- `+` Easily swappable back-ends:
  - e.g. could choose a local Docker version of OpenZipkin for an all-local development environment
  - e.g. can use [Honeycomb.io](http://honeycomb.io/) in the experimental commercial-cloud hosted environment
  - e.g. can swap in AWS X-Ray for use in GovCloud hosted environments
- `+` Vendors find benefit of being in the OpenTelemetry ecosystem because they no longer have to create or support instrumentation libraries in an ever growing array of languages
- `-` As an abstraction layer, OpenTelemetry may prohibit usage of vendor-specific capabilities
- `-` Some OpenTelemetry libraries and tools may trail their vendor-supported counterparts
- `-` Instrumentation for tracing may be a vector for performance overhead

### Use a vendor’s instrumentation libraries ([Honeycomb.io](http://honeycomb.io/), [AWS X-RAY](https://aws.amazon.com/xray/), [Zipkin](https://zipkin.io/), [Jaeger](https://www.jaegertracing.io/))

- `+` Enables accessing vendor-specific capabilities
- `-` Vendor lock-in in code
  - lock-in may be somewhat mitigated by translation layers available within the OpenTelemetry ecosystem, at the expense of increased configuration burden
  - example - choosing AWS X-Ray would work well in the deployed GovCloud environments, but it does not scale down to exclusively local development environments, i.e. X-Ray does not provide a UI for browsing distributed traces with their local X-Ray daemon
  - example - choosing [Honeycomb.io](http://honeycomb.io/)'s instrumentation libraries adds a lot of nice auto-instrumentation capabilities over OpenTelemetry, but since Honeycomb does not have FedRAMP (nor do most of their peers), the distributed tracing could not be enabled in GovCloud deployed environments
  - example - using an open source tool (e.g. OpenZipkin) can scale down to local development, but would require more infrastructure support to self- host the data storage and UI tools in the GovCloud environments

### Do not instrument

- `+` No work to be done
- `-` Severely limited understanding of what is going on within the application

## Resources

- [Milmove OpenTelemetry ADR (main source for this ADR)](https://github.com/transcom/mymove/blob/master/docs/adr/0061-use-opentelemetry-for-distributed-tracing.md)
- [A Quick Introduction to Distributed Tracing](https://newrelic.com/resources/ebooks/quick-introduction-distributed-tracing)
- [What is OpenTelemetry and why is it the future of instrumentation?](https://newrelic.com/blog/best-practices/what-is-opentelemetry)
- [What is  OpenTelemetry? An open-source standard for logs, metrics, and traces](https://www.dynatrace.com/news/blog/what-is-opentelemetry-2/)
- [What Is OpenTelemetry? A Complete Introduction | Splunk](https://www.splunk.com/en_us/data-insider/what-is-opentelemetry.html)
- [What is OpenTelemetry?  |  Google Cloud](https://cloud.google.com/learn/what-is-opentelemetry)
- [Django Instrumentation — OpenTelemetry Python documentation](https://opentelemetry-python.readthedocs.io/en/latest/examples/django/README.html)
