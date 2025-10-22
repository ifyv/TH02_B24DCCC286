import React from "react";

const NewsList: React.FC = () => {
  const news = [
    {
      title: "AI giúp tăng năng suất lao động",
      description: "Công nghệ AI đang thay đổi cách con người làm việc và sáng tạo.",
      date: "20/10/2025",
      image: "https://picsum.photos/seed/ai/300/180",
      link: "https://vnexpress.net",
    },
    {
      title: "Nền kinh tế toàn cầu đang phục hồi",
      description: "Các chuyên gia dự đoán GDP toàn cầu tăng trưởng 3% vào năm 2026.",
      date: "21/10/2025",
      image: "https://picsum.photos/seed/economy/300/180",
      link: "https://cafef.vn",
    },
    {
      title: "Thế hệ trẻ quan tâm nhiều hơn đến khởi nghiệp",
      description: "Ngày càng nhiều sinh viên bắt đầu xây dựng dự án kinh doanh ngay khi còn học đại học.",
      date: "22/10/2025",
      image: "https://picsum.photos/seed/startup/300/180",
      link: "https://dantri.com.vn",
    },
  ];

  return (
    <div>
      <h2>📰 Danh sách tin tức</h2>
      <div>
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              margin: "10px",
              
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><b>Ngày đăng:</b> {item.date}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              Xem chi tiết
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;




