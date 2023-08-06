import React from 'react';
import './index.scss';

interface Feedback {
  date?: string;
  content: string;
  author?: string;
}

const demoFeedbacks: Feedback[] = [
  {
    date: '25/07/2023',
    content:
      'Hoạt động đi dạy ngày hôm nay vui quá. mong là Đội sẽ có nhiều hoạt động giống như vậy hơn nữa ^^',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content:
      'Trong buổi họp Đội tuần trước đã xảy ra tình trạng mất trật tự, thành viên ngồi nói chuyện riêng không tập trung nghe, mong ban quản lý để ý và khắc phục để các buổi họp sau sẽ hiệu quả hơn',
    author: 'Giấu tên',
  },
  {
    date: '23/07/2023',
    content:
      'Các bạn ban quản lý thật tuyệt vời, mong Đội sẽ luôn phát triển nhé ^^',
    author: 'Giấu tên',
  },
  {
    date: '20/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
    content: 'Đội trưởng hôi nách quá',
    author: 'Giấu tên',
  },
  {
    date: '25/07/2023',
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
