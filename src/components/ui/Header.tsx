// 'use client'
// import { useState } from 'react'

// export default function Header(){
//   const [open, setOpen] = useState(false)
//   return (
//     <header className="sticky top-0 z-40 bg-blue-900 backdrop-blur-sm border-b border-slate-200">
//       <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
//         <a href="#" className="font-semibold text-xl">Noel Gens</a>
//         <nav className="hidden md:flex gap-6 items-center text-sm">
//           <a href="#about" className="hover:text-sky-500">About</a>
//           <a href="#projects" className="hover:text-sky-500">Projects</a>
//           <a href="#experience" className="hover:text-sky-500">Experience</a>
//         </nav>
//         <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>
//       </div>
//       {open && (
//         <div className="md:hidden px-6 pb-4">
//           <a href="#about" className="block py-2">About </a>
//           <a href="#projects" className="block py-2">Projects</a>
//           <a href="#experience" className="block py-2">Experience</a>
//         </div>
//       )}
//     </header>
//   )
// }

'use client'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-blue-900 backdrop-blur-sm border-b border-slate-200">
      <div className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Name/Logo */}
        <a href="#" className="font-bold text-2xl text-white tracking-wide flex items-center justify-start">
          Noel Gens
        </a>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-base text-white">
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#experience" className="hover:text-sky-400 transition">Experience</a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 bg-blue-900">
          <a href="#about" className="block py-2 text-white hover:text-sky-400">About</a>
          <a href="#projects" className="block py-2 text-white hover:text-sky-400">Projects</a>
          <a href="#experience" className="block py-2 text-white hover:text-sky-400">Experience</a>
        </div>
      )}
    </header>
  )
}