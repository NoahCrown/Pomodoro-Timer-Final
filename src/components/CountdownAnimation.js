import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext'
const CountdownAnimation = ({key, timer, animate, children}) => {

  const { stopAimate } = useContext(SettingsContext)

    return (
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#FF6E31', 0.33],
          ['#FF6E31', 0.33],
          ['#FF6E31', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#D3756B"
        onComplete={ () => {
          stopAimate()
        }}
      >
        {children}
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation
