import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-r-0 border-l-0 border-b-0">
      <div className="space-y-4 md:space-y-0 md:space-x-3 md:flex md:justify-between py-6 px-5 sm:px-10 max-w-7xl lg:mx-auto w-full items-center">
        <Link href='/'>
          <Image 
            src="/logo.svg"
            alt="logo"
            width={128}
            height={38}
            priority
          />
        </Link>

        <p>2024 Unlock Prime Properties. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer