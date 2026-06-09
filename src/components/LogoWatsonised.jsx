export const LogoWatsonised = props => (
    <svg xmlns='http://www.w3.org/2000/svg' width={90} height={90} viewBox="0 0 90 90" {...props}>
        <defs>
            <mask id='a'>
                <path fill='#fff' d='M0 0h90v90H0z' />
                <path
                    d='M14 14v46h12V33l11 16 12-16V17L37 33 26 14Z'
                    style={{
                        fill: '#000',
                    }}
                >
                    <animateTransform
                        attributeName='transform'
                        attributeType='XML'
                        calcMode='linear'
                        dur='10s'
                        keyTimes='0; 0.4; 0.5; 0.8; 1'
                        repeatCount='indefinite'
                        type='translate'
                        values='0 0; 8 8; 8 8; 0 0; 0 0'
                    />
                </path>
                <path
                    d='M76 76V30H64v27L53 41 41 57v16l12-16 11 19Z'
                    style={{
                        fill: '#000',
                    }}
                >
                    <animateTransform
                        attributeName='transform'
                        attributeType='XML'
                        calcMode='linear'
                        dur='10s'
                        keyTimes='0; 0.4; 0.5; 0.8; 1'
                        repeatCount='indefinite'
                        type='translate'
                        values='0 0; -8 -8; -8 -8; 0 0; 0 0'
                    />
                </path>
            </mask>
        </defs>
        <path fill={'var(--COLOUR_GRADE_500)'} d='M0 0h90v90H0z' mask='url(#a)' />
    </svg>
);
