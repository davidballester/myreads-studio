import { HiOutlineUser as icon } from 'react-icons/hi'

export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
        prepare(selection) {
            return {
                title: selection.title,
            }
        },
    },
}
