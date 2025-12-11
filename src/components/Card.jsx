import React from 'react'

const Card = ({ image, title, description, tags }) => {
   return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-4 w-full max-w-xl mx-auto shadow-md hover:shadow-lg transition">

      {/* Project Image */}
      <div className="w-full h-56 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white mt-4">{title}</h2>

      {/* Description */}
      <p className="text-gray-400 mt-2">{description}</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-sm px-3 py-1 rounded-md bg-gray-200 text-black"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}

export default Card