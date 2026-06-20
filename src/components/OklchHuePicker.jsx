import { useEffect, useState } from 'react';
import '../styling/oklch_selector_themer.css';

export const OklchHuePicker = props => {
    const { vertical, initialLightness = '0.6', initialChroma = '0.15' } = props;

    const MIN_SLIDER_VALUE = 1;
    const MAX_SLIDER_VALUE = 360;
    const STORED_THEME = JSON.parse(localStorage.getItem('theme')) || {};
    const STORED_HUE = STORED_THEME.hue ?? 260;
    const SLIDER_VALUE =
        Math.ceil(((STORED_HUE - MIN_SLIDER_VALUE) /
            (MAX_SLIDER_VALUE - MIN_SLIDER_VALUE)) * 100);

    const [hue, setHue] = useState(STORED_HUE);
    const [sliderBarValue, setSliderBarValue] = useState(SLIDER_VALUE);

    useEffect(() => {
        if (!localStorage.getItem('theme')) return;

        setHue(JSON.parse(localStorage.getItem('theme')).hue);
        setSliderBarValue(SLIDER_VALUE);
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--COLOUR_GRADE_HUE', `${hue}`);
        document.documentElement.style.setProperty('--value', sliderBarValue);

        setSliderBarValue(Math.ceil(((hue - MIN_SLIDER_VALUE) / (MAX_SLIDER_VALUE - MIN_SLIDER_VALUE)) * 100));

        localStorage.setItem('theme', JSON.stringify({ hue: Number(hue) }));
    }, [hue]);

    const handleHueChange = event => {
        const {
            target: { value, max, min },
        } = event;
        setHue(Number(value));
        setSliderBarValue(((value - min) / (max - min)) * 100);

        localStorage.setItem('theme', JSON.stringify({ hue: Number(value) }));
    };

    const oklchString = `oklch(${initialLightness} ${initialChroma} ${hue})`;

    const changeSliderPosition = event => {
        const { className } = event.target;
        const buttonClicked = className.substring(className.indexOf('_') + 1);

        if ( hue >= 355 && buttonClicked === 'up' ) {
            setHue(360);
            return;
        } else if ( hue <= 5 && buttonClicked === 'down' ) {
            setHue(1);
            return;
        }

        buttonClicked === 'up' ? setHue(prev => prev + 5) : setHue(prev => prev - 5);
    };

    return (
        <div className='OklchSelector-Container'>
            {/* <div
                className="OklchSelector-SliderColourDisplay"
                style={{backgroundColor: oklchString }}
            /> */}

            <div className={`OklchSelector-TrackContainer ${vertical ? 'OklchSelector-TrackContainer_vertical' : ''}`}>
                <input
                    type='range'
                    min={String(MIN_SLIDER_VALUE)}
                    max={String(MAX_SLIDER_VALUE)}
                    value={hue}
                    onChange={handleHueChange}
                    className='OklchSelector-Slider'
                    aria-labelledby='slider-value'
                />
                <div className='OklchSelector-ControlsContainer'>
                    <button
                        className='OklchSelector-ControlButton_up'
                        onClick={changeSliderPosition}
                        title='increase hue by 5 units per click to set your theme colour'
                    >
                        ∇
                    </button>
                    <div id='slider-value' className='OklchSelector-ThumbText'>
                        {hue.toString().padStart(3, '0')}
                    </div>
                    <button
                        className='OklchSelector-ControlButton_down'
                        onClick={changeSliderPosition}
                        title='decrease hue by 5 units per click to set your theme colour'
                    >
                        ∇
                    </button>
                </div>
            </div>
        </div>
    );
};
