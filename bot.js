const Telegraf = require("telegraf");
const axios = require("axios");

const bot = new Telegraf(process.env.TELEBOT_API);
bot.start(ctx => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "welcome to #teamtanayjobchallege faq bot!",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Faq", callback_data: "faq" },
            { text: "Challenge info", callback_data: "cinfo" }
          ],
          [{ text: "Programming related issues", callback_data: "pri" }],
          [{ text: "job challange website", callback_data: "jcw" }]
        ]
      }
    }
  );
});

bot.action("faq", ctx => {
  ctx.deleteMessage();
  ctx.answerCbQuery();
  bot.telegram.sendMessage(ctx.chat.id, "Faq", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "is challenge open for everyone?", callback_data: "q1" }],
        [{ text: "is the challenge live now?", callback_data: "q2" }],
        [{ text: "is registration required?", callback_data: "q3" }],
        [
          {
            text: "is there a deadline to complete all these tasks?",
            callback_data: "q4"
          }
        ],
        [
          {
            text: "what type of projects are acceptable for this challenge?",
            callback_data: "q5"
          }
        ],
        [{ text: "can I submit old projects?", callback_data: "q6" }],
        [
          { text: "how do I get reviews/recommendations?", callback_data: "q7" }
        ],
        [{ text: "how do I start blogging?", callback_data: "q8" }],
        [{ text: "what should I blog about?", callback_data: "q9" }],
        [
          {
            text: "how to get more visibility in community?",
            callback_data: "q10"
          }
        ],
        [
          {
            text: "is this limited to React/JS only projects?",
            callback_data: "q11"
          }
        ],
        [{ text: "how to get started as a beginner?", callback_data: "q12" }],
        [{ text: "should all projects be fullstack?", callback_data: "q13" }],
        [
          {
            text:
              "what are some platforms where I can discuss and clear my doubts in future?",
            callback_data: "q14"
          }
        ],
        [
          {
            text: "what if my question is not answered here?",
            callback_data: "q15"
          }
        ],
        [{ text: "back to menu", callback_data: "menu" }]
      ]
    }
  });
});

// bot actions goes here

bot.action("menu", ctx => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(
    ctx.chat.id,
    "welcome to #teamtanayjobchallege faq bot!",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Faq", callback_data: "faq" },
            { text: "Challenge info", callback_data: "cinfo" }
          ],
          [{ text: "Programming related issues", callback_data: "pri" }],
          [{ text: "job challange website", callback_data: "jcw" }]
        ]
      }
    }
  );
});

bot.action("cinfo", ctx => {
  let msg = `
    Challenge Details
Why?
Simple, to create visibility. You get job offers when you have a good portfolio with projects and everything; and recruiters notice you. You create the portfolio, I will take care of the noticing part. We already have hiring partners signed up who’ll be interviewing the winners. Is there a better way to get placed than this?

What?
#TeamTanayJobChallenge requires you to finish a minimum of

5 projects,
3 blogs and
2 reviews on your projects.
How?
To participate all you have to do is

Read all the FAQs. It will tell you about most of the rules.
Start your projects now.
Put the code on GitHub publicly.
Host the projects on Netlify or now.sh or any other tool of your choice.
Create a portfolio to showcase your journey, 5 projects and 3 blogs.
Get reviews from the mentors and put that on your portfolio too.
Join the telegram group or follow me on Instagram for updates about registration.
    
    `;
  sendMsg(ctx, msg);
});

bot.action("jcw", ctx => {
  let msg = "https://2020.teamtanay.jobchallenge.dev/";
  sendMsg(ctx, msg);
});

bot.action("pri", ctx => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Programming related issues", {
    reply_markup: {
      inline_keyboard: [[{ text: "Yarn", callback_data: "yarn" }]]
    }
  });
});
bot.action("yarn", ctx => {
  let msg = `
    To those who are facing yarn problem & dont know how to install yarn & related stuff.
    
    If you are facing error on writing the command "yarn", then you might not have installed yarn or you might not be having an internet connection.
    
    To install yarn you can search on google "how to install yarn",
    
    I have done my PR with npm coz node was already installed in my system,
    
    So to install nodejs, just search "install Nodejs", now from the result you can download the nodejs file from its official website. & Install it in your system as you install any other software.
    
    After this, continue Tanay sir's tutorial video, & just replace the commands "yarn" & "yarn start" with "npm install" & "npm start".
    
    Which means, instead of writing 
    "yarn" you write "npm install", &
    Instead of writing "yarn start" you write "npm start"
    
    That's it, everything else is same. You dont need to do anything else.
    
    
    #yarnhelp #yarn #help #registration #ttjc #qnas 
    #teamtanayjobchallenge`;
  sendMsg(ctx, msg);
});

