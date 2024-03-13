 import {useState} from 'react'
import { BiDotsVerticalRounded  } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

import './Main.css'

const Mainpage = () => {

  /** */

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage(inputValue, 'user');
      setInputValue('');
      // You can add logic here for handling replies or other actions from the "chatbot"
    }
  };

  const addMessage = (messageText, sender) => {
    setMessages([...messages, { text: messageText, sender }]);
  };

  /** */
  return (
    <div>
    <div className="container">

         <div className="navbar">

           <div className='myprf'>

              <div className="profilem">
                 <div className="prfm">
                  </div>
              </div>

              <div className="otherm">
                 <div className="myname"> <h1>{'Samar pratap'}</h1></div>
                 <div className="threedot">
                    
                   < BiDotsVerticalRounded /> 
                      
                   </div>
              </div>
           </div>

           <div className='userprf'>
              <div className="profileu"> <div className="prfm"></div></div>
              <div className="otheru"> 
                  <div className="usernameu"> <h1>{'Himanshu sharma'}</h1> </div>
                  <div className="call"> 
                       <div className="calls">
                     <div className="voicei">  <IoCall /> </div>
                  <div className="videoi">  <IoVideocam /></div> 
                        </div>
                  <div className="threedotu"> < BiDotsVerticalRounded /> </div>
                  </div>
              </div>
           </div>

         </div>

        <div className='mainpage'>

           <div className="leftbx">
             <div className="leftchat"></div>
           </div>

           <div className="rightbx"> 
               <div className="chatbody">
                   <div className="chatbox">
                     
                   <div className="message-container">
                 {messages.map((message, index) => (
                  <div key={index} className={`message ${message.sender}-message`}>
                      {message.text}
                        </div>
                          ))}
                   </div>

                     </div>
               </div>


              <div className="messagebody">
                 <div className="file"><div className="sendbox"> <FaPlus /> </div></div>
                 <div className="typing-area">
                   <input
                    className="textareaa"
                    value={inputValue}
                    onChange={handleInputChange}
                     placeholder="Type Your Message Here..."
                     /> 
                   <button className="send" onClick={handleSendMessage} > <IoSendSharp /> </button>
                 </div>
                 <div className="sendbtn"><div className="sendbox"> <AiFillAudio /> </div></div>
              </div>

             </div>
         </div>


     </div>
     </div>
  )
}

export default Mainpage
