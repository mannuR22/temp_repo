db.LCItems.updateOne({"itemId": "KD02"}, {$set:
    {
        "logicType": "AD02",
        "isActive": true,
        
        "itemType": "AD",
        "factorId": "",
        "statement": "The primary responsibility of raising a child belongs to the woman, not the man.",
        "optionBullets": [
          "Agree",
          "disagree"
        ]
      }
    });

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

  db.LIItems.insertOne({"itemId": "KD02"}, { $set: 
    {
        "logicType": "AD02",
        "isActive": true,
        
        "itemType": "AD",
        "factorId": "",
        "statement": "The primary responsibility of raising a child belongs to the woman, not the man.",
        "optionBullets": [
          "Agree",
          "disagree"
        ]
      }
    });


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