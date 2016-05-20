/*-----------------------------------------------------------------------------
Lab 2 Add instructions to build the Node.js App

# RUN THE BOT:

    Run the bot from the command line using "node app.js" and then type 
    "hello" to wake the bot up.

-----------------------------------------------------------------------------*/
var builder = require('botbuilder');

var helloBot = new builder.TextBot();
helloBot.add('/', function (session) {
    if (!session.userData.name) {
        session.beginDialog('/profile');
    } else {
        session.send('Hello %s!', session.userData.name);
    }
});
helloBot.add('/profile', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.userData.name = results.response;
        session.endDialog();
    }
]);

helloBot.listenStdin();