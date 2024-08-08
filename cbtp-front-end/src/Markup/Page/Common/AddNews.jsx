import React, { useEffect, useState } from 'react';
import NewsService from '../../../services/NewsService';
import { useToast } from '../../../Context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../Context/AuthContext";
import UnauthorizedPage from '../../../Markup/Component/UnauthorizedContainer';

function AddNews() {
  const navigator = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);

  const {setToastData} = useToast();
  const {fetchNews,userData} = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // Add a new state for the image preview

  const [imageFile, setImageFile] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    attachments: null, // Use the expected field name
  });
  const onChangeHandler = (e) => {
    if (e.target.name === "newsImage") {
      const selectedImage = e.target.files[0];
      setImageFile(e.target.files[0]);
      setForm({
        ...form,
        attachments: selectedImage, // Update to use the correct key
      });
      setImagePreview(URL.createObjectURL(selectedImage));
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("adminId", "1");
  
    // Assuming `imageFile` is a File object obtained from an input field
    formData.append("attachments", imageFile);
  
    console.log(form); // Confirm that `form.title` and `form.description` have the expected values
  
    const response = await NewsService.postnews(formData);
    setToastData(response);
    if (response.success) {
      fetchNews();
      navigator('/');
    }
    console.log(response);
  };

  
  // console.log(userData)

  return (
    <>
    {isLoggedIn && isAdmin ? (<section className="hospital-news-container bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Post a News Article</h2>
          <div className="hospital-news-form bg-white p-8 rounded-lg shadow-md">
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
                  onChange={onChangeHandler}
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
              <label htmlFor="title" className="text-gray-700 mb-2">
                News Headline
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#137E8F]"
                placeholder="Enter title"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="description" className="text-gray-700 mb-2">
                News Body
              </label>
              <textarea
                id="description"
                name="description"
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#137E8F]"
                rows="5"
                placeholder="Write your news here"
                required
                onChange={onChangeHandler}
              />
            </div>

            <button
              onClick={handlePost}
              className="bg-[#137E8F] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#137E8F] hover:bg-[#0E6674]"
            >
              Post News
            </button>
          </div>
        </div>
      </section>):(
        <UnauthorizedPage/>
      )}
      
    </>
  );
}

export default AddNews;
