export const arrayItems = [
    {
        name: 'Q&A',
        id: "q&a",
        description: "Question Answers based on existing knowledge",
        option: {
            model:"text-davinci-003",
            temperature:0,
            max_tokens:100,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
            stop:["\n"]
        }
    },
    {
        name: 'Chat',
        id: "chat",
        description: "Open ended conversation with an AI assistant.",
        option: {
            model: "text-davinci-003",
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        }
    },
    {
        name: 'Grammar correction',
        id: "grammerCorrection",
        description: "Corrects sentences into standard English.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            
        }
    },
    {
        name: 'Summarize for a 2nd grader',
        id: "summary",
        description: "Translates difficult text into simpler concepts.",
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            
        }
    },
    {
        name: 'English To other language',
        id: "Translates",
        description: "Translates English text into French, Spanish and japanese",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Movie to Emoji',
        id: "movieToEmoji",
        description: "Convert Movie title to emoji",
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: 'Explain code',
        id: "explaincode",
        description: "Explain a complicated code.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        }
    },
    {
        name: 'SQL request',
        id: "jstopy",
        description: "Create simple SQL queries.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'JavaScript to Python',
        id: "jstopy",
        description: "Convert simple JavaScript expressions into Python.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Interview Question',
        id: "I&Q",
        description: "Create interview questions.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
];