
import '../../_metronic/assets/sass/layout/sidebar/zingnew.scss'
//src\_metronic\assets\sass\layout\sidebar\zingnew.scss
const ZingNew = () => {

    return (
        <>
            <div className='wrapper'  >
                <div className='header'>
                    <img src="./media/img/zingnew.jpg" alt="logo" />
                    <ul className="main-menu">
                        <li><a href="https://zingnews.vn/xuat-ban.html">Xuất bản</a></li>
                        <li><a href="https://zingnews.vn/kinh-doanh-tai-chinh.html">Kinh doanh</a></li>
                        <li><a href="https://zingnews.vn/cong-nghe.html">Công nghệ</a></li>
                        <li><a href="https://zingnews.vn/the-thao.html">Thể thao</a></li>
                        <li><a href="https://zingnews.vn/giai-tri.html">Giải trí</a></li>
                        <li><a href="https://zingnews.vn/doi-song.html">Đời sống</a></li>
                        <li><a href="https://lifestyle.zingnews.vn/">Liftstyle</a></li>
                        <li><a href="#">...</a></li>
                    </ul>
                </div>
            </div >
            {/* PRODUCT */}
            <section>
                <a
                    href="https://news.zing.vn/giao-vien-xem-tin-nhan-facebook-cua-hoc-sinh-la-vi-pham-phap-luat-post889215.html">
                    <img src="./media/img/cauduong.jpg" alt="" />
                </a>
                <a
                    href="https://news.zing.vn/giao-vien-xem-tin-nhan-facebook-cua-hoc-sinh-la-vi-pham-phap-luat-post889215.html">
                    <h2>Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục <i className="fas fa-video"></i>
                    </h2>
                </a>
                <p>Đại diện Ban quản lý dự án cao tốc Đà Nẵng - Quảng Ngãi thừa nhận vòng xoay cao tốc ở huyện Bình Sơn đang
                    lún quá mức cho phép và cần 300 ngày để khắc phục.</p>
                <ul>
                    <li><a
                        href="https://news.zing.vn/nu-sinh-lop-5-gay-chu-y-vi-khong-muon-hoc-harvard-chi-can-hanh-phuc-post888308.html">Nữ
                        sinh lớp 5 gây chú ý vì không muốn học Harvard, chỉ cần hạnh phúc</a></li> <br />
                    <li><a
                        href="https://news.zing.vn/hieu-truong-dai-hoc-o-sai-gon-bi-mien-nhiem-vi-nghi-van-bang-cap-post889141.html">Hiệu
                        trưởng đại học ở Sài Gòn bị miễn nhiệm vì nghi vấn bằng cấp</a></li>

                </ul>
                {/* Khối to */}
                <article>
                    <img src="./media/img/photo11541128228238911169409crop15411282438851498562240.jpg" alt="" />
                    <a
                        href="https://news.zing.vn/phat-ngon-an-tuong-trong-3-ngay-quoc-hoi-chat-van-theo-loi-hua-post889169.html">
                        <p>Phát ngôn ấn tượng trong 3 ngày Quốc hội chất vấn 'theo lời hứa' </p>
                    </a>
                </article>
                {/* Khối nhỏ */}
                <article>
                    <img src="./media/img/tintuc24h.jpg" alt="" />
                    <a
                        href="https://news.zing.vn/truong-doan-dt-viet-nam-can-giai-quyet-van-de-tam-ly-o-aff-cup-2018-post889203.html">
                        <p>Trưởng đoàn ĐT Việt Nam: Cần giải quyết vấn đề tâm lý ở SeaGame </p>
                    </a>
                </article>
                {/* Khối nhỏ */}
                <article>
                    <img src="./media/img/thu_tuong.jpg" alt="" />
                    <a
                        href="https://news.zing.vn/viet-nam-hon-20-nam-khong-thang-indonesia-noi-so-lon-hon-ca-thai-lan-post889170.html">
                        <p>Việt Nam hơn 20 năm không thắng Indonesia: Nỗi sợ lớn hơn cả Thái Lan?</p>
                    </a>
                </article>
            </section >
        </>
    )
}
export default ZingNew



