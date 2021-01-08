import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import book from './book'
import author from './author'
import cover from './cover'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([blockContent, book, author, cover]),
})
