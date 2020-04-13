import React from "react";

//data gotten by destructuring
//YOu may as well use props.image in place of destructuring
const ImageCard = ({ image }) => {
  //converting a string to an array
  const tags = image.tags.split(",");

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={image.webformatURL} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {image.user}
        </div>

        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-5 py-4'>
        {/*  JSX at its best  */}
        {/*Just as i would do a for each loop for PHP or Pyhton */}
        {tags.map((tag) => (
          <span
            key={tag}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
