import bollywoodimg1 from './assets/image/bollywoodimg1.jpeg';
import bollywoodimg2 from './assets/image/bollywoodimg2.jpeg';
import bollywoodimg3 from './assets/image/bollywoodimg3.jpeg';


const MovieList = () => {
  return (
    <div>
      <input type="text" placeholder="search Movie..." className="w-full"/>
      <br />
      <br />
      <h1 className=''>BollyWood Movies</h1>
      <div className='flex space-x-4 flex-wrap gap-4 overflow-x-auto min-w-[180px] m-2'>
        <img src={bollywoodimg1} alt="Jub We Meet" />
        <div>
            <h2>HUM TUM</h2>
        <button>view info.</button>
        </div>
        <img src={bollywoodimg3} alt="" />
        <div>
            <h2>YEH JAWAANI HAI DEEWANI</h2>
        <button>view info.</button>
        </div>
        <img src={bollywoodimg2} alt="" />
        <div>
            <h2>JUB WE MET</h2>
        <button>view info.</button>
        </div>
      </div>
    </div>
  )
}

export default MovieList
