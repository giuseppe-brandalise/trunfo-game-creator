import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  onInputChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const maxAttr = 90;
      const maxAll = 210;
      const allAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const newButtonState = cardName.length < 1
        || cardDescription === ''
        || cardAttr1 === '0'
        || cardAttr2 === '0'
        || cardAttr3 === '0'
        || cardImage === ''
        || cardRare === ''
        || Number(cardAttr1) < 0
        || Number(cardAttr2) < 0
        || Number(cardAttr3) < 0
        || Number(cardAttr1) > maxAttr
        || Number(cardAttr2) > maxAttr
        || Number(cardAttr3) > maxAttr
        || allAttr > maxAll;
      this.setState({
        isSaveButtonDisabled: newButtonState,
      });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo === 'on') {
      this.setState({
        hasTrunfo: true,
      });
    }

    const obj = {
      nome: cardName,
      descricao: cardDescription,
      atributo1: cardAttr1,
      atributo2: cardAttr2,
      atributo3: cardAttr3,
      imagem: cardImage,
      raridade: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((oldState) => ({
      cards: [...oldState.cards, obj],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <form>
          <div className="form">
            <div>
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onSaveButtonClick={ this.onSaveButtonClick }
                onInputChange={ this.onInputChange }
              />
            </div>
            <div className="card">
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </div>
          </div>
          <section>
            { cards.map((card) => (<Card
              key={ card.nome }
              cardName={ card.nome }
              cardDescription={ card.descricao }
              cardAttr1={ card.atributo1 }
              cardAttr2={ card.atributo2 }
              cardAttr3={ card.atributo3 }
              cardImage={ card.imagem }
              cardRare={ card.raridade }
              cardTrunfo={ card.trunfo }
            />)) }
          </section>
        </form>
      </div>
    );
  }
}

export default App;
