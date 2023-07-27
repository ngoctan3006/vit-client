import React from 'react';

interface Props {
  className?: string;
  id?: string;
}

const FeaturedActivities: React.FC<Props> = ({ className, id }) => {
  return (
    <div className={className} id={id}>
      <h1 className="text-center title">
        Các hoạt động tiêu biểu của Đội trong năm học 2022 - 2023
      </h1>
      <ul>
        <li>
          <div className="date" style={{ backgroundColor: '#41516C' }}>
            01 - 2023
          </div>
          <div className="title">Xuân yêu thương 2023</div>
          <div className="descr">
            Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội
            tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn
            thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả.
          </div>
        </li>
        <li>
          <div className="date" style={{ backgroundColor: '#FBCA3E' }}>
            05 - 2023
          </div>
          <div className="title">Cốc trà đá vì cộng đồng mùa thứ 12</div>
          <div className="descr">
            Cùng với phương châm vẫn luôn được giữ vững qua nhiều năm: "Mỗi
            tuần, mỗi sinh viên Bách Khoa tiết kiệm một cốc trà đá, tương đương
            với 1000 đồng để xây dựng quỹ Tuổi trẻ Bách Khoa nhân ái", chương
            trình đã tiếp tục hành trình của mình để nâng cao tinh thần tiết
            kiệm, đồng thời tiếp nối truyền thống "Lá lành đùm lá rách" của sinh
            viên Bách Khoa nói riêng và cộng đồng nói chung.
          </div>
        </li>
        <li>
          <div className="date" style={{ backgroundColor: '#4CADAD' }}>
            06 - 2023
          </div>
          <div className="title">VIT League 2023</div>
          <div className="descr">
            Giải bóng đá giao hữu VIT League 2023 (VL'23), với tiền thân là VIT
            Cup ở những năm trước đây, là sự kiện phong trào nổi bật, luôn nhận
            được sự đón chờ nhiệt thành đến từ mọi thế hệ các thành viên Đội
            SVTN Trường CNTT&TT. Giải đấu năm nay đã diễn ra hết sức thành công,
            hoàn thành xuất sắc nhiệm vụ nâng cao ý thức rèn luyện sức khoẻ cùng
            tinh thần đoàn kết giữa các Tình nguyện viên. Chức vô địch năm nay
            đã gọi tên VIT Family, cùng nhiều cầu thủ đẹp trai tài năng đã đạt
            được các danh hiệu: Vua phá lưới, Cầu thủ xuất sắc nhất, Găng tay
            vàng
          </div>
        </li>
        <li>
          <div className="date" style={{ backgroundColor: '#E24A68' }}>
            07 - 2023
          </div>
          <div className="title">
            Ngày hội Sinh viên tình nguyện và Flashmob Trà Đá 2023
          </div>
          <div className="descr">
            Giũ vững truyền thống các năm, năm nay Đội Sinh viên Tình nguyện
            Trường Công nghệ Thông tin và Truyền thông đã tham gia ngày hội với
            một tinh thần hết mình, nhiệt huyết và học hỏi. Mặc dù kết quả chưa
            được trọn vẹn, nhưng điều quan trọng nhất mà VIT có được trong ngày
            hội này đó là sự đoàn kết và tinh thần của các thành viên.
          </div>
        </li>
        <li>
          <div className="date" style={{ backgroundColor: '#1B5F8C' }}>
            2022
          </div>
          <div className="title">Hỗ trợ chào tân sinh viên K67</div>
          <div className="descr">
            Trong không khí toàn trường chào đón các bạn sinh viên K67, Đội đã
            tham gia hỗ trợ các công tác tổ chức sự kiện chào tân, qua đó góp
            phần giúp sự kiện sôi động và hoành tráng này được diễn ra thành
            công tốt đẹp, để lại ấn tượng tốt trong lòng các tân sinh viên
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedActivities;
