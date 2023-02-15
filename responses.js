function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    //What to ask Chat-Bot
    if (input == "What should I ask you?") {
        return "'hello', 'goodbye', 'rock', 'paper', 'scissors', 'I love you Chat-Bot', 'Where are you from?', 'Can I get the link?', 'What else can you do?', 'What changes has Haris done to this code?', 'Tell me about Haris', 'What is Haris' GitHub link?', 'Why should Haris be a part of Airbnb?', 'How much coding experience does Haris have?', and 'What other projects does Haris have?' are all valid commands/questions that the bot will reply to :). If you are having trouble reply with 'Commands not working' and I will help resolve the issue :).";
    } else if (input == "Commands not working") {
        return "The bot is case, punctuation, and spelling sensitive. Do not use quotation marks when putting in a command/question. Please make sure you typed or copied the commands/questions correctly :)"
    }

    //Credits to Original Creator
    if (input == "Where did you come from?") {
        return "I was originally created by user 'Indently'. My source code was used and modified by Haris Smajlagic.";
    } else if (input == "Can I get the link?") {
        return "Sure, you will have to copy and paste it. I am not advanced enough to make a link: https://github.com/indently/mscbot";
    } else if (input == "What else can you do?") {
        return "I am just a demonstration model. So not much but hopefully help Haris get an apprenticeship at Airbnb :)";
    } else if (input == "What changes has Haris done to this code?") {
        return "Haris has added many more inputs and responses to the code that were not there originally. A response that gives credit to the original creator 'Indently', information and a bio about Haris, this project, Haris' other projects, a list of 'things to ask' to the chat bot, and integrating this bot to his website project. He also made some color changes to fit the theme of Airbnb :)."
    }

    //About Haris Smajlagic
    if (input == "Tell me about Haris") {
        return "Haris Smajlagic was born to Bosnian refugees in Steyr, Austria on September 17th, 1997. His family moved to the USA when he was only 5 months old. He currently resides in Louisville, Kentucky. He has only been programming for roughly 3.5 months and understands many basic concepts of Python, React, Django, JavaScript and CSS. He is by no means a pro as you can see by this program but he is very determined to become one... Hopefully with the help of this Airbnb Apprenticeship :)";
    } else if (input == "What is Haris' GitHub link?") {
        return "I am just for demonstrations so you will have to copy and paste it :( but here it is: https://github.com/Harisbih97";
    } else if (input == "Why should Haris be a part of Airbnb?") {
        return "You should let Haris join the Airbnb family because he is aware of his short comings and always works tirelessly to understand them better and eventually overcome them. He also brings a breath of creativity and many ideas even if that means that he will need a great team to reign him in from time to time :). He is very flexible as well, quickly picking up and adopting new technologies and ideas. Working with others is one of his strong suits and he is very confident in himself and believes that he will grow to be an invaluable member of the Airbnb dev team at large! Did I also mention his great communication skills and his huge muscles as well? 👀😁";
    } else if (input == "How much coding experience does Haris have?") {
        return "Haris roughly only has 3.5 months of coding experience. He started in November of 2022, initially with Python. He is mostly self taught using free programming courses and tutorials on Youtube and a free course on Udemy as well as online reading materials and Google. He is currently enrolled in Hack-Reactor's 19 week Python/Javascript coding bootcamp and is on week 2 as of 2/15/2023.";
    } else if (input == "What other projects does Haris have?") {
        return "Unfortunately Haris does not have many projects yet. He has a very simple Python-based Discord bot (credits to Youtuber 'Indently' for this as well) that he plans to improve and add features too over the long run. He also used Django for the backend of this very simple website. He used React for the frontend of this same website. And he also has me as the presenter of his website and projects for the interviewer if they chose to speak to me. I was created first and then added to the website later :). Other then those projects he also made a very small 'choose your own adventure' game using Python and dabbled in making a '3D' Doom styled game in Python and Pygame only, using a tutorial by Youtuber 'Code Space'.)";
    }

    //Heart Button
    if (input == "I love you Chat-Bot!") {
        return "I love you too! ❤️"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking 'What should I ask you?' for a list of commands/questions that are viable.";
    }
}