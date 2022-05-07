import "../resources/styles/subComponentStyle/LessonComment.css"

function LessonComment(props) {

    const dummyComments = ['bai viet nay rat la hay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti.',
    'Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis.', 'Praesent ultricies sed leo non mollis. Phasellus et felis aliquet, fringilla nulla eget, rhoncus lacus. Sed nec sollicitudin elit, mattis pulvinar ipsum.','bai viet nay rat la hay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti.',
    'Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis.', 'Praesent ultricies sed leo non mollis. Phasellus et felis aliquet, fringilla nulla eget, rhoncus lacus. Sed nec sollicitudin elit, mattis pulvinar ipsum.'];

    return (
        <div className="comment-wrapper">
            <h2 className="comment-counter">{`${dummyComments.length} bình luận`}</h2>
            <input placeholder="Dien binh luan tai day"></input>
            <button>Bình luận</button>

            <div className="comment-list">
                {dummyComments.map((comment)=> {
                    return <LessonCommentItem commentContent={comment}/>
                })}
            </div>

        </div>
    )
}

export default LessonComment;

function LessonCommentItem(props){

    const user = {
        avatar:'https://www.svgrepo.com/show/3130/user.svg',
        username: 'username'
    }

    return (
        <div className="comment-item">
            <img src={`url(${user.avatar})`} alt="user avatar"></img>
            <h3 className="comment-username">{user.username}</h3>
            <div className="comment-content">{props.commentContent}</div>
        </div>
    )
}