import styled from "@emotion/styled";
import { useState } from "react";

export default function Description() {
    const [descriptionText, setDescriptionText] = useState('')
    const [descriptionArray, setDescriptionArray] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setDescriptionArray(oldArray => [...oldArray, descriptionText]);
        setDescriptionText('');
    }

    return (
        <DescriptionContainer>
            <p>Description</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text" 
                    name="Description" 
                    value={ descriptionText }
                    placeholder='Description' 
                    onChange={(e) => setDescriptionText(e.target.value)}
                    required
                />
            </form>
            <div>
                {descriptionArray}
            </div>
        </DescriptionContainer>
    )
}

const DescriptionContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;  
`