import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import './App.css';
import arbre2 from './assets/img/arbre2.png'

function App() {
  return (
    <Container>
      <div className="appP2P">
        <div>
          <h1>PLAY 2 PLANT</h1>
          <h2>The Leaf project</h2>
          <p>
          Play 2 Plant est un jeu mobile créé pour contribuer à la reforestation en incitant ses joueurs à faire de l’activité physique. 
Notre jeu permet à l’utilisateur de gagner de la crypto-monnaie $LEAF et de planter des arbres lorsqu’il marche. Pour jouer, vous devez posséder un des 10.000 NFT.
          </p>
</div>
        <div><img src={arbre2} /></div>
      </div>
    </Container>
  );
}

export default App;
