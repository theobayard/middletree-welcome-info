import { Component } from "react";
import InfoPage from "../InfoPage/InfoPage";
import LangSelector from "./LangSelector";

class InfoPgLangControl extends Component {
    constructor(props) {
        super(props);
        this.state={
            language: props.infoPage.altLangs ? null : "en"
        }
    }

    get infoPage() {
        const lang = this.state.language
        if(lang==="en") {
            return(
                <InfoPage {...this.props.infoPage}/>
            )
        } else {
            return (
                <InfoPage {...this.props.infoPage.altLangs[lang]}/>
            )
        }
    }

    setLang = (lang) => {
        this.setState({
            language:lang
        })
    }

    render() {
        if(this.state.language===null) {
            let languages = Object.entries(this.props.infoPage.altLangs).map(([key,value]) => {
                return ([key,value.languageDisplayName])
            })
            languages.push(["en","English"])
            return (
                <LangSelector languages={languages} 
                              langSelected={this.setLang}/>
            )
        }
        return this.infoPage
    }
}

export default InfoPgLangControl