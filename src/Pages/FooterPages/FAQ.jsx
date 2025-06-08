export default function FAQ() {
    return (
        <div className=''>
            <div className='faq'> <p className='faqHeader'>FAQ</p></div>
            <div className='faqMore'>
                <div className='faqsection'>
                    <p className='question'>
                        When and where is the fest happening?
                    </p>
                    <p className='answer'> The fest will be held on [Start Date] to [End Date] at [Venue/College Campus].</p>
                </div>
                <div className='faqsection'>
                    <p className='question'> Do I need to pay any registration fees? Is the fest open to other colleges?
                    </p>
                    <p className='answer'> Most events are free. Some workshops or competitions may have minimal charges. Refer to each event’s page for details.</p>
                </div>
                <div className='faqsection'>
                    <p className='question'>
                        How can I become a volunteer?
                    </p>
                    <p className='answer'>Visit the Volunteers page and fill out the sign-up form. You'll be contacted by the team lead if shortlisted</p>
                </div>
            </div>
        </div>
    )
}