import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const ocean = [3, 3, 2, 2, 3];

class VirtueList extends Component {


  render() {
    return (
      <div>
        "In the darkest night of your life, these are the virtues that will assist you."
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
