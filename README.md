# Controller

[We will follow this Controller Tutorial in detail](https://docs.nestjs.com/controllers)

Controllers are responsible for handling incoming requests and returning responses to the client.

A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

## Routing

In the following example we'll use the @Controller() decorator, which is required to define a basic controller. We'll specify an optional route path prefix of cats. Using a path prefix in a @Controller() decorator allows us to easily group a set of related routes, and minimize repetitive code. For example, we may choose to group a set of routes that manage interactions with a cat entity under the route /cats. In that case, we could specify the path prefix cats in the @Controller() decorator so that we don't have to repeat that portion of the path for each route in the file.

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }
}
```

### HINT

To create a controller using the CLI, simply execute the

```bash
nest g controller cats
```

command.

# Providers

[We will follow this Controller Tutorial in detail](https://docs.nestjs.com/providers)

Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.

### HINT

To create a controller using the CLI, simply execute the

```bash
nest g service cats
```

command.

# Modules

A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

### HINT

To create a controller using the CLI, simply execute the

```bash
nest g module cats
```

command.
