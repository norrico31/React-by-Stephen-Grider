import React from 'react'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'

const App = () => {
    console.log(faker)
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />     
        </div>
    )
}

export default App
