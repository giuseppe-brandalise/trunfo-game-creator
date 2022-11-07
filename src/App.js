import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    // hasTrunfo,
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
        // hasTrunfo,
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
    const obj = {
      Nome: cardName,
      Descrição: cardDescription,
      Atributo1: cardAttr1,
      Atributo2: cardAttr2,
      Atributo3: cardAttr3,
      Imagem: cardImage,
      Raridade: cardRare,
      Trunfo: cardTrunfo,
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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <form>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            // hasTrunfo,
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
          />
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
        </form>
      </div>
    );
  }
}

export default App;
