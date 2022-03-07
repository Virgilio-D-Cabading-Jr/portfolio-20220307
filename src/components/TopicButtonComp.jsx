import React from 'react'

const TopicButtonComp = (props) => {
    const topic = props.topic;
    const currentTopic = props.currentTopic;

    const handleClick = (e) => {
        e.preventDefault();
        props.setCurrentTopic(topic);
    }

    if (topic.name == currentTopic.name) {
        return (<div onClick={e => handleClick(e)}>
                    <h3 className='bg-lblue rounded' >{ topic.name }</h3>
                </div>)
    } else {
        return (<div onClick={e => handleClick(e)}>
                    <h3>{ topic.name }</h3>
                </div>)
    }

}

export default TopicButtonComp