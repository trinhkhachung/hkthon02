import React from 'react'
import "./shop.scss"
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Shop() {
    return (
        <div className='all'>
            <div className="header">
                <h3>Rikkei Shop</h3>
                <div>
                    <input type="text" className='search' placeholder='search' />
                    <button className='btn'><FaSearch />
                    </button>
                </div>
                <ul className='list'>
                    <li>Giỏ hàng</li>
                    <li>Đăng nhập</li>
                    <li>Đăng kí</li>
                </ul>
            </div>
            <div className="allone"></div>
            <div className='banner'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/images/banner/banner-1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/images/banner/banner-2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/images/banner/banner-3.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/images/banner/banner-4.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./public/images/banner/banner-5.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

            </div>
            <div className='alltwo'>
                <div className="list-products">
                    <h6> <span><FaList /></span> Danh mục sản phẩm</h6>
                    <ul>
                        <li style={{ color: "red" }}>Tất cả sản phẩm</li>
                        Thiết bị điện tử <br />
                        <>Sách</> <br />
                        <>Đồ tiêu dùng</> <br />
                        <>Thời trang</>
                    </ul>
                </div>
                <div className="products">
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone6.jpg" alt="" />
                        </div>
                        <b>Iphone 6</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone6plus.jpg" alt="" />
                        </div>
                        <b>Iphone 6 Plus</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone7.jpg" alt="" />
                        </div>
                        <b>Iphone 7</b>
                        <p style={{ color: "red" }}>3.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>37 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone7plus.jpg" alt="" />
                        </div>
                        <b>Iphone 7Plus</b>
                        <p style={{ color: "red" }}>49.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone8.jpg" alt="" />
                        </div>
                        <b>Iphone 8</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone8plus.jpg" alt="" />
                        </div>
                        <b>Iphone 8Plus</b>
                        <p style={{ color: "red" }}>19.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphonex.jpg" alt="" />
                        </div>
                        <b>Iphone X</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphonexr.jpg" alt="" />
                        </div>
                        <b>Iphone Xr</b>
                        <p style={{ color: "red" }}>59.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphonexs.jpg" alt="" />
                        </div>
                        <b>Iphone Xs</b>
                        <p style={{ color: "red" }}>39.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphonexsmax.jpg" alt="" />
                        </div>
                        <b>Iphone Xs Max</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone12pro.jpg" alt="" />
                        </div>
                        <b>Iphone 12Pro</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThietBiDienTu/iphone12promax.jpg" alt="" />
                        </div>
                        <b>Iphone 12Pro Max</b>
                        <p style={{ color: "red" }}>49.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/HoangTuBe.jpg" alt="" />
                        </div>
                        <b>Hoàng Tử Bé</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/MuonKiepNhanSinh.jpg" alt="" />
                        </div>
                        <b>Muôn Kiếp Nhân Sinh</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/NhaGiaKim.jpg" alt="" />
                        </div>
                        <b>Nhà Giả Kim</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/ToiTuHoc.jpg" alt="" />
                        </div>
                        <b>Tôi Tự Học</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/DacNhanTam.jpg" alt="" />
                        </div>
                        <b>Đắc Nhân Tâm</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/MatBiec.jpg" alt="" />
                        </div>
                        <b>Mắt Biếc</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/KhongGiaDinh.jpg" alt="" />
                        </div>
                        <b>Không Gia Đình</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/Sach/YourName.jpg" alt="" />
                        </div>
                        <b>Your Name</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>Sách</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/quan1.jpg" alt="" />
                        </div>
                        <b>Quần nỉ họa tiết</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/quan2.jpg" alt="" />
                        </div>
                        <b>Quẩn nỉ đen soc</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/ao1.jpg" alt="" />
                        </div>
                        <b>áo phông</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/quan3.jpg" alt="" />
                        </div>
                        <b>Quần nỉ</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/ao2.jpg" alt="" />
                        </div>
                        <b>áo phông</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/quan6.jpg" alt="" />
                        </div>
                        <b>Quần đùi</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/quan5.jpg" alt="" />
                        </div>
                        <b>Quần nỉ</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/ao3.jpg" alt="" />
                        </div>
                        <b>Áo khoác</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/quan7.jpg" alt="" />
                        </div>
                        <b>Quần đùi</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src="./public/images/products/ThoiTrang/ao5.jpg" alt="" />
                        </div>
                        <b>Áo thun</b>
                        <p style={{ color: "red" }}>29.000.000đ</p>
                        <div className="tym">
                            <div><FaHeart /></div>
                            <p>30 đã bán</p>
                        </div>
                        <div className="apple">
                            <p>nike</p>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                </div>
                
        {/* footer */}
        
            </div>
            <hr />
            <div className="footer">
                <table>
                    <tr>
                        <th>Chăm sóc khách hàng</th>
                        <th>Giới thiệu</th>
                        <th>Danh mục sản phẩm</th>
                        <th>Theo dõi chúng tôi</th>
                        <th>Đội ngũ phát triển</th>
                    </tr>
                    <tr>
                        <td>Trung tâm trợ giúp</td>
                        <td>Điều khoản</td>
                        <td>Thời trang</td>
                        <td><FaFacebook />Facebook</td>
                        <td style={{ color: "red" }}>Trịnh Quốc Hai</td>
                    </tr>
                    <tr>
                        <td>Hướng dẫn mua hàng</td>
                        <td>Chính sách bảo mật</td>
                        <td>Đồ tiêu dùng</td>
                        <td><FaInstagram />Instargram</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Tuyển dụng</td>
                        <td>Thiết bị điện tử</td>
                        <td><FaTwitter />Twitter</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Sách</td>
                    </tr>
                </table>
            </div>
            <hr />
        </div>
        
    )
}
