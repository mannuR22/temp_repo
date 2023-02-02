








db.LIItems.insertOne({
    factorId: 'IS011',
    itemId: 'KDG03',
    itemType: 'S',
    optionBullets: ['Agree', 'Disagree'],
    statement: 'After I commit, I want to wait for at least two years before having/adopting kids.',
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/KDG03.svg',
    itemWeight: NumberLong(5)
});
db.LIItems.insertOne({

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
});
db.LIItems.insertOne({
    factorId: '',
    itemId: 'CT011',
    itemType: 'C',
    optionBullets: ["Yes", "No"],
    statement: 'Do you have someone special that you see a future with?',
    itemWeight: NumberLong(1)
});

db.LIItems.insertOne({
    factorId: 'IS011',
    itemId: 'KD02',
    itemType: 'S',
    optionBullets: ['Agree', 'Disagree'],
    statement: 'The primary responsibility of raising a child belongs to the woman, not the man.',
    itemWeight: NumberLong(1)
});
db.LIItems.insertOne({
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
});
db.LIItems.insertOne({


    factorId: 'OS001',

    itemId: 'BD01',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I prefer my partner not to have many friends of opposite gender and similar age group.',
    itemWeight: NumberLong(5),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/BD01.svg'
});
db.LIItems.insertOne({


    factorId: 'OS001',

    itemId: 'BD02',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I don’t mind my partner looking through my cell phone.',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/BD02.svg'
});
db.LIItems.insertOne({


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
});
db.LIItems.insertOne({


    factorId: 'EOM05',

    itemId: 'EI02',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: "At the end of a stressful day at work, I expect my partner to comfort me, irrespective of how my partner's day went.",
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EI02.svg'
});
db.LIItems.insertOne({


    factorId: 'XY003',

    itemId: 'EX01',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: "The man doesn't need to help the woman in the household chores unless she specifically asks or communicates about it.",
    itemWeight: NumberLong(5),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX01.svg'
});
db.LIItems.insertOne({


    factorId: 'XY003',

    itemId: 'EX04',
    itemType: 'S',

    optionBullets: ['Every day', 'Once a week', 'Once in 2 weeks', 'Once a month'],
    statement: 'How often would you like to do fun or romantic activities with your partner - for example, taking a walk, gardening, watching movies, etc.? ',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX04.svg'
});
db.LIItems.insertOne({


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
});
db.LIItems.insertOne({


    factorId: 'XY003',

    itemId: 'EX07',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I would like my partner and I to spend time with other couples by inviting them over for dinner or potluck.',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX07.svg'
});
db.LIItems.insertOne({


    factorId: 'XY003',

    itemId: 'EX08',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I would like my partner and I to go on trips with other couples who are friends.',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/EX08.svg'
});
db.LIItems.insertOne({


    factorId: 'FIC07',

    itemId: 'FN01',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'Money should not be given to even immediate family if your partner disapproves of it after discussion.',
    itemWeight: NumberLong(7),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/FN01.svg'
});
db.LIItems.insertOne({


    factorId: 'FIC07',

    itemId: 'FN04',
    itemType: 'MS',
    optionBullets: ['My parents', "Partner's parents", 'Friends/Relatives', 'None'],
    statement: 'You as a couple need some extra money to cover certain expense - vacation, home, car etc. With whom are you okay to take money from to cover your expense?',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/FN04.svg'
});
db.LIItems.insertOne({


    factorId: 'COF04',
    itemId: 'HC02',
    itemType: 'S',
    optionBullets: ['Agree', 'Disagree'],
    statement: 'After a fight with my partner, I would not speak to my partner for a few days to maintain peace.',
    itemWeight: NumberLong(1),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/HC02.svg'
});
db.LIItems.insertOne({


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
});
db.LIItems.insertOne({


    factorId: 'COF04',

    itemId: 'HC05',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I won’t share the bed with my partner if we have a fight.',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/HC05.svg'
});
db.LIItems.insertOne({


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
});
db.LIItems.insertOne({


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
});
db.LIItems.insertOne({


    factorId: 'NY010',

    itemId: 'IC02',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I don’t mind losing a game to my partner if that makes my partner feel good.',
    itemWeight: NumberLong(1),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/IC02.svg'
});
db.LIItems.insertOne({


    factorId: 'PHI09',

    itemId: 'PI03',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I’ll make it clear to my partner if and when I am unhappy in bed.',
    itemWeight: NumberLong(3),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/PI03.svg'
});
db.LIItems.insertOne({


    factorId: 'PHI09',

    itemId: 'PI04',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I would like to keep sex in a traditional manner and not experiment with new things with my partner.',
    itemWeight: NumberLong(1),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/PI04.svg'
});
db.LIItems.insertOne({


    factorId: 'PY013',

    itemId: 'SI01',
    itemType: 'S',

    optionBullets: ['Agree', 'Disagree'],
    statement: 'I believe in God or a higher power.',
    itemWeight: NumberLong(7),
    itemImageUrl: 'https://happilyever-media.s3.ap-south-1.amazonaws.com/LC_Item_Images/KYP/SI01.svg'
});



db.LIItems.updateOne({ itemId: "CQ05" }, { $set: { statement: "Getting external help even for serious relationship issues should be avoided." } });
db.LIItems.updateOne({ itemId: "RV06" }, { $set: { statement: "It's okay to take a few months to find a groove with your partner in bed." } });
db.LIItems.updateOne({ itemId: "MV06" }, { $set: { statement: "It's okay to take a few years to find a groove with your partner in bed." } });


db.LCItemLines.updateOne({ itemId: "FN02" }, {
    $set: {
        options: [
            {
                commonOneLiner:
                    'Both of you would bring up every expense either of you make.',
            },
            {
                commonOneLiner:
                    'Both of you would not inform your partner regarding every expense.',
            },
        ]
    }
})

