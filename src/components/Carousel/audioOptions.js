import React from 'react'

import MaryChrist from '../../musics/mc.mp3';
import inAHole from '../../musics/iah.mp3';
import venusInFurs from '../../musics/vvu.mp3';
import fourHorseman from '../../musics/FH.mp3'

const musicList = [[inAHole], [MaryChrist], [venusInFurs], [fourHorseman]];

const audioList1 = [
    {
      name: 'In a Hole',
      singer: 'Jesus and The Mary Chain',
      cover:
        'http://screamyell.com.br/site/wp-content/uploads/2014/05/psycho1.jpg',
      musicSrc:
       musicList[0],
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
    },
    {
      name: 'Mary-Christ',
      singer: 'Sonic Youth',
      cover:
        'https://pequenosclassicosperdidos.files.wordpress.com/2019/11/r-370151-1462720365-8649.jpeg.jpg',
      musicSrc:
        musicList[1],
    },
    {
      name: 'Venus in Furs',
      singer: 'Velvet Underground & Nico',
      cover:
        'https://www.udiscovermusic.com/wp-content/uploads/2017/06/the-velvet-underground-nico-album-cover-web-optimised-820.jpg',
      musicSrc:
        musicList[2],
    },    {
      name: 'Four Horseman',
      singer: 'The Clash',
      cover:
        'https://images.squarespace-cdn.com/content/v1/5ccb050e809d8e130ff3433f/1575287813948-ZIBZ406CZ0WRMZ1MWL5M/ke17ZwdGBToddI8pDm48kFkv1C144fX9aakQFWqQb1FZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwYA4bJgAlToDfEOKIXWW_6rbQgIcGPfA_yShaYCCYvuBRhUi1qvOKNFicYaxN-7-E/london-calling.jpg?format=750w',
      musicSrc:
        musicList[3],
    },
  ]    
  
  
  function createRandomNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }


  const options = {
    // audio lists model
    audioLists: audioList1,
  
    // default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,
  
    // if you want dynamic change current play audio you can change it [type `number` default `0`]
    // playIndex: 0,
  
    // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
    theme: 'dark',
  
    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    // Ref: https://github.com/STRML/react-draggable#draggable-api
    bounds: 'body',
  
    // Replace a new playlist with the first loaded playlist
    // instead of adding it at the end of it.
    // [type `boolean`, default `false`]
    clearPriorAudioLists: false,
  
    // Play your new play list right after your new play list is loaded turn false.
    // [type `boolean`, default `false`]
    autoPlayInitLoadPlayList: false,
  
    // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    // "auto|metadata|none" "true| false"
    preload: false,
  
    // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,
  
    // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,
  
    // The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,
  
    // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
      right: 100,
      bottom: 120,
    },
  
    defaultPlayMode: 'order',
  
    // if you want dynamic change current play mode you can change it
    // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
    // playMode: 'order',
  
    // audio mode        mini | full          [type `String`  default `mini`]
    mode: 'full',
  
    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: false,
  
    // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: false,
  
    // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,
  
    // audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,
  
    // audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,
  
    // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,
  
    // drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,
  
    // Display chrome media session.  [type `Boolean` default `false`]
    showMediaSession: true,
  
    // Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,
  
    // play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,
  
    // reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,
  
    // download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,
  
    // loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,
  
    // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,
  
    // lyric display of the audio player panel   [type `Boolean` default `false`]
    showLyric: true,
  
    // destroy player button display  [type `Boolean` default `false`]
    showDestroy: true,
  
    // Extensible custom content       [type 'Array' default '-' ]
    extendsContent: null,
  
    // default volume of the audio player [type `Number` default `1` range `0-1`]
    defaultVolume: 1,
  
    // playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,
  
    // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,
  
    // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
    autoHiddenCover: false,
  
    // Play and pause audio through blank space [type `Boolean` default `false`]
    spaceBar: true,
  
    // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
    responsive: true,
  
    /**
     * @description Customer audio title [type `String | Function` default `${name} - ${singer}`]
     * @example
     * audioTitle: (audioInfo) => 'title'
     */
  
    // audioTitle: 'xxxx',
  
    // Music is downloaded handle
    onAudioDownload(audioInfo) {
      console.log('audio download', audioInfo)
    },
  
    // audio play handle
    onAudioPlay(audioInfo) {
      console.log('audio playing', audioInfo)
    },
  
    // audio pause handle
    onAudioPause(audioInfo) {
      console.log('audio pause', audioInfo)
    },
  
    // When the user has moved/jumped to a new location in audio
    onAudioSeeked(audioInfo) {
      console.log('audio seeked', audioInfo)
    },
  
    // When the volume has changed  min = 0.0  max = 1.0
    onAudioVolumeChange(currentVolume) {
      console.log('audio volume change', currentVolume)
    },
  
    // The single song is ended handle
    onAudioEnded(currentPlayId, audioLists, audioInfo) {
      console.log('audio ended', currentPlayId, audioLists, audioInfo)
    },
  
    // audio load abort
    onAudioAbort(currentPlayId, audioLists, audioInfo) {
      console.log('audio abort', currentPlayId, audioLists, audioInfo)
    },
  
    // audio play progress handle
    // eslint-disable-next-line no-unused-vars
    onAudioProgress(audioInfo) {
      // console.log('audio progress',audioInfo);
    },
  
    // audio reload handle
    onAudioReload(audioInfo) {
      console.log('audio reload:', audioInfo)
    },
  
    // audio load failed error handle
    onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
      console.error(
        'audio load error',
        errMsg,
        currentPlayId,
        audioLists,
        audioInfo,
      )
    },
  
    // theme change handle
    // onThemeChange(theme) {
    //   console.log('theme change:', theme)
    // },
  
    onAudioListsChange(currentPlayId, audioLists, audioInfo) {
      console.log('[currentPlayId] audio lists change:', currentPlayId)
      console.log('[audioLists] audio lists change:', audioLists)
      console.log('[audioInfo] audio lists change:', audioInfo)
    },
  
    onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
      console.log(
        'audio play track change:',
        currentPlayId,
        audioLists,
        audioInfo,
      )
    },
  
    // onPlayModeChange(playMode) {
    //   console.log('play mode change:', playMode)
    // },
  
    // onModeChange(mode) {
    //   console.log('mode change:', mode)
    // },
  
    onAudioListsPanelChange(panelVisible) {
      console.log('audio lists panel visible:', panelVisible)
    },
  
    onAudioListsDragEnd(fromIndex, endIndex) {
      console.log('audio lists drag end:', fromIndex, endIndex)
    },
  
    onAudioLyricChange(lineNum, currentLyric) {
      console.log('audio lyric change:', lineNum, currentLyric)
    },
  
    // custom music player root node
    getContainer() {
      return document.body
    },
  
    /**
     * @description get origin audio element instance , you can use it do everything
     * @example
     * audio.playbackRate = 1.5  // set play back rate
     * audio.crossOrigin = 'xxx' // config cross origin
     */
    getAudioInstance(audio) {
      console.log('audio instance', audio)
    },
  
    onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
      console.log('currentPlayId: ', currentPlayId)
      console.log('audioLists: ', audioLists)
      console.log('audioInfo: ', audioInfo)
      return new Promise((resolve, reject) => {
        // your custom validate
        if (window.confirm('Are you confirm destroy the player?')) {
          // if resolve, player destroyed
          resolve()
        } else {
          // if reject, skip.
          reject()
        }
      })
    },
  
    onDestroyed(currentPlayId, audioLists, audioInfo) {
      console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
    },
  
    onCoverClick(mode, audioLists, audioInfo) {
      console.log('onCoverClick: ', mode, audioLists, audioInfo)
    },
  
    // onPlayIndexChange (playIndex) {
    //   console.log('onPlayIndexChange: ', playIndex);
    // }
  
    // transform audio info like return a Promise
  
    /**
     * @return
     *  {
     *    src: 'xxx',
     *    filename: 'xxx',
     *    mimeType: 'xxx'
     *  }
     */
    // onBeforeAudioDownload() {
    //   return Promise.resolve({
    //     src: '1.mp3',
    //   })
    // },
  
    /**
     * customer download handler
     * eg. a link , or https://www.npmjs.com/package/file-saver
     * @param {*} downloadInfo
     * @example
     *
         customDownloader(downloadInfo) {
          const link = document.createElement('a')
          link.href = downloadInfo.src
          link.download = downloadInfo.filename || 'test'
          document.body.appendChild(link)
          link.click()
        },
     */
    // customDownloader(downloadInfo) {
    //   console.log(downloadInfo.src)
    //   console.log(downloadInfo.filename)
    //   console.log(downloadInfo.mimeType)
    // },
  }
  
  class Demo extends React.PureComponent {
    constructor(props) {
      super(props)
      this.audio = {}
    }
  
    state = {
      unmount: false,
      params: {
        ...options,
        getAudioInstance: (audio) => {
          this.audio = audio
        },
      },
    }
  
    onAddAudio = () => {
      this.updateParams({
        clearPriorAudioLists: false,
        audioLists: [
          ...this.state.params.audioLists,
          {
            name: "I'm new here",
            singer: 'jack',
            cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
            musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`,
          },
        ],
      })
    }
  
  
    onChangeToFirstAudioList = () => {
      this.updateParams({
        clearPriorAudioLists: true,
        audioLists: audioList1,
      })
    }
  
    onAutoPlayMode = () => {
      this.updateParams({
        autoPlay: !this.state.params.autoPlay,
      })
    }
  
    onAutoPlayInitLoadPlayList = () => {
      this.updateParams({
        autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
      })
    }
  
    onClearPriorAudioLists = () => {
      this.updateParams({
        clearPriorAudioLists: !this.state.params.clearPriorAudioLists,
      })
    }
  
    onShowGlassBg = () => {
      this.onChangeKey('glassBg')
    }
  
    onDrag = () => {
      this.onChangeKey('drag')
    }
  
    onToggleMode = () => {
      this.onChangeKey('toggleMode')
    }
  
    onSeeked = () => {
      this.onChangeKey('seeked')
    }
  
    onChangeKey = (key) => {
      const data = {
        ...this.state.params,
        [key]: !this.state.params[key],
      }
      if (key === 'light' || key === 'dark') {
        data.theme = key
      }
      if (key === 'full' || key === 'mini') {
        data.mode = key
      }
      this.setState({ params: data })
    }
  
    showMiniProcessBar = () => {
      this.onChangeKey('showMiniProcessBar')
    }
  
    showMiniModeCover = () => {
      this.onChangeKey('showMiniModeCover')
    }
  
  
    updateParams = (params) => {
      const data = {
        ...this.state.params,
        ...params,
      }
      this.setState({
        params: data,
      })
    }
  
    unmountPlayer = () => {
      this.setState({ unmount: true })
    }
  
    onPlayModeChange = (e) => {
      this.updateParams({ playMode: e.target.value })
    }
      playModeShowTime = () => {
    this.updateParams({
      playModeShowTime: createRandomNum(200, 2000),
    })
  }

  changePlayIndex = () => {
    this.updateParams({
      playIndex: createRandomNum(0, this.state.params.audioLists.length - 1),
    })
  }
  }


export default options;