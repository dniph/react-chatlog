import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';



const ChatLog = ({entries}) => {
  const ChatEntries = entries.map((entry, index) => {
    return (
      <ChatEntry key={index} sender= {entry.sender} body={entry.body} timeStamp= {entry.timeStamp}></ChatEntry>
    );
  });
  return (
    <div className='chat-log'>
      {ChatEntries}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired
};

export default ChatLog;