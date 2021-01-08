import { HiOutlineBookOpen as icon } from 'react-icons/hi'
import cover from './cover'

export default {
    name: 'book',
    title: 'Book',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        },
        {
            name: 'cover',
            title: 'Cover Image',
            type: 'cover',
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'author' }],
                },
            ],
        },
        {
            name: 'collection',
            title: 'Collection',
            type: 'string',
        },
        {
            name: 'readDate',
            title: 'Read',
            type: 'date',
        },
        {
            name: 'review',
            title: 'Review',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'authors.0.name',
            cover: 'cover',
            readDate: 'readDate',
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: selection.author,
                date: selection.readDate,
                media: selection.cover,
            }
        },
    },
}
