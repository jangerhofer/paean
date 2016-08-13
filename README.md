# Apollo Paean
** \\ˈpē-ən\\ **— n. _singular_.  
  1. A standard and utility for mapping common APIs to GraphQL for use with [Apollo Stack](apollostack.com).
  2. Some old derivative of Greek.

## What is Apollo Paean?

Paean -- _peon_ is an adequate homophone -- is an augmentation to the [Apollo Stack](#)(http://www.apollostack.com/).  Its purpose is to provide all the tools you need _(GraphQL schemas, resolvers, and connectors)_ to easily integrate existing public APIs into your Apollo Stack application.  For example, a Twitter Paean could let you treat Twitter’s publicly accessible data as if it was your own application’s information.

My hope for Paean is that it will standardize the interface between Apollo Servers and common APIs so that developers can easily share their code.  Its current form is based off an attempt I made to build a distributable library and the little things I picked up along the way.  It feels overly clunky to me, but I don’t have a better answer.  So… if you have an insight, bright idea, or question, please fire away in the Issues pane or toss in a pull request!

Without further ado… Paean consists of:
  - __A specification__ for how API-library code should be organized.  It's just some rules, that you can think of as either a style guide or guidelines if you are so inclined.
  - __A little utility__ for combining resolvers into something consumable by Apollo Server without performing mental gymnastics.
  - __A directory__ of available API-wrapper libraries.


## Specification, v1.0

Here is a quick down of the working rules.  If you feel lost at any point, peek at how the part in question ties in under the [Example Integration](https://github.com/jangerhofer/apollo-paean/wiki/Example-Integration).

- Paean libraries should export (at least) five things, all using a similar naming convention -- more exports may be defined to divide larger schemas into smaller parts.  An example convention is using a "wp-" prefix to each export.  _e.g. wp-schema, wp-queries, etc._
	1.  __Schema__ string in GraphQL format
	2. __Queries__ string in GraphQL format
		- This is the part of the schema that would go under the Root Query type if the schema were not broken out into a library.  It will be merged into the Root Query type.  See the [Example Integration](https://github.com/jangerhofer/apollo-paean/wiki/Example-Integration) Wiki page for more information.
	3. __Root resolvers__ object
		- The resolvers that correspond to the __Queries__ definitions.
	4. __Type resolvers__ object
		- Standard resolvers for non-Root Query definitions.
	5. __Connectors__ class(es).
		- Write your connectors using classes so that class constructors can pull information from the server’s context to load data.
- These exports should come from a single `index.js` file in the library.  How the library is structured otherwise is up to the author.
- Most of a Paean library should be self-documenting, to make the Apollo Server easy to navigate.  Extensive use of description fields in both types of resolver functions is highly encouraged.
	- See [here](https://github.com/apollostack/apollo-server/issues/72#issuecomment-236431210) for information about adding descriptions to types.
	- Usage of the library can be documented in a README, examples file, or elsewhere.  
- Finally, libraries should be published to NPM with the prefix `apollo-paean-` , e.g. `apollo-paean-wordpress`

## Paean Utility

For the time being, the only code the `apollo-paean` library itself provides is a little helper function called `combineResolvers()`.  Use it like this:

`npm install --save apollo-paean`

```
import { combineResolvers } from ‘apollo-paean’

const resolvers = combineResolvers( rootResolvers, typeResolvers, options)
```

`rootResolvers`: _Required,_ an array of resolver objects, most or all of which are likely to be imports.

`typeResolvers`: _Required,_ similar to `rootResolvers` in structure, but contains different resolver functions.

`options`: _Optional_, An object with just one option for now — tell Paean what the type name defined for querying your schema is with the `queryTypeName` option.  Defaults to `RootQuery`.

## Paean Directory
| Name          | Description   | Latest Apollo Server Comptaibility  |
| ------------- |:-------------:| -----:|
| [WordPress](#)(https://github.com/jangerhofer/apollo-paean-wordpress)      | [WordPress REST API v2](#)(http://v2.wp-api.org/) Wrapper. | v0.2.3 |

## Etymology
Depending on whom you ask, a paean is: a Greek god unto himself; an epithet or alter ego of Apollo; or a song, hymn, or chant of praise, particularly one directed to Apollo.  The word and its cognates crop up here and there, but can be found primarily in translations of Greek classics.

The name of a compliment to Apollo seemed appropriate as the title for a complement to Apollo Server.  “Paean” is also sufficiently distinctive that it is unlikely to be confused for another library/format/specification  — OK, I’m certain it wouldn’t be.

## To Do
- Finish Roadmap section
-  Add mutation support to:
	- Specification
	- `combineResolvers()`
	- and the example integration
- Write [`apollo-paean-wordpress`](https://github.com/jangerhofer/apollo-paean-wordpress) library.

## The Future — A Theoretical Roadmap
COMING SOON
