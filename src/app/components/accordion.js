import React from 'react'
import '../css/accordion.css'

class AccordionApp extends React.Component {
    render() {

        const hiddenTexts = [{
            label: 'Organize your data',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
            label: 'Aways in sync.',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
            label: 'Work with any team.',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
            label: 'Business analytics',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        }];
        return (
            <div>
                <Accordion hiddenTexts={hiddenTexts} />
            </div>
        );
    }
}


class Accordion extends React.Component {
    render() {
        return (
            <div className="accordion">
                {this.props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}
            </div>
        );
    }
}

class AccordionItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }
    render() {
        const activeStatus = this.state.visibility ? 'active' : ''

        return (
            <div>
                <button className="accordion__button" onClick={this.handleToggleVisibility} style={this.state.visibility ? { color: '#393689' } : { color: 'black' }}>{this.props.hiddenText.label}<span style={this.state.visibility ? { color: '#393689' } : { color: '#7575DA' }} className={this.state.visibility ? 'fas fa-minus' : 'fas fa-plus'}></span></button>
                <p className={`accordion__content ${activeStatus}`}>
                    {
                        this.props.hiddenText.value
                    }
                </p>

            </div>
        );
    }
}

export default AccordionApp