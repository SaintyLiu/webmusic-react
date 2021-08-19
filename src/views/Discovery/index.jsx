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

  render() {
    return <div>发现音乐</div>;
  }
}
