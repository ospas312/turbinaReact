import {Realease, TextSong} from "./index";  // компоненты

const Playlist = ({startTrack, coverPlace830, coverPlace480, visibleList, visibleRealease, songsItems, secondsDuration, currentTime}) => {

  return (
    <div className="player__list">
      {
        !coverPlace830 && visibleList && coverPlace480 &&
        <img className="player__cover" src={startTrack?.cover} alt="Обложка трека"/>
      }
      <div className="player__list-items">
        <h3 className="player__typeContent">{!visibleRealease ? "Релизы: " : "Текст песни: "} </h3>
        <div className="player__list-item">
          {
            !visibleRealease ?
              songsItems.map((obj, index) => <Realease
                index={index}
                song={obj}
                startTrack={startTrack}
                secondsDuration={secondsDuration}
                currentTime={currentTime}
              />)
              : <TextSong choiceActiveText={startTrack?.text}/>
          }

        </div>
      </div>
    </div>
  )
}

export default Playlist;