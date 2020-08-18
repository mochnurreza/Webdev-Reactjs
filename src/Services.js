import React, {Component} from 'react';
import './Services.css';

class Services extends Component { 
    render(){
        return(
            <div className="services">
                <h3>services</h3>
                <h2>What We Offer</h2>
                <div className="row">
                   <Icons icon={iconObj[0].icon} title={iconObj[0].title} myDescription={iconObj[0].desc} />
                   <Icons icon={iconObj[1].icon} title={iconObj[1].title} myDescription={iconObj[1].desc} />
                   <Icons icon={iconObj[2].icon} title={iconObj[2].title} myDescription={iconObj[2].desc} />
                   <Icons icon={iconObj[3].icon} title={iconObj[3].title} myDescription={iconObj[3].desc} />
                </div>
            </div>
        );
    }
}

const iconObj = [
    {
        icon: <ion-icon name="phone-portrait-outline"></ion-icon>,
        title: 'Responsive',
        desc: 'Great On Any Screen Size'
    },
    {
        icon: <ion-icon name="pencil-outline"></ion-icon>,
        title: 'Redesign',
        desc: 'Freshly Redesign'
    },
    {
        icon: <ion-icon name="thumbs-up-sharp"></ion-icon>,
        title: 'Favorited',
        desc: 'Most Million Users use this'
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title: 'Question',
        desc: 'Drop Your Qustions'
    }
];
class Icons extends Component { 
    render(){
        return(
            <div>
                <span>
                    {this.props.icon}
                </span>
                <h4>{this.props.title}</h4>
                <p>{this.props.myDescription}</p>
            </div>
        );
    }
}
export default Services;