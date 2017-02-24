import React from 'React';
import './footer.css';


class Footer extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="items1">
                    <a href="#">
                        <img className="twit" src="logo/twit.png" alt=""/>
                    </a>
                </div>
                <div className="items2">
                    <a href="#">
                        <img className="facebook" src="logo/facebook.png" alt=""/>
                    </a>
				</div>
                <div className="items3">
                    <a href="#">
                        <img className="instagram" src="logo/instagram.png" alt=""/>
                    </a>
				</div>
                <div className="items4">
                    <a href="#">
                        <img className="youtube" src="logo/youtube.png" alt=""/>
                    </a>
				</div>
                <div className="items5">
                    <a href="#">
                        <img className="mail" src="logo/logo-mail.png" alt=""/>
                    </a>
                </div>
                <div className="fin">
                    <h2>2017- Organic M</h2>
                </div>
  			</div>
            );
		}
	}
export default Footer;
