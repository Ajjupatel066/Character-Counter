import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CountCharacterContainer = styled.div`
  border-radius: 20px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
`
export const CountContainer = styled.div`
  background-color: #ffc533;
  padding: 20px;
  width: 50%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
export const CharacterInputContainer = styled.div`
  background-color: #0f172a;
  padding: 20px 30px;
  width: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`
export const Banner = styled.div`
  background-color: #ffbf1f;
  width: 100%;
  padding: 30px;
`

export const BannerTitle = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
`

export const InputTitle = styled.h1`
  color: #ffc533;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`
export const InputButtonContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`
export const InputElement = styled.input`
  border-radius: 10px;
  height: 40px;
  width: 80%;
  background-color: #ffffff;
  padding: 0px;
  margin: 0px;
  border: 0px;
  outline: none;
  font-family: 'Roboto';
  color: #272c47;
  font-weight: 500;
  padding: 4px 10px;
`
export const AddButton = styled.button`
  background-color: #ffc533;
  height: 40px;
  width: 20%;
  margin-left: 10px;
  border-radius: 10px;
  border: 0px;
  color: #0f172a;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`
export const ImageElement = styled.img`
  width: 100%;
  height: 60%;
  margin-top: 40px;
`
export const CharactersItems = styled.ul`
  list-style-type: none;
`
