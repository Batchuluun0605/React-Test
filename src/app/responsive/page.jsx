import React from "react";

const page = () => {
  return (
    <section className="grid gap-8 p-10 md:grid-cols-2 md:items-center md:text-left md:max-xl:bg-blue-200">
      <div>
        <img
          src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-[400px] rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium mb-2">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolore asperiores earum blanditiis repellendus ea officiis, soluta
          necessitatibus accusamus, fuga dolorum eligendi cum quisquam! .
        </p>
      </div>
    </section>
  );
};

export default page;
