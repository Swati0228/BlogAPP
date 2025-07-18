'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditBlogPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const blogId = searchParams.get('id');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Load existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get('/api/blog', { params: { id: blogId } });
        const blog = res.data;
        setTitle(blog.title);
        setAuthor(blog.author);
        setImage(blog.image);
        setDescription(blog.description);
      } catch (err) {
        toast.error('Error loading blog');
      }
    };

    if (blogId) fetchBlog();
  }, [blogId]);

  // Update handler
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let imagePath = image;

      // Upload new image if selected
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);

        const uploadRes = await axios.post('/api/upload', formData);
        imagePath = uploadRes.data.imageUrl;
      }

      // Send updated blog data
      const res = await axios.put('/api/blog', {
        id: blogId,
        title,
        author,
        image: imagePath,
        description,
      });

      if (res.data.success) {
        toast.success('Blog updated successfully!');
        router.push(`/blogs/${blogId}`);
      } else {
        toast.error('Update failed');
      }
    } catch (err) {
      toast.error('Error updating blog');
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        <div>
          <p className="mb-2 font-semibold">Upload Blog Image</p>

          {/* Preview */}
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="h-48 w-full object-cover rounded mb-2"
            />
          ) : image ? (
            <img
              src={image}
              alt="Preview"
              className="h-48 w-full object-cover rounded mb-2"
            />
          ) : null}

          {/* File input */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setSelectedFile(file);
                setImage('');
              }
            }}
            className="mb-2 block w-full"
          />

          {/* Optional URL input */}
          <input
            type="text"
            placeholder="Or paste image URL"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              setSelectedFile(null);
            }}
            className="w-full border p-3 rounded"
          />
        </div>

        <textarea
          placeholder="Description (HTML supported)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded h-48"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlogPage;
