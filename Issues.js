let kypIssuesObj = [
    {
        factorId: 'IS011',
        itemId: 'KDG03',
        itemType: 'S',
        optionBullets: [ 'Agree', 'Disagree' ],
        statement: 'After I commit, I want to wait for at least two years before having/adopting kids.',
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/KDG03.svg',
        itemWeight: NumberLong(5)
    },
    {
  
        factorId: 'OS001',
        isActive: true,
        itemId: 'BD09',
        itemType: 'MS',
        optionBullets: [
          'Being faithful',
          'Satisfaction in bed',
          'Physical abuse',
          'Mental torture',
          'Calling bad names (gaalis) to close family members',
          'Disrespect from partner',
          'Parents’ interference',
          'Change eating habits - veg or non-veg'
        ],
        statement: 'What are the things I can’t compromise in my relationship?',
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/BD09.svg',
        itemWeight: NumberLong(7),
      },
    {
        factorId: '',
        itemId: 'CT011',
        itemType: 'C',
        optionBullets: [ "Yes", "No" ],
        statement: 'Do you have someone special that you see a future with?',
        itemWeight: NumberLong(1)
    },

    {
        factorId: 'IS011',
        itemId: 'KD02',
        itemType: 'S',
        optionBullets: [ 'Agree', 'Disagree' ],
        statement: 'The primary responsibility of raising a child belongs to the woman, not the man.',
        itemWeight: NumberLong(1)
    },
    {
        itemId: "CT009",
        statement: "What brings you here ? Choose the most appropriate one.",
        itemType: "C",
        factorId: "",
        optionBullets: [
            "I am struggling and longing to find a life partner ",
            "I have issues in my relationship ",
            "I want to make my relationship more exciting ",
            "I am just curious",
        ]
    },
    {


        factorId: 'OS001',

        itemId: 'BD01',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I prefer my partner not to have many friends of opposite gender and similar age group.',
        itemWeight: NumberLong(5),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/BD01.svg'
    },
    {


        factorId: 'OS001',

        itemId: 'BD02',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I don’t mind my partner looking through my cell phone.',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/BD02.svg'
    },
    {


        factorId: 'OS001',

        itemId: 'BD06',
        itemType: 'MS',

        optionBullets: [
            'Cleanliness and hygiene - self and home',
            'Being faithful',
            'Satisfaction in bed',
            'Living with in-laws',
            'Taking care of immediate family financially',
            'Partner swearing at family members',
            'Disrespect from partner',
            'Leaving job after marriage',
            'Financial gift exchange or dowry demands',
            'In-laws’ interference',
            'Change eating habits - veg or non-veg',
            'My partner not being available round the clock when i am sick no matter how busy the partner is.'
        ],
        statement: 'What are the things I cannot compromise in marriage?',
        itemWeight: NumberLong(7),
        multiSelectItemConnectMax: NumberLong(9),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/BD06.svg'
    },
    {


        factorId: 'EOM05',

        itemId: 'EI02',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: "At the end of a stressful day at work, I expect my partner to comfort me, irrespective of how my partner's day went.",
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EI02.svg'
    },
    {


        factorId: 'XY003',

        itemId: 'EX01',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: "The man doesn't need to help the woman in the household chores unless she specifically asks or communicates about it.",
        itemWeight: NumberLong(5),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX01.svg'
    },
    {


        factorId: 'XY003',

        itemId: 'EX04',
        itemType: 'S',

        optionBullets: ['Every day', 'Once a week', 'Once in 2 weeks', 'Once a month'],
        statement: 'How often would you like to do fun or romantic activities with your partner - for example, taking a walk, gardening, watching movies, etc.? ',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX04.svg'
    },
    {


        factorId: 'XY003',

        itemId: 'EX05',
        itemType: 'MS',

        optionBullets: [
            'Quality time - spending time together in a relaxed environment',
            'Gifts',
            'Physical touch - hugs, kisses, etc.',
            'Words of affirmation - often saying positive words about/appreciating your partner',
            'Acts of service - doing chores for your partner to make them feel quite comfortable'
        ],
        statement: 'Pick your preferred love language - the way in which you express and receive love from your partner.',
        itemWeight: NumberLong(7),
        multiSelectItemConnectMax: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX05.svg'
    },
    {


        factorId: 'XY003',

        itemId: 'EX07',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I would like my partner and I to spend time with other couples by inviting them over for dinner or potluck.',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX07.svg'
    },
    {


        factorId: 'XY003',

        itemId: 'EX08',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I would like my partner and I to go on trips with other couples who are friends.',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX08.svg'
    },
    {


        factorId: 'FIC07',

        itemId: 'FN01',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'Money should not be given to even immediate family if your partner disapproves of it after discussion.',
        itemWeight: NumberLong(7),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/FN01.svg'
    },
    {


        factorId: 'FIC07',

        itemId: 'FN04',
        itemType: 'MS',
        optionBullets: ['My parents', "Partner's parents", 'Friends/Relatives', 'None'],
        statement: 'You as a couple need some extra money to cover certain expense - vacation, home, car etc. With whom are you okay to take money from to cover your expense?',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/FN04.svg'
    },
    {


        factorId: 'COF04',
        itemId: 'HC02',
        itemType: 'S',
        optionBullets: ['Agree', 'Disagree'],
        statement: 'After a fight with my partner, I would not speak to my partner for a few days to maintain peace.',
        itemWeight: NumberLong(1),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/HC02.svg'
    },
    {


        factorId: 'COF04',

        itemId: 'HC04',
        itemType: 'S',
        optionBullets: [
            'Tell my partner to let it go',
            'Talk to my parent on what happened',
            'Mediate having setup a 3 way discussion',
            'Tell my partner to directly bring it up with my parent.',
            'Do nothing'
        ],
        statement: 'Imagine a situation where your partner tells you that your parent did something bad that seems unbelievable. I would then:',
        itemWeight: NumberLong(5),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/HC04.svg'
    },
    {


        factorId: 'COF04',

        itemId: 'HC05',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I won’t share the bed with my partner if we have a fight.',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/HC05.svg'
    },
    {


        factorId: 'OE007',

        itemId: 'HI01',
        itemType: 'MS',

        optionBullets: [
            'Reading',
            'Photography',
            'Startups',
            'Volunteering for social cause',
            'Binge watching',
            'Gardening',
            'Drinking',
            'Hiking',
            'Cooking',
            'Traveling',
            'Walking',
            'Movies or shows',
            'Playing any sport',
            'Watching sports',
            'Spirituality',
            'Gym',
            'Painting',
            'Dancing',
            'Singing',
            'Beaches',
            'Board games',
            'Writing',
            'Smoking',
            'Video games',
            'Visiting places of worship',
            'Listening to music',
            'Cycling',
            'Drugs',
            'swimming',
            'Playing chess',
            'Drawing'
        ],
        statement: 'I am into:',
        itemWeight: NumberLong(7),
        multiSelectItemConnectMax: NumberLong(5),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/HI01.svg'
    },
    {


        factorId: 'NY010',

        itemId: 'HI03',
        itemType: 'MS',

        optionBullets: [
            'Ambitious',
            'Affectionate',
            'Charming',
            'Compassionate',
            'Considerate',
            'Expressive',
            'Fearless',
            'Forgiving',
            'Good-looking',
            'Honest',
            'Humorous',
            'Kind',
            'Loyal',
            'Mature at handling anger',
            'Open-minded',
            'Patient',
            'Quiet',
            'Respectful',
            'Sincere',
            'Spontaneous',
            'Talkative',
            'Trustworthy'
        ],
        statement: 'Pick top 5 qualities you would prefer your partner to have:',
        itemWeight: NumberLong(5),
        multiSelectItemConnectMax: NumberLong(5)
    },
    {


        factorId: 'NY010',

        itemId: 'IC02',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I don’t mind losing a game to my partner if that makes my partner feel good.',
        itemWeight: NumberLong(1),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/IC02.svg'
    },
    {


        factorId: 'PHI09',

        itemId: 'PI03',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I’ll make it clear to my partner if and when I am unhappy in bed.',
        itemWeight: NumberLong(3),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/PI03.svg'
    },
    {


        factorId: 'PHI09',

        itemId: 'PI04',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I would like to keep sex in a traditional manner and not experiment with new things with my partner.',
        itemWeight: NumberLong(1),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/PI04.svg'
    },
    {


        factorId: 'PY013',

        itemId: 'SI01',
        itemType: 'S',

        optionBullets: ['Agree', 'Disagree'],
        statement: 'I believe in God or a higher power.',
        itemWeight: NumberLong(7),
        itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/SI01.svg'
    },

];

for (obj of kypIssuesObj) {
    var itemid = obj.itemId + "";
    if (db.LIItems.findOne({ itemId: itemid }) !== null) {
        db.LIItems.updateMany(
            { itemId: itemid },
            {
                $set: {

                    factorId: obj.factorId,
                    itemId: obj.itemId,
                    itemType: obj.itemType,
                    optionBullets: obj.optionBullets,
                    statement: obj.statement,
                },
            }
        );
    } else {
        db.LIItems.insertOne(obj);
        db.LIItems.createIndex({ itemId: 1 });
    }
}

db.LCItems.insertOne({"itemId": "KK01",
  "itemType": "L",
  "createdAt": 1659758000,
  "factorId": "FIC07",
  "logicType": "",
  "isActive": true,
  "statement": "A couple can plan for a child, especially if the biological clock is ticking, even if they don’t agree on finances around raising a child.",
  "optionBullets": null

});