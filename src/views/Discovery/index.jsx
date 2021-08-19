import React, { Component } from "react";
import Slider from "react-slick";
import {
  getBannerList,
  getRecommendList,
  getNewSong,
  getMv,
} from "../../api/discovery";
import bus from "../../utils/bus";

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      // 轮播图
      banner: [],
      // 推荐歌单
      recommendList: [],
      // 新歌
      newSong: [],
      // mv
      mv: [],
      // 歌曲url
      songUrl: "",
    };
  }

  componentDidMount() {
    this.getBannersData();
    this.getRecommendListData();
    this.getNewSongData();
    this.getMVData();
  }

  async getBannersData(){
    const res = await getBannerList()
    
    if (res.data.code === 200){
      this.setState({
        banners: res.data.banners,
      })
    }
  }

  async getRecommendListData() {
    const res = await getRecommendList()

    if (res.data.code === 200) {
      this.setState({
        recommendList: res.data.result,
      })
    }
  }

  async getNewSongData(){
    const res = await getNewSong()

    if (res.data.code === 200) {
      this.setState({
        newsong: res.data.result,
      })
    }
  }

  async getMVData(){
    const res = await getMv()

    if (res.data.code === 200){
      this.setState({
        mv: res.data.result,
      })
    }
  }

  renderSwiper = () => {
    const { banners } = this.state
    const setting = {
      className :'center',
      infinite : true,
      speed : 500,
      autoplay : true,
    }
    return (
      <Slider {...setting}>
        {banners.map((item) => {
          return (
            <div key={item.targetId}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })}
      </Slider>
    )
  }

  //推荐歌单
  renderRecommend = () => {
    const { recommendList } = this.state
    return (
      <div className="recommend">
        <h3 className="title">推荐歌单</h3>
        <div className="items">
          {recommendList.map((item) => {
            return (
              <div key={item.id} className="item">
                <div
                  className="img-wrapper"
                  onClick={() => this.toPlayList(item.id)}
                  >
                  <div className="desc-wrapper">
                    <span className="desc">{item.copywriter}</span>
                  </div>
                  <img src={item.picUrl} alt="" />
                  <span className="iconfont icon-play"></span>
                </div>
                  <p className="name">{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  render() {
    return <div>发现音乐</div>;
  }
}
