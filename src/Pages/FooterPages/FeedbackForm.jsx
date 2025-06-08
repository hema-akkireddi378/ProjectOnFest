export default function FeedbackForm() {
    return (
        <div className='feedbackform'>
            <div className='mainFeedBackForm'>
                <p className='feedbackformHeader'>Post-event feedback survey</p>
                <p className='feedbackformContent'>Thank you for your participation. The purpose of this questionnaire is to collect your feedback, which will help us improve this event in the future. All information will remain confidential. </p>
            </div>
            <div className='sub-feedbackform'>
                <p className='questions'>Overall, how satisfied are you with the event?</p>
                <img src='https://cdn.forms.office.net/forms/formsresources/intelligence/themes/star-employee.jpg' alt='Star the Event' height="300px" width="300px"></img>
                <div className='yesOrNo'>
                    <label htmlFor="yes">
                        <input type="radio" id="yes" name="agree" value="yes" /> Yes
                    </label>

                    <label htmlFor="no">
                        <input type="radio" id="no" name="agree" value="no" /> No
                    </label>
                </div>

                <label>Is this your first time attending events like this?</label>
                <div>
                    <div className='yesOrNo'>
                        <label htmlFor="yes">
                            <input type="radio" id="yes" name="agree" value="yes" /> Yes
                        </label>

                        <label htmlFor="no">
                            <input type="radio" id="no" name="agree" value="no" /> No
                        </label>
                    </div>
                </div>

            </div>





            <div className="elements">
                {/* <p>Name: </p>
                <p>Email :</p> */}
                <p>How was your experience?</p>

                <label>
                    <input type="checkbox" name="experience" value="Excellent" />
                    Excellent
                </label><br />

                <label>
                    <input type="checkbox" name="experience" value="Good" />
                    Good
                </label><br />

                <label>
                    <input type="checkbox" name="experience" value="Average" />
                    Average
                </label><br />

                <label>
                    <input type="checkbox" name="experience" value="Poor" />
                    Poor
                </label>
            </div>

        </div>
    )
}


