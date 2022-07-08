import React, { useState, useEffect } from "react";
import "../groupChat/Styles/App.scss";
import Comment from "../groupChat/Comment";
import AddComment from "../groupChat/Comment";
import data from './data.json'
import {v4 as uuid} from 'uuid'


const Index = () => {
    const [comments, updateComments] = useState([]);
    const [deleteModalState, setDeleteModalState] = useState(false);
  
    const getData = async () => {
        const res = await fetch("https://huy-huan.herokuapp.com/chat");
        const datas = await res.json();
        
        datas.forEach(ob => {
           
            ob.content= ob.noidung;
            ob.createdAt= "23 November 2021";
            ob.score= 12;
            ob.username= ob.tennguoitao;
            ob.currentUser= false;
            ob.replies=ob.listcomment;

            ob.replies.forEach(dt =>{
            dt.content= dt.noidung;
            dt.createdAt= "18 December 2021";
            dt.score= 4;
            dt.username= dt.tennguoitao;
            dt.currentUser= false;
            dt.replies=[];

            })
              
        })
        console.log('newdatas',datas)
       updateComments(datas);
    };
    if(comments.length<1){
    getData();
    }else{
        console.log('cmt1',comments);
    }
    useEffect(() => {
        console.log('new')
      localStorage.getItem("comments") !== null
        ? updateComments(JSON.parse(localStorage.getItem("comments")))
        : getData();
    }, []);
  
    useEffect(() => {
      localStorage.setItem("comments", JSON.stringify(comments));
      deleteModalState
        ? document.body.classList.add("overflow--hidden")
        : document.body.classList.remove("overflow--hidden");
    }, [comments, deleteModalState]);
  
    // update score
    let updateScore = (score, id, type) => {
      let updatedComments = [...comments];
  
      if (type === "comment") {
        updatedComments.forEach((data) => {
          if (data.id === id) {
            data.score = score;
          }
        });
      } else if (type === "reply") {
        updatedComments.forEach((comment) => {
          comment.replies.forEach((data) => {
            if (data.id === id) {
              data.score = score;
            }
          });
        });
      }
      updateComments(updatedComments);
    };
  
    // add comments
    let addComments = (newComment) => {
      let updatedComments = [...comments, newComment];
      updateComments(updatedComments);
    };
  
    // add replies
    let updateReplies = (replies, id) => {
      let updatedComments = [...comments];
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.replies = [...replies];
        }
      });
      updateComments(updatedComments);
    };
  
    // edit comment
    let editComment = (content, id, type) => {
      let updatedComments = [...comments];
  
      if (type === "comment") {
        updatedComments.forEach((data) => {
          if (data.id === id) {
            data.content = content;
          }
        });
      } else if (type === "reply") {
        updatedComments.forEach((comment) => {
          comment.replies.forEach((data) => {
            if (data.id === id) {
              data.content = content;
            }
          });
        });
      }
  
      updateComments(updatedComments);
    };
  
    // delete comment
    let commentDelete = (id, type, parentComment) => {
      let updatedComments = [...comments];
      let updatedReplies = [];
  
      if (type === "comment") {
        updatedComments = updatedComments.filter((data) => data.id !== id);
      } else if (type === "reply") {
        comments.forEach((comment) => {
          if (comment.id === parentComment) {
            updatedReplies = comment.replies.filter((data) => data.id !== id);
            comment.replies = updatedReplies;
          }
        });
      }
  
      updateComments(updatedComments);
    };
   console.log('cmt',comments)
    return (
      <main className="App">
       {comments.length >1  && comments.map((comment) => (
          <Comment  
            key={comment.id}
            commentData={comment}
            updateScore={updateScore}
            updateReplies={updateReplies}
            editComment={editComment}
            commentDelete={commentDelete}
            setDeleteModalState={setDeleteModalState}
          />
        ))}
        {/* <AddComment buttonValue={"send"} addComments={addComments} /> */}
      </main>
    );
        };

export default Index;
