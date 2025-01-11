'use server'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from "payload";
import React from "react";
import configPromise from '@payload-config'
import Image from 'next/image';


const page = async () => {

  // get courses
  const payload = await getPayload({ config: configPromise});
  let coursesRes = await payload.find({collection: 'courses', limit: 10})
  let courses = coursesRes.docs;
  console.log("courses", courses);

  // get the user
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  return <div className="flex flex-col mx-auto w-full max-w-4xl p-4 gap-4">
    <div className="text-xl">Welcome <span className="text-gray-400">{user?.email}</span></div>
    <div className="text-sm text-teal-400">All Courses</div>
    <div className="grid grid-cols-2 gap-4">
    {courses.map((course) => {
      return (
        <div key={course.id} className="flex flex-col cursor-pointer relative border border-gray-700 hover:border-white transition ease-in-out duration-100 overflow-hidden">
          <div className="relative w-full aspect-video"><Image alt={`${course.title} thumbnail`} src={course.image.url} fill={true} /></div>
        </div>
      )
    })}
    </div>
  </div>;
};

export default page;