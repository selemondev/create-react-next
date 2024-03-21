const prompt = [
    {
        name: 'useRouter',
        type: () => 'toggle',
        message: 'Add React Router DOM for Single Page Application development?',
        initial: true,
        active: 'Yes',
        inactive: 'No'
    },

    {
        name: 'useHooks',
        type: () => 'toggle',
        message: 'Add useHooks for a collection of modern, server-safe React hooks?',
        initial: false,
        active: 'Yes',
        inactive: 'No'
    },

    {
        name: 'useVitest',
        type: () => 'toggle',
        message: 'Add Vitest for unit testing?',
        initial: true,
        active: 'Yes',
        inactive: 'No'
    }
]
export default prompt
