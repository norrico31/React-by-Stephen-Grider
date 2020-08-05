import React from 'react'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeA go="Today at 4:45PM" avzatar={faker.image.avatar()} content="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:35PM" avatar={faker.image.avatar()} content="Keep up the good work" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 1:00PM" avatar={faker.image.avatar()} content="You can do it!" />  
            </ApprovalCard>   
            <ApprovalCard>
                <CommentDetail author="Jessa" timeAgo="Today at 10:05M" avatar={faker.image.avatar()} content="Believe in yourself" />  
            </ApprovalCard>   
            <ApprovalCard>
                <CommentDetail author="Dhinalyn" timeAgo="Today at 8:35AM" avatar={faker.image.avatar()} content="Go for it!" /> 
            </ApprovalCard>    
        </div>
    )
}

export default App
