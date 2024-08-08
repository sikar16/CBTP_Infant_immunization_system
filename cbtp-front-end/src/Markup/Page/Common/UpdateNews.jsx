import React, { useState } from 'react';

function UpdateNews() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsDescription, setNewsDescription] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleTitleChange = (event) => {
    setNewsTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewsDescription(event.target.value);
  };

  // Function to handle news update submission
  const handleUpdateNews = (event) => {
    event.preventDefault();

    // Perform the update news logic here
    // ...

    // Reset the form fields and selected image
    setSelectedImage(null);
    setNewsTitle('');
    setNewsDescription('');
  };

  return (
    <>
      <section className="hospital-news-container bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Update News Article</h2>
          <form className="hospital-news-form bg-white p-8 rounded-lg shadow-md" onSubmit={handleUpdateNews}>
            <div className="flex flex-col mb-6">
              <label htmlFor="newsImage" className="text-gray-700 mb-2">
                Select Image
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="newsImage"
                  name="newsImage"
                  accept="image/*"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#137E8F]"
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-[40%] h-[40%] ml-4 object-contain"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="newsTitle" className="text-gray-700 mb-2">
                News Headline
              </label>
              <input
                type="text"
                id="newsTitle"
                name="newsTitle"
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#137E8F]"
                placeholder="Enter title"
                value={newsTitle}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="newsDescription" className="text-gray-700 mb-2">
                News Body
              </label>
              <textarea
                id="newsDescription"
                name="newsDescription"
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#137E8F]"
                rows="5"
                placeholder="Write your news here"
                value={newsDescription}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-[#137E8F] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#137E8F] hover:bg-[#0E6674]"
            >
              Update News
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateNews;