import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function list_of_virtues(props) {
  const vals = [
    props.Assertiveness,
    props.Captiousness,
    props.Blunt,
    props.SocialConfidence,
    props.Forgiveness,
    props.Stubbornness,
    props.Narcissism,
    props.Deviousness,
    props.Consideration,
    props.Empathy,
    props.Introversion,
    props.SocialDominance,
    props.PeopleVsThings,
    props.DisciplinedIsolation,
    props.Affable,
    props.Sociability,
    props.SocialDependence,
    props.IndependentMinded,
    props.Affable,
    props.Aggression,
    props.SensationSeeking,
    props.StressResilience,
    props.Antagonism,
    props.Vigilance,
    props.Optimism,
    props.Surgency,
    props.Vigor,
    props.Frivolous,
    props.Dysthymia,
    props.EmotionalReactivity,
    props.Negativity,
    props.Callousness,
    props.Psychopathy,
    props.counter,
    props.ConflictedRelationships
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

class VirtueList extends Component {

  constructor() {
    super();

    const vCounter = 10;
    // connect to mongo and query
    var MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb+srv://zulfahmed:snaggle41014@cluster0-3cmqe.mongodb.net/prod?w=1';

    MongoClient.connect(uri, function (err, db) {
      console.log('started')
      if (err) throw err;
      var query = { counter: vCounter };
      db.collection("uniqueness").find(query).toArray(
        function (err, item) {
          if (err) throw err;
          console.log(item);
          for (var k in item) {
            this.props[k] = item[k];
          }
          db.close();
        });
    });
  }
  render() {
    var vals = list_of_virtues(this.props)
    const listItems = vals.map((number) =>
      <li>{number}</li>)
    return (
      <div>
        "In the darkest night of your life, these are the virtues that will assist you."
        < ul > {listItems}</ul >
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
