import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const { MongoClient } = require('mongodb');

class VirtueList extends Component {

  constructor() {
    // connect to mongo and query
    const uri = ""
    const client = new MongoClient(uri);

    try {
      await client.connect();
      var collection = client.prod.uniqueness;
      collection.findOne({ counter: vCounter },
        function (err, item) {
          this.props.profile = item
        }
      );

    });
  });
} catch (e) {
  console.error(e);
}

  }

list_of_virtues(){
  vals = [
    { props.profile.Assertiveness },
    { props.profile.Captiousness },
    { props.profile.Blunt },
    { props.profile.SocialConfidence },
    { props.profile.Forgiveness },
    { props.profile.Stubbornness },
    { props.profile.Narcissism },
    { props.profile.Deviousness },
    { props.profile.Consideration },
    { props.profile.Empathy },
    { props.profile.Introversion },
    { props.profile.SocialDominance },
    { props.profile.PeopleVsThings },
    { props.profile.DisciplinedIsolation },
    { props.profile.Affable },
    { props.profile.Sociability },
    { props.profile.SocialDependence },
    { props.profile.IndependentMinded },
    { props.profile.Aggression },
    { props.profile.SensationSeeking },
    { props.profile.StressResilience },
    { props.profile.Antagonism },
    { props.profile.Vigilance },
    { props.profile.Optimism },
    { props.profile.Surgency },
    { props.profile.Vigor },
    { props.profile.Frivolous },
    { props.profile.Dysthymia },
    { props.profile.EmotionalReactivity },
    { props.profile.Negativity },
    { props.profile.Callousness },
    { props.profile.Psychopathy },
    { props.vCounterprofile.ConflictedRelationships }
  ]


  const listItems = numbers.map((number) =>
    <li>{number}</li>


  tnames = [
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

  var i;
  for (i = 0; i < tnames.length; i++) {
    if (vals[i] > thresh) {
      chosen_list.push(tnames[i])
    }
  }
  return (chosen)
}
render() {
  vals = list_of_virtues()
  const listItems = vals.map((number) =>
    <li>{number}</li>
  return (
    <div>
      "In the darkest night of your life, these are the virtues that will assist you."
      <ul>{listitems}</ul>
    </div>
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
