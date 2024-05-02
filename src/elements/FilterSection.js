import React, {useState} from 'react';

function FilterSection({handleCalculate}) {
    const [selectedCampaignId, setSelectedCampaignId] = useState('123');
    const [selectedChannels, setSelectedChannels] = useState(['whatsapp', 'sms']);

    const handleCampaignIdChange = (e) => {
        setSelectedCampaignId(e.target.value);
    };

    const handleChannelChange = (e, channel) => {
        if (e.target.checked) {
            setSelectedChannels((prevSelectedChannels) => [...prevSelectedChannels, channel]);
        } else {
            setSelectedChannels((prevSelectedChannels) => prevSelectedChannels.filter((c) => c !== channel));
        }
    };

    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className={'filters-container'}>
                    <h2>Conversion ratio</h2>
                    <p className="info-text"> The conversion ratio is a measure of how effectively different
                        combinations of channels contribute to sales conversions. For example, if your company converted
                        100 opportunities using SMS, Gmail, and WhatsApp, you'd analyze the conversion ratio of each
                        channel coalition. This ratio represents the conversions achieved divided by the total
                        opportunities. By understanding these ratios, you can determine which channels or combinations
                        are most effective in driving conversions and allocate resources accordingly. </p>
                    <h2 className="worth-heading">Here, you can find the worth of different channels for different
                        campaigns:</h2>
                    <br/>
                    <label className="campaign-label" htmlFor="champagneId">Campaign ID:</label>
                    <select id="champagneId" value={selectedCampaignId} onChange={handleCampaignIdChange}>
                        <option value="123">123</option>
                        <option value="1234">1234</option>
                    </select>
                    <br/>
                    <br/>
                    <label className="campaign-label">Choose Channels:</label>
                    <div className="inner-container">
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
                    </div>
                    <br/>
                    <br/>

                    <div className="container">
                        <button className="file-label"
                                style={{ fontSize: '30px', padding: '10px 20px' , margin  :'0px 200px' }}
                                onClick={() => handleCalculate(selectedCampaignId, selectedChannels)}>Calculate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSection;
