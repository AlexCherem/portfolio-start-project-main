import styled from "styled-components";
import {font} from "../styles/Common";

type Styled = {
    fontSize?: string
    textAling?: string
    marginBot?: string
}
export const SectionTitle = styled.h2<Styled>`
  font-size: ${props => props.fontSize};  
  text-align: ${props=> props.textAling};  
  text-align: ${props=> props.textAling};
  margin-bottom: ${props =>props.marginBot};

  ${font({weight: 700, Fmax: 42, Fmin: 36})}
`