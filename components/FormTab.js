import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const TemplateComponent = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (index) => {
        setTabIndex(index);
    };

    const handleNext = () => {
        if (tabIndex === 0) {
            setTabIndex(1);
        }
    };

    const handleBack = () => {
        if (tabIndex === 1) {
            setTabIndex(0);
        }
    };

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        display: 'flex',
                        borderRadius: '5px',
                        marginBottom: '10px',
                    }}
                >
                    <div
                        style={{
                            padding: '10px 20px',
                            color: 'white',
                            cursor: 'pointer',
                            borderBottom: tabIndex === 0 ? '2px solid white' : 'none',
                        }}
                        onClick={() => handleChange(0)}
                    >
                        Part 1
                    </div>
                    <div
                        style={{
                            padding: '10px 20px',
                            color: 'white',
                            cursor: 'pointer',
                            borderBottom: tabIndex === 1 ? '2px solid white' : 'none',
                        }}
                        onClick={() => handleChange(1)}
                    >
                        Part 2
                    </div>
                </div>
            </div>

            <SwipeableViews index={tabIndex} onChangeIndex={handleChange}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: '20px' }}>
                        <h2>Part 1</h2>
                        <div>
                            {/* This is where FormPart1 component will be placed */}
                            {/* Either use component or paste the whole parent div */}

                        </div>
                    </div>
                    <button onClick={handleNext} style={{ marginTop: '10px' }}>
                        Next
                    </button>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: '20px' }}>
                        <h2>Part 2</h2>
                        <div>
                            {/* This is where FormPart1 component will be placed */}
                            {/* Either use component or paste the whole parent div */}
                        </div>
                        <button onClick={handleBack} style={{ marginRight: '10px' }}>
                            Back
                        </button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </SwipeableViews>
        </div>
    );
};

export default TemplateComponent;
