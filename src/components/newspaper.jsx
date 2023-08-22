import React from "react";


class Newspaper extends  React.Component{
    render(){
        return(
            <div className="newsletter">
                <div className="newsletter-wrapper">
                    <h2 className="newsletter-title">Sign Up For Our Newsletter</h2>

                    <form>
                        <input className="email-input" type="email" name="email" id="email" placeholder="Enter your e-mail here"/>
                        <button className="btn-news" type="submit">Subscribe Now</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Newspaper;