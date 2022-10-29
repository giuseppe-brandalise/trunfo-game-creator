import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo,
    isSaveButtonDisabled: true,
  };

  onInputChange = (event) => {
    const { target } = event;
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
    this.setState({ [target.name]: target.value }, () => {
      const newButtonState = cardName.lenght < 1
        || cardDescription.length < 1
        || cardAttr1.lenght < 1
        || cardAttr2.lenght < 1
        || cardAttr3.lenght < 1
        || cardImage.lenght < 1
        || cardRare.lenght < 1;
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
    console.log(obj);
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
