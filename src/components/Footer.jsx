import { EmailIcon, GithubIcon, LinkedInIcon, MobilePhoneIcon, TelegramIcon, WhatsappIcon } from './Icons';
import { OklchHuePicker } from './OklchHuePicker';

export const Footer = () => {
    return (
        <footer className='Footer-Container'>
            <OklchHuePicker vertical={true} />
            <address className='Footer-Contacts_contact-options' itemScope itemType='https://schema.org/LocalBusiness'>
                <a
                    className='Footer-ContactLink Footer-Contacts_mobile-phone'
                    href='tel:+61448488884'
                    aria-label='call me by selecting this icon'
                    rel='noreferrer'
                >
                    <div className='Footer-ContactIcon Footer-Contact_mobile-icon'>
                        <MobilePhoneIcon />
                    </div>
                </a>

                <a
                    className='Footer-ContactLink Footer-ContactLink_email'
                    href="mailto:hi@watsonised.com?subject=Sending%20you%20this%20email%20from%20your%20website&body=Hi%20Mark,%20I'm%20emailing%20you%20from%20your%20website."
                    aria-label='send me an email by selecting this icon'
                >
                    <div className='Footer-ContactIcon Footer-Contact_email-icon'>
                        <EmailIcon />
                    </div>
                </a>

                <a
                    className='Footer-ContactLink Footer-ContactLink_telegram'
                    href='https://t.me/watsonised'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='send me a Telegram message by selecting this icon'
                >
                    <div className='Footer-ContactIcon Footer-Contact_telegram-icon'>
                        <TelegramIcon />
                    </div>
                </a>

                <a
                    className='Footer-ContactLink Footer-ContactLink_linkedin'
                    href='https://www.linkedin.com/in/mark-watsonised/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='have a look at my LinkedIn message and contact me by selecting this icon'
                >
                    <div className='Footer-ContactIcon Footer-Contact_linkedin-icon'>
                        <LinkedInIcon />
                    </div>
                </a>

                {/* <!--https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat--> */}
                <a
                    className='Footer-ContactLink Footer-ContactLink_whatsapp'
                    href='https://wa.me/61448488884?text=Hi%20Mark,%0DI%20found%20you%20via%20your%20website%20and%20was%20wondering%0D'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='send me a whatsapp message by selecting this icon'
                >
                    <div className='Footer-ContactIcon Footer-Contact_whatsapp-icon'>
                        <WhatsappIcon />
                    </div>
                </a>

                <a
                    className='Footer-ContactLink Footer-ContactLink_github'
                    href='https://github.com/Mark33Mark'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='have a look at my Github repository by selecting this icon'
                >
                    <div className='Footer-ContactIcon Footer-Contact_github-icon'>
                        <GithubIcon />
                    </div>
                </a>
            </address>
        </footer>
    );
};