db.LCItemLines.updateOne({ itemId: 'IC02' }, {
    $set: {
        uncommonOneLiner:
      "{{name}} doesn’t mind losing a game to {{hisPronoun}} partner if that makes {{hisPronoun}} partner feel good. {{otherName}} doesn't like to lose for the sake of {{hisOtherPronoun}} partner.",
    }
})
db.LCItemLines.updateOne({ itemId: "BD06" }, {
    $set: {
        "uncommonParaHeader": "Each of you can't compromise on specific things in marriage.",
    }
})

db.LCItems.insertOne({
    
    
    "isActive": true,
    "itemId": "CT010",
    "itemType": "CS",
    "factorId": "",
    "statement": "Do you have kids?",
    "optionBullets": [
      "Yes",
      "No"
    ]
});


db.LCItems.insertOne(
    {
        "logicType": "AD02",
        "isActive": true,
        "itemId": "KD02",
        "itemType": "AD",
        "factorId": "",
        "statement": "The primary responsibility of raising a child belongs to the woman, not the man.",
        "optionBullets": [
          "Agree",
          "disagree"
        ]
      }
);

db.LCItems.insertOne({
    
    "isActive": true,
    "itemId": "CT009",
    "itemType": "CS",
    "factorId": "",
    "statement": "What brings you here? Choose the most appropriate one.",
    "optionBullets": [
      "I am struggling and longing to find a life partner",
      "I have issues in my relationship",
      "I want to make my relationship more exciting",
      "I am just curious",
      "I want to check compatibility"
    ]
  });

  db.LIItems.insertOne(
    {
        "logicType": "AD02",
        "isActive": true,
        "itemId": "KD02",
        "itemType": "AD",
        "factorId": "",
        "statement": "The primary responsibility of raising a child belongs to the woman, not the man.",
        "optionBullets": [
          "Agree",
          "disagree"
        ]
      }
);


db.LCItems.insertOne({

  "logicType": "",
  "isActive": true,
  "itemId": "CT011",
  "itemType": "CS",
  "factorId": "",
  "statement": "Do you have someone special that you see a future with?",
  "optionBullets": [
    "Yes",
    "No"
  ],
});

db.LIItems.updateMany({"itemId": "CTNG00"}, { $set: {
  "optionBullets": [
    "Committed relationship",
    "Seeing someone",
    "Dating",
    "Single"
  ]
}});
db.LCItems.updateMany({"itemId": "CT008"}, { $set: {
  "statement" : "Your relationship status:",
  "optionBullets": [
    "Committed relationship",
    "Seeing someone",
    "Dating",
    "Single"
  ]
}});


db.LCItems.updateMany({"itemId": "CT002"}, { $set: {
  "statement": "Married Before?",
  "optionBullets": [
      "Yes",
      "No",
      
    ]
  }})

  db.LCItems.updateMany({"itemId": "CT001"}, { $set: {
    "statement" : "Your relationship status:",
    "optionBullets": [
        "Married",
        "Committed relationship",
        "Seeing someone",
        "Dating",
        "Single"
      ]
    }})
  db.LIItems.updateOne({ itemId: "CQ12" }, {
      $set: {
          "statement": "You and your partner had a fight and said hurtful things to each other. Your partner is angry and they go into the room and slam the door. You can tell that your partner feels hurt and sad. Since you also feel hurt, you play some soothing music. You feel a little better. What do you do now?",
          "optionBullets": [
              "You ask your partner if you can do anything to make them feel better.",
              "You let it go since you know it will get better.",
              "You tell your partner that you are fine now and they will be fine as well soon.",
              "You avoid interacting with them since you know it will cause another fight."
          ]
      }
  });
  
    db.LIItems.updateOne({ itemId: "CQ13" }, {
      $set: {
          "statement": "You and your partner are having a dull sex life. You spoke about it, but to no avail. To improve your knowledge, your partner gives you a book. The book is a good guide to improve one's sex life. How would you react?",
          "optionBullets": [
              "You will tell them that they have to be better at expressing what they want, instead of giving you a book and asking you to read.",
              "You read the book or view online media covering the book's topics even if it feels a bit insulting.",
              "Sex is basic like hunger. One doesn't need to read a book for it.",
              "You tell your partner that we can still be happy with the way it is right now. Over time, things will automatically get better like most couples."
          ]
      }
  });
  
  db.LIItems.updateOne({ itemId: "CQ14" }, {
      $set: {
          "statement": "Your partner is very busy with work and has been neglecting you for a while. You feel alone despite having a partner. In an attempt to spend time with your partner, you surprise them with movie tickets. Unfortunately, they have a meeting with the CEO and can't go with you. What would you do?",
          "optionBullets": [
              "You try to be understanding of them. You let it go.",
              "Give them hints that you are unhappy.",
              "Make them aware of how you are feeling sooner or later.",
              "You plan a new surprise for another day.",
          ]
      }
  });
  
  db.LIItems.updateOne({ itemId: "CQ15" }, {
      $set: {
          "statement": "Your partner politely brings up an issue, blaming you unnecessarily. You feel irritated. You begin to explain. Your partner stops you and asks you to let them finish. The more you listen, the more angry you become. Their words feel repetitive and unlikely to end soon. What is your immediate reaction?",
          "optionBullets": [
              "You will express your irritation.",
              "You will walk away to calm yourself down.",
              "You will tell them not to repeat themselves and get to the point.",
              "You just continue to listen."           
          ]
      }
  });

   db.LCItems.updateOne({ itemId: "CQ05" }, {
      $set: {
          "statement": "Getting external help even for serious relationship issues should be avoided.",
      }
  });