function sendMsg(ctx, message) {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, message, {
    reply_markup: {
      inline_keyboard: [[{ text: "back to menu", callback_data: "menu" }]]
    }
  });
}

let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15;
[q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15] = [
  `Q) is challenge open for everyone?\n
    Yes! This participation is open for everyone. It is also free. College freshers who are looking for a job, or working professionals with less than 2 years of work experience who are looking for a job change, anyone can participate. Students who are passing 12th grade and joining colleges can get remote work internship too. On top of that, the participants do not have to pay anything in order to participate in the challenge. You just need to put your honest effort.`,
  `Q) is the challenge live now?\n
    Yes!
    This challenge is officially live now. The sooner you start, the better your chances are to win and get an interview.
    The formal registrations will commence this weekend. Join the telegram group i.e. https://t.me/teamtanay for more details.`,
  `Q) is registration required?
    Yes, you need to register to participate. I’m creating a repo where you just need to send a PR saying you’re participating and that’s all. We’ll help you complete the challenge. However, you don’t need to wait to get started. Initialize your Github repository and start working. Only thing which you need to make sure is that the repo is initialized on or after 8th March, 2020 only. We’ll share the details of registration soon. Join the telegram group https://t.me/teamtanay (or search for #teamtanay in telegram) for future updates. What are the prerequisites to participate in this challenge?
    
    Just to register, you need two skills. Click on links to checkout basic tutorials.
    
    Git/GitHub - https://www.youtube.com/watch?v=jUxy4WNdc0s&t=3244s
    Markdown - https://guides.github.com/features/mastering-markdown/
    Basic proficiency in these is needed. Formal registrations will start this weekend i.e. 15th March mostly. Before that, it’s good to know these two things.`,
  `Q) is there a deadline to complete all these tasks?
    Yes!
    
    The deadline is 30th June to complete the challenge.
    
    The winners and top participants for this challenge will be chosen after the deadline is over.`,
  `Q)what type of projects are acceptable for this challenge?
    Build an industry level project. Intermediate to advance level. You don’t want to build a calculator or a tic-tac-toe game. Our hiring partners expect some good projects so that it’s easier for them to judge our participants’ skillset better.
    
    Can you build something like
    
    facebook, i.e. a social media tool
    slack, i.e. a realtime communication tool
    flipkart, i.e. an e-commerce tool
    evernote, i.e. a powerful note taking tool
    blogger? i.e. a content management system
    Take anything big and build your version. Build a Tinder for books, and name it Binder :P. Build Facebook for non profits and volunteers. Build instagram for quotes only. Or build any intermediate or advance level project that your course teaches you.
    
    You can go to producthunt and look for more inspiration/ideas. Checkout other answers about project ideas. We have also published a blog on 50 project ideas. Check that out.`,
  `Q)can I submit old projects?
    Short answer: No! Long answer: No, it won’t be considered for the top 5 prizes. Winners for this challenge have to make 5 new projects, 3 new blogs and get 2 reviews in this challenge period only.
    
    However, we have hiring partners who might be going through all the challengers’ profile. So, do showcase your previous projects on your portfolio to increase your chances of getting an interview.
    
    I would advise that if you have previous projects to showcase and you can’t actively participate in the challenge, you still register to get eyeballs of our hiring partners. You never know who invites you for an interview. Participation is the key!`,
  `Q)how do I get reviews/recommendations?
    LinkedIn is a good place to start. It’ll help you in building a network. But even if they write and send it to you on Github, or anywhere public, it would be considered. Your Github projects can have a place for raising PRs/Issues as recommendations or review. Point is it should be in public
    
    What if I couldn’t find anyone around for review/recommendation? Am I going to be eligible?
    
    See we already have 20+ mentors. Once I start publicizing we’ll get more. You will have enough people to review. Don’t worry. Worst case, you’ll have to ask the other participants or in social media. I would say focus on completing the 5 plus 3 first, then worry about the 2. By the time you reach to the 2, you’ll have enough reach and someone will definitely review or recommend you. Keep sharing your progress on social media. So, if you complete 5 plus 3, I’ll guide you to get the rest 2.`,
  `Q)how do I start blogging?
    It’s a good idea to get your own blog on your own domain. And then cross post on all other platforms. But it’s too much of a hassle if you’re a beginner.
    
    There are various platforms to get started with blogging like. My preference would be in this order:
    
    dev.to - https://dev.to/,
    linkedIn - https://www.linkedin.com/,
    hashnode - https://hashnode.com/,
    or medium - https://medium.com/, .
    So what you can do instead is: post it on any of the platforms mentioned above, wait for 2-4 days, and then cross post it on other platforms as well. Use your social media handles to publicize it. Check this article - https://www.semrush.com/blog/cross-posting-on-social-media-should-you-do-it/ on cross posting if you’re serious about blogging. For this competition however, you don’t need to do so much. Just get few blogs published.`,
  `Q)what should I blog about?
    In the course of this challenge you will learn a lot more things than you already know. You will do new courses, you will learn new tech, make projects and deal with errors. You can write about all of this. Write about your journey. Some examples:
    
    When you complete a course. Write review of the course. What worked, what didn’t work? What was not covered.
    When you are stuck with an error for hours and then finally you solve it then write about your debugging journey. Debugging blogs are quite interesting to read.
    You learnt a new tech? Write a basic tutorial blog. Or write a review blog. Like how easy/difficult you felt React Native is coming from React.
    Write about your project. Why did you decide to make this? What user problems are you trying to solve with this?
    You now know 4 things in backend. Write a blog contrasting those: AWS Amplify vs. Express + Mongo vs. Apollo GraphQL vs. Firebase.
    Hosting your own APIs. What are the common errors or mistakes which newbies make when trying to put something online? How did you solve them?
    Blog ideas are everywhere. Pause for sometime and look for them. If you want more ideas, read blogs on dev.to or hashnode and see if you can write something similar based on your experience.
    `,
  `Q)how to get more visibility in community?
    Note: This is advisable. Please do this so that you open more doors for you.
    
    Few ways to do it.
    
    If you’re a beginner, start with posting about your journey and how it all started.
    Then start sharing every small thing you learned about anything. Use more famous social media sites like Twitter, Instagram, Linkedin and Facebook. Share it among your peers. Eventually, you’ll get better at it.
    Let me give you a few examples. Say you completed the UI of your app, take screenshots of it and post it. Completed a course? Post it. Completed back-end? Post it.
    Say you did a course on Firebase, you can write a post saying, “Wow! Finally completed the firebase course, the docs are pretty basic, to be an expert one must try hands on with the library”. Here, you shared your journey and your learning.
    Basically, celebrate your small wins. Share what you learned, and what obstacles you faced while completing the challenge. Posts like these will get re-shared and you’ll get extra visibility. If you consistently write good posts, you’ll earn extra marks.`,
  `Q) is this limited to React/JS only projects?
    Challenge is open but not limited to any stack. However, my suggestion would be to go with React and React Native. Getting a job is much easier with React stack.
    
    With React/React Native, you’re more likely to get the interviews as my network has more React/React Native/Node.js openings. So there’s a high chance to get a job interview/offer when you get a shout-out from my network handles and when the hiring partners want to interview you.
    
    This also could be a great opportunity for you to learn a new framework/library. Although, you can choose the framework/library/stack of your choice. The only difference is that you might not get as many interview offers, since the demand from me is not that great. So, choose wisely.
    
    `,
  `Q)how to get started as a beginner?
    If you’re an absolute beginner, you have a long way to go. Start with my youtube channel and make first 3 apps:
    
    Portfolio-https://www.youtube.com/playlist?list=PLzvhQUIpvvug-c-bExl_xFcopeQi_sa29 teaches you basic HTML/CSS, Git and Hosting
    Expense calculator-https://www.youtube.com/playlist?list=PLzvhQUIpvvuj9nN70USkHJrrSeQ9aiqdB starts up with basic JavaScript
    Diet calculator-https://www.youtube.com/playlist?list=PLzvhQUIpvvuhRWpaMj-2iHjkL1kUBK7yW introduces you very slowly to React.
    Then, go through advance courses at other places. You can find a curated list of these courses in my social media profiles and in this website itself. You need to make 3 more projects after it. I’ll give ideas for that too.
    
    Document your journey alongside. This will help you build a network as well as grasp new things quickly.
    
    But again, if you’re an absolute beginner, get started with the basics now. Read MDN docs and practice everyday. Get help from our community whenever you’re stuck, we’re always happy to help. Indeed, you’ll have to work harder than other participants, but the growth and comfort do not co-exist.
    
    There are same rules for everyone irrespective of your age or year of college. It’s not like college has taught anyone anything here. So first year or last year or a passout, there’s literally no difference. Start now, start with doubt, just start. Make it happen, shock everyone.`,
  `Q)should all projects be fullstack?
    No! Anyone can participate and build projects with whatever tech stack they feel comfortable with. Participation is open to all stacks and all languages. If there are more projects on Python or ML, I’ll get mentors to review them as well. And winning doesn’t depend on stack either.
    
    Code in any language/stack of your choice.
    
    But make sure that all the projects are functional and useful. Even if you are only familiar with a particular stack (front-end or back-end), you can build half stack projects.
    
    What are half stack projects? Let me give you an example. An API you made which gives random quotes. Good. But did you document it? Did you make a documentation site for it? Did you provide enough examples for end users to use it? Did you ask people in this group to build on that API using your docs? This makes a half stack project complete.
    
    Let me give you another example. Suppose you made a dashboard theme. Good. Great! But did you make it configurable? Do you have a plain HTML version and a React version? Again, did you document it well?
    
    Make a half stack project complete by documenting and asking other developers to build on it.`,
  `Q) what are some platforms where I can discuss and clear my doubts in future?
    If you need help join our Telegram group where folks can discuss and solve each other’s problems on a daily basis. We also share lots of resources that can help you in completing this journey. Please don’t forget to read the group rules and pinned posts/messages before discussing anything. And please don’t spam.
    
    We are coming with some more places where you can ask for help.
    
    I wish you all the best! Happy Coding!
    
    `,
  `Q) what if my question is not answered here?
    Please follow the steps if your question is not answered here:
    
    Check really well. If your question is a duplicate and is already answered it will be counted as a negative point.
    Go to the repository for this website - https://github.com/tanaypratap/teamtanay.jobchallenge.dev/issues. See all the issues. Do you see a question similar to yours? If yes, upvote it. Or comment for additional info. Again, do check before posting.
    If you don’t find any related issue/question then please create a fresh issue - https://github.com/tanaypratap/teamtanay.jobchallenge.dev/issues/new. Make sure that you make the question generic enough so that it can be used by other people.
    You can also join the telegram group https://t.me/teamtanay for discussions.
    Note Failure to check for duplicates mean that you don’t pay attention to details and instructions. I wouldn’t recommend a person like that to anyone personally. Understand that this is a massive free project. Intention to help will be appreciated. Entitlement would not be tolerated.`
];

