import styled from '@emotion/styled';
import { useState } from 'react';

import SettingsHeader from '../components/SettingsFile/SettingsHeader';
import ProgressBar from '../components/reusable/ProgressBar';
import SettingsListNames from '../components/SettingsFile/SettingsListNames';
import SettingForms from '../components/SettingsFile/SettingForms';

export default function Settings() {
    const [settingValues, setSettingValues] = useState({
        Basic: {name: 'Basic Settings', val: []},
        Hero: {name: 'Hero Image', val: []}
    });
    const names = Object.keys(settingValues);
    const [toggle, setToggle] = useState('Basic');

    function getModifySectionValueFor(sectionName) {
        return function modifySectionValue(newValue) {
            const newSettingValues = { ...settingValues };

            newSettingValues[sectionName].val = newValue;
            setSettingValues(newSettingValues);
        }
    };

    return (
        <SettingsContainer>
            <SettingsHeader/>
            <ProgressBar name='Settings'/>
            <SettingsBoxes>
                <SettingsListNames settingValues={settingValues} toggleFunction={setToggle} SettingName={names}/>
                <SettingForms 
                    settingValues={settingValues}
                    toggle={toggle}
                    modifyValue={getModifySectionValueFor(toggle)}
                />
            </SettingsBoxes>
        </SettingsContainer>
    )
}

const SettingsContainer = styled.div`
    background-color: #F1F4F8;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1400px;
    height: 100vh;
    overflow: auto;
`
const SettingsBoxes = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 46px);
    margin-top: 34px;
    gap: 23px;
    padding-bottom: 24px;
`