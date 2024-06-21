import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchComponent = () => {
  return (
    <div className='flex items-center justify-center min-h-[54px] w-full overflow-hidden rounded-lg px-4 py-2 bg-gray-200 mb-4'>
        <Search className='w-6 h-6' />
        <Input
          type='text'
          placeholder={"Search Keyword"}
          className='text-[16px] font-normal leading-[24px] border-0 bg-gray-200 outline-offset-0 placeholder-text-black focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0'
        />
    </div>
  )
}

export default SearchComponent