
import NumberTicker from './ui/number-ticker'

export default function Client() {
  return (
    <div className='flex justify-center items-center relative -top-20 bg-white h-40 rounded-xl shadow-xl mx-[20%] p-2'>
        <div className='grid grid-cols-3 justify-center items-center gap-5 sm:gap-14'>
            <div className='grid justify-center'>
            <div className='flex flex-row items-center'>
                <p className="whitespace-pre-wrap text-2xl sm:text-6xl  lg:text-8xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker value={100} />
                </p>
                <p className='text-xl font-bold sm:text-4xl lg:text-6xl'>+</p>
            </div>
            <div className='text-center font-bold  text-[10px] sm:text-lg'>Clients</div>
            </div>
            <div className='grid justify-center'>
            <div className='flex flex-row items-center'>
                <p className="whitespace-pre-wrap text-2xl sm:text-6xl  lg:text-8xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker value={10} />
                </p>
                <p className='text-xl font-bold sm:text-4xl lg:text-6xl'>+</p>
            </div>
            <div className='text-center font-bold  text-[10px] sm:text-lg'>Experience</div>
            </div>
            <div className='grid justify-center'>
            <div className='flex flex-row items-center'>
                <p className="whitespace-pre-wrap text-2xl sm:text-6xl  lg:text-8xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker value={20} />
                </p>
                <p className='text-xl font-bold sm:text-4xl lg:text-6xl'>+</p>
            </div>
            <div className='text-center font-bold text-[10px] sm:text-lg'>Empoyees</div>
            </div>
        </div>
    </div>
  )
}
