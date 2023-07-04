import  buy  from '../assets/img/buy.svg'
import  rent  from '../assets/img/rent.svg'
import sell  from '../assets/img/sell.svg'


const MiddleSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[75%] mx-auto py-3 gap-4">
        <a href="#" className="max-w-sm p-6 bg-white md:border-gray-200 md:rounded-lg hover:bg-gray-100 hover:shadow-2xl text-center">
            <img src={buy} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-5">Buy a property</h5>
            <p className='my-5'>simply dummy text of the printing and typesetting industry.</p>
            <button className='border border-purple-600 text-purple-600 px-5 py-2 rounded-full hover:bg-purple-800 hover:text-white'>Find a home</button>
            <p></p>
        </a>

        <a href="#" className="max-w-sm p-6 bg-white  md:border-gray-200 md:rounded-lg hover:bg-gray-100 hover:shadow-2xl text-center">
            <img src={rent} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-5 ">Sell a property</h5>
            <p className='my-5'>simply dummy text of the printing and typesetting industry.</p>
            <button className='border border-purple-600 text-purple-600 px-5 py-2 rounded-full hover:bg-purple-800 hover:text-white'>Sell a home</button>
        </a>

        <a href="#" className="max-w-sm p-6 bg-white md:border-gray-200 md:rounded-lg hover:bg-gray-100 hover:shadow-2xl text-center">
            <img src={sell} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-5">Rent a property</h5>
            <p className='my-5'>simply dummy text of the printing and typesetting industry.</p>
            <button className='border border-purple-600 text-purple-600 px-5 py-2 rounded-full hover:bg-purple-800 hover:text-white'>Find a rental</button>
        </a>

    </div>
  )
}

export default MiddleSection