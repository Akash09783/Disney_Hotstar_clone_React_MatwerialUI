
import disney from '../assests/images/disney.png'
import marvel from '../assests/images/marvel.png'
import nationalG from '../assests/images/nationalG.png'
import pixar from '../assests/images/pixar.png'
import starwar from '../assests/images/starwar.png'
 
import starwarV from '../assests/videos/star-wars.mp4'
import disneyV from '../assests/videos/disney.mp4'
import marvelV from '../assests/videos/marvel.mp4'
import nationalGeographicV from '../assests/videos/national-geographic.mp4'
import pixarV from '../assests/videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div key={item} className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse