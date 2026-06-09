import { useEffect, useState } from 'react';
import '../styling/oklch_selector_themer.css';

export const OklchHuePicker = props => {
    const { vertical, initialLightness = '0.6', initialChroma = '0.15' } = props;

    const MIN_SLIDER_VALUE = 1;
    const MAX_SLIDER_VALUE = 360;

    const [hue, setHue] = useState(260);
    const [sliderBarValue, setSliderBarValue] = useState(72.14);

    useEffect(() => {
        if (!localStorage.getItem('theme')) return;
        setHue(JSON.parse(localStorage.getItem('theme')).hue);
        setSliderBarValue(
            ((JSON.parse(localStorage.getItem('theme')).hue - MIN_SLIDER_VALUE) /
                (MAX_SLIDER_VALUE - MIN_SLIDER_VALUE)) *
                100
        );
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--COLOUR_GRADE_HUE', `${hue}`);
        document.documentElement.style.setProperty('--value', sliderBarValue);
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
                    aria-labelledby="slider-value"
                />
                <span id='slider-value' className='OklchSelector-ThumbText'>
                    {hue.toString().padStart(3, '0')}
                </span>
            </div>
        </div>
    );
};
