import React from 'react'
import '../css/accordion.css'

class AccordionApp extends React.Component {
    render() {
        return (
            <div>
                <Accordion hiddenTexts={this.props.hiddenTexts} />
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