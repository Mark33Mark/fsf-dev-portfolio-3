import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { validateEmail } from '../../utilities';

const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageCharacters, setMessageCharacters] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    const handleInputChange = event => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'message') {
            const {
                target: { style },
            } = event;
            setMessageCharacters(target.value.length);

            target.value.length >= 490 ?
                target.classList.add('maximumCharactersReached')
            :   target.classList.remove('maximumCharactersReached');
        }

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        // Listen for window resize
        window.addEventListener('resize', handleResize);

        // Call handler right away so state updates with initial window size
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = event => {
        event.preventDefault();

        if (!validateEmail(email) || !name || !message) {
            setErrorMessage('Please provide a name, valid email and message htmlFor your message to be sent.');
            return;
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', name, email, message }),
        })
            .then(res => {
                if (res.status !== 200) {
                    event.target.reset();
                    setErrorMessage(
                        "😒\n\nUnfortunately, your form failed to submit.\n\nWe're aware of the issue and working to fix it.  Please don't reattempt.\n\nInstead, please use one of the other methods at the bottom of this page to contact me. "
                    );
                } else {
                    event.target.reset();
                    setErrorMessage("Success! Thanks htmlFor emailing me, I'll respond as soon as possible.");
                }
            })
            .catch(error => alert(error));
    };

    const iFrameSrcParams = {
        lat: -33.858,
        lng: 151.208,
        z: isMobile ? 11 : 13,
        t: '<span>Mark Watson</span><span> | full stack web developer | </span>',
        m: 'Located in Sydney, creating digital assets to your specification.',
        c: false, // route button controller - default is false, which removes the 'route' button.
        p: !isMobile, // popup controller - default is false, which hides the info popup.  User can click marker htmlFor it to appear.
    };

    const mapContent = (
        <iframe
            width='100%'
            height='100%'
            title="map of Mark Watson's location"
            className='Contact-Iframe'
            src={`https://map.watsonised.me?${new URLSearchParams(iFrameSrcParams).toString()}`}
            sandbox='allow-scripts allow-same-origin'
        />
    );

    return (
        <>
            <h1 className='Contact-PageHeading'>Get In Touch</h1>
            <div className='Contact-Container'>
                <div className={'Contact-Map'}>{mapContent}</div>

                <form onSubmit={handleSubmit} className='Contact-Form' method='POST'>
                    <input type='hidden' name='form-name' value='contact' />
                    <p className='Contact-FormDescription Contact-FormDescription_full'>
                        Please fill in all fields. Click / press Submit when done:
                    </p>

                    <div className='Contact-ContainerInput'>
                        <input
                            className='Contact-InputField Contact-InputField_name'
                            id='name'
                            name='name'
                            autoComplete='name'
                            placeholder='your name'
                            type='text'
                            onChange={handleInputChange}
                            onSelect={e => setErrorMessage('')}
                            required
                        />
                        <label className='Contact-InputLabel' htmlFor='name'>
                            Name
                        </label>
                        <small className='Contact-HintInputField'>Let me know who I'm communicating with.</small>
                    </div>

                    <div className='Contact-ContainerInput'>
                        <input
                            className='Contact-InputField Contact-InputField_email'
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='email'
                            placeholder='your email'
                            onChange={handleInputChange}
                            onSelect={e => setErrorMessage('')}
                            required
                        />
                        <label className='Contact-InputLabel' htmlFor='email'>
                            Email
                        </label>
                        <small className='Contact-HintInputField'>Your email address will not be shared.</small>
                    </div>

                    <div className='Contact-ContainerInput Contact-ContainerInput_full'>
                        <textarea
                            className='Contact-TextareaField'
                            id='message'
                            name='message'
                            type='text'
                            rows='2'
                            maxLength='500'
                            placeholder='write your message here'
                            onChange={handleInputChange}
                            onSelect={e => setErrorMessage('')}
                            required
                        ></textarea>
                        <label className='Contact-InputLabel' htmlFor='message'>
                            Message{' '}
                            <span className='Contact-TextareaFieldCharacterCount'>({messageCharacters} / 500)</span>
                        </label>
                        <small className='Contact-HintTextareaField'>What would you like to ask me?</small>
                    </div>
                    <button type='submit' className='Contact-FormSubmitButton Contact-FormSubmitButton_full'>
                        Submit Form
                    </button>
                </form>

                {errorMessage && (
                    <div className='Contact-FormErrorContainer'>
                        <p className='Contact-FormErrorMessage'>{errorMessage}</p>
                    </div>
                )}
            </div>
        </>
    );
};
