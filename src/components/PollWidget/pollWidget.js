import React, { useEffect, useState } from 'react';
import './pollWidget.css';

const PollWidget = (props) => {
  const { data } = props;
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem(`widget_${data.id}`);
    const output = storedData ? JSON.parse(storedData) : 
      data.options.reduce((acc, curr) => {
        acc[curr.text] = curr.vote;
        return acc;
      }, {});
    setVotes(output);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (option) => {
    const valueSet = {
      ...votes,
      [option]: votes[option] + 1,
    };
    setVotes(valueSet);
    setVoteSubmitted(true);
    console.log('Vote submitted:', option);
    localStorage.setItem(`widget_${data.id}`, JSON.stringify(valueSet))
  };

  return (
    <div className="poll-widget">
      <h2 className='animate-pulse'>{data.question}</h2>
      {voteSubmitted ? (
        <div>
          <p className="thank-you-message">Thank you for voting!</p>
          <div className="results">
            {data.options.map((option) => (
              <div key={option.id} className="result">
                <span className="option-text">{option.text}</span>
                <span className="vote-count">{votes[option.text]} votes</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="options">
          {data.options.map((option) => (
            <button
              key={option.id}
              className="option-button"
              onClick={() => handleOptionClick(option.text)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PollWidget;
