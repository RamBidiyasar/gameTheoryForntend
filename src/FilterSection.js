import React, { useState } from 'react';

function FilterSection({ handleCalculate }) {
    const [selectedChampagneId, setSelectedChampagneId] = useState('123');
    const [selectedChannels, setSelectedChannels] = useState(['whatsapp', 'sms']);

    const handleChampagneIdChange = (e) => {
        setSelectedChampagneId(e.target.value);
    };

    const handleChannelChange = (e, channel) => {
        if (e.target.checked) {
            setSelectedChannels((prevSelectedChannels) => [...prevSelectedChannels, channel]);
        } else {
            setSelectedChannels((prevSelectedChannels) => prevSelectedChannels.filter((c) => c !== channel));
        }
    };

    return (
        <div className={'filters-container'}>
            <label htmlFor="champagneId">Select Campaign ID:</label>
            <select id="champagneId" value={selectedChampagneId} onChange={handleChampagneIdChange}>
                <option value="123">123</option>
                <option value="1234">1234</option>
            </select>
            <br/>
            <label>Choose Channels:</label>
            <div>
                <input
                    type="checkbox"
                    id="whatsapp"
                    value="whatsapp"
                    checked={selectedChannels.includes('whatsapp')}
                    onChange={(e) => handleChannelChange(e, 'whatsapp')}
                />
                <label htmlFor="whatsapp">Whatsapp</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="sms"
                    value="sms"
                    checked={selectedChannels.includes('sms')}
                    onChange={(e) => handleChannelChange(e, 'sms')}
                />
                <label htmlFor="sms">SMS</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="email"
                    value="email"
                    checked={selectedChannels.includes('email')}
                    onChange={(e) => handleChannelChange(e, 'email')}
                />
                <label htmlFor="email">Email</label>
            </div>
            <button onClick={() => handleCalculate(selectedChampagneId, selectedChannels)}>Calculate</button>
        </div>
    );
}

export default FilterSection;
