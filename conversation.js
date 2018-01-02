
//__author__ = "Ahirton Lopes"
//__copyright__ = "Copyright 2017, FCamara/Duratex"
//__credits__ = ["Ahirton Lopes"]
//__license__ = "None"
//__version__ = "1.0"
//__maintainer__ = "Ahirton Lopes"
//__email__ = "ahirtonlopes@gmail.com"
//__status__ = "Beta"

//Conector Watson Conversation - Orquestrador

const watson = require('watson-developer-cloud');
const config = require('./config')
const prompt = require('prompt');

const conversation = watson.conversation({
  username: config.ConUsername,
  password: config.ConPassword,
  version: 'v1',
  version_date: '2016-07-11'
});

prompt.start();

let converse = () => 
  prompt.get('input', (err, result) => {

    conversation.message({
      workspace_id: config.ConWorkspace,
      input: {'text': result.input},
    }, (err, response) => {
      watson_response =  response.output.text[0];
      console.log('MIA fala:', watson_response);
    });

    converse();
  })

converse();