"use strict";

var _ = require('underscore')

const defaultOptions = {
    queryTypeName: "RootQuery",
}

exports.combineResolvers = function (rootResolvers, typeResolvers, givenOptions) {
    let options = _.extend(defaultOptions, givenOptions)

    const rootResolversAssembly = {}
    rootResolvers.map(newResolvers => Object.assign(rootResolversAssembly, newResolvers))

    const fullResolver = {}
    fullResolver[options.queryTypeName] = rootResolversAssembly

    typeResolvers.map(newResolvers => Object.assign(fullResolver, newResolvers))

    return fullResolver
}
