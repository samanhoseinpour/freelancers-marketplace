'use client';

import { SessionInterface } from '@/common.types';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { FormField, CustomMenu } from '.';
import { categoryFilters } from '@/constants';

type PostFormProps = {
  type: string;
  session: SessionInterface;
};

const PostForm = ({ type, session }: PostFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    image: '',
    title: '',
    description: '',
    liveSiteUrl: '',
    githubUrl: '',
    category: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log('From submited');
  };

  const handleChangeImage = (e: ChangeEvent<HTMLDivElement>) => {};

  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({
      ...prevState,
      fieldName,
      value,
    }));
  };
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form?.image && 'Choose a thumbnail for your project'}
        </label>
        <input
          id="image"
          type="file"
          className="form_image-input"
          accept="image/*"
          required={type === 'create'}
          onChange={handleChangeImage}
        />
        {form?.image && (
          <Image
            src={form?.image}
            alt="project thumbnail"
            className="sm:p-10 object-contain z-20"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form?.title}
        placeholder="Freelancers Marketplace"
        setState={(value) => handleStateChange('title', value)}
      />

      <FormField
        title="Description"
        state={form?.description}
        placeholder="Showcase and discover remarkable your projects"
        setState={(value) => handleStateChange('description', value)}
      />

      <FormField
        type="url"
        title="Website Url"
        state={form?.liveSiteUrl}
        placeholder="https://freelancersmarketplace-portfolio.netlify.app"
        setState={(value) => handleStateChange('liveSiteUrl', value)}
      />

      <FormField
        title="Github Url"
        state={form?.githubUrl}
        placeholder="https://github.com/samanhoseinpour"
        setState={(value) => handleStateChange('githubUrl', value)}
      />

      <CustomMenu
        title="Category"
        state={form?.category}
        setState={(value) => handleStateChange('category', value)}
        filters={categoryFilters}
      />

      <div className="flexStart w-full">
        {isSubmitting ? <p>isLoading...</p> : <button>Create</button>}
      </div>
    </form>
  );
};

export default PostForm;
