export default {
    name: 'stateManagement',
    type: 'select',
    message: 'Which state management solution do you prefer?',
    choices: [
        { title: 'None', value: 'none' },
        {
            title: 'Redux',
            value: 'redux'
        },
        {
            title: 'Zustand',
            value: 'zustand'
        },
        {
            title: 'Jotai',
            value: 'jotai'
        }
    ]
}

