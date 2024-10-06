import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "goods-1",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "럽포 홈스윗홈 아크릴 스마트폰 거치대 4종",
    url: "https://smartstore.naver.com/dokjae/products/10241444813",
  },
  {
    img: "goods-2",
    cat: "Product",
    date: "Dec 7, 2021",
    title: "럽포 잘 익은 체리 아크릴 스마트폰 거치대 3종",
    url: "https://smartstore.naver.com/dokjae/products/10241432150",
  },
  {
    img: "goods-3",
    cat: "Product",
    date: "Dec 7, 2021",
    title: "사랑이 다용도 파우치 4종",
    url: "https://smartstore.naver.com/dokjae/products/10241394322",
  },
  {
    img: "goods-4",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "사랑이 친환경 텀블러 가방 4종",
    url: "https://smartstore.naver.com/dokjae/products/10241378871",
  },
  {
    img: "goods-5",
    cat: "Product",
    date: "Dec 7, 2021",
    title: "귀여워 사랑이 떡메모지 3종",
    url: "https://smartstore.naver.com/dokjae/products/10241355330",
  },
  {
    img: "goods-6",
    cat: "Product",
    date: "Dec 7, 2021",
    title: "사각사각 고급지 사랑이 노트",
    url: "https://smartstore.naver.com/dokjae/products/10241340921",
  },
  {
    img: "goods-7",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "사랑이 마스킹 테이프",
    url: "https://smartstore.naver.com/dokjae/products/10016164489",
  },
  {
    img: "goods-8",
    cat: "Product",
    date: "Dec 7, 2021",
    title: "사랑이 스티커 세트",
    url: "https://smartstore.naver.com/dokjae/products/10015945744",
  },
];

const BlogThree = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to={val.url}></Link>
              <img
                src={`assets/img/root/8989/goods/${val.img}.png`}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.cat}</span>
                  {/* <span className="date">{val.date}</span> */}
                </div>
                <h3 className="ptf-post__title">
                  <Link to={val.url}>{val.title}</Link>
                </h3>
              </header>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogThree;
