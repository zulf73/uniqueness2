import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function list_of_virtues(x) {
  var vals = [
    x["Assertiveness"],
    x["Captiousness"],
    x["Blunt"],
    x["SocialConfidence"],
    x["Forgiveness"],
    x["Stubbornness"],
    x["Narcissism"],
    x["Deviousness"],
    x["Consideration"],
    x["Empathy"],
    x["Introversion"],
    x["SocialDominance"],
    x["PeopleVsThings"],
    x["DisciplinedIsolation"],
    x["Affable"],
    x["Sociability"],
    x["SocialDependence"],
    x["IndependentMinded"],
    x["Affable"],
    x["Aggression"],
    x["SensationSeeking"],
    x["StressResilience"],
    x["Antagonism"],
    x["Vigilance"],
    x["Optimism"],
    x["Surgency"],
    x["Vigor"],
    x["Frivolous"],
    x["Dysthymia"],
    x["EmotionalReactivity"],
    x["Negativity"],
    x["Callousness"],
    x["Psychopathy"],
    x["counter"],
    x["ConflictedRelationships"]
  ]


  const tnames = [
    "Assertiveness",
    "Captiousness",
    "Blunt",
    "SocialConfidence",
    "Forgiveness",
    "Stubbornness",
    "Narcissism",
    "Deviousness",
    "Consideration",
    "Empathy",
    "Introversion",
    "SocialDominance",
    "PeopleVsThings",
    "DisciplinedIsolation",
    "Autonomy",
    "Affable",
    "Sociability",
    "SocialDependence",
    "IndependentMinded",
    "Aggression",
    "SensationSeeking",
    "StressResilience",
    "Antagonism",
    "Vigilance",
    "Optimism",
    "Surgency",
    "Vigor",
    "Frivolous",
    "Dysthymia",
    "EmotionalReactivity",
    "Negativity",
    "Callousness",
    "Psychopathy",
    "ConflictedRelationships",
    "NervousAnxiety",
    "Inferiority",
    "Planfulness",
    "PracticalVsImaginative",
    "Impulse Control",
    "Caution",
    "Orderliness",
    "Detail Conscious",
    "Discipline",
    "Spontaneity",
    "Competence",
    "Unconventionality",
    "Traditionalism",
    "Intolerance",
    "Liberalism",
    "Punitiveness",
    "Simplicity",
    "Dishonest-Opportunism",
    "Novelty Seeking",
    "Resilience",
    "Endurance",
    "AchievementStriving",
    "Sensitivity",
    "ToleranceForAmbiguity",
    "Prejudice",
    "Abstractness",
    "Curiosity",
    "AestheticInterests",
    "CognitiveInterests",
    "Creativity",
    "Absorption",
    "Fantasy",
    "Perserverance",
    "Anxiety",
    "Worry",
    "Depression",
    "Rumination",
    "Anger",
    "Embarrassment"
  ]

  var chosen_list = []

  const thresh = 0.5;
  var i;
  for (i = 0; i < tnames.length; i++) {
    if (vals[i] > thresh) {
      chosen_list.push(tnames[i])
    }
  }
  return (chosen_list)
}


function getMongoQuery2(vCounter) {
  // connect to mongo and query
  var MongoClient = require('mongodb').MongoClient;
  var ans;
  const uri = 'mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net/?retryWrites=true&w=majority';
  //const uri = 'mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net';
  var assert = require('assert')
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {

    console.log(err);

    var db = client.db('prod');
    /*
    db.collection("uniqueness").count(function (err, count) {
        console.log(err)
        console.log(count);
        db.close();
    });
    */

    db.collection("uniqueness").find({ counter: [vCounter] }).toArray(
      function (err, item) {
        console.log(item);
        ans = item
        client.close();
      });
  });
  return (ans);
}


function find_uniqueness_doc_old(ncounter) {
  const http = require('http');
  const port = 8007;
  const query_server = 'http://localhost:' + port + '/?counter=' + ncounter;
  var ans = null;
  http.get(query_server, (resp) => {
    let data = '';

    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      ans = data;
      console.log(ans);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  console.log('once again the value is');
  console.log(ans);
  return (ans);
}


function find_uniqueness_doc(ncounter) {
  const port = 8007;
  const query_server = 'http://localhost:' + port + '/?counter=' + ncounter;
  const axios = require('axios');
  var ans = new Promise((resolve, reject) => {

    axios.get(query_server)
      .then((r) => {
        ans = r.data;
        resolve(ans);
      });
  });
  return (ans);
}

class VirtueList extends Component {

  constructor() {
    super();
  }

  render() {

    const vCounter = 457;
    var x = find_uniqueness_doc(vCounter);
    var dJSON = require('dirty-json');
    var y = {};
    x.then( (d) => { 
      var y = dJSON.parse(d);
      console.log('--- just before print --');
      var vals = list_of_virtues(y);
      var valkeys = Object.keys(vals);
    //console.log(vals);

      const listItems = valskeys.map((number) =>
        <li>{number}</li>);
    });
    
    return (
      <div>
        "In the darkest night of your life, these are the virtues that will assist you."
        
        
        <p>{listItems}</p>
      </div >
    )
  }
}

class IndividualMyth extends Component {

  render() {
    return (
      <div>
        <p> Character is this moral order seen through
        the medium of an individual nature. An individual is an encloser. Time and space, liberty and necessity, truth and thought, are left at large no longer. Now, the universe is a close or pound. All things exist in the man tinged with the manners of his soul. With what quality is in him, he infuses all nature that he can reach; nor does he tend to lose himself
        in vastness, but, at how long a curve soever, all his regards return into his own good at last. He animates all he can, and he sees only what he animates. He encloses the world, as the patriot does his country, as a material basis for his character, and a theatre for action. A healthy soul stands united with the Just and the True, as the
        magnet arranges itself with the pole, so that he stands to all beholders like a transparent object betwixt them and the sun, and whoso journeys towards the sun, journeys towards that person. He is thus the medium of the highest influence to all who are not on the same level. Thus, men of character are the conscience of the society to which they belong.
      </p>
      </div>
    )
  }

}


class Uniqueness extends Component {


  render() {
    return (
      <div>
        "You are unique among the billions of people of the world because you along among all have this combination of traits."
      </div>
    )
  }

}

function App() {
  return (
    <div>
      <VirtueList />
      <IndividualMyth />
      <Uniqueness />
    </div>
  );
}

export default App;
