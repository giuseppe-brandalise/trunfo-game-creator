import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="card-name">
          Nome da Carta:
          <input
            type="text"
            name="card-name"
            id="card-name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="card-description">
          Descrição da carta:
          <textarea
            name="card-description"
            id="card-description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1:
          <input
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="card-image">
          Imagem:
          <input
            type="text"
            name="card-image"
            id="card-image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="card-rarity">
          Raridade:
          <select name="card-rarity" id="card-rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="is-trunfo">
          <input
            type="checkbox"
            name="is-trunfo"
            id="is-trunfo"
            data-testid="trunfo-input"
          />
          Essa carta é trunfo
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}