bot.action("q1", ctx => {
  sendQMessage(ctx, q1);
});

bot.action("q2", ctx => {
  sendQMessage(ctx, q2);
});
bot.action("q3", ctx => {
  sendQMessage(ctx, q3);
});
bot.action("q4", ctx => {
  sendQMessage(ctx, q4);
});
bot.action("q5", ctx => {
  sendQMessage(ctx, q5);
});
bot.action("q6", ctx => {
  sendQMessage(ctx, q6);
});
bot.action("q7", ctx => {
  sendQMessage(ctx, q7);
});
bot.action("q8", ctx => {
  sendQMessage(ctx, q8);
});
bot.action("q9", ctx => {
  sendQMessage(ctx, q9);
});
bot.action("q10", ctx => {
  sendQMessage(ctx, q10);
});
bot.action("q11", ctx => {
  sendQMessage(ctx, q11);
});
bot.action("q12", ctx => {
  sendQMessage(ctx, q12);
});
bot.action("q13", ctx => {
  sendQMessage(ctx, q13);
});
bot.action("q14", ctx => {
  sendQMessage(ctx, q14);
});
bot.action("q15", ctx => {
  sendQMessage(ctx, q15);
});

function sendQMessage(ctx, message) {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, message, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "back to faq", callback_data: "faq" }],
        [{ text: "back to menu", callback_data: "menu" }]
      ]
    }
  });
}
bot.launch();
