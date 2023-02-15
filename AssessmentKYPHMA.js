

db.LIItems.updateMany({ itemId: "RV02"}, {$set:{statement: "Relationship counseling is mainly for couples who have issues."}});
db.LIItems.updateMany({ itemId: "MV13"}, {$set:{statement: "I would include my partner when making decisions about my own money."}});
db.LIItems.updateMany({ itemId: "RV12"}, {$set:{statement: "You find it difficult to say no to your partner as it makes you uncomfortable."}});
db.LIItems.updateMany({ itemId: "CQ04"}, {$set:{statement: "I would engage in my partner's interests at times even if I don't like them."}});
db.LIItems.updateMany({ itemId: "CQ05"}, {$set:{statement: "I would not seek external help even for serious relationship issues."}});
db.LIItems.updateMany({ itemId: "EI02"}, {$set:{statement: "At the end of a stressful day at work, I expect my partner to comfort me, irrespective of how my partner's day went."}});
db.LIItems.updateMany({ itemId: "FN01"}, {$set:{statement: "I would not give money to even immediate family if my partner disapproves of it."}});

db.LCItems.updateMany({ itemId: "IL02"}, {$set:{statement: "I want us to always speak up when our parents interfere and we don't like it."}});
db.LCItems.updateMany({ itemId: "HA05"}, {$set:{statement: "I would prefer the man to always take the lead in doing tasks which involve going outside and figuring things out."}});
db.LCItemLines.updateMany({itemId: "HA05"}, {$set: {
    uncommonOneLiner: "{{name}} prefers the man to always take the lead in doing tasks which involve going outside and figuring things out. {{otherName}} doesn't have the same preference.",
}});
db.LCItems.updateMany({ itemId: "FN02"}, {$set:{statement: "I would bring up every major expense I make with my partner first."}});
db.LCItemLines.updateMany({itemId: "FN02"}, {$set: {
    uncommonOneLiner: "{{name}} would bring up every major expense he makes with his partner first. {{otherName}} wouldn't do the same.",
    
    options: [
      {
        "commonOneLiner": "Both of you would bring up every major expense either of you make."
      },
      {
        "commonOneLiner": "Both of you would not inform your partner regarding every major expense."
      }
    ]
}});
db.LCItems.updateMany({ itemId: "RV02"}, {$set:{statement: "Relationship counseling is mainly for couples who have issues."}});
db.LCItems.updateMany({ itemId: "MV13"}, {$set:{statement: "I would include my partner when making decisions about my own money."}});
db.LCItems.updateMany({ itemId: "RV12"}, {$set:{statement: "You find it difficult to say no to your partner as it makes you uncomfortable."}});
db.LCItems.updateMany({ itemId: "CQ04"}, {$set:{statement: "I would engage in my partner's interests at times even if I don't like them."}});
db.LCItems.updateMany({ itemId: "CQ05"}, {$set:{statement: "I would not seek external help even for serious relationship issues."}});
db.LCItems.updateMany({ itemId: "EI02"}, {$set:{statement: "At the end of a stressful day at work, I expect my partner to comfort me, irrespective of how my partner's day went."}});
db.LCItems.updateMany({ itemId: "FN01"}, {$set:{statement: "I would not give money to even immediate family if my partner disapproves of it."}});

