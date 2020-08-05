import React from 'react'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'

const App = () => {
    console.log(faker)
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} content="Nice blog post!" />
            <CommentDetail author="Alex" timeAgo="Today at 2:35PM" avatar={faker.image.avatar()} content="Keep up the good work" />
            <CommentDetail author="Jane" timeAgo="Today at 1:00PM" avatar={faker.image.avatar()} content="You can do it!" />     
            <CommentDetail author="Jessa" timeAgo="Today at 10:05M" avatar={faker.image.avatar()} content="Believe in yourself" />     
            <CommentDetail author="Dhinalyn" timeAgo="Today at 8:35AM" avatar={faker.image.avatar()} content="Go for it!" />     
        </div>
    )
}

export default App
