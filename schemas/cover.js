import { HiOutlineCamera as icon } from 'react-icons/hi'

export default {
    name: 'cover',
    title: 'Cover',
    type: 'object',
    icon,
    fields: [
        {
            type: 'image',
            name: 'Image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'creditName',
            title: 'Credit',
            type: 'string',
        },
        {
            name: 'creditUrl',
            title: 'Credit URL',
            type: 'url',
        },
    ],
}
