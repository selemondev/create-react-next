const eslintPrompt = [
    {
        name: 'useEslint',
        type: () => 'toggle',
        message: 'Add ESLint for code quality?',
        initial: false,
        active: 'Yes',
        inactive: 'No'
    }
];

export default eslintPrompt;