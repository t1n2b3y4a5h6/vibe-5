import React from 'react'

const page = () => {
  return (
    <div>
      <figure className="md:flex bg-pink -100 square-xl p-80 md:p-5">
  <img className="w-50 h-50 md:w-60 md:h-auto md:rounded-none oval-full mx-auto" src="/tehreem.jpeg"  alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I am a Staff Engineer at PAIB .   
        Artificial intelligence (AI) serves humanity by enhancing human capabilities, automating tasks, and solving complex global challenges across virtually every industry, from healthcare and transportation to agriculture and cybersecurity. It is designed to augment, not replace, human intelligence, but its development requires careful ethical governance and human oversight. 
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-yellow-600">
        Tehreem Ashraf
      </div>
      <div className="text-red-500">
        Staff Engineer, PAIB
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default page

