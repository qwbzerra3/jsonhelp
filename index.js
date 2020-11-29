{
    "logo": "https://i.imgur.com/5RfzfaT.jpg",
    "logoPosition": "top",
    "pages": [
     {
      "name": "Name",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Let's start with your name.",
        "titleLocation": "top",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page1"
     },
     {
      "name": "Email",
      "elements": [
       {
        "type": "text",
        "name": "question2",
        "title": "What Is Your Email?",
        "isRequired": true,
        "validators": [
         {
          "type": "email",
          "text": "That is not a valid email."
         }
        ]
       }
      ]
     },
     {
      "name": "State",
      "elements": [
       {
        "type": "dropdown",
        "name": "what state",
        "title": "What State Are You In?",
        "isRequired": true,
        "choices": [
         "Alabama",
         "Alaska",
         "Arizona",
         "Arkansas",
         "California",
         "Colorado",
         "Connecticut",
         "Delaware",
         "District Of Columbia",
         "Florida",
         "Georgia",
         "Hawaii",
         "Idaho",
         "Illinois",
         "Indiana",
         "Iowa",
         "Kansas",
         "Kentucky",
         "Louisiana",
         "Maine",
         "Maryland",
         "Massachusetts",
         "Michigan",
         "Minnesota",
         "Mississippi",
         "Missouri",
         "Montana",
         "Nebraska",
         "Nevada",
         "New Hampshire",
         "New Jersey",
         "New Mexico",
         "New York",
         "North Carolina",
         "North Dakota",
         "Ohio",
         "Oklahoma",
         "Oregon",
         "Pennsylvania",
         "Rhode Island",
         "South Carolina",
         "South Dakota",
         "Tennessee",
         "Texas",
         "Utah",
         "Vermont",
         "Virginia",
         "Washington",
         "West Virginia",
         "Wisconsin",
         "Wyoming"
        ]
       }
      ]
     },
     {
      "name": "Situation",
      "elements": [
       {
        "type": "dropdown",
        "name": "What Best Describes Your Situation?",
        "visibleIf": "{what state} = 'California'",
        "title": "What Best Describes Your Situation?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "You have an adult conviction"
         },
         {
          "value": "item2",
          "text": "You received diversion or other alternative sentencing"
         },
         {
          "value": "item3",
          "text": "You want to seal an arrest record that did not result in conviction"
         }
        ]
       }
      ]
     },
     {
      "name": "HS 11357 tree 1",
      "elements": [
       {
        "type": "boolean",
        "name": "Have you completed the terms of your sentence? #11357 End",
        "visible": false,
        "visibleIf": "{Were you caught with LESS than 28.5 g  or LESS than  4 grams of concentrate? 11357 #1} = true or {Were you charged with possessing MORE than 28.5  grams of  marijuana? 11357} = true or {Were you caught with  more than 4 grams of marijuana  concentrate? 11357} = false or {Were you  21 or older when caught with marijuana concentrate? #1 Concentrate} = false or {Were you  21 or older when caught with marijuana concentrate? 11357 #1 Flower} = true or {Were you  21 or older when caught with marijuana concentrate? 11357 #1 Flower} = false or {Were you charged with  more than 8 grams of marijuana  concentrate?} = true or {Were you charged with  more than 8 grams of marijuana  concentrate?} = false",
        "title": "Have you completed the terms of your sentence?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Where you 18 when you committed the offense?",
        "visible": false,
        "visibleIf": "{Did your conviction involve a charge related to marijuana?} = true",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Were you charged with possession  (HS 11357) on school property? 11357",
        "visible": false,
        "visibleIf": "{Where you 18 when you committed the offense?} = false",
        "title": "Were you charged with possession  (HS 11357) on school property?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "radiogroup",
        "name": "Were you charged with possessing marijuana or marijuana concentrate? 11357",
        "visible": false,
        "visibleIf": "{Were you charged with possession  (HS 11357) on school property? 11357} = false",
        "title": "Were you charged with possessing marijuana or marijuana concentrate? ",
        "isRequired": true,
        "choices": [
         "I was caught with possession of marijuana concentrate.",
         "I was caught with possession of marijuana."
        ]
       },
       {
        "type": "boolean",
        "name": "Were you charged with possessing MORE than 28.5  grams of  marijuana? 11357",
        "visible": false,
        "visibleIf": "{Were you charged with possessing marijuana or marijuana concentrate? 11357} = 'I was caught with possession of marijuana.'",
        "title": "Were you charged with possessing MORE than 28.5  grams of  marijuana?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": " No"
       },
       {
        "type": "boolean",
        "name": "Were you  21 or older when caught with marijuana concentrate? 11357 #1 Flower",
        "visible": false,
        "visibleIf": "{Were you charged with possessing MORE than 28.5  grams of  marijuana? 11357} = true",
        "title": "Were you  21 or older when caught with marijuana concentrate?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Were you caught with  more than 4 grams of marijuana  concentrate? 11357",
        "visible": false,
        "visibleIf": "{Were you charged with possessing marijuana or marijuana concentrate? 11357} = 'I was caught with possession of marijuana concentrate.'",
        "title": "Were you caught with  more than 4 grams of marijuana  concentrate?",
        "isRequired": true,
        "labelTrue": " Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Were you  21 or older when caught with marijuana concentrate? #1 Concentrate",
        "visible": false,
        "visibleIf": "{Were you caught with  more than 4 grams of marijuana  concentrate? 11357} = true",
        "title": "Were you  21 or older when caught with marijuana concentrate?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Were you charged with  more than 8 grams of marijuana  concentrate?",
        "visible": false,
        "visibleIf": "{Were you  21 or older when caught with marijuana concentrate? #1 Concentrate} = true",
        "isRequired": true,
        "labelTrue": " YES\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Were you caught with LESS than 28.5 g  or LESS than  4 grams of concentrate? 11357 #1",
        "visible": false,
        "visibleIf": "{Were you charged with possession  (HS 11357) on school property? 11357} = true",
        "title": "Were you caught with LESS than 28.5 g  or LESS than  4 grams of concentrate?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "radiogroup",
        "name": "What is the level of your conviction? 11357",
        "visible": false,
        "visibleIf": "{Were you caught with LESS than 28.5 g  or LESS than  4 grams of concentrate? 11357 #1} = false",
        "title": "What is the level of your conviction?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Felony "
         },
         {
          "value": "item2",
          "text": "Infraction Or Misdemeanor"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "Did your felony conviction result in a state prison sentence? #11357",
        "visible": false,
        "visibleIf": "{What is the level of your conviction? 11357} = 'item1' or {What was the level of your conviction? AC Warrants} = ' The  conviction we are currently evaluating is a felony.'",
        "title": "Did your felony conviction result in a state prison sentence?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Were your convicted prior to July 1, 2011? #11357",
        "visible": false,
        "visibleIf": "{Did your felony conviction result in a state prison sentence? #11357} = true",
        "title": "Were your convicted prior to July 1, 2011?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       }
      ],
      "visibleIf": "{Did your conviction involve a charge related to marijuana?} = true"
     },
     {
      "name": "Warrents Adult Conviction",
      "elements": [
       {
        "type": "boolean",
        "name": "Do you have any outstanding warrants? AC",
        "visible": false,
        "visibleIf": "{What Best Describes Your Situation?} = 'item1'",
        "title": "Do you have any outstanding warrants?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Did your conviction involve a charge related to marijuana?",
        "visible": false,
        "visibleIf": "{Do you have any outstanding warrants? AC} = false or {Do you have any current criminal proceedings or outstanding warrants?1111111111} = true",
        "title": "Did your conviction involve a charge related to marijuana?",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "What was the level of your conviction? AC Warrants",
        "visible": false,
        "visibleIf": "{Did your conviction involve a charge related to marijuana?} = false",
        "title": "What was the level of your conviction? \n",
        "isRequired": true,
        "choices": [
         " The  conviction we are currently evaluating is a felony.",
         " The conviction we are currently valuating is a misdemeanor  or  infraction."
        ]
       },
       {
        "type": "boolean",
        "name": "Are you currently on probation? AC",
        "visible": false,
        "visibleIf": "{What was the level of your conviction? AC Warrants} = ' The conviction we are currently valuating is a misdemeanor  or  infraction.' or {What is the level of your conviction? 11357} = 'item2'",
        "title": "Are you currently on probation?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Are you interested in terminating your probation early? AC Probation",
        "visible": false,
        "visibleIf": "{Are you currently on probation? AC} = true",
        "title": "Are you interested in terminating your probation early?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you completed at  least half of the time of your probation period? AC Probation",
        "visible": false,
        "visibleIf": "{Are you interested in terminating your probation early? AC Probation} = true",
        "title": "Have you completed at  least half of the time of your probation period?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you paid all fines  and restitution, and completed all court-ordered condition such as mandatory classes? AC Probation",
        "visible": false,
        "visibleIf": "{Have you completed at  least half of the time of your probation period? AC Probation} = true",
        "title": "Have you paid all fines  and restitution, and completed all court-ordered condition such as mandatory classes?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you ever violated the terms of your probation? AC Probation",
        "visible": false,
        "visibleIf": "{Have you paid all fines  and restitution, and completed all court-ordered condition such as mandatory classes? AC Probation} = true",
        "title": "Have you ever violated the terms of your probation?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Great News! You should qualify to end your probation early. This may qualify you to expunge your conviction early as well",
        "visible": false,
        "visibleIf": "{Have you ever violated the terms of your probation? AC Probation} = false",
        "title": "Great News! You should qualify to end your probation early. This may qualify you to expunge your conviction early as well.\n\nDo you want to terminate your probation early and see if you qualify to expunge your misdemeanor conviction?",
        "isRequired": true,
        "labelTrue": "Yes, I'd like to get off probation early and see if I can expunge this conviction from my record.",
        "labelFalse": "No, I will finish the terms of my probation, and then expunge my record later."
       },
       {
        "type": "boolean",
        "name": "Have you paid all fines  and restitution, and completed all court-ordered condition such as mandatory classes? AC No Probation",
        "visible": false,
        "title": "Have you paid all fines  and restitution, and completed all court-ordered condition such as mandatory classes?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Was your conviction for driving under the influence? AC No Probation",
        "visible": false,
        "visibleIf": "{Have you paid all fines  and restitution, and completed all court-ordered condition such as mandatory classes? AC No Probation} = true",
        "title": "Was your conviction for driving under the influence?",
        "isRequired": true,
        "labelTrue": "Yes, the conviction we're evaluating was a DUI.",
        "labelFalse": "No, the conviction that we're evaluating was  not DUI."
       },
       {
        "type": "radiogroup",
        "name": "Was the conviction we're evaluating an infraction or a misdemeanor? AC No Probation",
        "visible": false,
        "visibleIf": "{Was your conviction for driving under the influence? AC No Probation} = false",
        "title": "Was the conviction we're evaluating an infraction or a misdemeanor?",
        "isRequired": true,
        "choices": [
         "The conviction is a misdemeanor.",
         "The conviction is an infraction."
        ]
       },
       {
        "type": "boolean",
        "name": "Were you convicted of any of the misdemeanor sex offense listed in the  help button? AC No Probation",
        "visible": false,
        "visibleIf": "{Was the conviction we're evaluating an infraction or a misdemeanor? AC No Probation} = 'The conviction is a misdemeanor.'",
        "title": "Were you convicted of any of the misdemeanor sex offense listed in the  help button?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of one of sex offense on the list.\n",
        "labelFalse": "No, the conviction we're evaluating was not for a sex offense on that list. "
       },
       {
        "type": "boolean",
        "name": "Has it been seven (7) years since you were released from confinement or finished parole or other court supervision for your most recent conviction? AC No Probation",
        "visible": false,
        "visibleIf": "{Were you convicted of any of the misdemeanor sex offense listed in the  help button? AC No Probation} = true",
        "title": "Has it been seven (7) years since you were released from confinement or finished parole or other court supervision for your most recent conviction?",
        "isRequired": true,
        "labelTrue": "Yes, it has been at lest 7 years since I was released or finished parole\n",
        "labelFalse": "No, it hasn't   been at least 7 years since I was released or finished parole. "
       },
       {
        "type": "boolean",
        "name": "Have you been convicted of any other offense during that seven (7) years period? AC Sex Yes",
        "visible": false,
        "visibleIf": "{Has it been seven (7) years since you were released from confinement or finished parole or other court supervision for your most recent conviction? AC No Probation} = true",
        "title": "Have you been convicted of any other offense during that seven (7) years period?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of a new offense during period.\n",
        "labelFalse": "No, I was not convicted of any new crimes during that seven year period "
       },
       {
        "type": "boolean",
        "name": "Are you in active duty with the military? AC Sex",
        "visible": false,
        "visibleIf": "{Have you been convicted of any other offense during that seven (7) years period? AC Sex Yes} = false",
        "title": "Are you in active duty with the military?",
        "isRequired": true,
        "labelTrue": "Yes, I am active duty military.",
        "labelFalse": "No, I am not active duty military."
       },
       {
        "type": "boolean",
        "name": "Were you required to register as a sex offender PC 290? AC Sex Military",
        "visible": false,
        "visibleIf": "{Are you in active duty with the military? AC Sex} = false",
        "title": "Were you required to register as a sex offender PC 290? \n\n",
        "isRequired": true,
        "labelTrue": "Yes, I was required to register as a sex offender.",
        "labelFalse": "No, I was not required to register as a sex offender."
       },
       {
        "type": "boolean",
        "name": "Have you been convicted of any of the serious criminal offence listed in the help button? SO No",
        "visible": false,
        "visibleIf": "{Were you required to register as a sex offender PC 290? AC Sex Military} = false",
        "title": "Have you been convicted of any of the serious criminal offence listed in the help button?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of one the crimes on that list.",
        "labelFalse": "No, I was not convicted of any of those serious offence."
       },
       {
        "type": "boolean",
        "name": "Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction? SO No 9",
        "visible": false,
        "visibleIf": "{Have you been convicted of any of the serious criminal offence listed in the help button? SO No} = true",
        "title": "Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction?",
        "isRequired": true,
        "labelTrue": "Yes, it has been 9 years since I finished my sentence.",
        "labelFalse": "No, it hasn't been 9 years since I finished my sentence yet."
       },
       {
        "type": "boolean",
        "name": "Have you been convicted of additional crimes during this (9) year period? SO No 9",
        "visible": false,
        "visibleIf": "{Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction? SO No 9} = true",
        "title": "Have you been convicted of additional crimes during this (9) year period?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of additional crimes during this 9 year period.",
        "labelFalse": "No, I haven't been convicted of any new crimes."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? SO No 9 CA",
        "visible": false,
        "visibleIf": "{Have you been convicted of additional crimes during this (9) year period? SO No 9} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "boolean",
        "name": "Have you lived in California continuously for the last 5 years? So No 9 CA",
        "visible": false,
        "visibleIf": "{Do you currently live in California? SO No 9 CA} = true",
        "title": "Have you lived in California continuously for the last 5 years?",
        "isRequired": true,
        "labelTrue": "Yes, I've lived in California for the last 5 years.",
        "labelFalse": "No, I have not lived in California for the last 5 years."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? SO NO 9 CA 2",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? So No 9 CA} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "radiogroup",
        "name": "Have you lived in California continuously for the last 5 years? SO NO 9 CA 2",
        "visible": false,
        "visibleIf": "{Do you currently live in California? SO NO 9 CA 2} = true",
        "title": "Have you lived in California continuously for the last 5 years?",
        "isRequired": true,
        "choices": [
         "Yes, I've lived in California for the last 5 years.",
         "No, I have not lived in California for the last 5 years."
        ]
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? SO NO 9 CA 2",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? SO NO 9 CA 2} = 'Yes, I\\'ve lived in California for the last 5 years.'",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? SO No 9 CA",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? So No 9 CA} = true",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? SO No Loop",
        "visible": false,
        "visibleIf": "{Have you been convicted of any of the serious criminal offence listed in the help button? SO No} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "radiogroup",
        "name": "have you lived in California continuously for the last 5 years? SO No Loop",
        "visible": false,
        "visibleIf": "{Do you currently live in California? SO No Loop} = true",
        "title": "have you lived in California continuously for the last 5 years?",
        "isRequired": true,
        "choices": [
         "Yes, I've lived in California for the last 5 years.",
         "No, I have not lived in California for the last 5 years."
        ]
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? SO No CA loop",
        "visible": false,
        "visibleIf": "{have you lived in California continuously for the last 5 years? SO No Loop} = 'Yes, I\\'ve lived in California for the last 5 years.'",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.\n",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Were you required to register as a sex  offender for any of the offenses listed in the help button? AC Military Sex",
        "visible": false,
        "visibleIf": "{Were you required to register as a sex offender PC 290? AC Sex Military} = true",
        "title": "Were you required to register as a sex  offender for any of the offenses listed in the help button?\n",
        "isRequired": true,
        "labelTrue": "Yes, I was required to register as a sex offender because of one of the crimes on that list.\n",
        "labelFalse": "No, I was required to register as a sex offender for a crime that isn't on that list."
       },
       {
        "type": "boolean",
        "name": "Has it been ten (10) years you were released from confinement or finished parole or other court supervision for your most recent conviction? sex 10",
        "visible": false,
        "visibleIf": "{Were you required to register as a sex  offender for any of the offenses listed in the help button? AC Military Sex} = false",
        "title": "Has it been ten (10) years you were released from confinement or finished parole or other court supervision for your most recent conviction?",
        "isRequired": true,
        "labelTrue": "Yes, it has been 10 years since I finished my sentence.",
        "labelFalse": "No, it hasn't been 10 years since I finished my sentence yet."
       },
       {
        "type": "boolean",
        "name": "Have you been convicted of any other offense during than ten (10) year time period? SO 10\\",
        "visible": false,
        "visibleIf": "{Has it been ten (10) years you were released from confinement or finished parole or other court supervision for your most recent conviction? sex 10} = true",
        "title": "Have you been convicted of any other offense during than ten (10) year time period?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of additional crimes during this 10 year period.",
        "labelFalse": "No, I haven't been convicted of any new crimes."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? SO 10",
        "visible": false,
        "visibleIf": "{Have you been convicted of any other offense during than ten (10) year time period? SO 10\\} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "radiogroup",
        "name": "Have you lived in California continuously for the last 5 years? loop 10 SO",
        "visible": false,
        "visibleIf": "{Do you currently live in California? SO 10} = true",
        "title": "Have you lived in California continuously for the last 5 years?",
        "isRequired": true,
        "choices": [
         "Yes, I've lived in California for the last 5 years.",
         "No, I have not lived in California for the last 5 years."
        ]
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? SO 10",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? loop 10 SO} = 'Yes, I\\'ve lived in California for the last 5 years.'",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Have you been convicted of any of the serious criminal offenses listed in the help button? Military S Offender",
        "visible": false,
        "visibleIf": "{Were you required to register as a sex  offender for any of the offenses listed in the help button? AC Military Sex} = true",
        "title": "Have you been convicted of any of the serious criminal offenses listed in the help button?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of one of the crimes on that list.",
        "labelFalse": "No, I was not convicted of any of those serious offenses."
       },
       {
        "type": "boolean",
        "name": "Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction? AC Military S",
        "visible": false,
        "visibleIf": "{Have you been convicted of any of the serious criminal offenses listed in the help button? Military S Offender} = true",
        "title": "Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction?",
        "isRequired": true,
        "labelTrue": "Yes, it has been 9 years since I finished my sentence.",
        "labelFalse": "No, it hasn't been 9 years since I finished my sentence yet."
       },
       {
        "type": "boolean",
        "name": "Have you been convicted of additional crimes during this (9) year period? AC 9",
        "visible": false,
        "visibleIf": "{Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction? AC Military S} = true",
        "title": "Have you been convicted of additional crimes during this (9) year period?",
        "isRequired": true,
        "labelTrue": "Yes, I have been convicted of additional crimes during this 9 year period.",
        "labelFalse": "No, I haven't been convicted of any new crimes."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? AC Military 9 Pre",
        "visible": false,
        "visibleIf": "{Have you been convicted of additional crimes during this (9) year period? AC 9} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "boolean",
        "name": "Have you lived in California continuously for the last 5 years? AC Military 9 Loop",
        "visible": false,
        "visibleIf": "{Do you currently live in California? AC Military 9 Pre} = true",
        "title": "Have you lived in California continuously for the last 5 years?",
        "isRequired": true,
        "labelTrue": "Yes, I've lived in California for the last 5 years.",
        "labelFalse": "No, I have not lived in California for the last 5 years."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? No Military 9 Loop",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? AC Military 9 Loop} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "radiogroup",
        "name": "Have you lived in California continuously for the last 5 years? No Military Inf 9 Loop",
        "visible": false,
        "visibleIf": "{Do you currently live in California? No Military 9 Loop} = true",
        "title": "Have you lived in California continuously for the last 5 years? \n",
        "isRequired": true,
        "choices": [
         "Yes, I've lived in California for the last 5 years.",
         "No, I have not lived in California for the last 5 years."
        ]
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? Fin tree 9",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? No Military Inf 9 Loop} = 'Yes, I\\'ve lived in California for the last 5 years.'",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? AC Military 9 Loop",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? AC Military 9 Loop} = true",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Do you currently live in California? AC Military S",
        "visible": false,
        "visibleIf": "{Have you been convicted of any of the serious criminal offenses listed in the help button? Military S Offender} = false",
        "title": "Do you currently live in California?",
        "isRequired": true,
        "labelTrue": "Yes, I currently live in California.",
        "labelFalse": "No, I do not currently reside in California."
       },
       {
        "type": "radiogroup",
        "name": "Have you lived in California continuously for the last 5 years? inf loop",
        "visible": false,
        "visibleIf": "{Do you currently live in California? AC Military S} = true",
        "isRequired": true,
        "choices": [
         "Yes, I've lived in California for the last 5 years.",
         "No, I have not lived in California for the last 5 years."
        ]
       },
       {
        "type": "boolean",
        "name": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes? CA loop",
        "visible": false,
        "visibleIf": "{Have you lived in California continuously for the last 5 years? inf loop} = 'Yes, I\\'ve lived in California for the last 5 years.'",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true,
        "labelTrue": "Yes, I've completed all the terms of my sentence.\n",
        "labelFalse": "No, I haven't paid all restitution or completed terms of my sentence."
       },
       {
        "type": "boolean",
        "name": "Was your infraction a traffic or driving related offense? AC No Probation",
        "visible": false,
        "visibleIf": "{Was the conviction we're evaluating an infraction or a misdemeanor? AC No Probation} = 'The conviction is an infraction.'",
        "title": "Was your infraction a traffic or driving related offense?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Were you convicted of one of the traffic offenses specifically listed in the help button? AC No Probation",
        "visible": false,
        "visibleIf": "{Was your infraction a traffic or driving related offense? AC No Probation} = true",
        "title": "Were you convicted of one of the traffic offenses specifically listed in the help button?",
        "isRequired": true,
        "labelTrue": "Yes, the  infraction I was convicted of is on the list.\n",
        "labelFalse": "No, the infraction I was convicted of is not on the list."
       }
      ]
     },
     {
      "name": "Diversion",
      "elements": [
       {
        "type": "boolean",
        "name": "Did the court sentence you to a ''Diversion program'' under PC 1000.5?",
        "visible": false,
        "visibleIf": "{What Best Describes Your Situation?} = 'item2'",
        "title": "Did the court sentence you to a ''Diversion program'' under PC 1000.5?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Did the court sentence you to a  Deferred entry of judgement program under PC 1000.8?",
        "visible": false,
        "visibleIf": "{Did the court sentence you to a ''Diversion program'' under PC 1000.5?} = false",
        "title": "Did the court sentence you to a \"Deferred entry of judgement program under PC 1000.8\"?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Did you successfully complete your Diversion program?",
        "visible": false,
        "visibleIf": "{Did the court sentence you to a ''Diversion program'' under PC 1000.5?} = true",
        "title": "Did you successfully complete your Diversion program?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Did  you receive a sentence under proposition 36?",
        "visible": false,
        "visibleIf": "{Did the court sentence you to a  Deferred entry of judgement program under PC 1000.8?} = false",
        "title": "Did  you receive a sentence under proposition 36?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Did you successfully complete your Deferred Entry of Judgement Program?",
        "visible": false,
        "visibleIf": "{Did the court sentence you to a  Deferred entry of judgement program under PC 1000.8?} = true",
        "title": "Did you successfully complete your Deferred Entry of Judgement Program?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Was your case dismissed after completion of the program?",
        "visible": false,
        "visibleIf": "{Did  you receive a sentence under proposition 36?} = true",
        "title": "Was your case dismissed after completion of the program? ",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have any current criminal proceedings or outstanding warrants?1111111111",
        "visible": false,
        "visibleIf": "{Did you successfully complete your Diversion program?} = false or {Did you successfully complete your Deferred Entry of Judgement Program?} = false or {Did  you receive a sentence under proposition 36?} = false",
        "title": "Do you have any current criminal proceedings or outstanding warrants?",
        "isRequired": true
       }
      ]
     },
     {
      "name": "Marijuana Convicted Tree",
      "elements": [
       {
        "type": "boolean",
        "name": "Prison Was the conviction we are evaluating one of the \"\"realignment\" felonies listed in the help button below?",
        "visible": false,
        "visibleIf": "{Were your convicted prior to July 1, 2011? #11357} = true",
        "title": "Was the conviction we are evaluating one of the \"realignment\" felonies listed in the help button below?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Have you ever been convicted of a sex crime that required you to register as a sex offender?",
        "visible": false,
        "visibleIf": "{Prison Was the conviction we are evaluating one of the \"\"realignment\" felonies listed in the help button below?} = true",
        "title": "Have you ever been convicted of a sex crime that required you to register as a sex offender?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Have you ever been convicted of a \"violent\" felony(PC 667.5) or a serious felony  (PC 1192.7) that count as a strike under California law? Please see the help button for a list of these felonies",
        "visible": false,
        "visibleIf": "{Prison Have you ever been convicted of a sex crime that required you to register as a sex offender?} = false",
        "title": "Have you ever been convicted of a \"violent\" felony(PC 667.5) or a serious felony  (PC 1192.7) that count as a strike under California law? Please see the help button for a list of these felonies",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Are we currently evaluating a felony conviction for drug possession?",
        "visible": false,
        "visibleIf": "{Prison Was the conviction we are evaluating one of the \"\"realignment\" felonies listed in the help button below?} = false or {Were your convicted prior to July 1, 2011? #11357} = false or {1. Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ Prob Sub} = false or {Prison Have you ever been convicted of a \"violent\" felony(PC 667.5) or a serious felony  (PC 1192.7) that count as a strike under California law? Please see the help button for a list of these felonies} = true",
        "title": "Are we currently evaluating a felony conviction for drug possession?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Have you ever been convicted of  one of the \"excluded\" felonies listed in the help button below?",
        "visible": false,
        "visibleIf": "{Prison Have you ever been convicted of a \"violent\" felony(PC 667.5) or a serious felony  (PC 1192.7) that count as a strike under California law? Please see the help button for a list of these felonies} = false",
        "title": "Have you ever been convicted of  one of the \"excluded\" felonies listed in the help button below?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison right Are we currently evaluating a felony conviction for drug possession?",
        "visible": false,
        "visibleIf": "{Prison Have you ever been convicted of  one of the \"excluded\" felonies listed in the help button below?} = true",
        "title": "Are we currently evaluating a felony conviction for drug possession?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stolen property?",
        "visible": false,
        "visibleIf": "{Prison Left Are we currently evaluating a felony conviction for drug possession?} = false or {Prison right Are we currently evaluating a felony conviction for drug possession?} = false",
        "title": "Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stolen property?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Were you convicted of one of the crimes specifically listed in the help button?",
        "visible": false,
        "visibleIf": "{Prison Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stolen property?} = true",
        "title": "Were you convicted of one of the crimes specifically listed in the help button?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Have you ever been convicted of another felony?",
        "visible": false,
        "visibleIf": "{Prison Were you convicted of one of the crimes specifically listed in the help button?} = true",
        "title": "Have you ever been convicted of another felony?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Right Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?",
        "visible": false,
        "visibleIf": "{Prison right Are we currently evaluating a felony conviction for drug possession?} = true",
        "title": "Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?",
        "visible": false,
        "visibleIf": "{Prison Left Are we currently evaluating a felony conviction for drug possession?} = true",
        "title": "Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Have you ever been convicted of any other felonies that weren't for drug possession?",
        "visible": false,
        "visibleIf": "{Prison Left Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?} = true",
        "title": "Have you ever been convicted of any other felonies that weren't for drug possession?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Right Have you ever been convicted of any other felonies that weren't for drug possession?",
        "visible": false,
        "visibleIf": "{Prison Right Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?} = true",
        "title": "Have you ever been convicted of any other felonies that weren't for drug possession?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "PRISON LEFT Have you ever been convicted of a violent felony?",
        "visible": false,
        "visibleIf": "{Prison Left Have you ever been convicted of any other felonies that weren't for drug possession?} = true or {Prison Have you ever been convicted of another felony?} = true or {Prison Great news!  It looks like you qualify to have your felony conviction reclassified as a misdemeanor under proposition 47  This service will not remove the conviction from your record, but it will reduce your felony conviction to a misdemeanor, making it appear as a misdemeanor on the background  this can be very valuable in life, but it will not restore your firearm right  To restore your firearm right, you need a certificate of rehabilitation that results in a pardon.  A certificate of rehabilitation is valuable for other reasons detailed in the help button.} = 'Continue '",
        "title": "Have you ever been convicted of a violent felony ?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Have you ever been convicted a felony sex crime ?",
        "visible": false,
        "visibleIf": "{PRISON LEFT Have you ever been convicted of a violent felony?} = false",
        "title": "Have you ever been convicted a felony sex crime ?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Have you ever been convicted of any of the felonies involving death listed in the help button ?",
        "visible": false,
        "visibleIf": "{PRISON LEFT Have you ever been convicted of a violent felony?} = true",
        "title": "Have you ever been convicted of any of the felonies involving death listed in the help button?    ",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Was the felony conviction we are evaluating  for any of the  sex offenses  involving a minor child listed in the help button",
        "visible": false,
        "visibleIf": "{Prison Left Have you ever been convicted of any of the felonies involving death listed in the help button ?} = true or {Prison Left Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?} = false or {Prison Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stolen property?} = false or {Prison Right Is the conviction we're evaluating one of the drug-possession crimes listed in the help button?} = false or {Prison Were you convicted of one of the crimes specifically listed in the help button?} = false",
        "title": "Was the felony conviction we are evaluating  for any of the  sex offenses  involving a minor child listed in the help button    \n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Has it been seven (7) years since you were released from confinement or finished parole or other court supervision for your most recent conviction ?",
        "visible": false,
        "visibleIf": "{Prison Left Was the felony conviction we are evaluating  for any of the  sex offenses  involving a minor child listed in the help button} = false or {Prison What do you want to do about the crime we're currently evaluating?} = 'item2'",
        "title": "Has it been seven (7) years since you were released from confinement or finished parole or other court supervision for your most recent conviction ?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Have you been convicted of any other offense during that seven (7) years period?",
        "visible": false,
        "visibleIf": "{Prison Left Has it been seven (7) years since you were released from confinement or finished parole or other court supervision for your most recent conviction ?} = true",
        "title": "Have you been convicted of any other offense during that seven (7) years period?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Are you in active duty with the military?",
        "visible": false,
        "visibleIf": "{Prison Left Have you been convicted of any other offense during that seven (7) years period?} = false",
        "title": "Are you in active duty with the military?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Left Were you required to register as a sex offender PC 290?",
        "visible": false,
        "visibleIf": "{Prison Left Are you in active duty with the military?} = false",
        "title": "Were you required to register as a sex offender PC 290?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Center Have you  ever had to register as a sex offender?",
        "visible": false,
        "visibleIf": "{Prison Left Have you ever been convicted a felony sex crime ?} = true",
        "title": "Have you ever had to register as a sex offender ?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Center Have you ever been convicted of a crime involving explosive or a weapon of a mass destruction listed in the help button ?",
        "visible": false,
        "visibleIf": "{Prison Left Have you ever been convicted a felony sex crime ?} = false or {Prison Center Have you ever been convicted of  one of the sex  crimes listed in the help button ?} = false",
        "title": "Have you ever been convicted of a crime involving explosive or a weapon of a mass destruction listed in the help button?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Center Have you ever been convicted of  one of the sex  crimes listed in the help button ?",
        "visible": false,
        "visibleIf": "{Prison Center Have you  ever had to register as a sex offender?} = false",
        "title": "Have you ever been convicted of one of the sex crimes listed in the help button ?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Prison Center Have you ever been convicted of any of the serious felonies listed in the help button?",
        "visible": false,
        "visibleIf": "{Prison Center Have you ever been convicted of a crime involving explosive or a weapon of a mass destruction listed in the help button ?} = false",
        "title": "Have you ever been convicted of any of the serious felonies listed in the help button?",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "Prison Great news!  It looks like you qualify to have your felony conviction reclassified as a misdemeanor under proposition 47  This service will not remove the conviction from your record, but it will reduce your felony conviction to a misdemeanor, making it appear as a misdemeanor on the background  this can be very valuable in life, but it will not restore your firearm right  To restore your firearm right, you need a certificate of rehabilitation that results in a pardon.  A certificate of rehabilitation is valuable for other reasons detailed in the help button.",
        "visible": false,
        "visibleIf": "{Prison Have you ever been convicted of another felony?} = true or {Prison Left Have you ever been convicted of any other felonies that weren't for drug possession?} = false or {Prison Right Have you ever been convicted of any other felonies that weren't for drug possession?} = false or {Prison Center Have you ever been convicted of any of the serious felonies listed in the help button?} = false",
        "title": "Great news!  It looks like you qualify to have your felony conviction reclassified as a misdemeanor under proposition 47\n\nThis service will not remove the conviction from your record, but it will reduce your felony conviction to a misdemeanor, making it appear as a misdemeanor on the background\n\nthis can be very valuable in life, but it will not restore your firearm right\n\nTo restore your firearm right, you need a certificate of rehabilitation that results in a pardon.  A certificate of rehabilitation is valuable for other reasons detailed in the help button. ",
        "isRequired": true,
        "choices": [
         {
          "value": "Continue ",
          "text": "Continue "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "Prison What do you want to do about the crime we're currently evaluating?",
        "visible": false,
        "title": "What do you want to do about the crime we're currently evaluating?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "I don't want to charge my felony to a misdemeanor, but  I do want to see if I qualify for a certificate of rehabilitation."
         },
         {
          "value": "item2",
          "text": "I want to reclassify my felony to a misdemeanor, and I also want to see if I can get a certificate  of rehabilitation."
         },
         {
          "value": "item3",
          "text": "I want to reclassify my felony as a misdemeanor, but don't  want a certificate of rehabilitation"
         }
        ]
       }
      ]
     },
     {
      "name": "Marijuana AC End 1,2,3",
      "elements": [
       {
        "type": "boolean",
        "name": "MJ SEX YES Were you required to register as a sex  offender for any of the offenses listed in the help button?",
        "visible": false,
        "visibleIf": "{Prison Left Were you required to register as a sex offender PC 290?} = true or {Prison Center Have you  ever had to register as a sex offender?} = true",
        "title": "Were you required to register as a sex  offender for any of the offenses listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ SEX NO 4 Have you been convicted of any of the serious criminal offence listed in the help button?",
        "visible": false,
        "visibleIf": "{Prison Left Were you required to register as a sex offender PC 290?} = false",
        "title": "Have you been convicted of any of the serious criminal offence listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ SEX NO 4 Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction?",
        "visible": false,
        "visibleIf": "{MJPROB YES Are you prohibited from owning a firearm by one of the circumstances listed in the help button?} = true",
        "title": "Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ SEX NO 4 Have you been convicted of additional crimes during this (9) year period ?",
        "visible": false,
        "visibleIf": "{MJ SEX NO 4 Has it been nine (9) years since you were released from confinement or finished parole or other court supervision for your most recent conviction?} = false",
        "title": "Have you been convicted of additional crimes during this (9) year period ?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ SEX NO 4 Do you currently live in California?",
        "visible": false,
        "visibleIf": "{MJ SEX NO 4 Have you been convicted of additional crimes during this (9) year period ?} = false or {MJ SEX NO 4 Have you been convicted of any of the serious criminal offence listed in the help button?} = true",
        "title": "Do you currently live in California?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ SEX NO 4 have you lived in California continuously for the last 5 years?",
        "visibleIf": "{MJ SEX NO 4 Do you currently live in California?} = true",
        "title": "Have you lived in California continuously for the last 5 years?"
       },
       {
        "type": "boolean",
        "name": "MJ SEX NO 4 Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "visible": false,
        "visibleIf": "{MJ SEX NO 4 have you lived in California continuously for the last 5 years?} = true or {MJ SEX NO 4 have you lived in California continuously for the last 5 years?} = false",
        "title": "Have you paid all line fines and restitution, and completed all court-ordered conditions such as mandatory classes?\n",
        "isRequired": true
       }
      ]
     },
     {
      "name": "Marijuana",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question19",
        "visible": false,
        "isRequired": true,
        "choices": [
         "item1",
         {
          "value": "item2",
          "text": "11357"
         },
         "item3"
        ]
       }
      ],
      "visible": false,
      "visibleIf": "{Did your conviction involve a charge related to marijuana?} = true",
      "title": "Marijuana Start"
     },
     {
      "name": "HS 11360",
      "elements": [
       {
        "type": "boolean",
        "name": "Were you under the age of 18 when you committed the offense? 11360",
        "visible": false,
        "title": "Were you under the age of 18 when you committed the offense?",
        "isRequired": true,
        "labelTrue": "Yes, I Was under 18 when I committed the offence.",
        "labelFalse": "No, I was over 18 at that time."
       },
       {
        "type": "boolean",
        "name": "Do you have 2 or more prior convictions for transporting or importing marijuana under HS 11360?",
        "visible": false,
        "visibleIf": "{Were you under the age of 18 when you committed the offense? 11360} = false",
        "title": "Do you have 2 or more prior convictions for transporting or importing marijuana under HS 11360?\n",
        "isRequired": true,
        "labelTrue": "Yes, I have 2 or more prior convictions for transporting or important marijuana.\n",
        "labelFalse": "No, I do not have 2 or more prior convictions  for transporting or important marijuana."
       },
       {
        "type": "boolean",
        "name": "Did your conviction involve a minor? 11360",
        "visible": false,
        "visibleIf": "{Do you have 2 or more prior convictions for transporting or importing marijuana under HS 11360?} = false",
        "title": "Did your conviction involve a minor?",
        "isRequired": true,
        "labelTrue": "Yes, a minor was involved in my conviction.",
        "labelFalse": "No, a minor wasn't  involved in my conviction."
       },
       {
        "type": "boolean",
        "name": "Did you import or transport over 28.5 grams of marijuana from or to another state? 11360",
        "visible": false,
        "visibleIf": "{Did your conviction involve a minor? 11360} = false",
        "title": "Did you import or transport over 28.5 grams of marijuana from or to another state?",
        "isRequired": true,
        "labelTrue": "Yes, I was convicted of transporting over 28.5 grams of marijuana.",
        "labelFalse": "No, my conviction involved less than 28.5 grams of marijuana."
       }
      ]
     },
     {
      "name": "HS 11359",
      "elements": [
       {
        "type": "boolean",
        "name": "Were you under the age of 18 when you committed the offense? 11359",
        "visible": false,
        "title": "Were you under the age of 18 when you committed the offense? ",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Do you have 2 or more prior convictions for growing marijuana under HS 11359? 11359",
        "visible": false,
        "visibleIf": "{Were you under the age of 18 when you committed the offense? 11359} = false",
        "title": "Do you have 2 or more prior convictions for growing marijuana under HS 11359?",
        "isRequired": true,
        "labelTrue": "Yes, I have 2 or more prior convictions for possession with intent to sell.",
        "labelFalse": "No, I do not have 2 or more prior convictions  for possession with intent to sell."
       },
       {
        "type": "boolean",
        "name": "Did your conviction involve a minor? 11359",
        "visible": false,
        "visibleIf": "{Do you have 2 or more prior convictions for growing marijuana under HS 11359? 11359} = false",
        "title": "Did your conviction involve a minor?",
        "isRequired": true,
        "labelTrue": "Yes, a minor was involved in my conviction.",
        "labelFalse": "No, a minor wasn't  involved in my conviction."
       }
      ],
      "visible": false
     },
     {
      "name": "HS 11358",
      "elements": [
       {
        "type": "boolean",
        "name": "Were you under the age of 18 when you committed the offense? 11358",
        "visible": false,
        "title": "Were you under the age of 18 when you committed the offense?",
        "isRequired": true,
        "labelTrue": "Was under 18 when I committed the offence.\n",
        "labelFalse": "No, I was over 18 at that time."
       },
       {
        "type": "boolean",
        "name": "Do you have 2 or more prior convictions for growing marijuana under HS 11358? 11358",
        "visible": false,
        "visibleIf": "{Were you under the age of 18 when you committed the offense? 11358} = false",
        "title": "Do you have 2 or more prior convictions for growing marijuana under HS 11358?",
        "isRequired": true,
        "labelTrue": "Yes, I have 2 or more prior convictions for growing marijuana.",
        "labelFalse": "No, I do not have 2 or more prior convictions for growing marijuana."
       },
       {
        "type": "boolean",
        "name": "Were you charged with growing MORE than 6 plants? 11358",
        "visible": false,
        "visibleIf": "{Do you have 2 or more prior convictions for growing marijuana under HS 11358? 11358} = false",
        "title": "Were you charged with growing MORE than 6 plants?",
        "isRequired": true,
        "labelTrue": "Yes, I was growing more than 6 plants.",
        "labelFalse": "No, I was growing 6 or fewer plants."
       },
       {
        "type": "boolean",
        "name": "Have you completed the terms of your sentence? 11358",
        "visible": false,
        "visibleIf": "{Were you charged with growing MORE than 6 plants? 11358} = true",
        "title": "Have you completed the terms of your sentence?",
        "isRequired": true,
        "labelTrue": "Yes, I have completed the terms of my sentence.\n",
        "labelFalse": "No, I haven't completed all the terms of my sentence yet."
       },
       {
        "type": "boolean",
        "name": "Do you have a previous ''super strike'' on your record? 11358",
        "visible": false,
        "visibleIf": "{Have you completed the terms of your sentence? 11358} = false",
        "title": "Do you have a previous ''super strike'' on your record?\n",
        "isRequired": true,
        "labelTrue": "Yes, I have a ''super strike'' conviction on my record.\n",
        "labelFalse": "No, I do not have a ''super strike'' conviction on my record."
       },
       {
        "type": "boolean",
        "name": "Were you required to register as a sex offender? 11358",
        "visible": false,
        "visibleIf": "{Do you have a previous ''super strike'' on your record? 11358} = false",
        "title": "Were you required to register as a sex offender?",
        "isRequired": true,
        "labelTrue": "Yes, I was required to register as a sex offender.\n",
        "labelFalse": "No, I wasn't required to register as a sex offender."
       }
      ]
     },
     {
      "name": "Marijuana Sub Tree 1",
      "elements": [
       {
        "type": "boolean",
        "name": "Are you currently on probation? Marijuana Sub Tree 1",
        "visible": false,
        "visibleIf": "{Did your felony conviction result in a state prison sentence? #11357} = false",
        "title": "Are you currently on probation? ",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "9/ Are you interested in terminating your probation early? MJ Probation Yes",
        "visible": false,
        "visibleIf": "{Are you currently on probation? Marijuana Sub Tree 1} = true",
        "title": "Are you interested in terminating your probation early?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "22 Have you completed at least half of your probation period? MJ SUB 1",
        "visible": false,
        "visibleIf": "{9/ Are you interested in terminating your probation early? MJ Probation Yes} = true",
        "title": "Have you completed at least half of your probation period?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "1. Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ Prob Sub",
        "visible": false,
        "visibleIf": "{22 Have you completed at least half of your probation period? MJ SUB 1} = true",
        "title": "Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "3. Have you ever violated the terms of your probation? MJ SUB PROB",
        "visible": false,
        "visibleIf": "{1. Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ Prob Sub} = true",
        "title": "Have you ever violated the terms of your probation?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ Prob Yes",
        "visible": false,
        "title": "Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Great news! you should qualify to end your probation early. This may quality you to expunge your felony conviction early as well.That's what we're going to get to next in this evaluation  Do you want to restore your firearm rights as well as expunging your record? MJ SUB PROB YES",
        "visible": false,
        "visibleIf": "{3. Have you ever violated the terms of your probation? MJ SUB PROB} = false",
        "title": "Great news! you should qualify to end your probation early. This may quality you to expunge your felony conviction early as well.That's what we're going to get to next in this evaluation  Do you want to restore your firearm rights as well as expunging your record?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Are we currently evaluating a felony conviction for drug possession? MJ Prob Sub",
        "visible": false,
        "visibleIf": "{3. Have you ever violated the terms of your probation? MJ SUB PROB} = true or {1. Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ Prob Sub} = false or {22 Have you completed at least half of your probation period? MJ SUB 1} = false or {9/ Are you interested in terminating your probation early? MJ Probation Yes} = false or {MJ PROB YES Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?} = false",
        "title": "Are we currently evaluating a felony conviction for drug possession?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stole property?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Are we currently evaluating a felony conviction for drug possession? MJ Prob Sub} = false",
        "title": "Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stolen property?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Were you convicted of one of the crimes specifically listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Were you convicted of theft, shoplifting, forgery, writing a bad check, or receiving stole property?} = true",
        "title": "Were you convicted of one of the crimes specifically listed in the help button?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Is the conviction we're evaluating  one of the drug-possession crimes listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Are we currently evaluating a felony conviction for drug possession? MJ Prob Sub} = true",
        "title": "Is the conviction we're evaluating  one of the drug-possession crimes listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of any other felonies that weren't for drug possession?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Is the conviction we're evaluating  one of the drug-possession crimes listed in the help button?} = true",
        "title": "Have you ever been convicted of any other felonies that weren't for drug possession?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of a violent felony?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted of any other felonies that weren't for drug possession?} = true or {MJ PROB YES Were you convicted of one of the crimes specifically listed in the help button?} = true",
        "title": "Have you ever been convicted of a violent felony?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of any of the felonies involving death listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted of a violent felony?} = true",
        "title": "Have you ever been convicted of any of the felonies involving death listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted a felony sex crime?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted of a violent felony?} = false or {MJ PROB YES Have you ever been convicted of any of the felonies involving death listed in the help button?} = false",
        "title": "Have you ever been convicted a felony sex crime?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever had to register as a sex offender?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted a felony sex crime?} = true",
        "title": "Have you ever had to register as a sex offender?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of one of the sex crimes listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever had to register as a sex offender?} = false",
        "title": "Have you ever been convicted of one of the sex crimes listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of a weapon involving explosive or a weapon of mass destruction?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted a felony sex crime?} = false or {MJ PROB YES Have you ever been convicted of one of the sex crimes listed in the help button?} = false",
        "title": "Have you ever been convicted of a weapon involving explosive or a weapon of mass destruction?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of any of the felonies listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted of a weapon involving explosive or a weapon of mass destruction?} = false",
        "title": "Have you ever been convicted of any of the felonies listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "visible": false,
        "visibleIf": "{Great news! you should qualify to end your probation early. This may quality you to expunge your felony conviction early as well.That's what we're going to get to next in this evaluation  Do you want to restore your firearm rights as well as expunging your record? MJ SUB PROB YES} = true",
        "title": "Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Was your felony conviction for any of the sex offences involving a minor child listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?} = true",
        "title": "Was your felony conviction for any of the sex offences involving a minor child listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Great news! It looks like you can probably terminate your probation early and petition to expunge your record  at the same time! Expungement  in California reopens your case and then dismisses the conviction. However, expungements do not restore firearm rights.",
        "visible": false,
        "visibleIf": "{MJ PROB YES Was your felony conviction for any of the sex offences involving a minor child listed in the help button?} = false",
        "title": "Great news! It looks like you can probably terminate your probation early and petition to expunge your record  at the same time! Expungement  in California reopens your case and then dismisses the conviction. However, expungements do not restore firearm rights.",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever had either a misdemeanor OR felony domestic violence conviction?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Great news! It looks like you can probably terminate your probation early and petition to expunge your record  at the same time! Expungement  in California reopens your case and then dismisses the conviction. However, expungements do not restore firearm rights.} = true",
        "title": "Have you ever had either a misdemeanor OR felony domestic violence conviction?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJPROB YES Are you prohibited from owning a firearm by one of the circumstances listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever had either a misdemeanor OR felony domestic violence conviction?} = false",
        "title": "Are you prohibited from owning a firearm by one of the circumstances listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below?",
        "visible": false,
        "visibleIf": "{MJPROB YES Are you prohibited from owning a firearm by one of the circumstances listed in the help button?} = false",
        "title": "Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Has it been at least 10 years since your conviction for the Assault,Battery, or other offences in the previous question?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below?} = true",
        "title": "Has it been at least 10 years since your conviction for the Assault,Battery, or other offences in the previous question?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJSUB PROB YES 2 It dose not look you'll be eligible to restore your firearm rights due to the Gun control Act, a federal  law which is described in the help button. Are you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever had either a misdemeanor OR felony domestic violence conviction?} = true or {MJPROB YES Are you prohibited from owning a firearm by one of the circumstances listed in the help button?} = true",
        "title": "It does not look you'll be eligible to restore your firearm rights due to the Gun control Act, a federal  law which is described in the help button. Are you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Was the felony conviction we're evaluating for a \"wobbler\" offenses? (see help button to figure this out)",
        "visible": false,
        "visibleIf": "{MJ PROB YES Great news! It looks like you can probably terminate your probation early and petition to expunge your record  at the same time! Expungement  in California reopens your case and then dismisses the conviction. However, expungements do not restore firearm rights.} = false",
        "title": "Was the felony conviction we're evaluating for a \"wobbler\" offenses? (see help button to figure this out)",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "mj prob yes Have you ever had a protective order or restraining order placed against you?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below?} = false or {MJ PROB YES Has it been at least 10 years since your conviction for the Assault,Battery, or other offences in the previous question?} = true",
        "title": "Have you ever had a protective order or restraining order placed against you?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES It does not look you\"ll be eligible to restore your firearm rights until 10 years have passed since the date of that conviction. Are you interested in expunging your felony conviction, even though your firearm rights probably cannot be restored?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Has it been at least 10 years since your conviction for the Assault,Battery, or other offences in the previous question?} = false",
        "title": "It does not look you'll be eligible to restore your firearm rights until 10 years have passed since the date of that conviction.\nAre you interested in expunging your felony conviction, even though your firearm rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "It does not look you'll be eligible to restore your firearm rights due to the Gun control Act, a federal  law which is described in the help button. Are you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored? MJ PROB YES",
        "visible": false,
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Were you convicted of having ammo or a firearm as a result of that order?",
        "visible": false,
        "visibleIf": "{mj prob yes Have you ever had a protective order or restraining order placed against you?} = true",
        "title": "Were you convicted of having ammo or a firearm as a result of that order?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Were you convicted of having ammo or a firearm as a result of that order?} = false",
        "title": "Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES 5 It does not look you'll be eligible to restore your firearm rights due to California Firearm Law, a federal law which is describe in the help button. Are you interested in expunging your felony conviction, even though your firearm  rights probably cannot be restored?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?} = true",
        "title": "It does not look you'll be eligible to restore your firearm rights due to California Firearm Law, a federal law which is describe in the help button. Are you interested in expunging your felony conviction, even though your firearm  rights probably cannot be restored?",
        "isRequired": true,
        "labelTrue": "Yes, I don't want to be a felon anymore.",
        "labelFalse": "No, only interested in restoring my firearm rights."
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Were you convicted of having ammo or a firearm as a result of that order?} = true",
        "title": "Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES 4 It does not look you'll be eligible to restore your firearm rights  until 5 years have passed since the date of that conviction. Are you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order?} = false",
        "title": "It does not look you'll be eligible to restore your firearm rights  until 5 years have passed since the date of that conviction. Are you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES left Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?",
        "visible": false,
        "visibleIf": "{mj prob yes Have you ever had a protective order or restraining order placed against you?} = false or {MJ PROB YES Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order?} = true",
        "title": "Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES 3 It does not look you'll be eligible to restore your firearm rights due to California Firearm Law, a federal law which is describe in the help button. Are you interested in expunging your felony conviction, even though your firearm  rights probably cannot be restored?",
        "visible": false,
        "visibleIf": "{MJ PROB YES left Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?} = true",
        "title": " It does not look you'll be eligible to restore your firearm rights due to California Firearm Law, a federal law which is describe in the help button. Are you interested in expunging your felony conviction, even though your firearm  rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Have you already obtained a dismissal/expungement under PC 1203.4, and only want to reduce your felony to restore your firearm rights?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button)} = true",
        "title": "Have you already obtained a dismissal/expungement under PC 1203.4, and only want to reduce your felony to restore your firearm rights?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES If this felony conviction is not a Wobbler under California law, it is unlikely that you can restore your firearm rights. If you are unsure on whether the conviction was a wobbler, just say that you\"re unsure, and we can look into it for you if your\"re interested  Do you want to expunge your felony conviction, even though your firearm rights probably cannot be restored?",
        "visible": false,
        "visibleIf": "{MJ PROB YES Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button)} = false",
        "title": "If this felony conviction is not a Wobbler under California law, it is unlikely that you can restore your firearm rights.\nIf you are unsure on whether the conviction was a wobbler, just say that you're unsure, and we can look into it for you if you're interested \nDo you want to expunge your felony conviction, even though your firearm rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "MJ PROB YES Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button)",
        "visible": false,
        "visibleIf": "{MJ PROB YES Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?} = false or {MJ PROB YES left Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?} = false",
        "title": "Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button)",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Are you interested in restoring your firearm rights? MJ sub 1",
        "visible": false,
        "visibleIf": "{Was your felony conviction for any of the sex offences involving a minor child listed in the help button? MJ sub 1} = false",
        "title": "Are you interested in restoring your firearm rights?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ sub tree 1",
        "visible": false,
        "visibleIf": "{Are you currently on probation? Marijuana Sub Tree 1} = false",
        "title": "Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Was your felony conviction for any of the sex offences involving a minor child listed in the help button? MJ sub 1",
        "visible": false,
        "visibleIf": "{Have you paid all fines and restitution, and completed all court-ordered conditions such as mandatory classes? MJ sub tree 1} = true",
        "title": "Was your felony conviction for any of the sex offences involving a minor child listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you ever had either a misdemeanor OR felony domestic violence conviction? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Are you interested in restoring your firearm rights? MJ sub 1} = true",
        "title": "Have you ever had either a misdemeanor OR felony domestic violence conviction?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Are you prohibited from owning a firearm by one of the circumstances listed in the help button? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Have you ever had either a misdemeanor OR felony domestic violence conviction? MJ SUB 1} = false",
        "title": "Are you prohibited from owning a firearm by one of the circumstances listed in the help button?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "It does not look you'll be eligible to restore your firearm rights due to the Gun control Act, a federal  law which is described in the help button. MJ SUB 1",
        "visible": false,
        "visibleIf": "{Have you ever had either a misdemeanor OR felony domestic violence conviction? MJ SUB 1} = true or {Are you prohibited from owning a firearm by one of the circumstances listed in the help button? MJ SUB 1} = true",
        "title": "It does not look you'll be eligible to restore your firearm rights due to the Gun control Act, a federal law which is described in the help button.",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Are you prohibited from owning a firearm by one of the circumstances listed in the help button? MJ SUB 1} = false",
        "title": "Have you ever been convicted  of assault, battery, or any of the offenses listed in the help button below?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Has it been at least 10 years since your conviction for the assault, battery, or other offences in the previous question? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below? MJ SUB 1} = true",
        "title": "Has it been at least 10 years since your conviction for the assault, battery, or other offences in the previous question? ",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Firearm end 2",
        "visible": false,
        "visibleIf": "{Has it been at least 10 years since your conviction for the assault, battery, or other offences in the previous question? MJ SUB 1} = false",
        "title": "It does not look you'll be eligible to restore your firearm rights until 10 years have passed since the date of that conviction.\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you ever had a protective order or restraining order placed against you? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Has it been at least 10 years since your conviction for the assault, battery, or other offences in the previous question? MJ SUB 1} = true or {Have you ever been convicted  of Assault, battery, or any of the offenses listed in the help button below? MJ SUB 1} = false",
        "title": "Have you ever had a protective order or restraining order placed against you?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Were you convicted of having ammo or a firearm as a result of that order? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Have you ever had a protective order or restraining order placed against you? MJ SUB 1} = true",
        "title": "Were you convicted of having ammo or a firearm as a result of that order?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button? MJ SUB 1 FIREARM ammo end",
        "visible": false,
        "visibleIf": "{Were you convicted of having ammo or a firearm as a result of that order? MJ SUB 1} = false",
        "title": "Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "It does not look you'll be eligible to restore your firearm rights due to California Firearm Law. Are you interested in expunging your felony conviction, even though your firearm rights probably cannot be restored? END AMMO 7",
        "visible": false,
        "visibleIf": "{Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button? MJ SUB 1 FIREARM ammo end} = true",
        "title": "It does not look you'll be eligible to restore your firearm rights due to California Firearm Law.\nAre you interested in expunging your felony conviction, even though your firearm  rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button? SUB MJ",
        "visible": false,
        "visibleIf": "{1x Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order? MJ SUB redux} = true",
        "title": "Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button) MJ SUB 1 FIREARM TREE",
        "visible": false,
        "visibleIf": "{Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button? SUB MJ} = false or {Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button? MJ SUB 1 FIREARM ammo end} = false or {1x Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order? MJ SUB redux} = true",
        "title": "Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button) ",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Have you already obtained a dismissal/expungement under PC 1203.4, and only want to reduce your felony to restore your firearm rights? MJ SUB 1",
        "visible": false,
        "visibleIf": "{Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button) MJ SUB 1 FIREARM TREE} = true",
        "title": "Have you already obtained a dismissal/expungement under PC 1203.4, and only want to reduce your felony to restore your firearm rights?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "If this felony conviction is not a Wobbler under California law, it is unlikely that you can restore your firearm rights. MJ SUB 1",
        "visible": false,
        "visibleIf": "{Is the felony conviction we're evaluating considered a  \"wobbler\"  offenses under California law?(see help button) MJ SUB 1 FIREARM TREE} = false",
        "title": "If this felony conviction is not a Wobbler under California law, it is unlikely that you can restore your firearm rights.\nIf you are unsure on whether the conviction was a wobbler, just say that you\"re unsure, and we can look into it for you if your\"re interested \nDo you want to expunge your felony conviction, even though your firearm rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "It does not look you'll be eligible to restore your firearm rights due to California Firearm Law, a federal law which is describe in the help button. MJ SUB 1 END 3",
        "visible": false,
        "visibleIf": "{Have you ever been convicted of any of the gun-related or domestic violence offenses listed in the help button? SUB MJ} = true",
        "title": "It does not look you'll be eligible to restore your firearm rights due to California Firearm Law, a federal law which is describe in the help button.",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "1x Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order? MJ SUB redux",
        "visible": false,
        "visibleIf": "{Were you convicted of having ammo or a firearm as a result of that order? MJ SUB 1} = true",
        "title": "Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "It doesnot look you\"ll be eligible to restore your firearm rights  until 5 years have passed since the date of that conviction. Are you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored? 5 YEAR END MJ SUB 1",
        "visible": false,
        "visibleIf": "{1x Has it been at least 5 years since your conviction for having a firearm or ammo while under a protective or restraining order? MJ SUB redux} = false",
        "title": "It does not look you'll be eligible to restore your firearm rights  until 5 years have passed since the date of that conviction.\nAre you interested in expunging your felony conviction, even thought your firearm rights probably cannot be restored?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Was the felony conviction we\"re evaluating for a \"wobbler\" offenses? (see help button to figure this out) MJ Sub 1",
        "visible": false,
        "visibleIf": "{Are you interested in restoring your firearm rights? MJ sub 1} = false",
        "title": "Was the felony conviction we\"re evaluating for a \"wobbler\" offenses? (see help button to figure this out)",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No I looked at the help button, and I do not think my offenses qualifies "
       }
      ],
      "visibleIf": "{Did your felony conviction result in a state prison sentence? #11357} = false"
     },
     {
      "name": "marijuana prob yes"
     },
     {
      "name": "Seal An Arrest",
      "elements": [
       {
        "type": "boolean",
        "name": "Were you ever charged with the offense you were arrested for?",
        "title": "Were you ever charged with the offense you were arrested for?"
       }
      ],
      "visibleIf": "{What Best Describes Your Situation?} = 'item3'"
     },
     {
      "name": "Seal Arrest Sub 1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "What was the result of the charges filed ?",
        "visible": false,
        "visibleIf": "{Were you ever charged with the offense you were arrested for?} = true",
        "title": "What was the result of the charges filed ?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Dismissed and cannot be refiled"
         },
         {
          "value": "item2",
          "text": "Acquitted or found not guilty"
         },
         {
          "value": "item3",
          "text": "Convicted,  but charges overturned on appeal"
         },
         {
          "value": "item4",
          "text": "Dismissed, but may be refiled"
         }
        ],
        "otherText": "Dismissed, but may be refiled"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? dismissed",
        "visible": false,
        "visibleIf": "{What was the result of the charges filed ?} = 'item1'",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses?:  Domestic Violence, Child Abuse, or Elder Abuse",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? dismissed",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? dismissed} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? dismissed",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? dismissed} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? Aquitted",
        "visible": false,
        "visibleIf": "{What was the result of the charges filed ?} = 'item2'",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses?:  Domestic Violence, Child Abuse, or Elder Abuse",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? acquitted",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? Aquitted} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? aquitted",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? acquitted} = false",
        "title": "Do you have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? convicted",
        "visible": false,
        "visibleIf": "{What was the result of the charges filed ?} = 'item3'",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses?:  Domestic Violence, Child Abuse, or Elder Abuse",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? convicted",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? convicted} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? convicted",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? convicted} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "radiogroup",
        "name": "What type of offense were you arrested for?",
        "visible": false,
        "visibleIf": "{What was the result of the charges filed ?} = 'item4'",
        "title": "What type of offense were you arrested for?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "A felony punishable by death or life in prison like murder."
         },
         {
          "value": "item2",
          "text": "A felony that does NOT carry the possibility of life in prison. "
         },
         {
          "value": "item3",
          "text": "A misdemeanor."
         },
         {
          "value": "item4",
          "text": " Sexual offense, including failure to register or child pornography."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "Can you prove that you were \"factually innocent\" of the crimes you were arrested for?",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for?} = 'item1'",
        "title": "Can you prove that you were \"factually innocent\" of the crimes you were arrested for?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes, I can prove that I'm factually innocent of what I was arrested for."
         },
         {
          "value": "item2",
          "text": "No. after reading what \"factually innocent\" means in the help button, I don't think I could do that. "
         },
         {
          "value": "item3",
          "text": "I'm not sure that I can prove I was factually innocent. "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "What is the maximum prison sentence for the felony you were arrested for?",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for?} = 'item2'",
        "title": "What is the maximum prison sentence for the felony you were arrested for?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": " The felony I was arrested for could carry a sentence of more than 8 years. "
         },
         {
          "value": "item2",
          "text": " The felony I was arrested for has a maximum sentence of no more than 8 years."
         }
        ]
       },
       {
        "type": "boolean",
        "name": "Has it been at least 6 years since your arrest? Refiled 6",
        "visible": false,
        "visibleIf": "{What is the maximum prison sentence for the felony you were arrested for?} = 'item1'",
        "title": "Has it been at least 6 years since your arrest?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses?:  6 years Refiled",
        "visible": false,
        "visibleIf": "{Has it been at least 6 years since your arrest? Refiled 6} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses?:  Domestic Violence, Child Abuse, or Elder Abuse",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 6 years Refiled",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses?:  6 years Refiled} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "question5",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 6 years Refiled} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Has it been at least 3 years since your arrest? Refiled",
        "visible": false,
        "visibleIf": "{What is the maximum prison sentence for the felony you were arrested for?} = 'item2'",
        "title": "Has it been at least 3 years since your arrest?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No ",
        "showTitle": true
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses?:  3 years Refiled",
        "visible": false,
        "visibleIf": "{Has it been at least 3 years since your arrest? Refiled} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses?:  Domestic Violence, Child Abuse, or Elder Abuse",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 3 years Refiled",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses?:  3 years Refiled} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? 3 years refiled",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 3 years Refiled} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Has it been almost 1 year since your arrest? MD",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for?} = 'item3'",
        "title": "Has it been almost 1 year since your arrest?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? 1 year MD",
        "visible": false,
        "visibleIf": "{Has it been almost 1 year since your arrest? MD} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses?  *domestic violence, *child abuse, or *elder abuse",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 1 year MD",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? 1 year MD} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? 1 year MD",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 1 year MD} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years?",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Has it been almost 10 year since your arrest? FRCP 10",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for?} = 'item4'",
        "title": "Has it been almost 10 year since your arrest?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the arrest record you want to seal for any of the following types of offenses? FRCP 10",
        "visible": false,
        "visibleIf": "{Has it been almost 10 year since your arrest? FRCP 10} = true",
        "title": "Is the arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? FRCP 10",
        "visible": false,
        "visibleIf": "{Is the arrest record you want to seal for any of the following types of offenses? FRCP 10} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? FRCP 10",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? FRCP 10} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years?",
        "isRequired": true
       }
      ],
      "visibleIf": "{Were you ever charged with the offense you were arrested for?} = true"
     },
     {
      "name": "Seal Arrest Sub 2",
      "elements": [
       {
        "type": "html",
        "name": "Great",
        "visibleIf": "{Were you ever charged with the offense you were arrested for?} = false",
        "html": "<h2>Great!  Since you haven't been charged yet, we need to figure out whether the statute of Limitation has passed for the offense you were arrested for.Please pay attention to the help button during the next few questions, unless you are sure you know the statute of limitations for the offense you were arrested for. With that in mind , please click NEXT below to figure this out! <h2>"
       },
       {
        "type": "radiogroup",
        "name": "Has enough time passed from the statute of Limitations to prevent you from being charged for the offense you were arrested for?",
        "visible": false,
        "visibleIf": "{Were you ever charged with the offense you were arrested for?} = false",
        "title": "Has enough time passed from the statute of Limitations to prevent you from being charged for the offense you were arrested for?",
        "isRequired": true,
        "choices": [
         "Yes, I know that has been enough time.         ",
         " No, I know that it has not been long enough.",
         "I'm not sure, please ask me more questions"
        ]
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse limitations 0",
        "visible": false,
        "visibleIf": "{Has enough time passed from the statute of Limitations to prevent you from being charged for the offense you were arrested for?} = 'Yes, I know that has been enough time.         '",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse ",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "radiogroup",
        "name": "What type of offense were you arrested for? Limitation",
        "visible": false,
        "visibleIf": "{Has enough time passed from the statute of Limitations to prevent you from being charged for the offense you were arrested for?} = 'I\\'m not sure, please ask me more questions'",
        "title": "What type of offense were you arrested for? ",
        "isRequired": true,
        "choices": [
         "A felony punishable by death or life in prison.",
         " A felony that doesn't  carry the possibility of life in prison.",
         "A  misdemeanor.",
         "Sexual offenses, including failure to register or child pornography. "
        ]
       },
       {
        "type": "radiogroup",
        "name": "Can you prove that you were \"factually innocent\" of the crimes you were arrested for? Limitations",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for? Limitation} = 'A felony punishable by death or life in prison.'",
        "title": "Can you prove that you were \"factually innocent\" of the crimes you were arrested for?",
        "isRequired": true,
        "choices": [
         "Yes, I can prove that I'm factually innocent of what I was arrested for. ",
         "No. after reading what \"factually innocent\" means in the help button, I don't think I could do that. ",
         "I'm not sure that I can prove I was factually innocent. "
        ]
       },
       {
        "type": "radiogroup",
        "name": "What is the maximum prison sentence for the felony you were arrested for? Limitations",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for? Limitation} = ' A felony that doesn\\'t  carry the possibility of life in prison.'",
        "title": "What is the maximum prison sentence for the felony you were arrested for?",
        "isRequired": true,
        "choices": [
         "The felony I was arrested for could carry a sentence of more than 8 years.",
         "The felony I was arrested for has a maximum sentence of no more than 8 years."
        ]
       },
       {
        "type": "boolean",
        "name": "Has it been at least 6 years since your arrest? Limitations 6",
        "visible": false,
        "visibleIf": "{What is the maximum prison sentence for the felony you were arrested for? Limitations} = 'The felony I was arrested for could carry a sentence of more than 8 years.'",
        "title": "Has it been at least 6 years since your arrest?\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": " No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse Limitations 6",
        "visible": false,
        "visibleIf": "{Has it been at least 6 years since your arrest? Limitations 6} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse \n",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitation 0",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse limitations 0} = true",
        "title": "Do you have more than one conviction for domestic \nviolence, child abuse, or elder abuse? ",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? L0",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitation 0} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years?",
        "isRequired": true,
        "labelTrue": " Yes\n",
        "labelFalse": " No"
       },
       {
        "type": "boolean",
        "name": "Has it been at least 3 years since your arrest? Limitations",
        "visible": false,
        "visibleIf": "{What is the maximum prison sentence for the felony you were arrested for? Limitations} = 'The felony I was arrested for has a maximum sentence of no more than 8 years.'",
        "title": "Has it been at least 3 years since your arrest?\n",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse limitations 3 years",
        "visible": false,
        "visibleIf": "{Has it been at least 3 years since your arrest? Limitations} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse\n",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 3",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse limitations 3 years} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?\n",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? Limitations 3",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 3} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years?\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 6",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse Limitations 6} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? ",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? Limitations 6",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 6} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years?\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Has it been at least 1 years since your arrest? Limitations 1",
        "visibleIf": "{What type of offense were you arrested for? Limitation} = 'A  misdemeanor.'",
        "title": "Has it been at least 1 years since your arrest?",
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse Limitations 1",
        "visible": false,
        "visibleIf": "{Has it been at least 1 years since your arrest? Limitations 1} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 1",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse Limitations 1} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the  3 years? Limitations 1",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 1} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years?\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No "
       },
       {
        "type": "boolean",
        "name": "Has it been at least 10 years since your  arrest? Limitations 10",
        "visible": false,
        "visibleIf": "{What type of offense were you arrested for? Limitation} = 'Sexual offenses, including failure to register or child pornography. '",
        "title": "Has it been at least 10 years since your arrest?\n",
        "isRequired": true,
        "labelTrue": "Yes.\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse Limitations 10",
        "visible": false,
        "visibleIf": "{Has it been at least 10 years since your  arrest? Limitations 10} = true",
        "title": "Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 10",
        "visible": false,
        "visibleIf": "{Is the  arrest record you want to seal for any of the following types of offenses? *domestic violence, *child abuse, or *elder abuse Limitations 10} = true",
        "title": "Do you have more than one conviction for domestic violence, child abuse, or elder abuse?\n",
        "isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
       },
       {
        "type": "boolean",
        "name": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years? Limitations 10",
        "visible": false,
        "visibleIf": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 10} = false",
        "title": "Do you  have 5 or more arrests for domestic violence, child abuse, or elder abuse within the past the 3 years?\n",
        "isRequired": true,
        "labelTrue": "Yes\n",
        "labelFalse": "No "
       }
      ],
      "visibleIf": "{Were you ever charged with the offense you were arrested for?} = false"
     }
    ],
    "triggers": [
     {
      "type": "skip",
      "gotoName": "Were you ever charged with the offense you were arrested for?"
     },
     {
      "type": "skip",
      "gotoName": "Did the court sentence you to a ''Diversion program'' under PC 1000.5?"
     },
     {
      "type": "skip",
      "gotoName": "Did the court sentence you to a ''Diversion program'' under PC 1000.5?"
     },
     {
      "type": "skip",
      "gotoName": "Diversion test 1"
     },
     {
      "type": "runexpression",
      "setToName": "Did you successfully complete your Deferred Entry of Judgement Program?"
     },
     {
      "type": "skip",
      "gotoName": "Do you currently live in California? AC Military S"
     },
     {
      "type": "skip",
      "expression": "{Have you lived in California continuously for the last 5 years? inf loop} = 'No, I have not lived in California for the last 5 years.'",
      "gotoName": "Do you currently live in California? AC Military S"
     },
     {
      "type": "skip",
      "expression": "{Have you lived in California continuously for the last 5 years? No Military Inf 9 Loop} = 'No, I have not lived in California for the last 5 years.'",
      "gotoName": "Do you currently live in California? No Military 9 Loop"
     },
     {
      "type": "skip",
      "expression": "{Have you lived in California continuously for the last 5 years? loop 10 SO} = 'No, I have not lived in California for the last 5 years.'",
      "gotoName": "Do you currently live in California? SO 10"
     },
     {
      "type": "skip",
      "expression": "{have you lived in California continuously for the last 5 years? SO No Loop} = 'No, I have not lived in California for the last 5 years.'",
      "gotoName": "Do you currently live in California? SO No Loop"
     },
     {
      "type": "skip",
      "expression": "{Have you lived in California continuously for the last 5 years? SO NO 9 CA 2} = 'No, I have not lived in California for the last 5 years.'",
      "gotoName": "Do you currently live in California? SO NO 9 CA 2"
     },
     {
      "type": "skip",
      "gotoName": "Do you have any current criminal proceedings or outstanding warrants?"
     },
     {
      "type": "skip",
      "gotoName": "It does not look you'll be eligible to restore your firearm rights due to the Gun control Act, a federal  law which is described in the help button."
     },
     {
      "type": "skip",
      "gotoName": "Are you currently on probation? AC Warrants"
     }
    ],
    "navigateToUrl": "paylinks/expungepay.html",
    "navigateToUrlOnCondition": [
     {
      "expression": "{Do you have more than one conviction for domestic  violence, child abuse, or elder abuse? Limitation 0} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Can you prove that you were \"factually innocent\" of the crimes you were arrested for? Limitations} = 'Yes, I can prove that I\\'m factually innocent of what I was arrested for. '",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Can you prove that you were \"factually innocent\" of the crimes you were arrested for? Limitations} = 'No. after reading what \\\"factually innocent\\\" means in the help button, I don\\'t think I could do that. '",
      "url": "paylinks/option2.html"
     },
     {
      "expression": "{Can you prove that you were \"factually innocent\" of the crimes you were arrested for? Limitations} = 'I\\'m not sure that I can prove I was factually innocent. '",
      "url": "paylinks/option3.html"
     },
     {
      "expression": "{Has enough time passed from the statute of Limitations to prevent you from being charged for the offense you were arrested for?} = ' No, I know that it has not been long enough.'",
      "url": "paylinks/option2.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 6} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 3} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 1} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? Limitations 10} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? acquitted} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? convicted} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Can you prove that you were \"factually innocent\" of the crimes you were arrested for?} = 'item1'",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Can you prove that you were \"factually innocent\" of the crimes you were arrested for?} = 'item2'",
      "url": "paylinks/option2.html"
     },
     {
      "expression": "{Can you prove that you were \"factually innocent\" of the crimes you were arrested for?} = 'item3'",
      "url": "paylinks/option3.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 6 years Refiled} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 3 years Refiled} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? 1 year MD} = true",
      "url": "paylinks/option1.html"
     },
     {
      "expression": "{Do you have more than one conviction for domestic violence, child abuse, or elder abuse? FRCP 10} = true",
      "url": "paylinks/option1.html"
     }
    ],
    "showQuestionNumbers": "off",
    "requiredText": "",
    "questionsOnPageMode": "questionPerPage"
   }