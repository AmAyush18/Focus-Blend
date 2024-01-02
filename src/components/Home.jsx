import { melodies } from "../utils/melodies"
import Hero from "./Hero"
import MelodyCard from "./MelodyCard"

function Home() {

  const heading = `"Your Sound, Your Space: Use Serene to curate your perfect work environment"`

  return (
    <div className='w-[100%] bg-[#FEFAE0] pb-10 min-h-screen'>
      <Hero />
      <h1 className="text-[26px] w-[80%] m-auto font-semibold text-center">{heading}</h1>
      <div className="w-[90%] m-auto pt-16 flex items-center justify-center gap-4 flex-wrap">
        {
          melodies.map((melody, index) => (
            <div key={`SERENE${index}`}>
              <MelodyCard imageSrc={melody.image} audioSrc={melody.sound} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home