const feelings = [
    {
        base: 'Accepting / Open',
        sub: [
            'Calm',
            'Centered',
            'Content',
            'Fulfilled',
            'Patient',
            'Peaceful',
            'Present',
            'Relaxed',
            'Serene',
            'Trusting'
        ]
    },
    {
        base: 'Aliveness / Joy',
        sub: [
            'Amazed',
            'Awe',
            'Bliss',
            'Delighted',
            'Eager',
            'Ecstatic',
            'Enchanted',
            'Energized',
            'Engaged',
            'Enthusiastic',
            'Excited',
            'Free',
            'Happy',
            'Inspired',
            'Invigorated',
            'Lively',
            'Passionate',
            'Playful',
            'Radiant',
            'Refreshed',
            'Rejuvenated',
            'Renewed',
            'Satisfied',
            'Thrilled',
            'Vibrant'
        ]
    },
    {
        base: 'Angry / Annoyed',
        sub: [
            'Agitated',
            'Aggravated',
            'Bitter',
            'Contempt',
            'Cynical',
            'Disdain',
            'Disgruntled',
            'Disturbed',
            'Edgy',
            'Exasperated',
            'Frustrated',
            'Furious',
            'Grouchy',
            'Hostile',
            'Impatient',
            'Irritated',
            'Irate',
            'Moody',
            'On edge',
            'Outraged',
            'Pissed',
            'Resentful',
            'Upset',
            'Vindictive'
        ]
    },
    {
        base: 'Courageous / Powerful',
        sub: [
            'Adventurous',
            'Brave',
            'Capable',
            'Confident',
            'Daring',
            'Determined',
            'Free',
            'Grounded',
            'Proud',
            'Strong',
            'Worthy',
            'Valiant'
        ]
    },
    {
        base: 'Connected / Loving',
        sub: [
            'Accepting',
            'Affectionate',
            'Caring',
            'Compassion',
            'Empathy',
            'Fulfilled',
            'Present',
            'Safe',
            'Warm',
            'Worthy',
            'Curious',
            'Engaged',
            'Exploring',
            'Fascinated',
            'Interested',
            'Intrigued',
            'Involved',
            'Stimulated'
        ]
    },
    {
        base: 'Despair / Sad',
        sub: [
            'Anguish',
            'Depressed',
            'Despondent',
            'Disappointed',
            'Discouraged',
            'Forlorn',
            'Gloomy',
            'Grief',
            'Heartbroken',
            'Hopeless',
            'Lonely',
            'Longing',
            'Melancholy',
            'Sorrow',
            'Teary',
            'Unhappy',
            'Upset',
            'Weary',
            'Yearning'
        ]
    },
    {
        base: 'Disconnected / Numb',
        sub: [
            'Aloof',
            'Bored',
            'Confused',
            'Distant',
            'Empty',
            'Indifferent',
            'Isolated',
            'Lethargic',
            'Listless',
            'Removed',
            'Resistant',
            'Shut',
            'Down',
            'Uneasy',
            'Withdrawn'
        ]
    },
    {
        base: 'Embarrassed / Shame',
        sub: [
            'Ashamed',
            'Humiliated',
            'Inhibited',
            'Mortified',
            'Self-conscious',
            'Useless',
            'Weak',
            'Worthless'
        ]
    },
    {
        base: 'Fear',
        sub: [
            'Afraid',
            'Anxious',
            'Apprehensive',
            'Frightened',
            'Hesitant',
            'Nervous',
            'Panic',
            'Paralyzed',
            'Scared',
            'Terrified',
            'Worried'
        ]
    },
    {
        base: 'Fragile',
        sub: [
            'Helpless',
            'Sensitive'
        ]
    },
    {
        base: 'Grateful',
        sub: [
            'Appreciative',
            'Blessed',
            'Delighted',
            'Fortunate',
            'Grace',
            'Humbled',
            'Lucky',
            'Moved',
            'Thankful',
            'Touched'
        ]
    },
    {
        base: 'Guilt',
        sub: [
            'Regret',
            'Remorseful',
            'Sorry'
        ]
    },
    {
        base: 'Hopeful',
        sub: [
            'Encouraged',
            'Expectant',
            'Optimistic',
            'Trusting'
        ]
    },
    {
        base: 'Powerless',
        sub: [
            'Impotent',
            'Incapable',
            'Resigned',
            'Trapped',
            'Victim'
        ]
    },
    {
        base: 'Tender',
        sub: [
            'Calm',
            'Caring',
            'Loving',
            'Reflective',
            'Self-loving',
            'Serene',
            'Vulnerable',
            'Warm'
        ]
    },
    {
        base: 'Stressed / Tense',
        sub: [
            'Anxious',
            'Burned out',
            'Cranky',
            'Depleted',
            'Edgy',
            'Exhausted',
            'Frazzled',
            'Overwhelm',
            'Rattled',
            'Rejecting',
            'Restless',
            'Shaken',
            'Tight',
            'Weary',
            'Worn out'
        ]
    },
    {
        base: 'Unsettled / Doubt',
        sub: [
            'Apprehensive',
            'Concerned',
            'Dissatisfied',
            'Disturbed',
            'Grouchy',
            'Hesitant',
            'Inhibited',
            'Perplexed',
            'Questioning',
            'Rejecting',
            'Reluctant',
            'Shocked',
            'Skeptical',
            'Suspicious',
            'Ungrounded',
            'Unsure',
            'Worried'
        ]
    }
];

const randomElement = array => array[Math.floor((Math.random()*array.length))];

const getFeeling = () => {
    const { base, sub } = randomElement(feelings);
    const minor = randomElement(sub);
    return `FEEL-O feels ${minor.toLowerCase()} (${base})`;
}

export { getFeeling as default, feelings };