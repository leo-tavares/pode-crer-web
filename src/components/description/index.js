import React from 'react'
import { DescriptionSection } from './style'

const Description = ({children}) => {
    return (
        <DescriptionSection id="description">
            <p>{children}</p>
        </DescriptionSection>
    )
}

export default Description;
