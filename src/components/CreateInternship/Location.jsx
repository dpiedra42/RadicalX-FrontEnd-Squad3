import styled from "@emotion/styled";
import { useState } from "react";

import ArrowDown from '../../assets/arrow-down.png';
import LocationIcon from '../../assets/location.png';

export default function Location({ modifySectionValue, value}) {
    const [locationName, setLocationName] = useState('')

    return (
        <LocationContainer>
            <SectionTitle>Location</SectionTitle>
            <form>
                <div>
                    <img src={LocationIcon} alt='Location Pin Icon'/>
                    <input
                        type="text" 
                        name="locationCategory" 
                        value={ locationName }
                        placeholder='Select Location' 
                        onChange={(e) => setLocationName(e.target.value)}
                        required
                    />
                </div>
                <img src={ArrowDown} alt='Down Arrow Icon'/>
            </form>
        </LocationContainer>
    )
}

const LocationContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;

    form {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        div {
            display: flex;
            align-items: center;
            width: 100%;

            img {
                position: absolute;
                width: 20px;
                height: 20px;
                padding-left: 16px;
                cursor: default;
            }
        }

        img {
            position: absolute;
            width: 20px;
            height: 20px;
            padding-right: 14px;
            cursor: pointer;
        }

    }

    input {
        background-color: #F1F4F8;
        font-family: 'Space Grotesk';
        font-size: 16px;
        border: 1px solid #CECECE;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        padding-left: 44px;
    }
`
const SectionTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    color: #333333;
`