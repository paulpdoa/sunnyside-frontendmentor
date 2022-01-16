const Testimonials = () => {
    return (
        <div className="center-content testimonial-main-container">
            <div className="fit-content">
                <div className="testimonial-content testimonial-container">
                    <div className="testimonial-title">
                        <h1>Client Testimonials</h1>
                        <div className="testimonial-cards">
                            <div className="card">
                                <img src="/images/image-emily.jpg" alt="Emily" />
                                <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                                <h2>Emily R.</h2>
                                <span>Marketing Director</span>
                            </div>
                            <div className="card">
                                <img src="/images/image-thomas.jpg" alt="Thomas" />
                                <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                                <h2>Thomas S.</h2>
                                <span>Chief Operating Officer</span>
                            </div>
                            <div className="card">
                                <img src="/images/image-jennie.jpg" alt="Jennie" />
                                <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                                <h2>Jennie F.</h2>
                                <span>Business Owner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
