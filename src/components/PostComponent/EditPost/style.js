import styled from "styled-components"

const EditButton = styled.button`
	all: unset;
	cursor: pointer;
`
const EditInput = styled.textarea`
	all: unset;
	width: 503px;
	border-radius: 7px;
	background-color: ${props => props.isDisabled ? '#ccc' : '#fff'};
	color: #4C4C4C;
	font-family: Lato;
	font-weight: 400;
	font-size: 14px;
`

export {
	EditButton,
	EditInput
}