import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

const Post = () => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                className="post_avatar"
                alt='Sushant'
                src="/static/images/avatar/1.jpg" />
                <h3>Username</h3>
            </div>
            {/* header  => avatar + username */}

            <img src="https://cdn.uinterview.com/wp-content/uploads/2019/05/Brad_Pitt.jpg"  className="post_image" />
            {/* image */}

                <h4 className="post_text"><strong>Sushant</strong> Great caption!!!</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
