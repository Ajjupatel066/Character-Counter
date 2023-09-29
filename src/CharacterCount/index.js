import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterItem from '../CharacterItem'
import {
  MainContainer,
  CountCharacterContainer,
  CountContainer,
  CharacterInputContainer,
  Banner,
  BannerTitle,
  InputTitle,
  InputButtonContainer,
  InputElement,
  AddButton,
  ImageElement,
  CharactersItems,
} from './styledComponents'

class CharacterCount extends Component {
  state = {
    inputValue: '',
    charactersList: [],
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  addButton = event => {
    event.preventDefault()
    const {inputValue} = this.state

    const charItem = {
      id: uuidv4(),
      displayText: inputValue,
    }

    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, charItem],
      inputValue: '',
    }))
  }

  renderNoInputChar = () => (
    <ImageElement
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  render() {
    const {inputValue, charactersList} = this.state

    return (
      <MainContainer>
        <CountCharacterContainer>
          <CountContainer>
            <Banner>
              <BannerTitle>Count the characters like a Boss</BannerTitle>
            </Banner>
            {charactersList.length === 0 ? (
              this.renderNoInputChar()
            ) : (
              <CharactersItems>
                {charactersList.map(eachChar => (
                  <CharacterItem key={eachChar.id} charDetails={eachChar} />
                ))}
              </CharactersItems>
            )}
          </CountContainer>
          <CharacterInputContainer>
            <InputTitle>Character Counter</InputTitle>
            <InputButtonContainer onSubmit={this.addButton}>
              <InputElement
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={inputValue}
                id="word"
              />
              <AddButton type="submit" onClick={this.addText}>
                Add
              </AddButton>
            </InputButtonContainer>
          </CharacterInputContainer>
        </CountCharacterContainer>
      </MainContainer>
    )
  }
}

export default CharacterCount
