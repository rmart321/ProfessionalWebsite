import './Background.css'
import Typewriter from 'typewriter-effect'

const Background = () => {
  return (
    <div className="animated-background">
      <div id='textWrapper'>
        <div id='main-title'>
          <h1>Hey! I&apos;m Roberto!</h1>
        </div>

        <div id='type-text'>
          <Typewriter
            options={{
              strings: ['I\'m a CS Student @ UCR', 'I\'m an aspiring Software Engineer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      {/* <div id='pic-right'>
        <img src="human1.png" alt="A picure of me." />
      </div> */}
    </div>
  )
}

export default Background