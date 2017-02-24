import React from 'React';
import './footer.css';


class Footer extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="items1">
                    <a href="#">
                        <img className="twit" src="./assets/twit.png"/>
                    </a>
                </div>
                <div className="items2">
                    <a href="#">
                        <img className="facebook" src="./assets/fb.png"/>
                    </a>
				</div>
                <div className="items3">
                    <a href="#">
                        <img className="instagram" src="./assets/insta.png"/>
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
