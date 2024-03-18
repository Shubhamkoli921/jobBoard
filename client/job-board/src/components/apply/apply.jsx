import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ApplyPage = () => {
  const token = localStorage.getItem('token');
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields (you can add more validation logic here)
    if (!formData.name || !formData.email || !formData.resume || !formData.coverLetter) {
      alert('Please fill in all the required fields');
      return;
    }

    const applyEndpoint = `http://localhost:5000/job/${jobId}/apply`;

    const applyData = new FormData();
    applyData.append('name', formData.name);
    applyData.append('email', formData.email);
    applyData.append('resume', formData.resume);
    applyData.append('coverLetter', formData.coverLetter);

    try {
      const response = await fetch(applyEndpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: applyData
      });

      if (response.ok) {
        // Redirect to a success page or handle success accordingly
        // navigate('/apply-success');
        alert('Successfully applied for the job');
      } else {
        // Handle error response
        alert('Error applying for the job');
        console.error('Error applying for the job');
      }
    } catch (error) {
      console.error('Error applying for the job:', error);
    }
  };


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Apply for Job</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="border border-gray-400 rounded-md py-2 px-3 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="border border-gray-400 rounded-md py-2 px-3 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="resume">Resume:</label>
          <input type="file" name="resume" id="resume" onChange={handleFileChange} className="py-2 px-3 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="coverLetter">Cover Letter:</label>
          <input type="file" name="coverLetter" id="coverLetter" onChange={handleFileChange} className="py-2 px-3 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Apply</button>
      </form>
    </div>
  );
};

export default ApplyPage;
