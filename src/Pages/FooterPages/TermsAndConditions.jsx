export default function TermsAndConditions() {
    return (
        <div className='termsandconditions'>
            <p className='terms'>Terms Of Use</p>
            <p className='main-terms'>Welcome to [Your Fest Name], organized by [Your College Name]. By accessing or using our website (https://www.yourfest.com) and participating in our events, you agree to be bound by the following Terms and Conditions.

                If you do not agree with these terms, please do not use our website or register for any events.</p>
            <ol className='list-of-terms'>
                <li className='termsListItems'>Eligibility</li>
                <p className='termsContent'>Our events are generally open to college students across India. Certain events may have specific eligibility criteria which will be clearly mentioned on their respective registration pages.</p>
                <li className='termsListItems'> Use of the Website</li>
                <p className='termsContent'>You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
                    <ul className='useOfwebsite'>
                        <li>Use our site to post false, misleading, or offensive content</li>
                        <li>Attempt to hack or interfere with the functionality of the website</li>
                        <li>Use automated tools (bots) to register for events</li>
                    </ul>
                </p>

                <li className='termsListItems'>Event Rules</li>
                <p className='termsContent'>Each event may have its own set of rules, formats, and judging criteria. Participants are expected to read and follow those rules strictly. The decisions made by the organizing committee or event judges are final and binding.</p>
                <li className='termsListItems'> Intellectual Property</li>
                <p className='termsContent'>All content on the Website, including logos, images, event descriptions, and designs, are the intellectual property of [Your Fest Name] or used with permission. You may not copy, reproduce, or use them without written permission.

                </p>


                <li className='termsListItems'>Limitation of Liability</li>
                <p className='termsContent'>While we strive to keep the Website and all events running smoothly, [Your Fest Name] and [Your College Name] are not responsible for:</p>
                <ul className='useOfwebsite'>
                    <li>Technical issues beyond our control</li>

                    <li>Incomplete or lost registrations due to network problems</li>

                    <li>Any personal loss or damage during participation in offline events</li>
                </ul>

                <li className='termsListItems'>Cancellation or Changes </li>
                <p className='sublist'>We reserve the right to:</p>
                <ul className='useOfwebsite'>
                    <li>Cancel or reschedule events</li>

                    <li>Modify rules or eligibility criteria</li>

                    <li>Update these Terms and Conditions at any time</li>
                </ul>

                <p className='termsContent'>Changes will be posted on the Website and are effective immediately upon posting.</p>

                <li className='termsListItems'> Contact Information</li>
                <p className='termsContent'>If you have any questions regarding these Terms, feel free to contact us:</p>
                <p>Email :</p>
                <p>Phone :</p>


            </ol>
        </div>
    )
}