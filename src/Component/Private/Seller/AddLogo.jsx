import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddLogo = ({storeId}) => {
    const [imagePath, setImagePath] = useState(null);
    const [found, setFound] = useState(false);
    const [logoAdded, setLogoAdded] = useState(false);
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("image", image);
  
      try {
        const response = await axios.post(
          `http://localhost:8080/e-commerec/v1/api/stores/${storeId}/logo/images`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.data.message);
        setLogoAdded(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
  
    // const getLogo = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8080/api/v1/stores/${storeId}/store-logo`,
    //       { responseType: "arraybuffer" }
    //     );
    //     if (response.status === 200) {
    //       const headers = response.headers; //* --> to get content type of the image **/
  
    //       const base64Data = btoa(
    //         new Uint8Array(response.data).reduce(
    //           (data, byte) => data + String.fromCharCode(byte),
    //           ""
    //         )
    //       );
    //       setImagePath(`data:${headers["content-type"]};base64,${base64Data}`);
    //       setFound(true);
    //     }
    //   } catch (error) {
    //     console.log(error.response.data);
    //   }
    // };
  
    // useEffect(() => {
    //   getLogo();
    // }, [logoAdded]);
  
    console.log(found);
    return (
      <div className="py-2 border-3 border-red-950">
        <div>
          {(found && (
            //* Image found.
            <div>
              <img
                src={imagePath}
                alt="Store Logo"
                className="rounded"
                style={{ borderRadius: "50%" }}
              />
            </div>
          )) || (
            //* Image not found: upload image
            <div className=" ">
              <h3>Upload logo:</h3>
              <form onSubmit={handleSubmit}>
                <div></div>
                <div>
                  <div className="w-1/2 h-1/2 bg-gray-500 rounded-full">
                    no image
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-white p-2 mt-5 rounded-2xl "
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  };

export default AddLogo

