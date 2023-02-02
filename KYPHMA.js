

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

db.LCItems.updateOne({"itemId": "CT010",},{$set:{
    
    
    "isActive": true,
    
    "itemType": "CS",
    "factorId": "",
    "statement": "Do you have kids?",
    "optionBullets": [
      "Yes",
      "No"
    ]
}});


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