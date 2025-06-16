import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onLikeToggle }) => {
  const ChatEntries = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLikeToggle={onLikeToggle}
      />
    );
  });

  return <div className='chat-log'>{ChatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLikeToggle: PropTypes.func.isRequired
};

export default ChatLog;
