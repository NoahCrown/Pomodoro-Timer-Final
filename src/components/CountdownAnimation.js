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
          ['#FFFFFF', 0.33],
          ['#FFFFFF', 0.33],
          ['#FFFFFF', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#F0997D"
        onComplete={ () => {
          stopAimate()
        }}
      >
        {children}
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation
