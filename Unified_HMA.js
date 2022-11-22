db.LIItems.updateOne({ itemId: "RV01" }, { $set: { "statement": "You need to change beyond what you think for a happy relationship." } });
db.LIItems.updateOne({ itemId: "RV02" }, { $set: { "statement": "Relationship counseling is mainly for couples who have issues." } });
db.LIItems.updateOne({ itemId: "RV03" }, { $set: { "statement": "You need not consult your partner for decisions that you feel they will oppose." } });
db.LIItems.updateOne({ itemId: "RV04" }, { $set: { "statement": "The relationship will be in trouble if sex for the first time doesn't go well." } });
db.LIItems.updateOne({ itemId: "RV05" }, { $set: { "statement": "The key to a good relationship is doing everything together." } });
db.LIItems.updateOne({ itemId: "RV06" }, { $set: { "statement": "It's okay to take a few years to find a groove with your partner in bed." } });
db.LIItems.updateOne({ itemId: "RV07" }, { $set: { "statement": "The key to a happy relationship is to let go of your expectations that are not met." } });
db.LIItems.updateOne({ itemId: "RV08" }, { $set: { "statement": "It's okay to consult an expert to check if what you expect from your partner is reasonable." } });
db.LIItems.updateOne({ itemId: "RV09" }, { $set: { "statement": "Arguments in the first three months of a relationship are not a healthy sign." } });
db.LIItems.updateOne({ itemId: "RV10" }, { $set: { "statement": "You don't need to interact with your partner's parents if you don't like them." } });
db.LIItems.updateOne({ itemId: "RV11" }, { $set: { "statement": "It's okay to get married as you grow old regardless of your financial stability." } });
db.LIItems.updateOne({ itemId: "RV12" }, { $set: { "statement": "You find it difficult to say no to your partner as it makes you uncomfortable." } });

db.LIItems.updateOne({ itemId: "CQ01" }, { $set: { "statement": "If my partner has bad habits, I'll be able to change them with time. " } });
db.LIItems.updateOne({ itemId: "CQ02" }, { $set: { "statement": "You would skip bringing up difficult topics with your partner to avoid conflict." } });
db.LIItems.updateOne({ itemId: "CQ03" }, { $set: { "statement": "It's okay to stick with your current way of having sex if talking about changing it feels awkward." } });
db.LIItems.updateOne({ itemId: "CQ04" }, { $set: { "statement": "You should engage in your partner's interests at times even if you don't like it. " } });
db.LIItems.updateOne({ itemId: "CQ05" }, { $set: { "statement": "You don't seek help to find solutions to serious problems such as infidelity or abuse." } });
db.LIItems.updateOne({ itemId: "CQ06" }, { $set: { "statement": "It's better to move on if your partner doesn't seem to understand what you're trying to say. " } });
db.LIItems.updateOne({ itemId: "CQ07" }, { $set: { "statement": "If my partner yells at me for something that is not my fault, I would yell back at them." } });
db.LIItems.updateOne({ itemId: "CQ08" }, { $set: { "statement": "When your partner provokes you, you're not at fault for getting angry." } });
db.LIItems.updateOne({ itemId: "CQ09" }, { $set: { "statement": "Exposing your vulnerable side to your partner makes you weak." } });
db.LIItems.updateOne({ itemId: "CQ10" }, { $set: { "statement": "It's okay to do what your partner expects of you, even if you don't like it much." } });
db.LIItems.updateOne({ itemId: "CQ11" }, { $set: { "statement": "Couples need to be explicit with their parents about boundaries." } });

db.LIItems.updateOne({ itemId: "MV02" }, { $set: { "statement": "Premarital counseling is mainly for couples who have issues." } });
db.LIItems.updateOne({ itemId: "MV06" }, { $set: { "statement": "It's okay to take a few years to find a groove with your partner in bed." } });
db.LIItems.updateOne({ itemId: "MV11" }, { $set: { "statement": "It's crucial to convey even the tiny details about the wedding expectations to your partner's family." } });
db.LIItems.updateOne({ itemId: "MV13" }, { $set: { "statement": "You should include your partner when making decisions about your own money." } });


db.LIItems.updateOne({ itemId: "KKG01" }, { $set: { "statement": "Couples who disagree on finances can nevertheless plan for a child." } });



db.LIItems.updateOne({ itemId: "CQ12" }, {
    $set: {
        "statement": "You and your partner had a fight and said hurtful things to each other. Your partner is angry and they go into the room and slam the door. You can tell that your partner feels hurt and sad. Since you also feel hurt, you play some soothing music.  You feel a little better. What do you do now?",
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
        "statement": "You and your partner are having a dull sex life.You spoke about it, but to no avail.To improve your knowledge, your partner gives you a book.The book is a good guide to improve one's sex life. How would you react?",
        "optionBullets": [
            "You will tell them that they have to be better at expressing what they want, instead of giving you a book and asking you to read.",
            "You read the book or view online media covering the book's topics even if it feels a bit insulting.",
            "Sex is basic like hunger.One doesn't need to read a book for it.",
            "You tell your partner that we can still be happy with the way it is right now.Over time, things will automatically get better like most couples."
        ]
    }
});

db.LIItems.updateOne({ itemId: "CQ14" }, {
    $set: {
        "statement": "Your partner is very busy with work and has been neglecting you for a while.You feel alone despite having a partner.In an attempt to spend time with your partner, you surprise them with movie tickets.Unfortunately, they have a meeting with the CEO and can't go with you. What would you do?",
        "optionBullets": [
            "You try to be understanding of them.You let it go.",
            "Give them hints that you are unhappy.",
            "Make them aware of how you are feeling sooner or later.",
            "You plan a new surprise for another day.",
        ]
    }
});

db.LIItems.updateOne({ itemId: "CQ15" }, {
    $set: {
        "statement": "Your partner politely brings up an issue, blaming you unnecessarily.You feel irritated.You begin to explain.Your partner stops you and asks you to let them finish.The more you listen, the more angry you become.Their words feel repetitive and unlikely to end soon.What is your immediate reaction?",
        "optionBullets": [
            "You will express your irritation.",
            "You will walk away to calm yourself down.",
            "You will tell them not to repeat themselves and get to the point.",
            "You just continue to listen."           
        ]
    }
});

db.LIItems.updateOne( {"itemId": "CT001"}, {$set: {
    "statement": "Your relationship status?",
    "optionBullets": [
      "Married",
      "Committed relationship",
      "Seeing someone",
      "Dating",
      "Single"
    ]  
}})

db.LIItems.insertOne({
    "itemId": "AT001",
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "I wish I could find someone who understands me and accepts me for who I am.",
        "I'm not sure if I'm ready for a relationship.",
        "It’s difficult for me to approach a boy / girl.",
        "I feel lonely and couples make me feel even lonelier.",
        "I’m tired of boring, repetitive first dates.",
        "I don't know how to improve my relationships.",
        "Others."
    ],
});

db.LIItems.insertOne({
    "itemId": "AT002",
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "I don’t know if I’m with the right person.",
        "My relationship feels dull and I don’t know how to fix it." ,
        "I want to become a better partner.",
        "I want to take my relationship to the next level.",
        "Others"
    ],
});

db.LIItems.insertOne({
    "itemId": "AT003",
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "I want to take my relationship to the next level.",
        "I want to become a better partner.",
        "My relationship feels dull and I don’t know how to fix it.",
        "I wish we could be as happy as we used to be.",
        "I feel stressed and suffocated, and I don’t know what to do.",
        "Others"
    ],
});

db.LIItems.insertOne({
    "itemId": "AT004",
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "No longer feeling a spark.",
        "Too busy to spend time together.",
        "Haven’t had physical intimacy in a long time.",
        "Emotionally distant.",
        "I wish we could be as happy as we used to be.",
        "I feel stressed and suffocated, and I don’t know what to do." ,
        "Others",
    ],
});

db.LIItems.insertOne({
    "itemId": "CA01",
    "statement": "What makes you feel attracted to someone?",
    "itemType": "MS",
    "optionBullets": [
        "Shared interests and hobbies.",
        "Characteristics such as honesty, openness to new experiences, etc.",
        "Their appearance - face, height, etc.",
        "Intelligence", 
        "Emotional connection",
        "Other"
    ],
});

db.LIItems.insertOne({
    "itemId": "CS02",
    "statement": "Do relationships scare you?",
    "itemType": "S",
    "optionBullets": [
        "Yes",
        "No",
        "Sometimes",
        "If Yes/Sometimes Why?", 
    ],
});

db.LIItems.insertOne({
    "itemId": "CI05",
    "statement": "What makes a relationship work?",
    "itemType": "MS",
    "optionBullets": [
        "Understanding each other",
        "Love",
        "Kundali match",
        "Compatibility ",
        "Patience",
        "Forgiveness",
        "Mature conflict management ",
        "Unconditional acceptance",
        "Respect",
        "Support and sharing" ,
        "Other" 
    ],
});

db.LIItems.insertOne({
    
    "itemId": "IN04",
    "statement": "Name/nickname",
    "itemType": "IN",
    "optionBullets": [],
});


db.LIItems.insertOne({
    
    "itemId": "IN09",
    "statement": "Phone number",
    "itemType": "IN",
    "optionBullets": [],
});

db.LIItems.updateOne({"itemId": "AEHM01"},{ $set:{
    "itemType": "C",
    "factorId": "",
    "statement": "What is your age range?",
    "optionBullets": [
      "Under 18 years",
      "18-24 years",
      "25-29 years",
      "30-39 years",
      "40-49 years",
      "50+"
    ]
}});

db.LIItems.insertOne({
    "itemId": "CTNG00",
    "itemType": "C",
    "factorId": "",
    "statement": "What is your relationship status?",
    "optionBullets": [
      "Committed relation",
      "Seeing someone",
      "Dating",
      "Single"
    ]
});

db.LAssessments.updateOne({"assessmentId": "b61634c1-3d45-47b8-9ddd-9c96fdd50ff4"},{ $set:{
    "pages": [
        {
        "itemIds": [ "GTXY01", ],
        "pageId": "A7000",
        "decisionItems": [ "GTXY01", ],
        "nextPageDecisionBlocks": [
            {
                "regExCode": "0",
                "nextPageId": "A13000"
            },
            {
                "regExCode": "1",
                "nextPageId": "B7000"
            }
        ]
        },
        {
            "itemIds": [ "CLSM01", ],
            "pageId": "B7000",
            "decisionItems": [ "CLSM01", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A13000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A35000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A13000"
                }
            ]
        },
  
  
  
        {
            "itemIds": [ "AEHM01", ],
            "pageId": "A13000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B13000"
                },
            ]
        },
        {
            "itemIds": [ "CT001", ],
            "pageId": "B13000",
            "decisionItems": [ "CT001", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "G13000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C13000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "C13000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C13000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "C13000"
                }
            ]
        },
        {
            "itemIds": [ "CT002", ],
            "pageId": "C13000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D13000"
                }
            ]
        },
        {
            "itemIds": [ "CT003", ],
            "pageId": "D13000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "E13000"
                }
  
                
            ]
        },
        {
            "itemIds": [ "IN15", ],
            "pageId": "E13000",
            "decisionItems": [ "IN15", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "G13000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "F13000"
                },
                
            ]
        },
        {
            "itemIds": [ "CT005", ],
            "pageId": "F13000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "H13000"
                },
                
            ]
        },
        {
            "itemIds": [ "CT004", ],
            "pageId": "G13000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "H13000"
                },
    
            ]
        },
        {
            "itemIds": [ ],
            "pageId": "H13000",
            "decisionItems": [ "CT001", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "D14000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C14000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B14000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "A14000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "A14000"
                },
  
            ]
        },
  
  
  
        {
            "itemIds": [ "AT001", ],
            "pageId": "A14000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A15000"
                },
            ]
        },
        {
            "itemIds": [ "AT002", ],
            "pageId": "B14000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                
                {
                    "regExCode": "*",
                    "nextPageId": "A15000"
                },
            ]
        },
        {
            "itemIds": [ "AT003", ],
            "pageId": "C14000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                
                {
                    "regExCode": "*",
                    "nextPageId": "A15000"
                }
            ]
        },
        {
            "itemIds": [ "AT004", ],
            "pageId": "D14000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A15000"
                }
            ]
        },
  
  
  
        {
            "itemIds": [ "CA01", ],
            "pageId": "A15000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B15000"
                }
            ]
        },
        {
            "itemIds": [ "CS02", ],
            "pageId": "B15000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C15000"
                },
                
            ]
        },
        {
            "itemIds": [ "CI05", ],
            "pageId": "C15000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A16000"
                },
            ]
        },
  
  
  
        
        {
            "itemIds": [ "IN09", ],
            "pageId": "A16000",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A16001"
                }
            ]
        },
        {
            "itemIds": [ "IN04",],
            "pageId": "A16001",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A16002"
                }
            ]
        },
        {
            "itemIds": [ "GPHM01" ],
            "pageId": "A16002",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B16000"
                }
            ]
        },
        {
            "itemIds": [ "LINS"],
            "pageId": "B16000",
            "decisionItems": [ "IN15"],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A17000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "B16001"
                },
                
                
            ]
        },
        {
            "itemIds": [],
            "pageId": "B16001",
            "decisionItems": ["AEHM01"],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "D17000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "D17000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B17000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B17000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "B17000"
                },
                {
                    "regExCode": "5",
                    "nextPageId": "B17000"
                },
            ]
        },
  
  
  
        {
            "itemIds": [ "CQ01", ],
            "decisionItems": [ ],
            "pageId": "A17000",
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17002"
                }
            ]
        },
        {
            "itemIds": [ "CQ02", ],
            "pageId": "A17002",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17003"
                }
            ]
        },
        {
            "itemIds": [ "CQ03", ],
            "decisionItems": [ ],
            "pageId": "A17003",
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17004"
                }
            ]
        },
        {
            "itemIds": [ "CQ04", ],
            "decisionItems": [ ],
            "pageId": "A17004",
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17005"
                }
            ]
        },
        {
            "itemIds": [ "CQ05", ],
            "decisionItems": [ ],
            "pageId": "A17005",
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17006"
                }
            ]
        },
        {
            "itemIds": [ "CQ06", ],
            "pageId": "A17006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17007"
                }
            ]
        },
        {
            "itemIds": [ "CQ07", ],
            "pageId": "A17007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17008"
                }
            ]
        },
        {
            "itemIds": [ "CQ08", ],
            "pageId": "A17008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17009"
                }
            ]
        },
        {
            "itemIds": [ "CQ09", ],
            "pageId": "A17009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17010"
                }
            ]
        },
        {
            "itemIds": [ "CQ10", ],
            "pageId": "A17010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A17011"
                }
            ]
        },
        {
            "itemIds": [ "CQ11", ],
            "pageId": "A17011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A18000"
                }
            ]
        },
  
        
        {
            "itemIds": [ "RV01", ],
            "pageId": "B17000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17001"
                }
            ]
        },
        {
            "itemIds": [ "RV02", ],
            "pageId": "B17001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17002"
                }
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "B17002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17004"
                }
            ]
        },
        
        {
            "itemIds": [ "RV05", ],
            "pageId": "B17004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17006"
                }
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "B17006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17007"
                }
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "B17007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17008"
                }
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "B17008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17009"
                }
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "B17009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17010"
                }
            ]
        },
        {
            "itemIds": [ "RV11", ],
            "pageId": "B17010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17011"
                }
            ]
        },
        {
            "itemIds": [ "RV12", ],
            "pageId": "B17011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17012"
                }
            ]
        },
        {
            "itemIds": [ "CQ01", ],
            "pageId": "B17012",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17013"
                }
            ]
        },
        {
            "itemIds": [ "CQ02", ],
            "pageId": "B17013",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17014"
                }
            ]
        },
        {
            "itemIds": [ "CQ04", ],
            "pageId": "B17014",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17015"
                }
            ]
        },
        {
            "itemIds": [ "CQ05", ],
            "pageId": "B17015",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17016"
                }
            ]
        },
        {
            "itemIds": [ "CQ06", ],
            "pageId": "B17016",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17017"
                }
            ]
        },
        {
            "itemIds": [ "CQ07", ],
            "pageId": "B17017",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17018"
                }
            ]
        },
        {
            "itemIds": [ "CQ08", ],
            "pageId": "B17018",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17019"
                }
            ]
        },
        {
            "itemIds": [ "CQ09", ],
            "pageId": "B17019",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17020"
                }
            ]
        },
        {
            "itemIds": [ "CQ10", ],
            "pageId": "B17020",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B17021"
                }
            ]
        },
        {
            "itemIds": [ "CQ11", ],
            "pageId": "B17021",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C17000"
                }
            ]
        },
  
        {
            "itemIds": [ ],
            "pageId": "C17000",
            "decisionItems": [ "CT005", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "C18000"
                },
                {
                    "regExCode": "1",
                    "nextPageId":"A23000"
                }
            ]
        },
        
        {
            "itemIds": [ "RV01", ],
            "pageId": "D17000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17001"
                },
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "D17001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17002"
                },
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "D17002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17003"
                },
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "D17003",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17004"
                },
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "D17004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17005"
                },
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "D17005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17006"
                },
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "D17006",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17007"
                },
            ]
        },
        {
            "itemIds": [ "CQ01", ],
            "pageId": "D17007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17008"
                },
            ]
        },
        {
            "itemIds": [ "CQ02", ],
            "pageId": "D17008",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17009"
                },
            ]
        },
        {
            "itemIds": [ "CQ04", ],
            "pageId": "D17009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17010"
                },
            ]
        },
        {
            "itemIds": [ "CQ06", ],
            "pageId": "D17010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17011"
                },
            ]
        },
        {
            "itemIds": [ "CQ07", ],
            "pageId": "D17011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17012"
                },
            ]
        },
        {
            "itemIds": [ "CQ08", ],
            "pageId": "D17012",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17013"
                },
            ]
        },
        {
            "itemIds": [ "CQ09", ],
            "pageId": "D17013",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D17014"
                },
            ]
        },
        {
            "itemIds": [ "CQ10", ],
            "pageId": "D17014",
            "decisionItems": [ "AEHM01", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "C17000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C17000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "C17000"
                },
                {
                    "regExCode": "5",
                    "nextPageId": "C17000"
                },
            ]
        },
  
        
  
        {
            "itemIds": [  ],
            "pageId": "A18000",
            "decisionItems": [ "CT001", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A20000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "B20000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B19000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B19000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "B19000"
                }
            ]
        },
  
        
        {
            "itemIds": [ "RV04", ],
            "pageId": "C18000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C18001"
                }
            ]
        },
        {
            "itemIds": [ "RV06", ],
            "pageId": "C18001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C18002"
                }
            ]
        },
        {
            "itemIds": [ "CQ03", ],
            "pageId": "C18002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C18003"
                }
            ]
        },
        {
            "itemIds": [ "CQ13", ],
            "pageId": "C18003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23000"
                }
            ]
        },
  
  
  
        {
            "itemIds": [ "RV01", ],
            "pageId": "A19000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19001"
                },
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "A19001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19002"
                },
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "A19002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19003"
                },
            ]
        },
        {
            "itemIds": [ "MV06", ],
            "pageId": "A19003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19004"
                },
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "A19004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19005"
                },
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "A19005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19006"
                },
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "A19006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19007"
                },
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "A19007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19008"
                },
            ]
        },
        {
            "itemIds": [ "MV13", ],
            "pageId": "A19008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A19009"
                },
            ]
        },
        {
            "itemIds": [ "MV14", ],
            "pageId": "A19009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A20000"
                },
            ]
        },
  
        {
            "itemIds": [  ],
            "pageId": "B19000",
            "decisionItems": [ "CT002", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "B20000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C19000"
                }
            ]
        },
  
        {
            "itemIds": [ ],
            "pageId": "C19000",
            "decisionItems": [ "CT003", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "C20000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C20000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B20000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C20000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "C20000"
                },
                {
                    "regExCode": "5",
                    "nextPageId": "C20000"
                }
            ]
        },
        
  
  
        {
            "itemIds": [ ],
            "pageId": "A20000",
            "decisionItems": [ "CT004", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A21000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "A21000"
                }
            ]
        },
  
        {
            "itemIds": [ "RV01", ],
            "pageId": "B20000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20001"
                },
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "B20001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20002"
                },
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "B20002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20003"
                },
            ]
        },
        {
            "itemIds": [ "MV06", ],
            "pageId": "B20003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20004"
                },
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "B20004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20005"
                },
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "B20005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20006"
                },
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "B20006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20007"
                },
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "B20007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20008"
                },
            ]
        },
        {
            "itemIds": [ "MV13", ],
            "pageId": "B20008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20009"
                },
            ]
        },
        {
            "itemIds": [ "MV14", ],
            "pageId": "B20009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20010"
                },
            ]
        },
        {
            "itemIds": [ "MV02", ],
            "pageId": "B20010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20011"
                },
            ]
        },
        {
            "itemIds": [ "RV04", ],
            "pageId": "B20011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20012"
                },
            ]
        },
        {
            "itemIds": [ "MV11", ],
            "pageId": "B20012",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20013"
                },
            ]
        },
        {
            "itemIds": [ "RV11", ],
            "pageId": "B20013",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20014"
                },
            ]
        },
        {
            "itemIds": [ "CQ13", ],
            "pageId": "B20014",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B21000"
                },
            ]
        },
        
        {
            "itemIds": [ "RV01", ],
            "pageId": "C20000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20001"
                },
            ]
        },
        {
            "itemIds": [ "RV02", ],
            "pageId": "C20001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20002"
                },
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "C20002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20003"
                },
            ]
        },
        {
            "itemIds": [ "RV04", ],
            "pageId": "C20003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20004"
                },
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "C20004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20005"
                },
            ]
        },
        {
            "itemIds": [ "RV06", ],
            "pageId": "C20005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20006"
                },
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "C20006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20007"
                },
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "C20007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20008"
                },
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "C20008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20009"
                },
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "C20009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20010"
                },
            ]
        },
        {
            "itemIds": [ "RV11", ],
            "pageId": "C20010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20011"
                },
            ]
        },
        {
            "itemIds": [ "RV12", ],
            "pageId": "C20011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C20012"
                },
            ]
        },
        {
            "itemIds": [ "CQ13", ],
            "pageId": "C20012",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C21000"
                },
            ]
        },
        
  
        {
            "itemIds": [ "KK01", ],
            "pageId": "A21000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23000"
                }
            ]
        },
        {
            "itemIds": [ ],
            "pageId": "B21000",
            "decisionItems": [ "CT004", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "B22000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B22000"
                },
            ]
        },  
  
        {
            "itemIds": [ ],
            "pageId": "C21000",
            "decisionItems": [ "CT004", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "C22000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A23000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C22000"
                },
            ]
        },
        
        
        {
            "itemIds": [ "KK01" ],
            "pageId": "B22000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23000"
                },
            ]
        },
        {
            "itemIds": [ "KK01" ],
            "pageId": "C22000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23000"
                },
            ]
        },
  
  
  
        {
            "itemIds": [ "CQ15", ],
            "pageId": "A23000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23001"
                }
            ]
        },
        {
            "itemIds": [ "CQ14", ],
            "pageId": "A23001",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23002"
                }
            ]
        },
        {
            "itemIds": [ "CQ12", ],
            "pageId": "A23002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "END"
                }
            ]
        },
  
  
  
        {
            "itemIds": [ "AEHM01", ],
            "pageId": "A35000",
            "decisionItems": [ "AEHM01",  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "B35000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "B35000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B35000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B35000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "B35000"
                },
                {
                    "regExCode": "5",
                    "nextPageId": "B35000"
                },
            ]
        },
        {
            "itemIds": [ "CTNG00", ],
            "pageId": "B35000",
            "decisionItems": [ "CTNG00", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "F35000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C35000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "C35000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C35000"
                },
            ]
        },
        {
            "itemIds": [ "CTNG02", ],
            "pageId": "C35000",
            "decisionItems": [ "CTNG02", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "F35000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "D35000"
                },
            ]
        },
        {
            "itemIds": [ "CTNG03", ],
            "pageId": "D35000",
            "decisionItems": [ "CTNG03", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "F35000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "E35000"
                },
            ]
        },
        {
            "itemIds": [ "CT005", ],
            "pageId": "E35000",
            "decisionItems": [ "CT005" ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "G35000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "G35000"
                },
            ]
        },
        {
            "itemIds": [ "CT004", ],
            "pageId": "F35000",
            "decisionItems": [ "CT004" ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "G35000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "G35000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "G35000"
                },{
                    "regExCode": "3",
                    "nextPageId": "G35000"
                },
            ]
        },
        {
            "itemIds": [  ],
            "pageId": "G35000",
            "decisionItems": [ "CTNG00", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "C36000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "B36000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A36000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "A36000"
                },
            ]
        },
  
  
  
  
        {
            "itemIds": [ "AT001", ],
            "pageId": "A36000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A37000"
                },
            ]
        },
        {
            "itemIds": [ "AT002", ],
            "pageId": "B36000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A37000"
                },
            ]
        },
        {
            "itemIds": [ "AT003", ],
            "pageId": "C36000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A37000"
                },
            ]
        },
  
  
  
        {
            "itemIds": [ "CA01", ],
            "pageId": "A37000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B37000"
                },
            ]
        },
        {
            "itemIds": [ "CS02", ],
            "pageId": "B37000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C37000"
                },
            ]
        },
        {
            "itemIds": [ "CI05", ],
            "pageId": "C37000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A38000"
                },
            ]
        },
  
  
  
  
        {
            "itemIds": [ "IN09", ],
            "pageId": "A38000",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A38001"
                }
            ]
        },
        {
            "itemIds": [ "IN04",  ],
            "pageId": "A38001",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A38002"
                }
            ]
        },
        {
            "itemIds": [ "GPHM01" ],
            "pageId": "A38002",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B38000"
                }
            ]
        },
        {
            "itemIds": [ "LINS", ],
            "pageId": "B38000",
            "decisionItems": [ "CTNG02" ],
            "nextPageDecisionBlocks": [
                
                {
                    "regExCode": "0",
                    "nextPageId": "A39000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "B38002"
                }
            ]
        },
       
        {
            "itemIds": [ ],
            "pageId": "B38002",
            "decisionItems": [ "AEHM01", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "D39000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "D39000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B39000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B39000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "B39000"
                },
                {
                    "regExCode": "5",
                    "nextPageId": "B39000"
                },
            ]
        },
        {
            "itemIds": [ "LINS", ],
            "pageId": "C38000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39000"
                }
            ]
        },
  
        
  
        {
            "itemIds": [ "CQ01", ],
            "pageId": "A39000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39001"
                }
            ]
        },
        {
            "itemIds": [ "CQ02", ],
            "pageId": "A39001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39002"
                }
            ]
        },
        {
            "itemIds": [ "CQ03", ],
            "pageId": "A39002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39003"
                }
            ]
        },
        {
            "itemIds": [ "CQ04", ],
            "pageId": "A39003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39004"
                }
            ]
        },
        {
            "itemIds": [ "CQ05", ],
            "pageId": "A39004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39005"
                }
            ]
        },
        {
            "itemIds": [ "CQ06", ],
            "pageId": "A39005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39006"
                }
            ]
        },
        {
            "itemIds": [ "CQ07", ],
            "pageId": "A39006",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39007"
                }
            ]
        },
        {
            "itemIds": [ "CQ08", ],
            "pageId": "A39007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39008"
                }
            ]
        },
        {
            "itemIds": [ "CQ09", ],
            "pageId": "A39008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39009"
                }
            ]
        },
        {
            "itemIds": [ "CQ10", ],
            "pageId": "A39009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A39010"
                }
            ]
        },
        {
            "itemIds": [ "CQ11", ],
            "pageId": "A39010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A40000"
                }
            ]
        },
  
        
        {
            "itemIds": [ "RV01", ],
            "pageId": "B39000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39001"
                }
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "B39001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39002"
                }
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "B39002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39003"
                }
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "B39003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39004"
                }
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "B39004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39005"
                }
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "B39005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39006"
                }
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "B39006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39007"
                }
            ]
        },
        {
            "itemIds": [ "CQ01", ],
            "pageId": "B39007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39008"
                }
            ]
        },
        {
            "itemIds": [ "CQ02", ],
            "pageId": "B39008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39009"
                }
            ]
        },
        {
            "itemIds": [ "CQ04", ],
            "pageId": "B39009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39010"
                }
            ]
        },
        {
            "itemIds": [ "CQ06", ],
            "pageId": "B39010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39011"
                }
            ]
        },
        {
            "itemIds": [ "CQ07", ],
            "pageId": "B39011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39012"
                }
            ]
        },
        {
            "itemIds": [ "CQ08", ],
            "pageId": "B39012",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39013"
                }
            ]
        },
        {
            "itemIds": [ "CQ09", ],
            "pageId": "B39013",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B39014"
                }
            ]
        },
        {
            "itemIds": [ "CQ10", ],
            "pageId": "B39014",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C39000"
                }
            ]
        },
  
  
        {
            "itemIds": [  ],
            "pageId": "C39000",
            "decisionItems": [ "CT005", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "C40000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A45000"
                }
            ]
        },
  
        {
            "itemIds": [ "RV01", ],
            "pageId": "D39000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39001"
                }
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "D39001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39002"
                }
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "D39002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39003"
                }
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "D39003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39004"
                }
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "D39004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39005"
                }
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "D39005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39006"
                }
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "D39006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39007"
                }
            ]
        },
        {
            "itemIds": [ "CQ01", ],
            "pageId": "D39007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39008"
                }
            ]
        },
        {
            "itemIds": [ "CQ02", ],
            "pageId": "D39008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39009"
                }
            ]
        },
        {
            "itemIds": [ "CQ04", ],
            "pageId": "D39009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39010"
                }
            ]
        },
        {
            "itemIds": [ "CQ06", ],
            "pageId": "D39010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39011"
                }
            ]
        },
        {
            "itemIds": [ "CQ07", ],
            "pageId": "D39011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39012"
                }
            ]
        },
        {
            "itemIds": [ "CQ08", ],
            "pageId": "D39012",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39013"
                }
            ]
        },
        {
            "itemIds": [ "CQ09", ],
            "pageId": "D39013",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "D39014"
                }
            ]
        },
        {
            "itemIds": [ "CQ10", ],
            "pageId": "D39014",
            "decisionItems": ["AEHM01"  ],
            "nextPageDecisionBlocks": [
                
                {
                    "regExCode": "0",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C39000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "C39000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C39000"
                },
                {
                    "regExCode": "4",
                    "nextPageId": "C39000"
                },
                {
                    "regExCode": "5",
                    "nextPageId": "C39000"
                }
            ]
        },
  
  
  
  
        {
            "itemIds": [ ],
            "pageId": "A40000",
            "decisionItems": [ "CTNG00", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A41000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "B41000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "B41000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B41000"
                }
            ]
        },
  
        {
            "itemIds": [ "RV04", ],
            "pageId": "C40000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C40001"
                }
            ]
        },
        {
            "itemIds": [ "RV06", ],
            "pageId": "C40001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C40002"
                }
            ]
        },
        {
            "itemIds": [ "CQ03", ],
            "pageId": "C40002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C40003"
                }
            ]
        },
        {
            "itemIds": [ "CQ13", ],
            "pageId": "C40003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A45000"
                }
            ]
        },
  
  
  
  
        {
            "itemIds": [ "RV01", ],
            "pageId": "A41000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41001"
                }
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "A41001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41002"
                }
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "A41002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41003"
                }
            ]
        },
        {
            "itemIds": [ "RV06", ],
            "pageId": "A41003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41004"
                }
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "A41004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41005"
                }
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "A41005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41006"
                }
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "A41006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41007"
                }
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "A41007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41008"
                }
            ]
        },
        {
            "itemIds": [ "MV13", ],
            "pageId": "A41008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A41009"
                }
            ]
        },
        {
            "itemIds": [ "RV12", ],
            "pageId": "A41009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A42000"
                }
            ]
        },
  
        {
            "itemIds": [  ],
            "pageId": "B41000",
            "decisionItems": [ "CTNG02", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "B42000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C41000"
                }
            ]
        },
        {
            "itemIds": [  ],
            "pageId": "C41000",
            "decisionItems": [ "CTNG03", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "B42000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "C42000"
                }
            ]
        },
  
  
  
  
        {
            "itemIds": [  ],
            "pageId": "A42000",
            "decisionItems": [ "CT004" ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "A43000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "A43000"
                }
            ]
        },
  
        {
            "itemIds": [ "RV01", ],
            "pageId": "B42000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42001"
                }
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "B42001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42002"
                }
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "B42002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42003"
                }
            ]
        },
        {
            "itemIds": [ "RV06", ],
            "pageId": "B42003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42004"
                }
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "B42004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42005"
                }
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "B42005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42006"
                }
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "B42006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42007"
                }
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "B42007",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42008"
                }
            ]
        },
        {
            "itemIds": [ "MV13", ],
            "pageId": "B42008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42009"
                }
            ]
        },
        {
            "itemIds": [ "RV12", ],
            "pageId": "B42009",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42010"
                }
            ]
        },
        {
            "itemIds": [ "RV02", ],
            "pageId": "B42010",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B42011"
                }
            ]
        },
        {
            "itemIds": [ "RV04", ],
            "pageId": "B42011",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B43000"
                }
            ]
        },
  
        
        {
            "itemIds": [ "RV01", ],
            "pageId": "C42000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42001"
                }
            ]
        },
        {
            "itemIds": [ "RV02", ],
            "pageId": "C42001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42002"
                }
            ]
        },
        {
            "itemIds": [ "RV03", ],
            "pageId": "C42002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42003"
                }
            ]
        },
        {
            "itemIds": [ "RV04", ],
            "pageId": "C42003",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42004"
                }
            ]
        },
        {
            "itemIds": [ "RV05", ],
            "pageId": "C42004",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42005"
                }
            ]
        },
        {
            "itemIds": [ "RV06", ],
            "pageId": "C42005",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42006"
                }
            ]
        },
        {
            "itemIds": [ "RV07", ],
            "pageId": "C42006",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42007"
                }
            ]
        },
        {
            "itemIds": [ "RV08", ],
            "pageId": "C42007",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42008"
                }
            ]
        },
        {
            "itemIds": [ "RV09", ],
            "pageId": "C42008",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42009"
                }
            ]
        },
        {
            "itemIds": [ "RV10", ],
            "pageId": "C42009",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42010"
                }
            ]
        },
        {
            "itemIds": [ "RV11", ],
            "pageId": "C42010",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C42011"
                }
            ]
        },
        {
            "itemIds": [ "RV12", ],
            "pageId": "C42011",
            "decisionItems": [],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "C43000"
                }
            ]
        },
  
  
  
        
        {
            "itemIds": [ "KKG01", ],
            "pageId": "A43000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A45000"
                }
            ]
        },
        
        {
            "itemIds": [  ],
            "pageId": "B43000",
            "decisionItems": [ "CT004", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "B44000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "B44000"
                }
            ]
        },
  
        {
            "itemIds": [  ],
            "pageId": "C43000",
            "decisionItems": [ "CT004", ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "0",
                    "nextPageId": "C44000"
                },
                {
                    "regExCode": "1",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "2",
                    "nextPageId": "A45000"
                },
                {
                    "regExCode": "3",
                    "nextPageId": "C44000"
                }
            ]
        },
  
        {
            "itemIds": [ "KKG01", ],
            "pageId": "B44000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A45000"
                }
            ]
        },
        {
            "itemIds": [ "KKG01", ],
            "pageId": "C44000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A45000"
                }
            ]
        },
  
  
        {
            "itemIds": [ "CQ15", ],
            "pageId": "A45000",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A45001"
                }
            ]
        },
        {
            "itemIds": [ "CQ14", ],
            "pageId": "A45001",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A45002"
                }
            ]
        },
        {
            "itemIds": [ "CQ12", ],
            "pageId": "A45002",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "END"
                }
            ]
        },
  
  
    ],
    "createdOn": 1657515614,
    "rootPageId": "A7000"
  }});


  db.LIItemLines.updateOne( {"itemId" : "RV03"}, { $set: {"angleId" : "AEN01"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV05"}, { $set: {"angleId" : "AEN02"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ04"}, { $set: {"angleId" : "AEN03"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ10"}, { $set: {"angleId" : "AEN04"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV07"}, { $set: {"angleId" : "AEN05"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV08"}, { $set: {"angleId" : "AEN06"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV09"}, { $set: {"angleId" : "AEN07"}}); 
db.LIItemLines.updateOne( {"itemId" : "MV02"}, { $set: {"angleId" : "AEN08"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV04"}, { $set: {"angleId" : "AEN09"}}); 

db.LIItemLines.updateOne( {"itemId" : "RV06"}, { $set: {"angleId" : "AEN10"}}); 
db.LIItemLines.updateOne( {"itemId" : "MV06"}, { $set: {"angleId" : "AEN10"}}); 

db.LIItemLines.updateOne( {"itemId" : "CQ03"}, { $set: {"angleId" : "AEN11"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ08"}, { $set: {"angleId" : "AEN12"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ09"}, { $set: {"angleId" : "AEN13"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ12"}, { $set: {"angleId" : "AEN14"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ02"}, { $set: {"angleId" : "AEN15"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ05"}, { $set: {"angleId" : "AEN16"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ07"}, { $set: {"angleId" : "AEN17"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ01"}, { $set: {"angleId" : "AEN18"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV01"}, { $set: {"angleId" : "AEN19"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV10"}, { $set: {"angleId" : "AEN20"}}); 
db.LIItemLines.updateOne( {"itemId" : "MV11"}, { $set: {"angleId" : "AEN21"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ11"}, { $set: {"angleId" : "AEN22"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV11"}, { $set: {"angleId" : "AEN23"}}); 
db.LIItemLines.updateOne( {"itemId" : "MV13"}, { $set: {"angleId" : "AEN24"}}); 
db.LIItemLines.updateOne( {"itemId" : "KKG01"}, { $set: {"angleId" : "AEN25"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV12"}, { $set: {"angleId" : "AEN26"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ06"}, { $set: {"angleId" : "AEN27"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ14"}, { $set: {"angleId" : "AEN28"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ15"}, { $set: {"angleId" : "AEN29"}}); 
db.LIItemLines.updateOne( {"itemId" : "CQ13"}, { $set: {"angleId" : "AEN30"}}); 
db.LIItemLines.updateOne( {"itemId" : "RV02"}, { $set: {"angleId" : "AEN31"}}); 




db.LIItemLines.updateOne({ "angleId": "AEN31" },{$set:{

    "howYouBehaveIfUnhealthy": "We do not change or go outside our comfort zone to make a relationship work.",
    "whyItIsUnhealthy" : "We don’t want to change or go outside our comfort zone to make a relationship work as changing is often uncomfortable. Changing is stressful hence most of us avoid it. We need to take into account that our partners come from different backgrounds, values, and belief systems. In order to find the right harmony with our partners, we need to adapt to different situations and go beyond our comfort levels.",
    "howYouBehaveIfHealthy": "You go outside your comfort zone in order to make your relationship work.",
    "whyItIsHealthy": "By stepping outside your comfort zone to make your relationship work, you show your partner that you are willing to put in the effort even if it is uncomfortable. The extra effort you put in will also encourage your partner to do the same. As a result, your relationship is strengthened as you are able to adapt to different situations.",
    "thingsToWatchOutFor" : [
        "If you constantly go beyond your comfort zone, your priorities, preferences, and values may be overlooked. Your partner may start expecting a lot of behavior, situations, etc beyond your comfort levels. Be clear with your partner about your limits.",
    ],
    "tipsToImprove": [
        {"tipHeading": "Knowing what is outside your comfort zone" , "tipBody": "Create a list of things within your comfort zone and things outside your comfort zone. Ask your partner to do the same. This list should have things that your partner expects of you but it are outside your comfort level. It will help you and your partner become more aware of things outside your comfort zones. For example: Situation - Partner expects you to watch a late-night movie with him/her. Within your comfort zone- Watching till 10 pm. Outside your comfort zone- Staying up late post 10 pm."},
        {"tipHeading": "Trying out activities beyond your limits" , "tipBody": "Share the 'outside comfort zone' list with your partner. Let your partner also do the same. Try to find a middle ground and move outside your comfort level. Example - Start watching the movie by 9 pm which ends by 11 pm. Here you are staying up a little late and also fulfilling your partner’s expectations."},
        {"tipHeading": "Questioning to get an insight" , "tipBody": 'Question your partner politely to understand their perspective. For example- Rohan - Hey, why do you think ‘XYZ’ is outside your comfort zone? Sita - ‘their answer’ Rohan -  When do you think this ‘XYZ’ started? Sita -  ‘their answer’ Rohan - Say if you were stuck and you could only perform either ‘XYZ’ or something else which is worse, how would you bring yourself to do ‘XYZ’ Sita -: ‘their answer’ and so on and so forth. Identify the reasons why that particular behavior, action, thought, etc, might be outside their comfort zone. As human beings, we tend to make boundaries and likes/dislikes without any reasoning. You may be able to understand what is causing it to be "outside their comfort zone" if you ask probing questions.'},
    ]
}});

db.LIItemLines.updateMany({"itemId" : "RV01"}, { $set:{ "leftBullet" : "Accepting change in a relationship "}});
db.LIItemLines.updateMany({"itemId" : "RV02"}, { $set:{ "leftBullet" : "Being open to counselling"}});
db.LIItemLines.updateMany({"itemId" : "MV02"}, { $set:{ "leftBullet" : "Being open to counselling before marriage"}});
db.LIItemLines.updateMany({"itemId" : "RV03"}, { $set:{ "leftBullet" : "Engaging your partner in your decisions"}});
db.LIItemLines.updateMany({"itemId" : "RV04"}, { $set:{ "leftBullet" : "Being realistic about sex at the beginning of a relationship"}});
db.LIItemLines.updateMany({"itemId" : "RV05"}, { $set:{ "leftBullet" : "Maintaining your own identity"}});
db.LIItemLines.updateMany({"itemId" : "RV06"}, { $set:{ "leftBullet" : "Being patient to find your groove in bed with your partner"}});
db.LIItemLines.updateMany({"itemId" : "MV06"}, { $set:{ "leftBullet" : "Being patient to find your groove in bed with your partner"}});
db.LIItemLines.updateMany({"itemId" : "RV07"}, { $set:{ "leftBullet" : "Dealing with your expectations that aren't met "}});
db.LIItemLines.updateMany({"itemId" : "RV08"}, { $set:{ "leftBullet" : "Checking if your expectations are fair"}});
db.LIItemLines.updateMany({"itemId" : "RV09"}, { $set:{ "leftBullet" : "Handling arguments at the beginning of a relationship"}});
db.LIItemLines.updateMany({"itemId" : "RV10"}, { $set:{ "leftBullet" : "Being friendly with your partner's family"}});
db.LIItemLines.updateMany({"itemId" : "MV11"}, { $set:{ "leftBullet" : "Communicating about wedding expectations with the partner's family"}}); 
db.LIItemLines.updateMany({"itemId" : "RV11"}, { $set:{ "leftBullet" : "Being financially stable before marriage"}});
db.LIItemLines.updateMany({"itemId" : "MV13"}, { $set:{ "leftBullet" : "Including your partner in decisions about your own money"}});
db.LIItemLines.updateMany({"itemId" : "KKG01"}, { $set:{ "leftBullet" : "Aligning with partner about finances before planning for a child"}});
db.LIItemLines.updateMany({"itemId" : "RV12"}, { $set:{ "leftBullet" : "Ability to say no to your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ01"}, { $set:{ "leftBullet" : "Realizing that you can't change your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ02"}, { $set:{ "leftBullet" : "Bringing up important issues especially if it leads to conflict "}});
db.LIItemLines.updateMany({"itemId" : "CQ03"}, { $set:{ "leftBullet" : "Communicating about sex with your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ04"}, { $set:{ "leftBullet" : "Balancing your and your partner’s interests"}});
db.LIItemLines.updateMany({"itemId" : "CQ05"}, { $set:{ "leftBullet" : "Getting external help when conflict persists"}});
db.LIItemLines.updateMany({"itemId" : "CQ06"}, { $set:{ "leftBullet" : "Being patient with your partner in explaining things"}});
db.LIItemLines.updateMany({"itemId" : "CQ07"}, { $set:{ "leftBullet" : "Remaining calm when your partner is angry"}});
db.LIItemLines.updateMany({"itemId" : "CQ08"}, { $set:{ "leftBullet" : "Being aware of what makes you irritated "}}); 
db.LIItemLines.updateMany({"itemId" : "CQ09"}, { $set:{ "leftBullet" : "Being vulnerable with your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ10"}, { $set:{ "leftBullet" : "Adjusting in a relationship"}});
db.LIItemLines.updateMany({"itemId" : "CQ11"}, { $set:{ "leftBullet" : "Setting up boundaries with family members"}});


db.LIItemLines.updateMany({"itemId" : "CQ12"}, { $set:{ "leftBullet" : "Being there when your partner is feeling low"}});
db.LIItemLines.updateMany({"itemId" : "CQ13"}, { $set:{ "leftBullet" : "Willingness to learn about sex"}});
db.LIItemLines.updateMany({"itemId" : "CQ14"}, { $set:{ "leftBullet" : "Being direct in communicating how you feel"}});
db.LIItemLines.updateMany({"itemId" : "CQ15"}, { $set:{ "leftBullet" : "Listening to your partner even when you are irritated"}});




db.LIItemLines.updateMany({"itemId" : "RV01"}, { $set:{ "rightBullet" : "Accepting change in a relationship "}});
db.LIItemLines.updateMany({"itemId" : "RV02"}, { $set:{ "rightBullet" : "Being open to counselling"}});
db.LIItemLines.updateMany({"itemId" : "MV02"}, { $set:{ "rightBullet" : "Being open to counselling before marriage"}});
db.LIItemLines.updateMany({"itemId" : "RV03"}, { $set:{ "rightBullet" : "Engaging your partner in your decisions"}});
db.LIItemLines.updateMany({"itemId" : "RV04"}, { $set:{ "rightBullet" : "Being realistic about sex at the beginning of a relationship"}});
db.LIItemLines.updateMany({"itemId" : "RV05"}, { $set:{ "rightBullet" : "Maintaining your own identity"}});
db.LIItemLines.updateMany({"itemId" : "RV06"}, { $set:{ "rightBullet" : "Being patient to find your groove in bed with your partner"}});
db.LIItemLines.updateMany({"itemId" : "MV06"}, { $set:{ "rightBullet" : "Being patient to find your groove in bed with your partner"}});
db.LIItemLines.updateMany({"itemId" : "RV07"}, { $set:{ "rightBullet" : "Dealing with your expectations that aren't met "}});
db.LIItemLines.updateMany({"itemId" : "RV08"}, { $set:{ "rightBullet" : "Checking if your expectations are fair"}});
db.LIItemLines.updateMany({"itemId" : "RV09"}, { $set:{ "rightBullet" : "Handling arguments at the beginning of a relationship"}});
db.LIItemLines.updateMany({"itemId" : "RV10"}, { $set:{ "rightBullet" : "Being friendly with your partner's family"}});
db.LIItemLines.updateMany({"itemId" : "MV11"}, { $set:{ "rightBullet" : "Communicating about wedding expectations with the partner's family"}}); 
db.LIItemLines.updateMany({"itemId" : "RV11"}, { $set:{ "rightBullet" : "Being financially stable before marriage"}});
db.LIItemLines.updateMany({"itemId" : "MV13"}, { $set:{ "rightBullet" : "Including your partner in decisions about your own money"}});
db.LIItemLines.updateMany({"itemId" : "KKG01"}, { $set:{ "rightBullet" : "Aligning with partner about finances before planning for a child"}});
db.LIItemLines.updateMany({"itemId" : "RV12"}, { $set:{ "rightBullet" : "Ability to say no to your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ01"}, { $set:{ "rightBullet" : "Realizing that you can't change your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ02"}, { $set:{ "rightBullet" : "Bringing up important issues especially if it leads to conflict "}});
db.LIItemLines.updateMany({"itemId" : "CQ03"}, { $set:{ "rightBullet" : "Communicating about sex with your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ04"}, { $set:{ "rightBullet" : "Balancing your and your partner’s interests"}});
db.LIItemLines.updateMany({"itemId" : "CQ05"}, { $set:{ "rightBullet" : "Getting external help when conflict persists"}});
db.LIItemLines.updateMany({"itemId" : "CQ06"}, { $set:{ "rightBullet" : "Being patient with your partner in explaining things"}});
db.LIItemLines.updateMany({"itemId" : "CQ07"}, { $set:{ "rightBullet" : "Remaining calm when your partner is angry"}});
db.LIItemLines.updateMany({"itemId" : "CQ08"}, { $set:{ "rightBullet" : "Being aware of what makes you irritated "}}); 
db.LIItemLines.updateMany({"itemId" : "CQ09"}, { $set:{ "rightBullet" : "Being vulnerable with your partner"}});
db.LIItemLines.updateMany({"itemId" : "CQ10"}, { $set:{ "rightBullet" : "Adjusting in a relationship"}});
db.LIItemLines.updateMany({"itemId" : "CQ11"}, { $set:{ "rightBullet" : "Setting up boundaries with family members"}});


db.LIItemLines.updateMany({"itemId" : "CQ12"}, { $set:{ "rightBullet" : "Being there when your partner is feeling low"}});
db.LIItemLines.updateMany({"itemId" : "CQ13"}, { $set:{ "rightBullet" : "Willingness to learn about sex"}});
db.LIItemLines.updateMany({"itemId" : "CQ14"}, { $set:{ "rightBullet" : "Being direct in communicating how you feel"}});
db.LIItemLines.updateMany({"itemId" : "CQ15"}, { $set:{ "rightBullet" : "Listening to your partner even when you are irritated"}});




db.LIItemLines.updateMany( { "angleId" : "AEN01" }, { $set: { "howYouBehaveIfUnhealthy":"We tend to make decisions independently without consulting with our partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN02" }, { $set: { "howYouBehaveIfUnhealthy":"We involve our partner in almost everything we do. We do not spend time doing things that we like by ourselves."}});
db.LIItemLines.updateMany( { "angleId" : "AEN03" }, { $set: { "howYouBehaveIfUnhealthy":"We don’t engage in our partner’s hobbies or interests if it’s not our cup of tea."}});
db.LIItemLines.updateMany( { "angleId" : "AEN04" }, { $set: { "howYouBehaveIfUnhealthy":"We often prefer not to do something our partner expects of us if we find it inconvenient."}});
db.LIItemLines.updateMany( { "angleId" : "AEN05" }, { $set: { "howYouBehaveIfUnhealthy":"If our partner doesn't meet our expectations, we tend to accept the situation and suffer silently."}});
db.LIItemLines.updateMany( { "angleId" : "AEN06" }, { $set: { "howYouBehaveIfUnhealthy":"We hesitate to go to a neutral third party to check if our expectations for our relationship and our partner are justified."}});
db.LIItemLines.updateMany( { "angleId" : "AEN07" }, { $set: { "howYouBehaveIfUnhealthy":"We expect everything to be rosy when we start dating our partner at the beginning of the relationship. We worry that arguments in the initial period are a bad sign."}});
db.LIItemLines.updateMany( { "angleId" : "AEN08" }, { $set: { "howYouBehaveIfUnhealthy":"There is a tendency for us to be resistant to premarital counseling."}});
db.LIItemLines.updateMany( { "angleId" : "AEN09" }, { $set: { "howYouBehaveIfUnhealthy":"When having sex for the first time, we have unrealistic expectations. We think that the relationship will be in trouble if the sex doesn’t go well."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN10" }, { $set: { "howYouBehaveIfUnhealthy":"We expect sex to click instantly. We tend to be impatient and lose interest in our partner if sex is not working out after the first few encounters."}});
db.LIItemLines.updateMany( { "angleId" : "AEN11" }, { $set: { "howYouBehaveIfUnhealthy":"We tend to stick to the current way of having sex because communicating our preferred sexual style with our partner seems awkward."}});
db.LIItemLines.updateMany( { "angleId" : "AEN12" }, { $set: { "howYouBehaveIfUnhealthy":"We tend to blame others when we are angry."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN13" }, { $set: { "howYouBehaveIfUnhealthy":"We feel that being vulnerable indicates weakness. We don't express our feelings to our partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN14" }, { $set: { "howYouBehaveIfUnhealthy":"We don't provide support to our partner after a conflict."}});
db.LIItemLines.updateMany( { "angleId" : "AEN15" }, { $set: { "howYouBehaveIfUnhealthy":"We avoid bringing up a topic that hurts us with our partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN16" }, { $set: { "howYouBehaveIfUnhealthy":"When our relationship has a serious conflict, we do not seek external support."}});
db.LIItemLines.updateMany( { "angleId" : "AEN17" }, { $set: { "howYouBehaveIfUnhealthy":"We don't remain calm when our partner directs their anger towards us."}});
db.LIItemLines.updateMany( { "angleId" : "AEN18" }, { $set: { "howYouBehaveIfUnhealthy":"There is a tendency for us to think that we are capable of changing our partner's negative behavior."}});
db.LIItemLines.updateMany( { "angleId" : "AEN19" }, { $set: { "howYouBehaveIfUnhealthy":"We don’t tend to go outside our comfort zone to make a relationship work."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN20" }, { $set: { "howYouBehaveIfUnhealthy":"We tend to avoid interacting with our partner's parents if we don't get along with them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN21" }, { $set: { "howYouBehaveIfUnhealthy":"We don’t tend to communicate enough about wedding expectations to our partner’s family. We may underestimate the amount of communication required to ensure a smooth wedding."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN22" }, { $set: { "howYouBehaveIfUnhealthy":"When it comes to our parents' involvement in our lives, we tend not to communicate boundaries."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN23" }, { $set: { "howYouBehaveIfUnhealthy":"We prioritise getting married over our financial stability."}});
db.LIItemLines.updateMany( { "angleId" : "AEN24" }, { $set: { "howYouBehaveIfUnhealthy":"We are not on the same page with our partner regarding finances in the relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN25" }, { $set: { "howYouBehaveIfUnhealthy":"We tend to prioritise having a child over financial alignment with our partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN26" }, { $set: { "howYouBehaveIfUnhealthy":"We struggle to say no to our partner when we disagree."}});
db.LIItemLines.updateMany( { "angleId" : "AEN27" }, { $set: { "howYouBehaveIfUnhealthy":"When our partner doesn't understand what we say, we tend not to explain it further to them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN28" }, { $set: { "howYouBehaveIfUnhealthy":"We have a hard time communicating our feelings to our partner because it feels risky."}});
db.LIItemLines.updateMany( { "angleId" : "AEN29" }, { $set: { "howYouBehaveIfUnhealthy":"We don't listen to our partner if we are agitated."}});
db.LIItemLines.updateMany( { "angleId" : "AEN30" }, { $set: { "howYouBehaveIfUnhealthy":"We tend to resist learning about sex when our partner want us to."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN31" }, { $set: { "howYouBehaveIfUnhealthy":"There is a tendency for us to be resistant to counseling."}});





db.LIItemLines.updateMany( { "angleId" : "AEN01" }, { $set: { "howYouBehaveIfHealthy":"You keep your partner well informed and engaged in decision-making."}});  
db.LIItemLines.updateMany( { "angleId" : "AEN02" }, { $set: { "howYouBehaveIfHealthy":"You maintain your sense of self in the relationship and are not codependent on your partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN03" }, { $set: { "howYouBehaveIfHealthy":"You engage in your partner’s interests and hobbies. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN04" }, { $set: { "howYouBehaveIfHealthy":"You do what your partner expects of you even though you don’t enjoy doing it. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN05" }, { $set: { "howYouBehaveIfHealthy":"You communicate, accommodate or find a middle ground when your expectations aren’t met. You understand that while things cannot always go as expected, you will become resentful if you don’t at least try to achieve a middle ground or communicate with your partner."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN06" }, { $set: { "howYouBehaveIfHealthy":"You know that sometimes it's helpful to get a third person's opinion on whether your expectations for your partner are justified."}});
db.LIItemLines.updateMany( { "angleId" : "AEN07" }, { $set: { "howYouBehaveIfHealthy":"You are aware that a relationship's initial phase has conflicts and arguments. It will not always be 'sunshine and roses' as people may believe."}});
db.LIItemLines.updateMany( { "angleId" : "AEN08" }, { $set: { "howYouBehaveIfHealthy":"You don't have an issue with going for pre-marital counselling."}});
db.LIItemLines.updateMany( { "angleId" : "AEN09" }, { $set: { "howYouBehaveIfHealthy":"You have realistic expectations for physical intimacy in the beginning stage of the relationship. You understand that your relationship isn't in trouble if sex for the first time doesn't go well."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN10" }, { $set: { "howYouBehaveIfHealthy":"You understand that it is okay to take a few months after the first intimate experience to find the right groove with your partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN11" }, { $set: { "howYouBehaveIfHealthy":"Even if talking about sex feels awkward, you feel confident enough to bring it up with your partner. By communicating effectively, you would change the way you're currently having sex with your partner to your preferred style."}});
db.LIItemLines.updateMany( { "angleId" : "AEN12" }, { $set: { "howYouBehaveIfHealthy":"You are aware of your own emotions. You know that other people are not responsible for your emotions, and you are in charge of your feelings."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN13" }, { $set: { "howYouBehaveIfHealthy":"You express your vulnerable emotions to your partner, bringing you closer to them. You don’t see being vulnerable as a sign of weakness."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN14" }, { $set: { "howYouBehaveIfHealthy":"You are there to emotionally support your partner even when things aren't going great with them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN15" }, { $set: { "howYouBehaveIfHealthy":"You know that avoiding a conflict doesn't help in a relationship, so you work on resolving it instead."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN16" }, { $set: { "howYouBehaveIfHealthy":"You reach out for external help to sort out serious issues in your relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN17" }, { $set: { "howYouBehaveIfHealthy":"You tend to remain calm when your partner is directing their anger towards you."}});
db.LIItemLines.updateMany( { "angleId" : "AEN18" }, { $set: { "howYouBehaveIfHealthy":"You are aware of your partner’s negative qualities. You accept your partner for who they are and do not cling to the hope of changing their negative behavior or habits."}});
db.LIItemLines.updateMany( { "angleId" : "AEN19" }, { $set: { "howYouBehaveIfHealthy":"You go outside your comfort zone in order to make your relationship work."}});
db.LIItemLines.updateMany( { "angleId" : "AEN20" }, { $set: { "howYouBehaveIfHealthy":"You are open to interacting with your partner's family even if you don’t get along with them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN21" }, { $set: { "howYouBehaveIfHealthy":"We tend to communicate minute details regarding wedding expectations to our partner’s family in a clear manner."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN22" }, { $set: { "howYouBehaveIfHealthy":"You as a couple explicitly discuss boundaries with your parents regarding their involvement."}}); 
db.LIItemLines.updateMany( { "angleId" : "AEN23" }, { $set: { "howYouBehaveIfHealthy":"You plan your finances well before getting married"}});
db.LIItemLines.updateMany( { "angleId" : "AEN24" }, { $set: { "howYouBehaveIfHealthy":"You make financial decisions with your partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN25" }, { $set: { "howYouBehaveIfHealthy":"You align your finances with your partner while planning for a child."}});
db.LIItemLines.updateMany( { "angleId" : "AEN26" }, { $set: { "howYouBehaveIfHealthy":"You are able to say no when you disagree with your partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN27" }, { $set: { "howYouBehaveIfHealthy":"When your partner doesn't understand what you say, you are willing to explain it further to them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN28" }, { $set: { "howYouBehaveIfHealthy":"You share your feelings in a straightforward manner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN29" }, { $set: { "howYouBehaveIfHealthy":"You patiently listen to your partner even though you are agitated "}});
db.LIItemLines.updateMany( { "angleId" : "AEN30" }, { $set: { "howYouBehaveIfHealthy":"You are open to learning about sex when your partner wants you to."}});
db.LIItemLines.updateMany( { "angleId" : "AEN31" }, { $set: { "howYouBehaveIfHealthy":"You don't have an issue with going for counselling."}});





db.LIItemLines.updateOne({ "itemId" : "RVO1" }, { $set: {  "negativeLine" : "You may have not realized that relationships are characterized by change and you often need to change beyond what you think to make things work. You and your partner have come from different backgrounds, value systems, beliefs, expectations, and priorities. In order to find the right harmony with your partner, you would be challenged on each of the aspects above and hence it's the biggest change you would ever come across in your life."}});  
db.LIItemLines.updateOne({ "itemId" : "RVO2" }, { $set: {  "negativeLine" : "You may think that it's not worth the time and money to consult a relationship expert when you are facing issues in your relationship. Most of us tend to reject partners too fast at the slightest discomfort. Few of us instead seek advice from friends or uncles/aunts. Note that their advice is often biased as they talk from their past experiences unlike trained experts. Being patient with your partner when issues arise and talking to an expert neutral party when these issues feel unsolvable ensures that you make the right decisions in relationships. This reduces heart breaks and ensures you don't miss out on a partner who is good though you are currently facing issues with him/her."}}); 
db.LIItemLines.updateOne({ "itemId" : "MV02" }, { $set: {  "negativeLine" : "You may think that premarital counseling is for about-to-marry couples or maybe rich couples who are having issues. In reality, it is for all couples who are about to get married. It uncovers many blind spots in your relationship and helps you build a strong foundation for a happy marriage."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV03" }, { $set: {  "negativeLine" : "You tend to skip your partner when you make decisions that you feel your partner strongly disapproves of. This breaks trust and it's a matter of time before your partner finds out about this decision. You would have a much bitter conversation at that time. We rather suggest you to include a partner in all decisions, be affirmative and agree to disagree if you can't reach consensus. This builds enormous trust."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV04" }, { $set: {  "negativeLine" : "You may believe that if sex for the first time doesn't go well your relationship will be in trouble. But it won't. First time sex doesn't go well most of the time and it's quite normal. Not worrying too much about it and enjoying the next few experiences is what we recommend. More often than not things will be quite alright. However, if there are persistent issues in your sex life, we recommend you to consult urologist/psychiatrist."}});  
db.LIItemLines.updateOne({ "itemId" : "RV05" }, { $set: {  "negativeLine" : "You tend to believe that a happy relationship means the couple does everything together. However, that's far from the truth. It is important to have some “me” time in a relationship. Otherwise, you may stand to lose your individual identity and start to feel stuck in the relationship. Hence, we suggest you to give time to both yourself and your relationship."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV06" }, { $set: {  "negativeLine" : "You may think that it shouldn't take months to find a groove with your partner in bed. However, it's common for it to take time. For the groove to align, many elements should fall in place -  right emotional connection, overcoming misconceptions, right sexual position, right time, right health, right location, fighting infections, communication about how you want it and how often. If you are into your partner, please be patient. Love will definitely flourish!"}});  
db.LIItemLines.updateOne({ "itemId" : "MV06" }, { $set: {  "negativeLine" : "You may think that it shouldn't take years to find a groove with your partner in bed. However, it's common for it to take time. For the groove to align, many elements should fall in place -  right emotional connection, overcoming misconceptions, right sexual position, right time, right health, right location, fighting infections, communication about how you want it and how often. If you are into your partner, please be patient. Love will definitely flourish!"}});  
db.LIItemLines.updateOne({ "itemId" : "RV07" }, { $set: {  "negativeLine" : "If your partner doesn't match your expectations, you might simply accept the situation and silently suffer. Here are a few ways to handle this better. First of all, communicate clearly to your partner that your expectations are not being met. Beyond that, you can confirm with a trusted neutral person that your expectations are fair and rethink about them if they are not. Secondly, you can discuss with your partner to see if you can find a middle ground between expectations and reality. Lastly, you can offer to do something new that your partner loves in exchange for fulfilling your expectations."}});  
db.LIItemLines.updateOne({ "itemId" : "RV08" }, { $set: {  "negativeLine" : "You may feel it's unnecessary and unwanted to ask someone else whether your expectations about your relationship and your partner are fair. Sometimes we think they are 'fair' but may not even be aware that they are unfair from a society's point of view. This will hurt your relationship as your partner might feel overwhelmed and resentful. Hence, we suggest you keep an open mind when it comes to confirming your expectations with a trusted neutral party."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV09" }, { $set: {  "negativeLine" : "You believe that arguments in the initial period of your relationship are unhealthy. In reality, it's common for couples to argue in the initial phase as it is a period of change and can be rocky. Patience does wonders. We only argue with those that we love. So, we recommend you to give time and space to get a better understanding of each other."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV10" }, { $set: {  "negativeLine" : "The older we get, the more stubborn and the less flexible our minds become. It's biological and natural. So, it's common for us to feel annoyed by our partner's parents. But they are a huge part of your partner's life, whether you like it or not. You don't need to connect with them but at least you should be in talking terms with them if your partner wants you to. If you don't, your partner may feel hurt and may never be fully content."}});  
db.LIItemLines.updateOne({ "itemId" : "MV11" }, { $set: {  "negativeLine" : "You may think that it's silly to communicate all the minutest details regarding a wedding to your partner's family. It's important to realize that weddings are a melting pot of our parents' emotions, dreams, status, high expectations and involve complex event management where there is never enough time. So, the risk of miscommunication and conflict regarding wedding traditions and expectations between two families is quite high. We suggest you communicate often and work closely with your partner's family to avoid bitterness just before your big day!"}}); 
db.LIItemLines.updateOne({ "itemId" : "RV11" }, { $set: {  "negativeLine" : "You may think it's sensible to get married as you age even if you and your partner are not financially stable yet. We expect marriage to make our lives better compared to when we were single. Getting married actually makes it worse in this situation. Marriage brings in new expenses and financial responsibilities which you might be unable to fulfill which will hurt your marriage. We recommend you to first be financially stable and then get married."}}); 
db.LIItemLines.updateOne({ "itemId" : "MV13" }, { $set: {  "negativeLine" : "For spending your own money, you may think your partner doesn't need to be considered. Money that you earn individually is still considered family income, whether you like it or not. It's crucial to be on the same page with your partner on how you spend it. We often have a strong opinion on how much to spend on what and when with family income. There's no right or wrong model on what to do with your own income. As long as you both communicate and come to consensus on how you are going to manage these finances, you should be good."}});  
db.LIItemLines.updateOne({ "itemId" : "KKG01" }, { $set: {  "negativeLine" : "You may plan for a child, especially if you are growing older, even if you don’t agree with your partner on finances around raising a child. This is not healthy. Prevention is better than cure. All important decisions in a relationship often have financial ramifications. It's not easy to get money at the last moment when you need it. We suggest you first quickly reach consensus on finances around raising a child and then plan for one."}});  
db.LIItemLines.updateOne({ "itemId" : "RV12" }, { $set: {  "negativeLine" : "You think it's okay to say 'yes' to everything your partner says. Realise that, you lose our own identity every time you say 'yes' to something you wish to say 'no' to. When this happens, you feel stuck in your relationship and unhappy. This leads to resentment as well. Hence it's important to say 'no' to your partner when you disagree with them."}});  
db.LIItemLines.updateOne({ "itemId" : "CQ01" }, { $set: {  "negativeLine" : "You assume that with time and patience, you can change a negative quality or habit in your partner. It's healthy to communicate the change you want in your partner, but be mentally prepared for the scenario that might never happen. This reduces stress on you and your partner. Note that change puts us out of our comfort zone and hence we often dislike change even if it's for our own good. Marry your partner only if you can live with him/her never changing though it's quite possible that change might occur if you are lucky."}});  
db.LIItemLines.updateOne({ "itemId" : "CQ02" }, { $set: {  "negativeLine" : "To avoid a fight with your partner, you have a tendency to avoid addressing issues. A stitch in time saves nine. Unaddressed issues over time lead to chronic illness and anger outbursts which will hurt you and your relationship. We often have times where we are feeling pleasant. We suggest you be patient, wait for when you both are feeling good and  softly bring these issues up. With the right intent, patience and communication, the majority of issues can be addressed."}});  
db.LIItemLines.updateOne({ "itemId" : "CQ03" }, { $set: {  "negativeLine" : "You seem to be hesitant to discuss about sex with your partner if you believe the conversation will just be awkward. There is always a way to communicate even the most sensitive topics with a person. If speaking about it feels awkward, try to write it down and share with your partner. By not expressing, you are denying yourself and your relationship a chance to reach its full potential of sexual satisfaction. Often you will be pleasantly surprised how open your partner could be once you communicate. Communicating your likes, dislikes and fantasies in bed with your partner is a key to a healthy sex life."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ04" }, { $set: {  "negativeLine" : "If your partner's hobbies/interests are not your cup of tea, you may be reluctant to engage in them. We usually don't do what we don't like as that makes us uncomfortable. Realize that trying to engage in at least one such activity helps you connect with your partner at the next level. You may not lose much if you don't engage, but you will gain tremendously if you engage. Hence, we suggest you sometimes get involved in your partner's hobbies or interests."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ05" }, { $set: {  "negativeLine" : "You don't consider revealing serious problems between you and your partner to a neutral person to find solutions and may think it's shameful. You may have not realized that in situations where conflict is severe, solving it just within yourselves is not possible. Seeking external help can be the only way out. Not solving it impacts your health due to high stress that is involved. Also, neutral trusted third parties keep secrets and are trained at it. Your heart feels light once you share and lays the foundation for an amicable solution."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ06" }, { $set: {  "negativeLine" : "You may give up too easily if your partner doesn't understand something you say. It is important to realize that people interpret things differently, and you may need to explain a few times before your partner finally understands your perspective. Not showing willingness to explain might make your partner feel dumb/insulted. Patiently explaining your partner shows that you value them and your relationship."}});  
db.LIItemLines.updateOne({ "itemId" : "CQ07" }, { $set: {  "negativeLine" : "It is understandable and natural to lose your cool if your partner yells at you for something that is not your fault. However, you may have not realized that this can escalate into a huge fight where you may say things that deeply hurt your partner. Hence, it's advisable to calmly say that you disagree and let them vent out completely before you speak. Listening is showing love. Once things are settled, have a discussion with your partner about how you felt and how your partner can communicate in a better way the next time if he/she is annoyed."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ08" }, { $set: {  "negativeLine" : "You prefer to believe that it is not your fault to get aggressive if your partner provokes you. There are ways in which we can react peacefully even in such situations. Reacting aggressively does more damage than good in most situations. We consciously or subconsciously choose to react to triggers that surround us. Identifying these triggers and becoming aware of them is quite hard but the only way for a happy life. Being aware of them makes it much easier to control our reactions. Seeking professional help to learn how to identify these triggers and change the way you react is advised."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ09" }, { $set: {  "negativeLine" : "You hesitate to expose your vulnerable side to your partner because you think it's a sign of weakness. Note that sharing a vulnerable side releases Oxytocin hormone in the listener and actually builds trust. Also, it is a sign of bravery and hence you need to be proud of it. This is a big part of emotional intimacy we seek with our partners. It is natural to feel afraid when you are new to it. Taking small steps such as talking to your partner about little things you normally keep private may be a good start. Gauge how they are reacting when you do that. Sharing your vulnerable side to your partner is a pathway to a  happy relationship."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ10" }, { $set: {  "negativeLine" : "You may not prefer to do things that you dislike that you can live with and that your partner expects you to do. Realize that relationships are about compromise and the level of compromise varies among couples. If you look objectively, you would realize that there are things your partner expects of you, that you usually object to, for which there could be creative ways of managing them and that is not a big deal for you to try it out. For e.g., there could be things you want your partner to do that they aren't doing. You can have a discussion on trading one for the other where you will do something they like if they do something you like. Relationships make us flexible and better people. Let's enjoy the process and be less stubborn about what we object to."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ11" }, { $set: {  "negativeLine" : "You may have not considered discussing boundaries with your parents regarding how much involvement they can have in your personal affairs. We usually skip this discussion to avoid awkward conversations. Unknowingly your parents would cross the line over time that would annoy you and your partner. Prevention is better than cure. Communicating such sensitive matters in a non-awkward way is possible. It would ensure that both your parents and your partner live peacefully without stepping into each other’s  boundaries. We suggest you come to an agreement with your partner and their families when the time is right on how much say they can have in your personal affairs for happy relationships."}}); 


db.LIItemLines.updateOne({ "itemId" : "CQ12" }, { $set: {  "negativeLine" : "In situations where you both had a fight and you bounced back to normal but your partner hasn't yet, you may not be handling them well. It is recommended to reach out to your partner who is still going through the pain and show compassion despite how you are feeling about what happened. For e.g., you can ask your partner if you can do anything to make them feel better."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ13" }, { $set: {  "negativeLine" : "When you and your partner are having a dull sex life and they offer you to read a book by a renowned expert, you may not take it in a positive light. Sex is a sensitive topic and each of us have different ways to express what we want. We suggest you to appreciate your partner for what he/she did, inquire about the intent and figure out the next steps on how to make sex more pleasurable."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ14" }, { $set: {  "negativeLine" : "You may not be communicating hard feelings to your partner in an effective manner. You may be trying to either avoid expressing or express in an indirect manner about how you are feeling. This builds resentment over time. There are ways to talk about sensitive topics with your partner. Getting trained in how to have crucial conversations in a healthy manner is recommended. This helps build trust, make you feel heard and be happy in your relationships."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ15" }, { $set: {  "negativeLine" : "In situations where you feel irritated by what your partner said, you may find it difficult to listen and tend to react in unhealthy ways. It is quite common and natural for us to do this. Self-restraint when our ego is being questioned is one of the hardest things to do. But it is possible. There are few exercises one can do to build restraint. Good listeners are great at identifying their own triggers, have a lot of self-restraint, and are compassionate. Listening is how they show love and they let their partners complete their sentences though they don't like what they are listening to. It is one of the best peaceful ways to coexist and lead a happy life."}}); 



db.LIItemLines.updateOne({ "itemId" : "RV01" }, { $set: {  "positiveLine" : "You understand the need to change beyond what you think for a happy relationship."}});
db.LIItemLines.updateOne({ "itemId" : "RV02" }, { $set: {  "positiveLine" : "You are open to the idea of consulting a relationship expert when facing issues in your relationship."}});
db.LIItemLines.updateOne({ "itemId" : "MV02" }, { $set: {  "positiveLine" : "You are open to the idea of premarital counseling."}});
db.LIItemLines.updateOne({ "itemId" : "RV03" }, { $set: {  "positiveLine" : "You know that you have to change the way you make decisions to factor in your partner."}});
db.LIItemLines.updateOne({ "itemId" : "RV04" }, { $set: {  "positiveLine" : "You understand that your first sexual experience with your partner might not always go well."}});
db.LIItemLines.updateOne({ "itemId" : "RV05" }, { $set: {  "positiveLine" : "You understand that “me” time is important."}});
db.LIItemLines.updateOne({ "itemId" : "RV06" }, { $set: {  "positiveLine" : "You know that sex takes time to click for a new couple and are willing to be patient about it."}});
db.LIItemLines.updateOne({ "itemId" : "MV06" }, { $set: {  "positiveLine" : "You know that sex takes time to click for a new couple and are willing to be patient about it."}});
db.LIItemLines.updateOne({ "itemId" : "RV07" }, { $set: {  "positiveLine" : "You understand that while things cannot always go as expected, you will become resentful if you don’t at least try to achieve a middle ground with your partner."}});
db.LIItemLines.updateOne({ "itemId" : "RV08" }, { $set: {  "positiveLine" : "You know that sometimes getting a third person’s opinion on whether your expectations are fair can be very helpful."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV09" }, { $set: {  "positiveLine" : "You understand that the initial period of a relationship is characterized by change and is not going to be ‘rainbows and roses’ as people normally expect."}});
db.LIItemLines.updateOne({ "itemId" : "RV10" }, { $set: {  "positiveLine" : "You are willing to work on maintaining a relationship with your partner’s family."}});
db.LIItemLines.updateOne({ "itemId" : "MV11" }, { $set: {  "positiveLine" : "You understand well the need to communicate clearly regarding wedding traditions to avoid tension between the two families."}});
db.LIItemLines.updateOne({ "itemId" : "RV11" }, { $set: {  "positiveLine" : "You understand that it is a bad idea to get into a marriage if your combined financial resources as a couple is not sufficient to feed yourselves."}});
db.LIItemLines.updateOne({ "itemId" : "MV13" }, { $set: {  "positiveLine" : "You understand that legally, finances are shared by partners and hence some agreement on expenditures is necessary."}}); 
db.LIItemLines.updateOne({ "itemId" : "KKG01" }, { $set: {  "positiveLine" : "You know that major decisions like having children cannot be made unless you and your partner are on the same page about financial management."}});
db.LIItemLines.updateOne({ "itemId" : "RV12" }, { $set: {  "positiveLine" : "You can say no to your partner comfortably when you disagree with them."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ01" }, { $set: {  "positiveLine" : "You understand well that it is a bad idea to get into a relationship hoping that your partner will change their negative qualities."}});
db.LIItemLines.updateOne({ "itemId" : "CQ02" }, { $set: {  "positiveLine" : "You know that avoiding a conflict doesn't help in a relationship."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ03" }, { $set: {  "positiveLine" : "You are not afraid to talk to your partner about your likes and dislikes in bed."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ04" }, { $set: {  "positiveLine" : "You understand that engaging in your partner’s interests at times, even if it is not your cup of tea, can help bring you both closer."}});
db.LIItemLines.updateOne({ "itemId" : "CQ05" }, { $set: {  "positiveLine" : "You understand that there is no shame in revealing serious issues to a person outside the relationship if it means they can help resolve it."}});
db.LIItemLines.updateOne({ "itemId" : "CQ06" }, { $set: {  "positiveLine" : "You understand that it is your responsibility to explain things to your partner in a manner they can comprehend."}});
db.LIItemLines.updateOne({ "itemId" : "CQ07" }, { $set: {  "positiveLine" : "You understand that being calm even if your partner is not, can make conflict resolution smoother."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ08" }, { $set: {  "positiveLine" : "You understand the importance of being aware of your own emotions."}});
db.LIItemLines.updateOne({ "itemId" : "CQ09" }, { $set: {  "positiveLine" : "You know that expressing vulnerable emotions to your partner can bring you closer."}});
db.LIItemLines.updateOne({ "itemId" : "CQ10" }, { $set: {  "positiveLine" : "You know that it can sometimes be better to do what your partner wants regarding small things, rather than argue over it."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ11" }, { $set: {  "positiveLine" : "You know that it is important to set boundaries with family members to have a smooth relationship."}});

db.LIItemLines.updateOne({ "itemId" : "CQ12" }, { $set: {  "positiveLine" : "You demonstrate the ability to emotionally support your partner unconditionally."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ13" }, { $set: {  "positiveLine" : "You are willing to learn about sex and are not offended if your partner asks you to do the same. "}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ14" }, { $set: {  "positiveLine" : "You understand the importance of communicating hard feelings to your partner."}}); 
db.LIItemLines.updateOne({ "itemId" : "CQ15" }, { $set: {  "positiveLine" : "You know that being a good listener is an important skill in a relationship. "}}); 




db.LIItemLines.updateMany( { "angleId" : "AEN01" }, { $set: { "thingsToWatchOutFor": [ "At times, your partner might feel you are too dependent on them for your own decision-making. While your partner may not express that feeling, it's good to be mindful of it. Remember, extremes of anything are never good." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN02" }, { $set: { "thingsToWatchOutFor": [ "Your partner might feel that you are being selfish and self absorbed. He/she might also feel you are trying to get distant in the relationship. Communicating the importance of  why it’s necessary to spend time with yourself to your partner will help them get a new perspective." ] }} ); 
db.LIItemLines.updateMany( { "angleId" : "AEN03" }, { $set: { "thingsToWatchOutFor": [ "It is important not to push yourself too hard to like what your partner likes. It might be that you are doing too much of what they like and not enough of what you like. " , "Also, be sure to ask your partner if they are comfortable with your level of involvement in their hobbies, as they shouldn't feel like you are invading their privacy." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN04" }, { $set: { "thingsToWatchOutFor": [ "You may start to compromise more than your partner in the relationship. It is okay for this to happen, but ensure that your partner  is comfortable with the current compromises you put in. " , "You and your partner must always communicate about this so you are on the same page when it comes to determining when and where to compromise. " ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN05" }, { $set: { "thingsToWatchOutFor": [ "Communicating your expectations in a rude or aggressive way may lead to conflicts. Be mindful about the manner in which you talk to your partner as it may hurt their feelings. We recommend you to listen more and speak less."  ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN06" }, { $set: { "thingsToWatchOutFor": [ "Ensure that the third party you are talking to is neutral. Try not to ask too many people for their opinions since multiple perspectives can be confusing. " , "Also, let your partner know you're talking to a third party. You don't have to share what you said, but try to keep them in the loop about who you talk to, otherwise your partner might interpret this as a breach of privacy." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN07" }, { $set: { "thingsToWatchOutFor": [ "Be sure that the fights do not escalate into physical or verbal abuse. Attempt to resolve the conflict without prolonging it, at a pace that works for you and your partner. " , "Remember, in a relationship, it's okay to have arguments, so make sure your partner understands that it's common to have arguments." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN08" }, { $set: { "thingsToWatchOutFor": [ "Your partner might feel that you are too dependent on the counselor for advice. Explaining the value of it to your partner can help them understand it better." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN09" }, { $set: { "thingsToWatchOutFor": [ "You and your partner might be aware that sex for the first time didn’t go well and you both might choose to talk about it. We recommend talking openly about it."  ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN10" }, { $set: { "thingsToWatchOutFor": [ "Accepting the fact that it might take months to discover the right groove with your partner does not mean you remain unsatisfied sexually. We recommend you to communicate your displeasure in bed to your partner and also consult a sex expert if needed."  ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN11" }, { $set: { "thingsToWatchOutFor": [ "Don’t insist on changing the sex style too often. The propensity of change is different for different people. Take it slow." , "At times, your partner might comply to your request of changing sex styles. Make sure to ask them if they are happy with that change. " ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN12" }, { $set: { "thingsToWatchOutFor": [ "Your partner might see you as someone who doesn’t feel any emotions. It’s because you are not reacting to provoking situations. Reaffirm your partner and show them that you care. Give them a reason for why you didn’t react violently or in a certain way. " , "If you are greatly tuned into your emotions, you might be excessively critical of yourself. It’s okay to feel negative emotions, don’t resist, try to sit with the feelings. Slowly, the feelings will become less intense." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN13" }, { $set: { "thingsToWatchOutFor": [ "There is no depth to being vulnerable as sometimes you might feel that you should limit your vulnerability. " , "You may come to expect your partner to be as vulnerable as you, but understand that your partner may take time to be vulnerable with you. Be patient and it will work out. " ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN14" }, { $set: { "thingsToWatchOutFor": [ "You might tend to be more logical while supporting them, try to make it a more emotional space where you share your feelings. " , "Supporting your partner emotionally can be draining especially when you are in conflict. Remember to take care of yourself while supporting them. " ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN15" }, { $set: { "thingsToWatchOutFor": [ "While addressing the issue, you might not realise how your partner is feeling, so observe your partner. Make sure that you're not hurting your partner while trying to resolve the problem. Slow down if that's the case, and reassure your partner."  ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN16" }, { $set: { "thingsToWatchOutFor": [ "Make sure that the person you choose to provide external help is someone who is neutral. " , "Sometimes, when you rely on external help, you become too dependent on them, so make sure not to let that happen. This can also weaken your relationship with your partner." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN17" }, { $set: { "thingsToWatchOutFor": [ "Don't let your partner's anger turn physical; if it does, stop it right away and leave. Be sure to take care of yourself, as staying calm can be emotionally challenging." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN18" }, { $set: { "thingsToWatchOutFor": [ "Let your partner know that you dislike a particular negative quality.  Your partner will change if they want to. Be open about it."  ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN19" }, { $set: { "thingsToWatchOutFor": [ "If you constantly go beyond your comfort zone, you may feel overwhelmed. We recommend accepting your feeling of overwhelm rather than resisting it. Embrace the process slowly and give yourself plenty of time." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN20" }, { $set: { "thingsToWatchOutFor": [ "Sometimes it’s possible for you to go overboard in your attempts to get acceptance from your partner’s family. " , "It’s important to be mindful and make sure that you don’t go against your own values in order to get acceptance from them. You should maintain a balance between being yourself and pleasing your partner’s family at the same time." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN21" }, { $set: { "thingsToWatchOutFor": [ "Your overcommunication regarding the wedding might irritate the other side of the family. They might wonder why you are doing it. " , "Let them know where you're coming from. Explain to them that a wedding is a complex process, and communicating is always helpful. Your intent is to have a happy wedding without any mistakes. " ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN22" }, { $set: { "thingsToWatchOutFor": [ "In spite of explicitly discussing boundaries people tend to not remember all the details. At times, your family might cross the boundary. Be empathetic about it. It is human nature to forget and overlook details. " , "We suggest you remind your family members about the boundaries. " ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN23" }, { $set: { "thingsToWatchOutFor": [ "You may tend to have realistic expectations regarding the financial plan. Be prepared for any surprise expenses. " , "A general tip is to save about 30% of your income. Account only for the daily expenses and necessities. You might plan for things that you want but don't need." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN24" }, { $set: { "thingsToWatchOutFor": [ "You might start questioning your partner's expenditure regarding their income. Try to avoid that. Instead, try to understand their point of view and address your point of view regarding that expenditure." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN25" }, { $set: { "thingsToWatchOutFor": [ "You tend to worry too much about saving and planning finances for the child and not enjoy the process. Strike the right balance between financial management and having a child." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN26" }, { $set: { "thingsToWatchOutFor": [ "You may tend to say no without giving the intent behind it. Be mindful about how and when you say no to your partner. When you say no, make sure you provide reasoning on why you are saying no to your partner. When you say no, try giving alternatives." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN27" }, { $set: { "thingsToWatchOutFor": [ "You might repeatedly try to make your partner understand but your partner might not be ready or willing to understand the point you are making." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN28" }, { $set: { "thingsToWatchOutFor": [ "You may tend to come across as too harsh when you are good at communicating directly, so make sure that you read your partner’s non-verbal cues and ensure that they are okay." ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN29" }, { $set: { "thingsToWatchOutFor": [ "You may listen to the conversation without expressing your thoughts, so ensure that you communicate how you feel after your partner has completed their point of view. " , "When you are communicating about how you feel, try to remain calm and speak in a composed manner" ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN30" }, { $set: { "thingsToWatchOutFor": [ "You may stumble upon videos which includes nudity while in the process of learning about sex. We suggest that you avoid videos with nudity as it sets unrealistic standards and are not a reliable source for learning."  ] }} );
db.LIItemLines.updateMany( { "angleId" : "AEN31" }, { $set: { "thingsToWatchOutFor": [ "Your partner might feel that you are too dependent on the counselor for advice. Explaining the value of it to your partner can help them understand it better."  ] }} );




db.LIItemLines.updateMany({ "angleId" : "AEN01" },{$set:{
    "tipsToImprove" : [
            {
                    "tipId": "TIP101",
                    "tipHeading" : "How much to get involved",
                    "tipBody" : "Sit down with your partner. Discuss how involved you want to be in their decision-making and vice versa. \n\nSome couples like to include their partner in small decisions like what clothes to buy. Others like to involve their partner only in big decisions like financial planning. \n\nThere’s no rule for the level of involvement. Communicating this clearly to your partner is very important. " ,
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN01/TIP101.png"      
            },
            {
                    "tipId": "TIP102",
                    "tipHeading" : "Reward your partner",
                    "tipBody" : "When you observe your partner including you in decision making, reward them. You can reward them by taking them out for a movie or a dinner date - anything they would love to do.",
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN01/TIP102.png"
            },
            {
                    "tipId": "TIP103",
                    "tipHeading" : "It's okay to do it their way!",
                    "tipBody" : "At times, you will have disagreements with your partner. If going ahead with your partner's decision is not a major discomfort to you, then do it in their way! When you do this, make sure your partner is aware that you're doing it. This makes your partner feel valued.",
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN01/TIP103.png"
            }
    ],
}});


db.LIItemLines.updateMany({"angleId" : "AEN02"}, {$set: {
    
    "tipsToImprove" : [
            {
                    "tipId": "TIP201",
                    "tipHeading" : "Everyday activity",
                    "tipBody" : "Try to schedule some 'alone' time for yourself. Spend at least half an hour per day doing something you enjoy alone. An example would be reading a book or painting for half an hour, going for a run, and so on. \n\nWhen you aren't sure what you like, think of what you used to enjoy when you were a child. Try that activity. ",
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN02/TIP201.png"
            },
            {
                    "tipId": "TIP202",
                    "tipHeading" : "Expressing Wants",
                    "tipBody" : "Don't only pay attention to what your partner wants. Tell your partner one thing you want from the relationship that you aren't getting. \n\nThis makes your partner aware of your wants. It will at least be in the back of their mind, whether it gets fulfilled or not. If you don't even express it to your partner, they won't even be aware and it will never get fulfilled.",
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN02/TIP202.png"
            },
            {
                
                    "tipId": "TIP203",
                    "tipHeading" : "Spending time with other loved ones",
                    "tipBody" : "Once a month, dedicate some time to spend with your friends and family without your partner. It will help you to find yourself. Also, you will realize that there is more to life than your partner.",
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN02/TIP203.png"
            },
            {       
                    "tipId": "TIP204",
                    "tipHeading" : "Hold on to your values",
                    "tipBody" : "Our values define who we are. When a relationship alters our values, we lose a little of ourselves. This leads to resentment and unhappiness. \nIt's okay for our partner to hold different values than we do. Find a way to co-exist without overpowering each other's values. Make sure you hold on to your values. You will be yourself and hence happy.",
                    "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN02/TIP204.png"
            },
            {
                    "tipId": "TIP205",
                    "tipHeading" : "Being aware",
                    "tipBody" : "Recall one thing you haven't been able to do since you got into your relationship. Ask your partner to do the same. \nBy doing this, you become aware of the things you sacrificed for one another. Each of you can assist the other in doing these things. This activity restores your sense of self and brings you two closer. ",
                    "tipImgUrl" :"https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN02/TIP205.png"
            }
    ],
    

}});



db.LIItemLines.updateMany({"angleId": "AEN03"}, {$set: {
    "tipsToImprove" : [
        {       
                "tipId": "TIP301",
                "tipHeading" : "Go beyond your comfort zone",
                "tipBody" : "Once in a few weeks, try out your partner's hobby. This activity will strengthen your bond and help you to understand your partner. The hobby may be as simple as checking out your partner's favorite video game.",
                "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN03/TIP301.png"
        },
        {
                "tipId": "TIP302",
                "tipHeading" : "Baby steps",
                "tipBody" : "Sometimes it's challenging to get involved in your partner's hobbies, as they might not be your cup of tea. In this case, you can take baby steps. \n\nFor example, if your partner enjoys watching football, you can start by watching the first ten minutes of a match with them. With each game, increase the time you spend participating in their hobby with them. Over time, you will notice interesting things about the hobby and you may even enjoy it.",
                "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN03/TIP302.png"
        },
        {
                "tipId": "TIP303",
                "tipHeading" : "Know their backstory",
                "tipBody" : "Ask your partner about how they got into this hobby growing up. By knowing their backstory, you'll be able to relate to them better. Also, you will be more likely to engage in their hobby or interest.",
                "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN03/TIP303.png"
        }
    ]
}})



db.LIItemLines.updateMany({"angleId": "AEN04"}, {$set: {
    
    "tipsToImprove" : [
        {
            "tipId": "TIP400",
            "tipHeading" : "Give and take",
            "tipBody" : "As humans, we tend to be self centered by nature. We ask ourselves why should I adjust. We also fear losing ourselves when we do so. Adjusting puts us in an uncomfortable situation. \n\nHowever, note that relationships are about give and take. It is a two-way street. If you are the one who takes and doesn't give anything in return, your relationship might not last. You may appear selfish to your partner. Hence it's important to adjust in a relationship.",
            "tipImgUrl": "need-attention"
        },
        {
                "tipId": "TIP401",
                "tipHeading" : "Start small",
                "tipBody" : "Recall when you said 'no' to your partner in the past that you feel can be worked upon now. Take baby steps to fulfill that. \n\nFor example, if your partner wanted to watch a Korean movie with you that you denied in the past, take a small step by watching a few trailers together with your partner. You'll be pleasantly surprised by how happy your partner would feel.",
                "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN04/TIP401.png"
        },
        {
                "tipId": "TIP402",
                "tipHeading" : "Thank your partner",
                "tipBody" : "When you notice your partner is adjusting and going beyond their comfort zone for you, thank them. If saying thank you seems too formal, find another way to express your gratitude. By offering this small token of appreciation, you show them how much you value them.",
                "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN04/TIP402.png"
        },
        {
                "tipId": "TIP403",
                "tipHeading" : "They deserve a hug!",
                "tipBody" : "We often underestimate the compromises and sacrifices our partner has made for our relationship. \n\nIn a relaxed setting, ask your partner about the compromises they have made. Listen with an open mind without judging or comparing with yours. It is usually humbling to listen to how much they have done for you. Give them a big hug. \n\nNext time, when you feel you need to adjust to accommodate your partner, remember what they have done for you.",
                "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN04/TIP403.png"
        }
        ,
        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN05" },{$set:{
    "tipsToImprove": [
        {"tipId": "TIP500", "tipHeading": "Express your displeasure", "tipBody": "We don't express when our expectations are not met for fear of conflict or hurting our partner. When we don't voice our displeasure, we are losing a part of ourselves. \n\nIf you are dissatisfied, we recommend you express it in a healthy manner and also explain where you are coming from.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN05/TIP500.png"},
        {"tipId": "TIP501", "tipHeading": "How to express" , "tipBody": "If talking about your unmet expectations feels difficult for you, follow this process. This helps you have a smooth conversation. \n\nFirstly, find a time when your partner is relaxed and has some time to talk. Mention how much you care about them and how you want both of you to be happy. Wait for their reaction. It is usually neutral or positive. This builds trust and makes what you are about to present easier to absorb. \n\nThen talk about your unmet expectations, focusing mostly on where you are coming from and how it would make you quite happy. Once you are done, let your partner speak freely. They may react positively or negatively. Either way, listen attentively and resist the urge to stop them. \n\nIf the discussion doesn't proceed as planned, apologize and mention we can discuss this later. Overall you at least got a chance to maturely bring it up. It will remain in the back of their minds.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN05/TIP501.png"},
        {"tipId": "TIP502", "tipHeading": "Atleast rice if not the whole biryani?" , "tipBody": "Can you think of an expectation that is not met that your partner can at least partially fulfill? If so, talk to your partner about it. \n\nFor example, maybe, you want your partner to take you out on a romantic date once a week. But, your partner's schedule doesn't allow this. So maybe you can suggest that you both go on short walks once in a while whenever they get time. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN05/TIP502.png"},
        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN06" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP602", "tipHeading": "Know your blind spots" , "tipBody": "In our minds, all our expectations seem fair. We form them based on our upbringing and what we have been exposed to. You may not realise that some of what you have been exposed to is actually unfair or unhealthy. These are your blind spots. \n\nWhile it may seem obvious to you, in reality, it may not be. Therefore, consulting a third party on whether your expectations are fair would at times give new insights.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN06/TIP602.png"},
        {"tipId": "TIP603", "tipHeading": "Google to the rescue!" , "tipBody": "If you feel external help is too much just Google. Search online to check if your expectations are fair or not. For example, the search could be 'I expect my partner to share his/her passwords.' You will get to know how others handle this.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN06/TIP603.png"},
        {"tipId": "TIP604", "tipHeading": "Is your partner silently suffering?" , "tipBody": "Be direct. Ask your partner if they have been doing something for you that they feel is unfair. \n\nListen with an open mind without judging or pushing back. For those that you may not agree with, have a mature discussion or seek external perspectives. This process makes your partner feel loved and genuinely cared for.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN06/TIP604.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN07" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP701", "tipHeading": "It's okay to argue" , "tipBody": "It's common to associate arguments with incompatibility at the beginning of a relationship. Realize that conflicts are inevitable at every stage of your relationship. \n\nTherefore, do not confuse having arguments with being incompatible with your partner. An argument can be seen as a chance to know your partner better. We only argue with people we love.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN07/TIP701.png"},
        {"tipId": "TIP702", "tipHeading": "Use ‘I’ rather than ‘You’" , "tipBody": "When you're making a point to your partner that sounds like an argument, use 'I' rather than 'you'. Use statements such as ‘I felt hurt' instead of 'You hurt me'. \n\nThis encourages the partner to be more open and less defensive. You come across as not blaming your partner but rather explaining your feelings.\n\nIn this way, rather than ego clashes and fault-finding, the discussion involves empathizing and finding solutions. This makes managing conflicts smooth.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN07/TIP702.png"},
        {"tipId": "TIP703", "tipHeading": "Celebrate first argument" , "tipBody": "When you and your partner have resolved your first conflict, celebrate it like how you would celebrate your first kiss. You can give them a cute apology note, get ice cream, etc. \n\nCelebrating helps embrace arguments and accept that it is a normal part of a relationship. Having your first argument is a milestone in itself!", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN07/TIP703.png"},
        {"tipId": "TIP705", "tipHeading": "When to bring it up again?" , "tipBody": "Let's say you're ready to talk again after a heated argument. You've been restless. You want it resolved. Soon you start discussing it. \n\nNote that sometimes this backfires. Your partner may not have healed from the argument. They may need more time to be emotionally ready. Instead of discussing it when you are ready, discuss it when you both are.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN07/TIP705.png"},
    ]
}});

db.LIItemLines.updateMany({  "angleId": "AEN08" },{$set:{
   
    "tipsToImprove": [
        {"tipId": "TIP801", "tipHeading": "Opening up to a third party" , "tipBody": "Many couples believe pre-marital counseling is unnecessary. When love is in the air, they don't want to risk anything. They fear it might end the relationship. So they avoid it. \n\nAlso, convincing a partner to seek counseling can be awkward. Note that pre-marital counseling strengthens the relationship, not weakens it. It is like meeting your grandma rather than going for an interview. \n\nA counselor's goal is to make both of you more aware of where you connect and where you can improve. You will get to know your partner on a deeper level, resulting in a healthy relationship.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN08/TIP801.png"},
        {"tipId": "TIP802", "tipHeading": "Self help" , "tipBody": "If you don't want to meet a third person for counseling, you can always do it yourself as a couple. \n\nWe at HappilyEver offer a self-awareness assessment that both of you can take individually. This helps each of you become aware of your strong and weak areas. It also gives you advise on how to improve your relationship.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN08/TIP802.png"},
        {"tipId": "TIP803", "tipHeading": "Atleast cover the basics" , "tipBody": "If the other two options are difficult for you to do, then try this one instead. Sit down with your partner and discuss certain topics before getting married. Important topics that you should discuss include loyalty, in-laws, career, finances and physical intimacy.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN08/TIP803.png"},
    ]
}});

db.LIItemLines.updateMany({ "angleId": "AEN09" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP901", "tipHeading": "Do some prep work!" , "tipBody": "Before getting intimate, have an open-minded conversation with your partner. Discuss how you wish the first night to flow. Do not hesitate to talk about gray areas, taboo topics such as oral sex, what words do you use while being intimate, what you call your private parts or the term you use for 'penetrative sex' etc. This will help you to have a memorable first night.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN09/TIP901.png"},
        {"tipId": "TIP902", "tipHeading": "Be open to various possibilities" , "tipBody": "Sometimes, we have unrealistic expectations about the first night because of social influences such as movies, books, porn, etc. Understand that the sexual content in these is unrealistic and scripted. \n\nIt's not uncommon for couples to just talk, or to just cuddle or to watch a movie without sex. Realise that all of them are beautiful. We suggest to not think too much about this.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN09/TIP902.png"},
        {"tipId": "TIP903", "tipHeading": "After the first night" , "tipBody": "Talk to each other about your best moments and not so great moments of your first night. Be honest about it. Try to improve on whatever didn't go well. This will make it more enjoyable the next time. It helps you connect deeper.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN09/TIP903.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN10" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP10100", "tipHeading": "Finding groove" , "tipBody": "Most of us tend to think that sex should instantly click with our partner. These misconceptions might be shaped by the kind of media we consume such as movies and novels. Asking our friends about their experiences might not always yield an honest answer. \n\nUnderstanding each other's sexual preferences, likes, dislikes and accommodating them takes time. Most couples experience this. This is totally normal.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN10/TIP10100.png"},
        {"tipId": "TIP10101", "tipHeading": "Be patient" , "tipBody": "For most couples, finding the right groove in bed takes time. Be patient. \n\nIt may take time for your partner to open up as they might have to overcome fears, taboos, and misconceptions they have faced in the past. When you force it, the whole experience is ruined. Allow it to take its time. For no two couples, it's the same when it comes to intimacy. \n\nTry not to judge your partner; try to understand them instead. Think about how you can improve your sexual life while you work through it.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN10/TIP10101.png"},
        {"tipId": "TIP10102", "tipHeading": "Slow is fun!" , "tipBody": "Whenever you and your partner get intimate, do it with an empty relaxed mind. No need to rush into it like they do in movies. \n\nHaving sex isn't the only way to be intimate. Sometimes looking into each other's eyes or just touching each other is intimate. Don’t have any specific, rigid expectations. For example, that sex should always include penetration, men should always be dominant, etc. \n\nIn the first few encounters, let it just happen naturally. Do what you like and let your partner also do the same. This will help you find your natural groove with your partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN10/TIP10102.png"},
        {"tipId": "TIP10103", "tipHeading": "Looking out can be the only way out!" , "tipBody": "When sex hasn't worked out for months, it's time to seek help. A close friend, online media, or intimacy experts are some options. Experts include sex surrogates, urologists, psychiatrists, intimacy coaches, etc. These experts keep things confidential. \n\nYou can meet them alone or with your partner. You can start by giving them a call. Seeking help can improve your sex life.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN10/TIP10103.png"},
        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN11" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP11100", "tipHeading": "Let go of your shyness" , "tipBody": "Sex is something people usually shy away from talking about with their partner. It's normal to feel shy. \n\nHowever, understand that sex is an integral part of your relationship. Your sex life will impact all the other aspects of your relationship. Not talking about it will eventually make you and your partner unhappy. Finding a way out to talk about what you want is crucial, even if doesn't seem easy.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN11/TIP11100.png"},
        {"tipId": "TIP11103", "tipHeading": "Subtle ways" , "tipBody": "If talking about sex feels awkward, do it in subtle ways. Talk to each other about your fantasies or ask how they feel about certain hypothetical situations. \n\nFor example, you can start the conversation by saying, ‘Hey! The other day my friend was talking about having sex in the kitchen with their partner. She said it was really fun. What are your thoughts on it?’ Here, you would get an idea of your partner’s perspective without directly asking about it. \n\nAlternatively, you can also send your partner various videos or blogs that are more in tune with how you like it. If you are into writing, write about your preferred style, likes, dislikes and share it with your partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN11/TIP11103.png"},
        {"tipId": "TIP11104", "tipHeading": "A different time, a different place" , "tipBody": "Try having sex at a different time and place than your usual. For example, if you usually have sex in the bedroom at night, have sex in the morning in the living room. \n\nChanging the time and place will help you and your partner become more open to communicating about each other's sexual preferences and fantasies.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN11/TIP11104.png"},
    ]
}});



db.LIItemLines.updateMany({"angleId": "AEN12"},{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP12100", "tipHeading": "We own how we react" , "tipBody": "We tend to think that reacting aggressively when our partner provokes us is justified. We blame the partner. This is not healthy. We are responsible for our own emotions. We get angry not because someone provoked us, but because we got triggered. \n\nTriggers can be anything, such as a word, tone of voice, a past incidence, a thought, etc. Once we control our feelings, we can control the way we react to it. To take control of our feelings, we need to accept we are responsible for them. It is possible to still stay calm and react in a mature way even if our partner seems to provoke us.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN12/TIP12100.png"},
        {"tipId": "TIP12101", "tipHeading": "Discover your triggers" , "tipBody": "By knowing your triggers, you can change how you react. This helps you control negative emotions. \n\nTake a moment to reflect back on when you felt angry, sad, lonely, hopeless, etc., and what triggered those feelings. Note down these situations. Mention the emotions you felt in each situation. For example, 'My partner said no to a movie date. This is the third time they said no. I felt deeply hurt.' Recognize that them saying no is a trigger. Feeling hurt is your reaction to that trigger.\n\nList at least 10 such situations. It may take you 2-3 days to write them all down. The next time you face a similar trigger, resist the temptation to react. Tell yourself 'I feel this strong emotion'. Wait for 5 seconds before reacting or walking away, whichever feels more comfortable. In this way, you can control your negative emotions and improve the quality of your life.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN12/TIP12101.png"},
        {"tipId": "TIP12102", "tipHeading": "Emojis" , "tipBody": "If you are not great at identifying how you are feeling, get an emoji chart from Amazon and hang it on your wall. When you want to pin point your emotions, look at the various emojis in the chart and identify which ones you feel.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN12/TIP12102.png"},
        {"tipId": "TIP12105", "tipHeading": "Talk to someone" , "tipBody": "If you cannot identify situations where you felt triggered, ask your loved ones for help. They can remember and identify some of them. \n\nMake a list of them and display them where you can see them every day. You'll slowly become aware of your triggers and eventually, you'll be able to control your reactions to them.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN12/TIP12105.png"},        
        {"tipId": "TIP12104", "tipHeading": "Release your anger" , "tipBody": "When you feel restless or have pent up emotions, try the primal scream technique to relieve them. Go somewhere you can't be heard. Let out a loud scream for as long as you can. Repeat it until you feel calm. \n\nIf you are into art, you can express your anger through coloring or painting. It will help you cool down.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN12/TIP12104png"},
        {"tipId": "TIP12103", "tipHeading": "Speed up" , "tipBody": "Consult a psychologist if you want to identify and address your triggers faster. You will be able to manage your emotions more effectively with their help.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN12/TIP12103.png"},

        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN13" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP13100", "tipHeading": "Being Vulnerable" , "tipBody": "We avoid being vulnerable as we fear being hurt or judged by our partner. Your upbringing also influences this quality. If people around you dismissed you when you were vulnerable in the past, you might have closed yourself off. \n\nUnfortunately, as a society, we teach men not to be vulnerable, claiming it makes you less masculine. Realize that being vulnerable needs courage. It in fact makes you stronger because people trust you more. It also helps you connect deeper.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN13/TIP13100.png"},
        {"tipId": "TIP13101", "tipHeading": "At least say that you struggle to open up" , "tipBody": "If you feel uncomfortable opening up to your partner, you can talk to them about the feeling of discomfort itself. You can tell how hard it is for you to open up. \n\nThis conversation will give you the courage to open up more in the future. It will also help them understand your point of view better. Thus, it will improve your relationship.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN13/TIP13101.png"},
        {"tipId": "TIP13102", "tipHeading": "Ask yourself ' how I feel right now?" , "tipBody": "We always feel something, but we aren't in tune with it. \n\nOccasionally, ask yourself how you are feeling at this moment and be honest. If you pause and look deep, you will see that you are experiencing multiple emotions at any time. If some of these feelings are negative, tell yourself, ' It's okay, I am feeling this way. It's just a passing phase. Things will be alright'. \n\nExercises like this make us more self-aware and have a calming effect. It teaches us how to be vulnerable to ourselves, making it easier to be vulnerable to our partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN13/TIP13102.png"},
        {"tipId": "TIP13103", "tipHeading": "Happy Hour week" , "tipBody": "Every week, set aside some time for you and your partner to share something that made you happy that week. After sharing the happy memory, talk about something that made you feel unhappy that week. Ask your partner to share the same. \n\nThese conversations will help you and your partner become more comfortable opening up to each other.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN13/TIP13101.png"},
        {"tipId": "TIP13104", "tipHeading": "A journey together" , "tipBody": "When you set a new goal, keep your partner informed.Once in a while, express to your partner how things are going with respect to the goal. For example, if your goal is to lose weight, you can talk to your partner about your progress each week. \n\nDoing this will slowly make you accustomed to sharing your different emotions. Without realising you start to be vulnerable to your partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN13/TIP13101.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN14" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP14101", "tipHeading": "Let go of your ego and fear" , "tipBody": "Reaching out to your partner after a fight can be difficult because you fear how they may react. Sometimes we feel it's not our problem to make them feel better. Realise that your partner needs you the most when they are hurt and recovering. So we suggest that you embrace the fear. \n\nIt is also vital to put away your ego when it comes to your partner, as there is no ego in a relationship. Putting effort to reach out to them once you have recovered from a fight shows your unwavering support and how much you care for them. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN14/TIP14101.png"},
        {"tipId": "TIP14102", "tipHeading": "Be there for your partner" , "tipBody": "After letting go of your fear and ego post a heated argument with your partner, it might feel awkward to talk for a while. \n\nAfter you have recovered from the fight, stay with your partner. Position yourself, so your partner can see you or make your presence known. Physically being around your partner builds trust. \n\nThis action also calms your partner down. This will strengthen your bond. It allows you to relook at any unresolved issues that caused the original fight with a fresh perspective.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN14/TIP14102.png"},
        {"tipId": "TIP14103", "tipHeading": "Do something they like" , "tipBody": "If physically being around your partner feels hard to you after an argument, try to do something your partner likes instead. \n\nYou can get them their favorite food or play the music that cheers them up. Let your partner feel comforted by having them experience what they enjoy. This helps them calm down, thereby easing the conflict. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN14/TIP14103.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN15" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP15101", "tipHeading": "Arguing is not bad" , "tipBody": "Some of us might think that to keep peace in the relationship, we can skip some critical topics if it would cause a disagreement. Note that in a relationship, conflicts are inevitable. \n\nIt is unhealthy to avoid conflict by not discussing important issues. Silently suffering through it makes you unhappy slowly over time. Eventually, the issues you swept under the rug will surface and lead to even more serious conflict. \n\nTherefore, addressing the pressing issues is important even if it means risking conflict. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN15/TIP15101.png"},
        {"tipId": "TIP15102", "tipHeading": "How to have a crucial conversation?" , "tipBody": "If talking about the concerns feels difficult to you, follow this process. This helps you have a smooth conversation. \n\nFirstly, find a time when your partner is relaxed and have some time to talk. Once you start talking, mention how much you care about them and how you want both of you to be happy. Wait for their reaction. It is usually neutral or positive. This builds trust and makes them ready to absorb what you are about to present. \n\nThen talk about your concern, focusing mostly on where you are coming from, what your feelings are and how addressing it would make you feel better. Once you are done, let your partner speak freely. They may react positively or negatively. Either way, listen attentively and resist the urge to stop them. \n\nIf the discussion doesn't proceed as planned, apologize and mention we can discuss this later. Overall you at least got a chance to maturely bring it up. It will remain in the back of their minds.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN15/TIP15102.png"},
        {"tipId": "TIP15103", "tipHeading": "Pen it down" , "tipBody":"When you feel you can't talk to your partner about something important, write it down. Be gentle when expressing concern. Avoid harsh or abusive language. Do not blame your partner for the issue; instead, focus on yourself. Share it with your partner once you're done.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN15/TIP15103.png"},
        {"tipId": "TIP15104", "tipHeading": "Go for a walk" , "tipBody":"Whenever you feel uncomfortable talking or writing about your concern, try having a conversation with your partner in a position where you are not facing each other. You can do this by going for a walk with your partner. When you are not making eye contact and facing away from each other, talking becomes less awkward.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN15/TIP15104.png"},
        {"tipId": "TIP702", "tipHeading": "Use ‘I’ rather than ‘You’" , "tipBody":"When you're making a point to your partner that sounds like an argument, use 'I' rather than 'you'. Use statements such as ‘I felt hurt' instead of 'You hurt me'. \n\nThis encourages the partner to be more open and less defensive. You come across as not blaming your partner but rather explaining your feelings. \n\nIn this way, rather than ego clashes and fault-finding, the discussion involves empathizing and finding solutions. This makes managing conflicts smooth.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN07/TIP702.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN16" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP16100", "tipHeading": "It's okay to seek assistance" , "tipBody": "Most of us tend to think that conflicts between the couple shouldn't be revealed to outsiders. We think it's shameful to talk about it. In most cases, couples can resolve conflicts themselves. \n\nHowever, there can be some hard to resolve issues such as abuse or infidelity that can persist for more than 6 months. They may require external support. It might be too hard for you to deal with these issues alone. Remember, it's okay to seek help.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN16/TIP16102.png"},
        {"tipId": "TIP16103", "tipHeading": "Find the right professional guidance" , "tipBody": "There are multiple avenues where you can seek help. HappilyEver experts, renowned psychologists in your town, emotional help hotlines, religious heads, elder couples. You can choose one that you feel most comfortable with.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN16/TIP16103.png"},
        {"tipId": "TIP16101", "tipHeading": "Google" , "tipBody": "If you don't want to seek external help,use online search media. Use google or quora to see what others do when they have similar issues. This gives you different perspectives.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN16/TIP16101.png"},
        
    ]
}});

db.LIItemLines.updateMany({ "angleId": "AEN17" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP17100", "tipHeading": "Natural instinct" , "tipBody": "As humans, we are inclined to yell back whenever someone shouts at us. Our instinct is to react defensively in such a way. \n\nHowever, this will negatively impact your relationship. Yelling back at your partner when they are already angry will lead to an even more heated argument. There is a possibility that you both will say mean things to each other, which might deeply hurt you both.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN17/TIP17102.png"},
        
        {"tipId": "TIP17103", "tipHeading": "Timeout" , "tipBody": "When you realize you are feeling angry and can't control it, ask your partner for a short break. Walk away and take time for yourself. It could be as little as 30 minutes or as long as 12 hours. Distancing yourself from the situation will help you process what has happened. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN17/TIP17103.png"},
        
        {"tipId": "TIP17105", "tipHeading": "Let it settle" , "tipBody": "Each of us takes different amounts of time to process conflicts. You might have a partner who takes time to process things. Be patient and allow them to recover. Approach them later when they are ready to discuss the issue.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN17/TIP17105.png"},
        {"tipId": "TIP17104", "tipHeading": "Write your feelings" , "tipBody": "One of the techniques to vent out your anger is penning it down. Write up on whatever you feel at that moment in as detailed as you want. Simply articulating your feelings through written words will help you release this anger and feel better.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN17/TIP17104.png"},
        {"tipId": "TIP17101", "tipHeading": "Long after the fight is over" , "tipBody": "After the issue has been resolved and some time has passed by, sit with your partner in a relaxed setting. \n\nAsk them to tell you their point of view on what happened. Resist the urge to correct them. Listen to them patiently. Then you do the same and ask your partner to only listen and not react. \n\nThis conversation will help you understand each other better regarding how your partner thinks and perceives. Realise how both of your stories are so different for the same incident. Next time when an argument happens, you'll be able to understand your partner's perspective better.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN17/TIP17101.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN18" },{$set:{   
    "tipsToImprove": [
        {"tipId": "TIP18100", "tipHeading": "People don't change!" , "tipBody": "In the early stages of a relationship, we tend to ignore the negative qualities of our partner. We feel we can change our partner's negative qualities with love. We tend to think our partner would be willing to get influenced by us and correct themselves. \n\nIn reality, people rarely change. Love is not motivating enough for them to fix their negative qualities. Realise that, we can't change the negative quality, and eventually, it becomes a point of conflict. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN18/TIP18100.png"},
        {"tipId": "TIP18102", "tipHeading": "Choose wisely" , "tipBody": "When choosing a partner, look for someone whose negative qualities are something you can live with. Most people love a future version of their partner, which never happens. Make sure you can live with your partner in the present, despite their negative qualities. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN18/TIP18102.png"},
        {"tipId": "TIP18101", "tipHeading": "Address concerns early on" , "tipBody": "Consider your partner's negative qualities. Put them into three buckets:\nA. Not a big deal, can co-exist\nB. Conflicting but can co-exist with effort\nC. Can't co-exist\nFor those in B, discuss with your partner how to manage it together. For those in C, rethink your relationship. Give it some time to see if there are any smart ways to handle them. Seek external help if needed. This activity helps you better cope with your partner's negative qualities.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN18/TIP18101.png"},
        {"tipId": "TIP18104", "tipHeading": "Be more accepting" , "tipBody": "Regarding your partner's negative quality, ask your partner how it all started. By understanding the story behind it, often you can empathize with your partner. You can understand them better. \n\nSometimes, you may even come up with creative ways for your partner to get what they want without engaging in the negative quality. For example, your partner smokes after work to relieve work stress.You can propose going for a walk together sometimes after work to see if that would make them feel relaxed. They may or may not smoke after that. It's up to them. \n\nAlternately, ask your partner about a bad habit or quirk you have that they have learned to live with. It will make you appreciate their efforts and will help you become resilient.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN18/TIP18104.png"},
    ]
}});

db.LIItemLines.updateMany({ "angleId": "AEN19" },{$set:{  

   "tipsToImprove": [
    {"tipId": "TIP19100", "tipHeading": "Change beyond what you think" , "tipBody": "A healthy relationship requires many things to be right. You need to get 3 puzzles right - you, your partner and time. We often underestimate the amount of change involved. \n\nFirstly, you need to know what you want from your relationship. You need to know how much to adjust to make it work. \n\nSecondly, once you have a partner, you need to learn to accept their quirks and qualities you don't like.\n\nLastly, time and life constantly present us with new challenges we don't yet understand. For e.g. your partner loses their job and gets a new one in another city, you as a couple realize that you can't have children for whatever reasons. You can never be fully prepared for changes until they happen. Hence, it's healthy to accept that change is constant and we can never be completely prepared.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN19/TIP19100.png"},
        {"tipId": "TIP19101", "tipHeading": "Judge less" , "tipBody": "Adapting to change is easier when one judges less. \n\nTake a moment to think about a recent incident with your partner that made you irritated. Take a deep breath, close your eyes, and tell yourself 'Yes this thing happened. I surely was irritated. You are not perfect, but you did your best. I am not perfect either.' \n\nThis activity makes our hearts more accepting, humble and open to the imperfections of our partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN19/TIP19101.png"},
        {"tipId": "TIP19102", "tipHeading": "Sun walk" , "tipBody": "When we push ourselves out of our comfort zone, we become more tolerant of change. Find something that makes you a bit uncomfortable. Do it when you are relaxed. \n\nFor example, if walking in the hot sun makes you uncomfortable, try it for a few minutes. As you walk, don't fight it, but feel it on your skin. Embrace this and tell yourself it's okay. It helps you build tolerance and makes you more open to accepting change.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN19/TIP19102.png"},
        {"tipId": "TIP19104", "tipHeading": "Take a bite first before you eat the cake!" , "tipBody": "Start small if a change feels too big. Consider experiencing a small portion of the change first. Eg. You and your partner are moving to a new city. You feel quite nervous. Take a weekend trip to the city before you relocate.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN19/TIP19104.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN20" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP20100", "tipHeading": "Being friendly " , "tipBody": "Some couples think it's okay to not interact with their partner's parents especially if they are annoying. We may not realise that our relationship with our partner's parents impacts our relationship with our partner. \n\nParents play a significant role in your partner's life. When you're not on good terms with them, your partner will feel hurt, which will affect your relationship. \n\nIt also means we are discarding our own support system. As we age, we and our partner's parents will need each others' support whether we like it or not. If the gap isn't bridged early on, it gets more difficult to bond and reconcile as time passes by. \n\nWe recommend that you at least be on talking terms with your partner's parents to have a smooth and healthy relationship with your partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN20/TIP20100.png"},    
        {"tipId": "TIP20101", "tipHeading": "Bonding activities" , "tipBody": "Talk to your partner's family and find out what kinds of activities you both enjoy. Engage in those activities with them. For example, playing board games, watching movies, etc. These fun activities will help you bond with them, and you will start to enjoy their company.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN20/TIP20101.png"},
        {"tipId": "TIP20102", "tipHeading": "Figure out why" , "tipBody": "If you're unable to get along with your partner's parents, try to figure out why. It could be their attitude or behaviour or a past incident that is stopping you from talking to them. \n\nOnce you identify the reason, talk to them and understand where they're coming from and why they behave in that way. This conversation will help you to understand their point of view and become more tolerant of them.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN20/TIP20102.png"},
        {"tipId": "TIP20103", "tipHeading": "Favorite childhood memories" , "tipBody": "Ask your partner's parents to share their favorite memories when your partner was a child. This will help you see them in a different light and will make it easier to get along with them. As a bonus, you’ll also hear cute stories of your partner’s childhood.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN20/TIP20103.png"},
        {"tipId": "TIP20104", "tipHeading": "Learn from their wisdom","tipBody": "Parents have a lot of experience and wisdom to share. Let some conversations with them be around learning from their experience. \n\nInvite them to share their advice on topics such as finances, health, work, kids, etc. It would be enriching to listen to what they have to say. Conversations like these will facilitate your relationship with them.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN20/TIP20104.png"},
        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN21" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP21100", "tipHeading": "It's okay to over communicate" , "tipBody": "We tend to underestimate how much we have to communicate our wedding expectations to our partner's family. We mostly talk about high-level stuff like booking the hall, setting the date, etc. We tend to miss small details like who would pay if there were extra guests, which rituals the bride and groom should follow after the wedding, etc. \n\nNot communicating enough often leads to huge conflicts among families. Thus, we need to communicate our wedding expectations to our partner's family as thoroughly as possible.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN21/TIP21100.png"},
        {"tipId": "TIP21101", "tipHeading": "Start early, go deep" , "tipBody": "The families on both sides need to discuss in depth early on what happens before, during, and after the wedding. \n\nDecide who should handle what and when. What arrangements are necessary for close relatives, friends, and well-wishers from both families?  Discuss finances, such as who will pay for the wedding and who will cover unexpected costs. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN21/TIP21101.png"},
        {"tipId": "TIP21102", "tipHeading": "Be ready for the unexpected" , "tipBody": "Many issues can occur when planning a wedding. These include unexpected wedding costs, not being aware of the major and minor differences in family traditions, people forgetting things, people misunderstanding what was told to them, last minute change in plans, delays everywhere, etc. \n\nThe wedding planners on both sides should stay in touch throughout. Avoid making any assumptions. It is better to over-communicate than to under-communicate. This way, the wedding can go smoothly.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN21/TIP21102.png"},
        {"tipId": "TIP21103", "tipHeading": "Be forgiving" , "tipBody": "Try to be accommodative and forgiving of both of your families for the mess ups that are bound to happen. \n\nThere will be a few unpleasant surprises along the way. For instance, your family has a tradition that the groom rides a horse to the wedding. Despite their best efforts, the groom's family may not be able to make it happen and comes by car instead. In such scenarios, it's best to take it easy and enjoy the wedding.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN21/TIP21103.png"},
    ]
}});

db.LIItemLines.updateMany({ "angleId": "AEN22" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP22100", "tipHeading": "Setting boundaries is hard" , "tipBody": "It is often difficult to draw boundaries, i.e. to communicate what is okay and what is not okay with our parents. Since we are raised by them, we have a general tendency to obey them. Hence, setting a boundary may seem like going against them. \n\nHaving no such boundaries will result in resentment and awkwardness. By discussing boundaries with them, we foster a healthy relationship in the long run.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN22/TIP22100.png"},
        {"tipId": "TIP22101", "tipHeading": "Let's start somewhere" , "tipBody": "If you have no clue where to start to draw boundaries with your parents, here are some common topics you can start with. For e.g, how the couple spends their money, where they live, upbringing of kids, how much time you spend with your in-laws, etc. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN22/TIP22101.png"},
        {"tipId": "TIP22102", "tipHeading": "Crucial conversations" , "tipBody": "If talking about boundaries with parents feels difficult to you, follow this process. This helps you have a smooth conversation. \n\nFirstly, find a time when your partner's parents are relaxed and have some time to talk. Once you start talking, mention how much you care about them and how you want all of us to be happy. Wait for their reaction. It is usually neutral or positive. This builds trust and makes them ready to absorb what you are about to present. \n\nThen talk about the boundaries you want to draw, focusing mostly on where you are coming from, what your feelings are and how addressing it would make you feel better. Once you are done, let your partner's parents speak freely. They may react positively or negatively. Either way, listen attentively and resist the urge to stop them. \n\nIf the discussion doesn't proceed as planned, mention we can discuss this later. Overall you at least got a chance to maturely bring it up. It will remain in the back of their minds.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN22/TIP22102.png"},
        {"tipId": "TIP22104", "tipHeading": "Be forgiving" , "tipBody": "Even though you have set boundaries with your partner's parents, they may cross them. In most cases, they just simply forget about it and do it unintentionally. Remember to be empathetic and remind your parents about the boundaries you discussed before. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN22/TIP22104.png"},
        {"tipId": "TIP22103", "tipHeading": "Spend time" , "tipBody": "Every once in a while, spend some time doing an activity with your partner's parents. It will help you understand them better. Next time when a situation arises wherein you want to draw a boundary, you would know how to propose that to your partner's parents in a smooth manner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN22/TIP22103.png"},
    ]
}});



db.LIItemLines.updateMany({ "angleId": "AEN23" },{$set:{
    "tipsToImprove": [
        {"tipId": "TIP23100", "tipHeading": "Money first. Marriage next!" , "tipBody": "As we grow older, we believe it is important to get married. Getting financially stable before you get married is always a good idea. \n\nUnderstand that financial hardship has an impact on your relationship. You don't want to start a marriage in hardships. Once you get married, conflicts may arise because of money constraints. Marriage adds new expenses that you may not be aware of. \n\nHence, we recommend you to wait even if you are growing old till your combined income is sufficient to cover your basic needs.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN23/TIP23100.png"},
        {"tipId": "TIP23101", "tipHeading": "Get clarity on expenses" , "tipBody": "Before you get married, make a list of your potential expenses during your first year as a married couple. This activity will help you understand your current financial situation. \n\nPlanning before marriage gives you an idea of what you are getting into financially. You can discuss with your partner where you spend the most money and what your recurring expenditures include. For example, you spend most of your money on loans while your partner spends most of their money on food. \n\nThis gives you clarity on the kind of expenses you both have individually.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN23/TIP23101.png"},
        {"tipId": "TIP23102", "tipHeading": "Plan your Income" , "tipBody": "If you and your partner's combined income or savings doesn't seem enough to start a family, start planning for alternative income sources. You could learn a new skill or take up a part time job or buy a rental property. \n\nIf possible, identify areas where you can reduce your expenses. This helps you budget your money better and increase your savings."	, "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN23/TIP23102.png"},
        {"tipId": "TIP23103", "tipHeading": "Marriage and taxes" , "tipBody": "Look into the hidden marriage benefits that exist, like certain tax exemptions, sharing common resources like rent, vehicles etc. Figure out how much you can save through them. You can try contacting a tax expert for more details.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN23/TIP23103.png"},
    ]
}});



db.LIItemLines.updateMany({ "angleId": "AEN24" },{$set:{
    "tipsToImprove": [
        {"tipId": "TIP24100", "tipHeading": "Your money and your partner's" , "tipBody": "It feels unromantic to talk about our own money with our partner. We may think it's unnecessary to involve our partner. \n\nHowever, our financial goals need to be aligned with our partner's financial goals for a healthy relationship. E.g. You want to buy a luxurious car next year whereas your partner wants to buy a house. If you buy a car, you won't have enough savings for a house. In such situations it's important to discuss goals even if it's your own money.  \n\nEach major financial decision we make will have an impact on our partner at some point.Therefore, it is a good idea to involve our partner in how we handle our own money.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN24/TIP24100.png"},
        {"tipId": "TIP24101", "tipHeading": "Is there a limit?" , "tipBody": "When it comes to your own money, is there a minimum amount you can spend without bothering your partner? Aligning on this helps you to reduce conflicts around finances with your partner.  E.g. You might set a limit of 5k. If you decide to spend more than 5k, you agree to keep your partner informed.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN24/TIP24101.png"},
        {"tipId": "TIP24102", "tipHeading": "Discuss goals" , "tipBody": "Talk to your partner about your financial goals. Having a clear understanding of each other's financial goals makes other financial decisions easier. Aligning financial goals also reduces potential conflicts.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN24/TIP24102.png"},
        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN25" },{$set:{
    
    "tipsToImprove": [
        {"tipId": "TIP25101", "tipHeading": "Money first. Kids next." , "tipBody": "It is not recommended to rush into parenthood due to social pressure or our biological clock. Wait a little longer to get your finances in order. \n\nMost couples underestimate the costs of raising a child. There will be unexpected suprising expenses that you can't forsee now because you havn't been there yet. Hence, we need to plan our finances before having children.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN25/TIP25101.png"},
        {"tipId": "TIP25102", "tipHeading": "Consult and revise" , "tipBody": "Consult other parents about their parenthood journey and note what they have spent money on. \n\nAfter that, sit down with your partner and ask how much they would like to spend on their future child. \n\nNext, figure out your budget which includes your child's essentials and also many one-time investments. Essentials include healthcare, daycare, cribs, toys, and diapers. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN25/TIP25102.png"},
        {"tipId": "TIP25103", "tipHeading": "Start a kid's education fund" , "tipBody": "Education is expensive. Create a separate fund for your children's education. Discuss with your partner how much money will be saved monthly and kept in the fund for the child’s education or higher studies.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN25/TIP25103.png"},
    ]
}});

db.LIItemLines.updateMany({ "angleId": "AEN26" },{$set:{
    "tipsToImprove": [
        {"tipId": "TIP26100", "tipHeading": "How to say 'No' ?" , "tipBody": "If saying no to your partner directly feels difficult to you, follow this process. This helps you have a smooth conversation. \n\nFirstly, find a time when your partner is relaxed and have some time to talk. Once you start talking, mention how much you care about them and how you want both to be happy. Wait for their reaction. It is usually neutral or positive. This builds trust and makes them ready to absorb what you are about to present. \n\nThen talk about the topic for which you want to say no, focusing mostly on where you are coming from, what your feelings are and how addressing it would make you feel better. Once you are done, let your partner speak freely. They may react positively or negatively. Either way, listen attentively and resist the urge to stop them. \n\nIf the discussion doesn't proceed as planned, mention we can discuss this later. Overall you at least got a chance to maturely bring it up. It will remain in the back of their minds.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN26/TIP26100.png"},
        {"tipId": "TIP26101", "tipHeading": "It's okay to say 'No'" , "tipBody": "Most of us find it difficult to say no. There could be numerous reasons for it, including not wanting the partner to get hurt, being brought up in a culture where saying 'no' is not an option, fearing the relationship will break if we say 'no,' or simply wanting to please our partner. \n\nAlways saying 'yes' to your partner is unhealthy. By doing so, you are slowly losing yourself. A healthy relationship requires you to say 'no' whenever you feel the need to do so.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN26/TIP26101.png"},
        {"tipId": "TIP26103", "tipHeading": "Start small" , "tipBody": "Start saying no to small things which you disagree with. A good example would be if your partner asks for noodles for dinner and you do not feel like it. You could say no to noodles and instead propose manchurian or an alternate Chinese dish. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN26/TIP26103.png"},
        {"tipId": "TIP26104", "tipHeading": "Middle ground" , "tipBody": "When saying 'no' feels quite tough, you can try to find a middle ground. \n\nSuppose your partner wants a new pet, but you are not ready to take on the responsibility. You both can visit a friend who has a pet and start spending good time with the pet. After few weeks you can ask your partner if you can continue to do so and avoid getting a pet home.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN26/TIP26104.png"},

    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN27" },{$set:{
    "tipsToImprove": [
        {"tipId": "TIP27101", "tipHeading": "Patience is the key!" , "tipBody": "When our partner doesn't seem to comprehend what we're trying to say, we think it's best to move on. At times, we feel impatient. Recognize that sometimes it can be difficult for our partner to understand us. If we don't take the time to make them understand, they might feel disrespected. \n\nImagine how you would feel if your partner gives up when you don't understand what they are trying to say. They deserve our patience and efforts. It builds good team spirit.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN27/TIP27101.png"},
        {"tipId": "TIP27102", "tipHeading": "Rephrase your point" , "tipBody": "Sometimes, our partner doesn't get us. We believe that our communication is clear. We tend to repeat the same point multiple times with the same words. Our partner may perceive things differently than we intend them to. In such cases, it's an issue with our communication and not our partner's fault. \n\nAfter explaining it twice, if your partner doesn't seem to understand it, rephrase it using different words. You might get your point across much more effectively this way. ","tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN27/TIP27102.png"},
        {"tipId": "TIP27103", "tipHeading": "Bridge the gap" , "tipBody": "You can ask your partner to explain what they just heard to you in their own words. You can immediately recognize where exactly you both are not aligned. Try to explain only this gap to your partner. Repeat this exercise till they can understand what you're trying to say.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN27/TIP27103.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN28" },{$set:{ 
    "tipsToImprove": [
        {"tipId": "TIP28101", "tipHeading": "Express how you feel" , "tipBody": "We often expect our partner to understand how we feel without explicitly telling them. Most of us don't pay attention to subtle signs in our facial expressions, tone of voice, body language etc. to recognise how someone is feeling. \n\nWhen we are feeling low and don't express, it  would result in pent-up emotions, and eventually causes an emotional outburst. This is not healthy. \n\nSo, it is essential to express your feelings directly. You need to express it in the right way at the right time.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN28/TIP28101.png"},
        {"tipId": "TIP28102", "tipHeading": "Story behind your feelings" , "tipBody": "When expressing feelings to your partner feels tough, give a story or reasoning behind your feelings and then express your feelings. \n\nFor example, you felt hurt that your partner didn't take you out to dinner on your anniversary. You can say, 'In my family, we proactively remember and celebrate each other's birthdays and anniversaries'. I just want you to know I felt hurt when you couldn't make time to have dinner with me. I understand that you have a busy schedule but I expected you to prioritize me over your work, especially on our anniversary'. \n\nHaving this discussion will help them understand your stance and accept your feelings more easily. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN28/TIP28102.png"},
        {"tipId": "TIP28103", "tipHeading": "Use ‘I’ rather than ‘You.’" , "tipBody": "When you are expressing your feelings to your partner, use 'I' rather than 'you'. Use statements such as ‘I felt hurt' instead of 'You hurt me'. \n\nThis encourages the partner to be more open and less defensive. You come across as not blaming your partner but rather explaining your feelings. \n\nIn this way, rather than ego clashes and fault-finding, the discussion involves empathizing and finding solutions.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN28/TIP28103.png"},
    ]
}});




db.LIItemLines.updateMany({ "angleId": "AEN29" },{$set:{ 
    "tipsToImprove": [
        {"tipId": "TIP29100", "tipHeading": "Wait for 5 seconds" , "tipBody": "When our partner brings up an issue and we get irritated, we tend to become defensive and interrupt our partner. This makes them uncomfortable. We come across as dominating and impatient. The conversation becomes unpleasant from there onwards. \n\nThe best way to handle such a situation is to let them complete speaking, no matter how frustrated we might feel, and only start speaking after at least a 5 second gap from the time they are done speaking. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN29/TIP29100.png"},
        {"tipId": "TIP29102", "tipHeading": "Keep your palms up" , "tipBody": "When you find it hard to listen to your partner, sit down. Try placing your hands on your lap or the table with your palms facing up. Continue to listen without moving your palms. \n\nKeeping your palms open subconsciously makes you more willing to accept what the other person is saying. It'll help ground you and make it easier to listen to your partner.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN29/TIP29102.png"},
        {"tipId": "TIP29104", "tipHeading": "Finger Counting" , "tipBody": "Another technique to make it easier to listen is to count from 1 to 10 using your fingers. Stay at each finger for 3 seconds and then fold them one by one. It'll help you calm down and listen to your partner better. Interestingly, this technique also works in a reverse situation. If you notice your partner is getting irritated while you are speaking, stop speaking and then do the finger counting where they can clearly see your fingers folding. After this, either of you can start speaking to continue the conversation.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN29/TIP29104.png"},       
        {"tipId": "TIP29103", "tipHeading": "Code words" , "tipBody": "When we are not listening and feeling restless, often our partner can notice this long before we realise this ourselves. \n\nNext time when your partner notices this, have a protocol where your partner utters a code word such as 'yellow apples'. Choose a code word that we rarely use. This code word immediately makes you self aware of your restlessness while your partner is speaking. This gives you an opportunity to be a better listener and not interrupt. \n\nOnce you are done with the conversation, don't forget to thank your partner for what they have done.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN29/TIP29103.png"},
        {"tipId": "TIP29101", "tipHeading": "Become self-aware" , "tipBody": "By knowing your triggers, you can change how you react when you are irritated. This helps you control negative emotions. \n\nTake a moment to reflect back on when you felt angry or irritated, and what triggered those feelings. Note down these situations. Mention the emotions you felt in each situation. For e.g, 'My partner said no to a movie date. This is the third time they said no. I felt irritated.' Recognize that them saying no is a trigger. Feeling irritated is your reaction to that trigger.\n\nList at least 10 such situations. It may take you 2-3 days to write them all down. \n\nThe next time you face a similar trigger, resist the temptation to react. Tell yourself 'I feel this strong emotion'. Wait for 5 seconds before reacting or walking away, whichever feels more comfortable. \n\nIn this way, you can control your negative emotions and improve the quality of your life.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN29/TIP29101.png"},
        
        
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN30" },{$set:{ 
    "tipsToImprove": [
        {"tipId": "TIP30101", "tipHeading": "Intimacy is an ocean!" , "tipBody":"You may think you know everything about sex and discourage your partner's attempts to help you know more. However, learning about sex and intimacy is a lifelong process. There is never an end to it. \n\nThus, being open to learning about intimacy and addressing your partner's sexual interests makes your relationship more satisfying.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN30/TIP30101.png"},
        {"tipId": "TIP30102", "tipHeading": "Start, stop and continue" , "tipBody": "Once in a while, you and your partner should discuss what specific things you want to try, change, or stop in bed. \n\nThose that you both enjoy doing in bed, keep doing them. Those that you both dislike in bed, stop doing them. Those that you want to try out, be open to experimenting or learning about them. \n\nThis exercise will help you to improve your sex life and feel more satisfied in bed.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN30/TIP30102.png"},
        {"tipId": "TIP30103", "tipHeading": "Explore the unknown" , "tipBody":"If you want to take your sex life to the next level, there are many avenues to do so. \n\nBlogs, books, apps, videos provide new ideas to make sex more interesting. Changing the time or place is one easy way to spice it up. \n\nMaking a bucket list of fantasies of you and your partner and slowly pursuing them makes it super fun. Various forms of touch, kink, BDSM are other avenues that a couple can explore. \n\nIt is endless when it comes to exploring. This will help you open up to your partner and learn more about intimacy.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN30/TIP30103.png"},
    ]
}});


db.LIItemLines.updateMany({ "angleId": "AEN31" },{$set:{ 
    "tipsToImprove": [
        {"tipId": "TIP31101", "tipHeading": "Opening up to a third party" , "tipBody": "Many couples believe counseling is unnecessary and only for couples who have issues. They fear it might end the relationship. So they avoid it. \n\nAlso, convincing a partner to seek counseling can be awkward. Note that counseling strengthens the relationship, not weakens it. You can go for counseling just to bond with your partner. It is like meeting your grandma rather than going for an interview. \n\nA counselor's goal is to make both of you more aware of where you connect and where you can improve. You will get to know your partner on a deeper level, resulting in a healthy relationship.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN31/TIP31101.png"},
        {"tipId": "TIP31102", "tipHeading": "Self help" , "tipBody": "If you don't want to meet a third person for counseling, you can always do it yourself as a couple. \n\nWe at HappilyEver offer a self-awareness assessment that both of you can take individually. This helps each of you become aware of your strong and weak areas. It also gives you advice on how to improve your relationship.", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN31/TIP31102.png"},
        {"tipId": "TIP31103", "tipHeading": "At least be aware" , "tipBody": "If you want to make your relationship even better and if the above two options are difficult for you to do, then try this one instead. \n\nSit down with your partner and discuss certain topics that matter for a healthy relationship -  loyalty, career, finances, intimacy and what the next stage in the relationship looks like. ", "tipImgUrl": "https://hae-public-bucket.s3.ap-south-1.amazonaws.com/HMA/TipImg/AEN31/TIP31103.png"},
    ]
}});




db.LIItemLines.updateMany( { "angleId" : "AEN01" }, { $set: { "whyItIsHealthy":"In a relationship, often a partner’s individual decision impacts both partners. Including your partner in making decisions makes your partner feel heard and valued in the relationship."}});  
db.LIItemLines.updateMany( { "angleId" : "AEN02" }, { $set: { "whyItIsHealthy":"Having your individual identity is empowering and boosts your self esteem. It also has a healthy impact on your relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN03" }, { $set: { "whyItIsHealthy":"Spending time with your partner and doing something they enjoy helps you build a deeper connection with them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN04" }, { $set: { "whyItIsHealthy":"Compromise benefits both parties, enhancing each other's authenticity and deepening the relationship. Compromising at times, makes your partner feel loved and cared for in the relationship. \n\nYes, it can be difficult at times, but a relationship is about easing each other's burdens. Consider moving a couch as an example, two people can push a couch more easily than one."}});
db.LIItemLines.updateMany( { "angleId" : "AEN05" }, { $set: { "whyItIsHealthy":"Communicating about your expectations will help your partner know what you want from the relationship. Since you are discussing it when your expectations are not met, you and your partner will have fewer conflicts. This makes the relationship a much healthier one."}});
db.LIItemLines.updateMany( { "angleId" : "AEN06" }, { $set: { "whyItIsHealthy":"You understand that it's healthy to talk to a neutral third party to check if your expectations are fair. It's helpful to see things from a different perspective rather than just from your own point of view. This will help you to avoid having unrealistic expectations for your relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN07" }, { $set: { "whyItIsHealthy":"You understand that arguments are inevitable and bound to happen. You, in fact, connect deeper by understanding the differences between you and your partner. \n\nArguments are a healthy sign that you're communicating your issues, instead of silently suffering through it. Arguments provide the opportunity to understand the person better. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN08" }, { $set: { "whyItIsHealthy":"Visiting a premarital counselor can help you discover new parts of your relationship which were undiscovered before. This helps you understand each other better and builds a strong foundation for your relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN09" }, { $set: { "whyItIsHealthy":"You know that first-time sex is not an indicator of how your relationship is going to be with regards to physical intimacy.\n\nYou are aware that it would take time for you and your partner to tune in with each other. You understand that likes and dislikes in bed can be communicated for a better sexual experience."}});
db.LIItemLines.updateMany( { "angleId" : "AEN10" }, { $set: { "whyItIsHealthy":"Having patience to find the right groove with your partner puts less pressure on both of you to perform. Both you and your partner can enjoy the journey rather than focusing on the outcome. Having an amazing sex life requires patience while finding your groove with your partner!"}});
db.LIItemLines.updateMany( { "angleId" : "AEN11" }, { $set: { "whyItIsHealthy":"Being able to communicate and change the way you have sex with your partner, though it may feel awkward, helps you to explore and exploration leads to higher sexual satisfaction. \n\nWhen you communicate about your preferred style as well as your likes & dislikes, you and your partner both find sex more pleasurable. It also brings you both closer as a couple. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN12" }, { $set: { "whyItIsHealthy":"When you feel provoked, you would know what the problem is because you are aware of your emotions. When you accept that you're in control of your emotions, you develop a skill for managing conflict, leading to a long successful relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN13" }, { $set: { "whyItIsHealthy":"Being vulnerable is a strength. When you are vulnerable, it is easier for the partner to acknowledge who you are, including your flaws. You also form a deep emotional connection with your partner. \n\nBeing vulnerable builds a foundation of trust with your partner. It also allows your partner to share their vulnerability with you. With this, your partner can recognise when you are feeling low, since you're verbalizing it, and work with you on it."}});
db.LIItemLines.updateMany( { "angleId" : "AEN14" }, { $set: { "whyItIsHealthy":"Making sure your partner feels you are there for them no matter what is very reassuring. It helps them feel like they can rely on you for emotional support. \n\nBeing there for them builds trust in the relationship. It also helps them communicate with you more openly as they know that you will always support them, no matter what. Your partner is also able to reciprocate the support you give to them."}});
db.LIItemLines.updateMany( { "angleId" : "AEN15" }, { $set: { "whyItIsHealthy":"You understand that resolving the problem is the right way to go about it, as this won't cause any further resentments down the road. The sooner conflict gets resolved, the better it is for your relationship. This also shows that you would rather address it than suffer through it."}});
db.LIItemLines.updateMany( { "angleId" : "AEN16" }, { $set: { "whyItIsHealthy":"You understand that there is no shame in revealing serious issues to a neutral party outside the relationship if it means they can help resolve it. It is okay to do the same since you and your partner cannot come up with a solution on our own all the time. \n\nReaching out for help also helps resolve conflict faster. Also, it prevents your partner from getting hurt seriously.  "}});
db.LIItemLines.updateMany( { "angleId" : "AEN17" }, { $set: { "whyItIsHealthy":"You understand the importance of balance in your relationship. \n\nWhen your partner is not emotionally stable, it is essential for you to maintain composure. You also understand that your partner is just venting out their feelings. \n\nYou know that listening is showing love.  You understand that reacting with anger will only lead to arguments and big fights without any resolution."}});
db.LIItemLines.updateMany( { "angleId" : "AEN18" }, { $set: { "whyItIsHealthy":"This behavior helps increase the bond between the partners. Your partner will feel accepted and secure with you in regard to their bad habits or insecurities."}});
db.LIItemLines.updateMany( { "angleId" : "AEN19" }, { $set: { "whyItIsHealthy":"By stepping outside your comfort zone to make your relationship work, you are willing to put in the effort for the relationship even if it is uncomfortable. The extra effort you put in will also encourage your partner to do the same. As a result, your relationship is strengthened as you are able to adapt to different situations." }});
db.LIItemLines.updateMany( { "angleId" : "AEN20" }, { $set: { "whyItIsHealthy":"Maintaining a good rapport with your partner’s family will strengthen your bond as a couple. Your partner will notice the effort you’ve put into maintaining a good relationship and will appreciate you for it. This also helps you become more adaptable when it comes to situations like this."}});
db.LIItemLines.updateMany( { "angleId" : "AEN21" }, { $set: { "whyItIsHealthy":"Communicating minute details regarding wedding expectations to your partner’s family is a healthy practice. It helps build teamwork and creates a firm foundation of trust  between the families.\n\nHandling difficult situations and fulfilling promises brings both families closer together."}});
db.LIItemLines.updateMany( { "angleId" : "AEN22" }, { $set: { "whyItIsHealthy":"You understand the importance of explicitly discussing boundaries with parents as it provides clarity for all members of the family. Conversations and memories both turn out to be positive. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN23" }, { $set: { "whyItIsHealthy":"Marriage itself brings higher financial pressure onto the relationship. Having your financial plans figured out makes the process easier. \n\nAlso, in cases of emergency or unplanned expenses, you will have room to manage them and have no stress when it comes to your financial situation."}});
db.LIItemLines.updateMany( { "angleId" : "AEN24" }, { $set: { "whyItIsHealthy":"When you share your finances with your partner, it strengthens the trust in your relationship. This also establishes clear communication on what you want your partner to be involved in and what you don't want them to be involved in. \n\nSharing your finances can help the expenditure in your relationship run more smoothly."}});
db.LIItemLines.updateMany( { "angleId" : "AEN25" }, { $set: { "whyItIsHealthy":"Having a solid financial plan with your partner while planning for a child eases the entire process. You will be able to enjoy the joys of parenthood and focus on your child. You will be able to give your child what they require."}});
db.LIItemLines.updateMany( { "angleId" : "AEN26" }, { $set: { "whyItIsHealthy":"By saying no to your partner, you are creating a boundary. You are also maintaining your own identity. Maintaining boundaries and having individual identity will foster a healthy relationship."}});
db.LIItemLines.updateMany( { "angleId" : "AEN27" }, { $set: { "whyItIsHealthy":"Patience shows love, so when you are patient with your partner, they feel loved. Your partner sees you as reliable and that they can always ask you anything without being judged. \n\nWhen you explain yourself to your partner, they understand you better and connect with you."}});
db.LIItemLines.updateMany( { "angleId" : "AEN28" }, { $set: { "whyItIsHealthy":"When you communicate your feelings directly, it creates room for understanding. Communicating effectively is vital as it delivers the right point in the right way, making your partner understand you a lot better."}});
db.LIItemLines.updateMany( { "angleId" : "AEN29" }, { $set: { "whyItIsHealthy":"When you listen to your partner, no matter what is affecting you, it shows your resilience in the relationship and that you are willing to understand them. Listening is showing love."}});
db.LIItemLines.updateMany( { "angleId" : "AEN30" }, { $set: { "whyItIsHealthy":"Having an open mind to learn about sex enchances your sex life by making it more pleasurable. When you are open to learning, your partner can express themselves more easily. \n\nHaving a healthy sexual life positively impacts your commitment to your partner, your bond, and your emotional connection."}});
db.LIItemLines.updateMany( { "angleId" : "AEN31" }, { $set: { "whyItIsHealthy":"Visiting a counselor can help you discover new parts of your relationship which were undiscovered before. This helps you understand each other better and builds a strong foundation for your relationship."}});





db.LIItemLines.updateMany( { "angleId" : "AEN01" }, { $set: { "whyItIsUnhealthy":"We make our partner feel excluded by not involving him or her in decision-making. The individual decision of one partner often affects the other partner. Making decisions without involving our partner would make them feel unheard and unvalued. \n\nTherefore, it is recommended that you discuss with your partner how much involvement you would like in their decisions and vice versa."}});
db.LIItemLines.updateMany( { "angleId" : "AEN02" }, { $set: { "whyItIsUnhealthy":"When we do everything with our partner, we lose our identity. When we lose our individual identity, we are so focused on our relationship that we forget who we are. The relationship may feel stuck at some point.\n\nBy spending time with ourselves, we can reconnect with what is meaningful to us and enhance the relationship we have with our partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN03" }, { $set: { "whyItIsUnhealthy":"We may feel excluded from a part of our partner’s life when we do not participate in their hobbies or interests. We are also missing a chance to develop a deeper connection. \n\nIn some cases, we may find it unrelatable when our partner talks about their interests. This creates a distance between the couple."}});
db.LIItemLines.updateMany( { "angleId" : "AEN04" }, { $set: { "whyItIsUnhealthy":"When we are unwilling to do certain things that our partner expects simply because we do not enjoy doing them, we are not compromising. \n\nNot compromising in the relationship shows that we are only thinking about ourselves and focusing on our own happiness. We don't fully consider the impact of our behavior on our partner and our relationship. Our partner feels unloved and uncared for when we do not compromise. \n\nMinor compromises can help you and your partner grow as a team."}});
db.LIItemLines.updateMany( { "angleId" : "AEN05" }, { $set: { "whyItIsUnhealthy":"If our partner doesn’t meet our expectations, simply accepting the situation leads to resentment in the relationship. Resentment causes future conflicts which can eventually end the relationship. \n\nWithout communication, our partner will not know our expectations, making the relationship sour. We also miss the opportunity to connect with our partner through a healthy discussion of these expectations."}});
db.LIItemLines.updateMany( { "angleId" : "AEN06" }, { $set: { "whyItIsUnhealthy":"When our partner questions our expectations or there is persistent conflict about the same topic, we may wonder if our expectations are fair. We may also feel it's unnecessary to ask someone else about it.\n\nSometimes, we think our expectations are 'fair' but we may not be aware that they are unfair from a society's point of view. This will hurt our relationship as our partner might feel overwhelmed and resentful. This may also put unnecessary pressure on our partner.\n\nChecking with a neutral third party brings a balance to our expectations."}});
db.LIItemLines.updateMany( { "angleId" : "AEN07" }, { $set: { "whyItIsUnhealthy":"We get worried when we begin to have conflicts in the beginning stages of the relationship. We start to believe that we are not meant for each other. We avoid conflict, do not talk about things that truly matter, and stay unhappy, causing eventual breakups.\n\nNote that it’s not a big deal to overcome this. A relationship in its initial phase is characterized by a lot of change, so arguments are common."}});
db.LIItemLines.updateMany( { "angleId" : "AEN08" }, { $set: { "whyItIsUnhealthy":"Premarital counseling uncovers aspects of our partner and relationship which we are unaware of. It helps us to know some non-negotiable aspects of our partner. It is good to know these aspects before we marry them rather than after marriage."}});
db.LIItemLines.updateMany( { "angleId" : "AEN09" }, { $set: { "whyItIsUnhealthy":"Having unrealistic expectations about intimacy early on in the relationship leads to unfair pressure on ourselves as well as our partner. \n\nThe first few encounters don’t go that well because we are unaware of each other’s likes and dislikes in bed. It takes time to tune in with each other when it comes to physical intimacy. Unsatisfied sexual experiences in the beginning stage are quite common. \n\nHence, it’s recommended to enjoy the experience rather than worrying too much about it."}});
db.LIItemLines.updateMany( { "angleId" : "AEN10" }, { $set: { "whyItIsUnhealthy":"When it comes to physical intimacy, expecting to be in tune with our partner within a short period of time creates unwanted pressure on both us and our partner. \n\nTo enjoy sex, we need to have an open mind without any expectations from each other. There are a lot of factors that go into sex to make it work such as the right emotional connection, right sexual position, right time, right health, right location, etc. These factors may not align early on in our relationship. \n\nHowever, we recommend you to trust your partner and be patient. Love will flourish! "}});
db.LIItemLines.updateMany( { "angleId" : "AEN11" }, { $set: { "whyItIsUnhealthy":"Sticking to the way we currently have sex because changing it to our preferred style feels awkward can lead us to find sexual satisfaction somewhere else. \n\nOften, our loved ones are not aware of our unhappiness after sex. It is possible to suffer silently when two people are unaware of each other's feelings regarding sex. \n\nThese feelings also affect other areas of your life such as getting irritated often, losing motivation, not feeling connected to your partner, not wanting to spend time with your partner. All these things make the relationship unhealthy. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN12" }, { $set: { "whyItIsUnhealthy":"When we blame others, we think it’s their responsibility to change. People generally don’t change even if they are at fault. If we want to be more calm and composed, focus on what we can change by being aware of our emotions.\n\nHere, it’s essential to understand the concept of triggers. Certain triggers cause us to react. To manage our reaction, we need to understand what triggers it. An expert’s help is recommended if it’s overwhelming. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN13" }, { $set: { "whyItIsUnhealthy":"We are not vulnerable with our partner because we fear getting hurt and that our partner would judge us. \n\nDue to this, we might not be completely open about ourselves, losing a chance to form a deeper connection. This would lead us to feel unsupported by our partner because they cannot understand our emotions as we have not given them a chance to see our vulnerable side. This also leads to a weakening of trust in our relationship. \n\nOpening up about your emotions can create a great impact on your connection with your partner. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN14" }, { $set: { "whyItIsUnhealthy":"Our partner will remember that we weren’t there for them when they needed us the most.Whenever we do not reach out to our partner during their time of need, we create a rift in the relationship. When the same rift occurs repeatedly, it will result in a distance between the couple, leading to a breakup. \n\nHence, it’s recommended to reach out to our partner even if our relationship is rocky."}});
db.LIItemLines.updateMany( { "angleId" : "AEN15" }, { $set: { "whyItIsUnhealthy":"As a result of avoiding a discussion about our issues, we begin to resent our partner. Eventually, we won't be able to resolve the issues because they will accumulate one by one. \n\nIt is said that a stitch in time saves nine. Unaddressed issues over time lead to chronic illness and anger outbursts which will hurt us and our relationship. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN16" }, { $set: { "whyItIsUnhealthy":"We don't consider revealing severe problems of our relationship to a neutral person to find solutions and think it's shameful or awkward. We may not have realised that the fight has been going on for a long time and that solving it within ourselves is impossible in situations where conflict is intense.\n\nSometimes, without seeking external help, the conflict cannot be resolved . Not solving it makes us lose our mental peace. Looking for alternative measures like external help can be the only way out in these cases."}});
db.LIItemLines.updateMany( { "angleId" : "AEN17" }, { $set: { "whyItIsUnhealthy":"If we lose our temper when our partner is angry at us, the balance of our relationship is disrupted, and this escalates into a fight. \n\nDue to this, we get into heated arguments and say things we don't mean. It may take years to mend and forget what we have said during heated arguments."}});
db.LIItemLines.updateMany( { "angleId" : "AEN18" }, { $set: { "whyItIsUnhealthy":"We assume that with time and patience, we can change a negative quality or habit in our partner. It is possible to communicate what changes we would like to see in our partner, but we should mentally prepare for the possibility that it may never happen. \n\nOnly commit to a partner if we are comfortable with the fact that they may never change. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN19" }, { $set: { "whyItIsUnhealthy":"Change is bound to happen as the relationship progresses. There are different stages to our relationship, and it continues to evolve. \n\nTo embrace this change, we need to change along with it. We need to take into account that our partner comes from different backgrounds, values, and belief systems. In order to find the right harmony within our relationship, we need to adapt to different situations and go beyond our comfort levels."}});
db.LIItemLines.updateMany( { "angleId" : "AEN20" }, { $set: { "whyItIsUnhealthy":"Avoiding partner's parents since we don't like them is usually not healthy. Realize that they are a huge part of our partner's life and hence our life too. It is unpleasant for our partner to see us both not interacting. It means we are discarding our own support system. \n\nAs we age, we both will need each other's support whether we like it or not. If the gap isn't bridged soon enough, it gets harder to bond and reconcile as time passes by. Therefore, it is important for us to be on good terms with our partner's family."}});
db.LIItemLines.updateMany( { "angleId" : "AEN21" }, { $set: { "whyItIsUnhealthy":"We tend to not communicate frequently and in detail about the wedding expectations to our partner’s family. These discussions can be long, awkward and exhausting. \n\nHence, we tend to skip or avoid it. This results in an unhappy wedding experience. That’s why it’s important for us to communicate as frequently as possible, and predict possible scenarios that may occur. This is the best way to have a happy wedding."}});
db.LIItemLines.updateMany( { "angleId" : "AEN22" }, { $set: { "whyItIsUnhealthy":"Our parents and us belong to different generations. We often have expectations for each other which we never talk about. There is a natural misalignment which causes awkward conversations and will make us feel hurt. This is not good for any healthy relationship. \n\nHence it’s important to explicitly draw lines regarding our parent’s involvement by having regular discussions. This will help in building trust and respect. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN23" }, { $set: { "whyItIsUnhealthy":"We expect marriage to improve our lives compared to when we were single. Getting married makes it worse in this situation. Marriage brings in new expenses and financial responsibilities which we might be unable to fulfill, which will hurt our marriage even though we think otherwise. \n\nPlanning your finances before getting married will make the whole process much easier."}});
db.LIItemLines.updateMany( { "angleId" : "AEN24" }, { $set: { "whyItIsUnhealthy":"When our partner spends money on things that we don’t agree on, it causes conflict. It causes a difference in relationships that needs to be addressed. \n\nAlso, not considering our partner when it comes to spending money can cause trust issues in the relationship. This shows a lack of transparency and causes conflict regarding the shared finances. \n\nSharing the finances can help us understand how we spend and lead to a better connection.  "}});
db.LIItemLines.updateMany( { "angleId" : "AEN25" }, { $set: { "whyItIsUnhealthy":"There are many unforeseen expenses when a newborn enters your family. There are things beyond finances that make it stressful such as sleep, mom's health, work performance, etc. \n\nThe additional misalignment of finance puts an additional burden on us. This impacts the quality of care you can provide to the child and affects the future environment they will grow up in. \n\nWhen you align your finances with your partner, you can ease this financial burden for you and your partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN26" }, { $set: { "whyItIsUnhealthy":"Conflict makes us feel uncomfortable. We tend to avoid it. Hence we always say 'yes' to our partner. We have difficulty saying no to our partner, even if we don't enjoy doing something. \n\nWe tend to lose our own identity every time we say 'yes' to something we wish to say 'no' to. When this happens, you feel stuck in your relationship and unhappy. This leads to resentment as well. You might start acting passive-aggressively because of the resentment. \n\nIt is okay to take a stance and express your disagreement to avoid any resentment."}});
db.LIItemLines.updateMany( { "angleId" : "AEN27" }, { $set: { "whyItIsUnhealthy":"When we don't try to explain to our partner, they perceive us as impatient. It will also make them feel insecure and inferior about themselves as they start blaming themselves for not understanding. \n\nLove is patient and kind. Our relationship has a better connection and bond when we are patient. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN28" }, { $set: { "whyItIsUnhealthy":"In tough situations, we don't share our hard feelings with our partner. We don't express our feelings because we feel like it is too risky. We fear that we will make our partner uncomfortable. This makes us feel restless as we are not venting our feelings. \n\nAs a result, we become passive-aggressive with our partner because we have resentment built up within us. This pattern might hurt our partner in the future. \n\nSo, it is essential to express our feelings directly."}});
db.LIItemLines.updateMany( { "angleId" : "AEN29" }, { $set: { "whyItIsUnhealthy":"By not listening to our partner when they confront us, we shut them off from future conversations. This may come across as selfish and impatient to them. This will cause a rift and a disconnect in the relationship. \n\nHence, it is vital to carefully listen to your partner."}});
db.LIItemLines.updateMany( { "angleId" : "AEN30" }, { $set: { "whyItIsUnhealthy":"When it comes to sex, our partner may express themselves in different ways. \n\nWhen we aren't receptive to how our partner expresses themselves, they become unhappy because they don't receive what they want. This complicates the relationship because our partner might turn to other venues to seek love. \n\nSex is an integral part of every relationship. An unhappy sex life can impact other aspects of the relationship. Other aspects can be our commitment towards our partner, our bond and the emotional connection we feel with them. \n\nHowever, when we are open to learn more about sex, we and our partner can have a more pleasurable sex life. "}});
db.LIItemLines.updateMany( { "angleId" : "AEN31" }, { $set: { "whyItIsUnhealthy":"Counseling uncovers aspects of our partner and relationship which we are unaware of. It is good to know these aspects as it will help you and your partner to improve your relationship. It helps us to know our partner on a deeper level and bond with them."}});
