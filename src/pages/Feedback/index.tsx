import React from 'react';
import './index.scss';

interface Feedback {
  date?: string;
  content: string;
  author?: string;
}

const demoFeedbacks: Feedback[] = [
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25//7/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
];

const Feedback: React.FC = () => {
  return (
    <div className="feedback-page">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScvqOpj7lM8_Nuu5cIJCE7DUpmlouhCEgFnnZn_6HSaAXZn-g/viewform"
        width="640"
        height="100%"
      >
        Loading…
      </iframe>
      <div className="demo-feedbacks">
        <h1>Những góp ý mới nhất</h1>
        <div className="list">
          {demoFeedbacks.map((feedback, index) => (
            <div className="feedback" key={index}>
              <p className="date">{feedback?.date}</p>
              <p className="content">{feedback.content}</p>
              <p className="author">
                <b>Từ:&emsp;</b>
                <i>{feedback?.author}</i>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
