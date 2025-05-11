import { CategoryRounded, SearchOutlined, Sort } from '@mui/icons-material'
import { MdTune } from 'react-icons/md'

interface SearchProps {
    search: string
    setSearch: (value: string) => void
  }

export default function Search({ search, setSearch }: SearchProps) {


    return (
        <div className='flex justify-between justify-self-center w-[90%] ms-5! sm:ms-15! mt-5! sm:mt-auto pb-10!'>

            <div className="relative mt-4 w-full lg:w-[45%]">
                <SearchOutlined className="absolute right-4 top-2.5 text-gray-500 text-xl" />
                <input
                    type="text"
                    placeholder="Search Task"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-5! pr-4 py-2! border border-gray-300 rounded-lg focus:outline-none text-lg"
                />
            </div>
            <div className='hidden lg:block'>
                <div className="flex gap-4 mt-4 ">
                    <button className="flex items-center gap-2 bg-white border border-gray-300 px-5! py-2! rounded-lg hover:bg-gray-100 transition ">
                        <CategoryRounded className="text-xl" /> Category
                    </button>
                    <button className="flex items-center gap-2 bg-white border border-gray-300 px-5! py-2! rounded-lg hover:bg-gray-100 transition ">
                        <Sort className="text-xl" /> Sort By: Deadline
                    </button>
                </div>
            </div>
            <div className='lg:hidden flex items-center bg-white border border-gray-300 ms-4! px-5! py-2! rounded-lg hover:bg-gray-100 transition'>
                <MdTune className="text-xl" />
            </div>
        </div>)
}
