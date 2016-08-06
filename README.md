# Paean
** \\ˈpē-ən\\ **— n. _singular_.  
  1. A single GraphQL schema for a public API.
  2. Some old derivative of Greek.

## What is Paean?

Paean -- sounds like peon -- is an augmentation to the [Apollo Stack](http://www.apollostack.com/).  Its purpose is to provide GraphQL schemas for existing public APIs, to make integrating data from such APIs into an Apollo Stack application as painless as possible.  Currently, Paean is just a format for schema-libraries and a directory of such libraries.

As the Apollo libraries (really just Apollo Server!) begin to take form, I expect the best way to bundle schemas, resolvers, and connectors to change. Thus, I want the Paean format to be flexible.  Its simplicity should help in this respect.

## Paean Directory
| Name          | Description   | Latest Apollo Server Comptaibility  |
| ------------- |:-------------:| -----:|
| [WordPress](https://github.com/jangerhofer/apollo-paean-wordpress)      | [WordPress REST API v2](http://v2.wp-api.org/) Wrapper. | v0.2.3 |


## Specification, v0.0
- Paean libraries should export at least two things: a `schema` array and a `resolvers` object.
	- A third, `connectors` object can be provided if API requests are not wrapped into the `resolvers` functions.
		- Adding separate connectors will give the user the option to replace the author’s request library/wrapper of choice with their own.
- Paean libraries _should_ be self-documenting — this means that [description fields](https://github.com/apollostack/apollo-server/issues/72#issuecomment-236431210) should be used extensively to allow a simple understanding of the API wrapper.  External documentation (namely, the source’s API documentation) shouldn’t be necessary in most cases if adequate descriptions are defined.
	- Libraries can and likely should certainly illustrate basic usages.
- Libraries should be publishedto NPM with the prefix `apollo-paean-` , e.g. `apollo-paean-wordpress`

## Integration Guide
### How to add a Paean library to your Apollo App
TO DO

### How to write your own Paean library

## Etymology
Depending on whom you ask, a paean is: a Greek god unto himself; an epithet or alter ego of Apollo; or a song, hymn, or chant of praise, particularly one directed to Apollo.  The word and its cognates crop up here and there, but can be found primarily in translations of Greek classics.

The name of a compliment to Apollo seemed appropriate as the title for a complement to Apollo Server.  “Paean” is also sufficiently distinctive that it is unlikely to be confused for another library/format/specification.

## To Do
- Write [`apollo-paean-wordpress`](https://github.com/jangerhofer/apollo-paean-wordpress) library.
  - Write documentation + basic usage ReadMe.
- Write Integration Guide for:
	- Merging schema/resolvers/connectors from a Paean into custom Apollo code
	- Writing new Paeans
- Architect authenticated API calls
	- Arguments/authentication (e.g. OAuth/tokens) from the client? Server?
	- addSchemaLevelResolver()?
	- attachConnectorsToContext()?
