import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                {/* Passing CommentDetail component as prop to ApprovalCard component */}
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 12:00 PM" avatar={faker.image.avatar()} content={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                {/* Passing CommentDetail component as prop to ApprovalCard component */}
                <CommentDetail author={faker.name.firstName()} timeAgo="Yesterday at 01:00 PM" avatar={faker.image.avatar()} content={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                {/* Passing CommentDetail component as prop to ApprovalCard component */}
                <CommentDetail author={faker.name.firstName()} timeAgo="Wednesday at 09:00 AM" avatar={faker.image.avatar()} content={faker.lorem.sentence()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))