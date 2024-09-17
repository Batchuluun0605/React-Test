import React from "react";

const page = () => {
  return (
    <div className="bg-cyan-900 flex justify-center items-center h-screen">
      <table className="shadow-xl border-2 border-cyan-200 w-6/12">
        <thead className="text-white">
          <tr>
            <th className="py-3 bg-cyan-800">S.NO</th>
            <th className="py-3 bg-cyan-800">NAME</th>
            <th className="py-3 bg-cyan-800">LANGUAGE</th>
            <th className="py-3 bg-cyan-800">MARK</th>
          </tr>
        </thead>
        <tbody className="text-center text-cyan-900">
          <tr className="bg-cyan-200 cursor-pointer hover:text-blue-300 hover:scale-105 duration-300">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">JOHN DOE</td>
            <td className="py-3 px-6">PYTHON</td>
            <td className="py-3 px-6">78</td>
          </tr>
          <tr className="bg-cyan-300 cursor-pointer hover:text-blue-300 hover:scale-105 duration-300">
            <td className="py-3 px-6">2</td>
            <td className="py-3 px-6">JOHN THU</td>
            <td className="py-3 px-6">PYTHON OR JAVASCRIPT</td>
            <td className="py-3 px-6">46</td>
          </tr>
          <tr className="bg-cyan-400 cursor-pointer hover:text-blue-300 hover:scale-105 duration-300">
            <td className="py-3 px-6">3</td>
            <td className="py-3 px-6">PARK</td>
            <td className="py-3 px-6">JAVA OR JAVASCRIPT</td>
            <td className="py-3 px-6">12</td>
          </tr>
          <tr className="bg-cyan-500 cursor-pointer hover:text-blue-300 hover:scale-105 duration-300">
            <td className="py-3 px-6">4</td>
            <td className="py-3 px-6">SMITH</td>
            <td className="py-3 px-6">PYTHON OR JAVASCRIPT OR C++</td>
            <td className="py-3 px-6">42</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
