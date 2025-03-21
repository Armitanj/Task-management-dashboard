export const fetchLanguages = async () => {
    return [
        { code: 'en', name: 'English', timezone: 'UTC' },
        { code: 'es', name: 'Spanish', timezone: 'CET' },
        { code: 'fr', name: 'French', timezone: 'CET' },
        { code: 'de', name: 'German', timezone: 'CET' },
        { code: 'fa', name: 'Persian', timezone: 'IRST' },
        { code: 'it', name: 'Italian', timezone: 'CET' },
        { code: 'ru', name: 'Russian', timezone: 'MSK' },
        { code: 'zh', name: 'Chinese', timezone: 'CST' },
        { code: 'ja', name: 'Japanese', timezone: 'JST' },
        { code: 'hi', name: 'Hindi', timezone: 'IST' }
    ];
};