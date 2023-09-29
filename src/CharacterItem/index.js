import {Character} from './styledComponents'

const CharacterItem = props => {
  const {charDetails} = props
  const {displayText} = charDetails
  return (
    <li>
      <Character>{`${displayText}: ${displayText.length}`}</Character>
    </li>
  )
}

export default CharacterItem
