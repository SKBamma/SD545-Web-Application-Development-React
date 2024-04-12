import { ChangeEvent, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

import './App.scss';
import avatar from './images/bozai.png';

interface Comment {
    rpid: number | string;
    user: {
        uid: string,
        avatar: string;
        uname: string;
    };
    content: string;
    ctime: string;
    like: number;
}

type Props = {
    addCommentList: Comment[];
    onGetUpdate: (comments: Comment[]) => void;
};

const user = {
    // userid
    uid: '123012',
    // profile
    avatar,
    // username
    uname: 'Suresh',
};



const tabs = [
    { type: 'hot', text: 'Top' },
    { type: 'newest', text: 'Newest' },
];

function Item(props: Props) {
    const { addCommentList, onGetUpdate } = props;


    const HandleDelete = (rid: number | string) => {
        const result = addCommentList.filter((comments) => comments.rpid !== rid);
        onGetUpdate(result);
    };


    return (
        <div className="reply-list">
            {/* comment item */}
            {addCommentList.map((items) => (
                <div className="reply-item" key={items.rpid}>
                    {/* profile */}
                    <div className="root-reply-avatar">
                        <div className="bili-avatar">
                            <img
                                className="bili-avatar-img"
                                // src={require("./images/jack.png")}
                                src={items.user.avatar}
                                alt="Profile"
                            />
                        </div>
                    </div>

                    <div className="content-wrap">
                        {/* username */}
                        <div className="user-info">
                            <div className="user-name">{items.user.uname}</div>
                        </div>
                        {/* comment content */}
                        <div className="root-reply">
                            <span className="reply-content">{items.content}</span>
                            <div className="reply-info">
                                {/* comment created time */}
                                <span className="reply-time">{items.ctime}</span>
                                {/* When to delete: When post userId is the same as currentUser id */}
                                {user.uid === items.user.uid && (
                                    <span
                                        className="delete-btn"
                                        onClick={() => HandleDelete(items.rpid)} >
                                        Delete
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export const CommentAppFetch = () => {
    const [commentList, setCommentList] = useState<Comment[]>([]);

    useEffect(() => {

        async function getDefaultList() {
            const response = await fetch('http://localhost:3000/list');
            const data = await response.json();
            setCommentList(_.orderBy(data, "like", "desc"));
        }
        getDefaultList();
    }, []);

    const HandleUpdate = (newUpdate: Comment[]) => {
        setCommentList(newUpdate);
    };

    const [activeType, setActiveType] = useState("hot");
    const changeActiveType = (type: string) => {
        setActiveType(type);
        if (type === "hot") {
            setCommentList(_.orderBy(commentList, "like", "desc"));
        } else {
            setCommentList(_.orderBy(commentList, "ctime", "desc"));
        }
    };

    const [commentCount, setCommentCount] = useState(commentList.length);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const [newCommentValue, setNewCommentValue] = useState("");

    const addNewComments = () => {
        const newComment = newCommentValue.trim();
        if (newComment !== "") {
            const comment: Comment = {
                rpid: uuidv4(),
                user,
                content: newComment,
                ctime: dayjs().format("YYYY-MM-DD HH:mm"),
                like: 0,
            };
            setCommentList([...commentList, comment]);
            setNewCommentValue("");
            if (textAreaRef.current) {
                textAreaRef.current!.focus();
            }
            setCommentCount(commentCount + 1);
        }
    };

    const HandleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewCommentValue(e.currentTarget.value);
    };

    const HandleNewPost = () => {
        addNewComments();
    };

    return (
        <div className="app">
            {/* Nav Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">Comments</span>
                        {/* Like */}
                        <span className="total-reply">{commentList.length}</span>
                    </li>
                    <li className="nav-sort">
                        {/* highlight class name： active */}
                        {tabs.map((tab) => (
                            <span
                                key={tab.type}
                                // className={
                                //   activeType == tab.type ? "nav-item active" : "nav-item"
                                // }
                                // Use ClassNames
                                className={classNames("nav-item", {
                                    active: tab.type === activeType,
                                })}
                                onClick={() => changeActiveType(tab.type)}
                            >
                                {tab.text}
                            </span>
                        ))}
                    </li>
                </ul>
            </div>

            <div className="reply-wrap">
                {/* comments */}
                <div className="box-normal">
                    {/* current logged in user profile */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="Profile" />
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* Comment Using control Comonent */}
                        <textarea
                            className="reply-box-textarea"
                            value={newCommentValue}
                            onChange={HandleChangeComment}
                            placeholder="tell something..."
                        />
                        <div className="reply-box-send" onClick={HandleNewPost}>
                            <div className="send-text">post</div>
                        </div>
                    </div>
                </div>
                {/* Send state variable to Child component */}
                <Item
                    addCommentList={commentList}
                    onGetUpdate={HandleUpdate}
                />
            </div>
        </div>
    );
};

