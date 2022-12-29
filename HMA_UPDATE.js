db.LIFactorLines.updateOne({
    factorId: 'BAM01',
}, {
    $set: {
        introLineY: {
            generic: "You may not have realised the importance of achieving the right balance between your and your partner's interests.",
            marriage: '',
            rest: ''
        },
        introLineG: {
            generic: '',
            marriage: 'You know that it is important to achieve the right balance between what you want and what your partner wants for a happy relationship.',
            rest: 'You know that it is important to achieve the right balance between what you want and what your partner wants for a happy relationship.'
        },
        hopeFooter: {
            generic: 'Being aware of your behavioural patterns will help you change them and get better at achieving them.',
            marriage: '',
            rest: ''
        },
        fearFooter: {
            generic: '',
            marriage: 'Maintaining the balance is important for a happy relationship.',
            rest: 'Maintaining the balance is important for a happy relationship.'
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'CHM02',
}, {
    $set: {
        introLineY: {
            generic: '',
            marriage: 'You have a moderate understanding of the changes involved in relationships, but may experience some difficulties in this area.',
            rest: 'You have a moderate understanding of the changes involved in a relationship, but may experience some difficulties in this area.'
        },
        introLineG: {
            generic: '',
            marriage: 'You understand well that relationships are characterised by change, yet there are some things that can’t always be changed.',
            rest: 'You understand well that relationships are characterised by change, yet there are some things that can’t always be changed.'
        },
        hopeFooter: {
            generic: 'Being aware of this is the first step towards developing the right attitude towards change and you have already achieved this by taking our assessment!',
            marriage: '',
            rest: ''
        },
        fearFooter: {
            generic: '',
            marriage: 'The way we perceive and navigate changes determines the quality of our relationship.',
            rest: 'The way we perceive and navigate changes determines the quality of our relationship.'
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'CON03',
}, {
    $set: {
        introLineY: {
            generic: '',
            marriage: 'You have a moderate understanding of the importance of communication in a relationship, but may experience some difficulties in this area.',
            rest: 'You have a moderate understanding of the importance of communication in a relationship, but may experience some difficulties in this area.'
        },
        introLineG: {
            generic: '',
            marriage: 'You understand the importance of communication in a relationship well.',
            rest: 'You understand the importance of communication in a relationship well.'
        },
        hopeFooter: {
            generic: 'Don’t worry though! Communication is a skill that can be improved with conscious effort, training and awareness.',
            marriage: '',
            rest: ''
        },
        fearFooter: {
            generic: 'Communication can make or break a relationship.',
            marriage: '',
            rest: ''
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'COF04',
}, {
    $set: {
        introLineY: {
            generic: '',
            marriage: 'You may experience some difficulty in navigating possible conflicts in relationships.',
            rest: 'You may experience some difficulty in navigating possible conflicts in a relationships.'
        },
        introLineG: {
            generic: '',
            marriage: 'You have a healthy approach towards navigating possible conflicts in relationships.',
            rest: 'You have a healthy approach towards navigating possible conflicts in a relationships.'
        },
        hopeFooter: {
            generic: 'Though these situations are tricky, with training and practise you can learn to handle conflicts better.',
            marriage: '',
            rest: '' 
        },
        fearFooter: {
            generic: '',
            marriage: 'When relationship conflicts are not handled properly, it can lead to a build up of frustration and ultimately even a break up.',
            rest: 'When conflicts are not handled rightly, it can lead to a build up of frustration and ultimately even a break-up.'
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'EOM05',
}, {
    $set: {
        introLineY: {
            generic: '',
            marriage: 'You may struggle with navigating emotionally intense situations in a relationship.',
            rest: 'You may struggle with navigating emotionally intense situations in a relationship.'
        },
        introLineG: {
            generic: '',
            marriage: 'You have demonstrated the maturity to navigate emotionally intense situations in a relationship.',
            rest: 'You have demonstrated the maturity to navigate emotionally intense situations in a relationship.'
        },
        hopeFooter: {
            generic: 'Working on yourself with professional help can help you get a better control over your emotions.',
            marriage: '',
            rest: ''
        },
        fearFooter: {
            generic: '',
            marriage: ' When negative emotions run high, the quality of a relationship suffers.',
            rest: 'When negative emotions run high, the quality of the relationship suffers.'
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'FAL06',
}, {
    $set: {
        introLineY: {
            generic: 'While you understand that family relationships are important, you may have some difficulty navigating them.',
            marriage: '',
            rest: ''
        },
        introLineG: {
            generic: 'You seem to have a knack for navigating family relationships well.',
            marriage: '',
            rest: ''
        },
        hopeFooter: {
            generic: 'Being aware of this means that you can take steps to ensure that you, your partner and your respective families are on the same page about the things that matter.',
            marriage: '',
            rest: ''
        },
        fearFooter: {
            generic: 'When family members are not aligned on certain issues, conflict rises.',
            marriage: '',
            rest: ''
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'FIC07' }, {
    $set: {
        introLineY: {
            generic: '',
            marriage: 'You may have underestimated the importance of finances in a relationship.',
            rest: 'You may have underestimated the importance of finances in a relationship.'
        },
        introLineG: {
            generic: '',
            marriage: 'You correctly understand the importance of finances in a relationship.',
            rest: 'You correctly understand the importance of finances in a relationship.'
        },
        hopeFooter: {
            generic: '',
            marriage: 'Knowing about the importance of finances is the first step to improving your financial management skills within the relationship.',
            rest: 'Knowing about the importance of finances is the first step to improving your financial management skills within the relationship.'
        },
        fearFooter: {
            generic: '',
            marriage: 'Finances can make or break a relationship.',
            rest: 'Finances can make or break a relationship.'
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'MAE08',
}, {
    $set: {
        introLineY: {
            generic: 'You may struggle with  navigating situations where your expectations have not been met.',
            marriage: '',
            rest: ''
        },
        introLineG: {
            generic: '',
            marriage: 'You seem to have a good command over managing relationship expectations.',
            rest: 'You seem to have a good command over managing relationship expectations.'
        },
        hopeFooter: {
            generic: "Don't worry though! It is possible to learn how to navigate these situations better with self reflection and guidance.",
            marriage: '',
            rest: ''
        },
        fearFooter: {
            generic: 'Expectations go unmet everyday and fixating on that does no good.',
            marriage: '',
            rest: ''
        }
    }
});

db.LIFactorLines.updateOne({
    factorId: 'PHI09',
}, {
    $set: {
        introLineY: {
            generic: '',
            marriage: 'You may have some trouble navigating physical intimacy in a relationship.',
            rest: 'You may have some trouble navigating physical intimacy in a relationship.'
        },
        introLineG: {
            generic: 'You have the maturity to navigate physical intimacy well.',
            marriage: '',
            rest: ''
        },
        hopeFooter: {
            generic: '',
            marriage: 'Through patience, better communication with  your partner and keeping an open mind to learn and grow in this area, one can significantly improve their approach to physical intimacy in a relationship.',
            rest: 'Through patience, better communication with  your partner and keeping an open mind to learn and grow in this area, one can significantly improve their approach to physical intimacy in a relationship.'
        },
        fearFooter: {
            generic: '',
            marriage: 'While how much importance sex has in a relationship can vary from couple to couple, difficulties in physical intimacy tends to negatively affect the relationship regardless.',
            rest: 'While how much importance sex has in a relationship can vary from couple to couple, difficulties in physical intimacy tends to negatively affect the relationship regardless.'
        }
    }
});

db.LIItemLines.updateOne({ "itemId" : "RV01" }, { $set: {  "negativeLine" : "You may have not realized that relationships are characterized by change and you often need to change beyond what you think to make things work. You and your partner have come from different backgrounds, value systems, beliefs, expectations, and priorities. In order to find the right harmony with your partner, you would be challenged on each of the aspects above and hence it's the biggest change you would ever come across in your life."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV02" }, { $set: {  "negativeLine" : "You may think that it's not worth the time and money to consult a relationship expert when you are facing issues in your relationship. Most of us tend to reject partners too fast at the slightest discomfort. Few of us instead seek advice from friends or uncles/aunts. Note that their advice is often biased as they talk from their past experiences unlike trained experts. Being patient with your partner when issues arise and talking to an expert neutral party when these issues feel unsolvable ensures that you make the right decisions in relationships. This reduces heart breaks and ensures you don't miss out on a partner who is good though you are currently facing issues with him/her."}});
db.LIItemLines.updateOne({ "itemId" : "MV02" }, { $set: {  "negativeLine" : "You may think that premarital counseling is for about-to-marry couples or maybe rich couples who are having issues. In reality, it is for all couples who are about to get married. It uncovers many blind spots in your relationship and helps you build a strong foundation for a happy marriage."}});
db.LIItemLines.updateOne({ "itemId" : "RV03" }, { $set: {  "negativeLine" : "You tend to skip your partner when you make decisions that you feel your partner strongly disapproves of. This breaks trust and it's a matter of time before your partner finds out about this decision. You would have a much bitter conversation at that time. We rather suggest you to include a partner in all decisions, be affirmative and agree to disagree if you can't reach consensus. This builds enormous trust."}});
db.LIItemLines.updateOne({ "itemId" : "RV04" }, { $set: {  "negativeLine" : "You may believe that if sex for the first time doesn't go well your relationship will be in trouble. But it won't. First time sex doesn't go well most of the time and it's quite normal. Not worrying too much about it and enjoying the next few experiences is what we recommend. More often than not things will be quite alright. However, if there are persistent issues in your sex life, we recommend you to consult urologist/psychiatrist."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV05" }, { $set: {  "negativeLine" : "You tend to believe that a happy relationship means the couple does everything together. However, that's far from the truth. It is important to have some “me” time in a relationship. Otherwise, you may stand to lose your individual identity and start to feel stuck in the relationship. Hence, we suggest you to give time to both yourself and your relationship."}});
db.LIItemLines.updateOne({ "itemId" : "RV06" }, { $set: {  "negativeLine" : "You may think that it shouldn't take months to find a groove with your partner in bed. However, it's common for it to take time. For the groove to align, many elements should fall in place -  right emotional connection, overcoming misconceptions, right sexual position, right time, right health, right location, fighting infections, communication about how you want it and how often. If you are into your partner, please be patient. Love will definitely flourish! "}});
db.LIItemLines.updateOne({ "itemId" : "MV06" }, { $set: {  "negativeLine" : "You may think that it shouldn't take years to find a groove with your partner in bed. However, it's common for it to take time. For the groove to align, many elements should fall in place -  right emotional connection, overcoming misconceptions, right sexual position, right time, right health, right location, fighting infections, communication about how you want it and how often. If you are into your partner, please be patient. Love will definitely flourish!"}}); 
db.LIItemLines.updateOne({ "itemId" : "RV07" }, { $set: {  "negativeLine" : "If your partner doesn't match your expectations, you might simply accept the situation and silently suffer. Here are a few ways to handle this better. First of all, communicate clearly to your partner that your expectations are not being met. Beyond that, you can confirm with a trusted neutral person that your expectations are fair and rethink about them if they are not. Secondly, you can discuss with your partner to see if you can find a middle ground between expectations and reality. Lastly, you can offer to do something new that your partner loves in exchange for fulfilling your expectations."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV08" }, { $set: {  "negativeLine" : "You may feel it's unnecessary and unwanted to ask someone else whether your expectations about your relationship and your partner are fair. Sometimes we think they are 'fair' but may not even be aware that they are unfair from a society's point of view. This will hurt your relationship as your partner might feel overwhelmed and resentful. Hence, we suggest you keep an open mind when it comes to confirming your expectations with a trusted neutral party."}});
db.LIItemLines.updateOne({ "itemId" : "RV09" }, { $set: {  "negativeLine" : "You believe that arguments in the initial period of your relationship are unhealthy. In reality, it's common for couples to argue in the initial phase as it is a period of change and can be rocky. Patience does wonders. We only argue with those that we love. So, we recommend you to give time and space to get a better understanding of each other. "}});
db.LIItemLines.updateOne({ "itemId" : "RV10" }, { $set: {  "negativeLine" : "The older we get, the more stubborn and the less flexible our minds become. It's biological and natural. So, it's common for us to feel annoyed by our partner's parents. But they are a huge part of your partner's life, whether you like it or not. You don't need to connect with them but at least you should be in talking terms with them if your partner wants you to. If you don't, your partner may feel hurt and may never be fully content."}}); 
db.LIItemLines.updateOne({ "itemId" : "MV11" }, { $set: {  "negativeLine" : "You may think that it's silly to communicate all the minutest details regarding a wedding to your partner's family. It's important to realize that weddings are a melting pot of our parents' emotions, dreams, status, high expectations and involve complex event management where there is never enough time. So, the risk of miscommunication and conflict regarding wedding traditions and expectations between two families is quite high. We suggest you communicate often and work closely with your partner's family to avoid bitterness just before your big day!"}});
db.LIItemLines.updateOne({ "itemId" : "RV11" }, { $set: {  "negativeLine" : "You may think it's sensible to get married as you age even if you and your partner are not financially stable yet. We expect marriage to make our lives better compared to when we were single. Getting married actually makes it worse in this situation. Marriage brings in new expenses and financial responsibilities which you might be unable to fulfill which will hurt your marriage. We recommend you to first be financially stable and then get married."}});
db.LIItemLines.updateOne({ "itemId" : "MV13" }, { $set: {  "negativeLine" : "For spending your own money, you may think your partner doesn't need to be considered in marriage. Money that you earn individually is still considered family income in marriage, whether you like it or not. It's crucial to be on the same page with your partner on how you spend it. We often have a strong opinion on how much to spend on what and when with family income. There's no right or wrong model on what to do with your own income. As long as you both communicate and come to consensus on how you are going to manage these finances, you should be good."}}); 
db.LIItemLines.updateOne({ "itemId" : "KKG01" }, { $set: {  "negativeLine" : "You may plan for a child, especially if you are growing older, even if you don’t agree with your partner on finances around raising a child. This is not healthy. Prevention is better than cure. All important decisions in marriage often have financial ramifications. It's not easy to get money at the last moment when you need it. We suggest you first quickly reach consensus on finances around raising a child and then plan for one."}}); 
db.LIItemLines.updateOne({ "itemId" : "RV12" }, { $set: {  "negativeLine" : "You believe that it is okay to lie about a few things before getting into a relationship, however this is one of the most common causes of conflict between the couple. The truth always comes out at some point of time. This leads to heated arguments and breaks trust which is not healthy. If your partner leaves you because you are being truthful, then you are better off without them. You deserve better. Being truthful is an extremely rare quality. Cherish it!"}});  
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


db.LIItems.updateOne({ "itemId": "AT001" },{ $set: {
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "I wish I could find someone who understands me and accepts me for who I am.",
        "I'm not sure if I'm ready for a relationship.",
        "It’s difficult for me to approach a boy / girl.",
        "I feel lonely and couples make me feel even lonelier.",
        "I’m tired of boring, repetitive first dates.",
        "I don't know how to improve my relationships.",
    ],
}});

db.LIItems.updateOne({ "itemId": "AT002" },{ $set: {
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "I don’t know if I’m with the right person.",
        "My relationship feels dull and I don’t know how to fix it." ,
        "I want to become a better partner.",
        "I want to take my relationship to the next level.",
    ],
}});

db.LIItems.updateOne({ "itemId": "AT003" },{ $set: {
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "I want to take my relationship to the next level.",
        "I want to become a better partner.",
        "My relationship feels dull and I don’t know how to fix it.",
        "I wish we could be as happy as we used to be.",
        "I feel stressed and suffocated, and I don’t know what to do.",
    ],
}});

db.LIItems.updateOne({ "itemId": "AT004" },{ $set: {
    "statement": "Tell us what you're going through. Feel free to select more than one.",
    "itemType": "CM",
    "optionBullets": [
        "No longer feeling a spark.",
        "Too busy to spend time together.",
        "Haven’t had physical intimacy in a long time.",
        "Emotionally distant.",
        "I wish we could be as happy as we used to be.",
        "I feel stressed and suffocated, and I don’t know what to do." ,
    ],
}});

db.LIItems.updateOne({ "itemId": "CA01" },{ $set: {
    "statement": "What makes you feel attracted to someone?",
    "itemType": "MS",
    "optionBullets": [
        "Shared interests and hobbies.",
        "Characteristics such as honesty, openness to new experiences, etc.",
        "Their appearance - face, height, etc.",
        "Intelligence", 
        "Emotional connection",
    ],
}});

db.LIItems.updateOne({ "itemId": "CS02" },{ $set: {
    "statement": "Do relationships scare you?",
    "itemType": "S",
    "optionBullets": [
        "Yes",
        "No",
        "Sometimes", 
    ],
}});

db.LIItems.updateOne({ "itemId": "CI05" },{ $set: {

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

    ],
}});

db.LAssessments.updateOne({"assessmentId": "ff737aa8-7da3-42e0-9756-c1c5dc41e7a3"},{ $set:{
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
            "itemIds": [ "RV12", ],
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
            "itemIds": [ "RV11", ],
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
            "itemIds": [ "RV12", ],
            "pageId": "B17010",
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
                    "nextPageId": "B17021"
                }
            ]
        },
        {
            "itemIds": [ "CQ10", ],
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
            "itemIds": [ "RV12", ],
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
            "itemIds": [ "RV12", ],
            "pageId": "B20014",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "B20015"
                },
            ]
        },
        {
            "itemIds": [ "CQ13", ],
            "pageId": "B20015",
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
                    "nextPageId": "C20013"
                },
            ]
        },
        {
            "itemIds": [ "CQ11", ],
            "pageId": "C20013",
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "A23000"
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
            "decisionItems": [   ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
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
            "decisionItems": [  ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
                    "nextPageId": "G35000"
                },
            ]
        },
        {
            "itemIds": [ "CT004", ],
            "pageId": "F35000",
            "decisionItems": [ ],
            "nextPageDecisionBlocks": [
                {
                    "regExCode": "*",
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
                    "nextPageId": "B42012"
                }
            ]
        },
        {
            "itemIds": [ "CQ11", ],
            "pageId": "B42012",
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
            "decisionItems": [ "RV08", ],
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
                    "nextPageId": "C42010"
                }
            ]
        },
        {
            "itemIds": [ "RV11", ],
            "pageId": "C42010",
            "decisionItems": [ "RV11", ],
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
            "decisionItems": [ "RV12", ],
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