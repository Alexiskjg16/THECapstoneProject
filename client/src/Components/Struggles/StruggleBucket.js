import React, { Component } from 'react';
import '../../App.css';
import CreateStrugglePost from './StruggleInput';
import PostedStruggle from './StrugglePost'

class StruggleBucket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: "All Posts",
            questions: [],
        }
    }
    componentDidMount() {
        this.fetchQuestions()
    }
    fetchQuestions = () => {
        fetch("https://localhost:5001/api/NE/content")
            .then(resp => resp.json())
            .then(questionData => {
                this.setState({
                    questions: questionData.results
                })
            })
            
    }

    render() {
        return (
            <div className="App">
            <header className="WhatsYourStory"> What's Your Struggle Today? </header>
                <section>
                    <CreateStrugglePost fetchQuestions={this.fetchQuestions}/>
                </section>
                <section>
                    <PostedStruggle fetchQuestions={this.fetchQuestions} questions={this.state.questions} />
                </section>
            </div>
        );
    }
}

export default StruggleBucket;
