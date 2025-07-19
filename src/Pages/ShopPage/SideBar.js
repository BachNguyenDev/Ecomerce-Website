import React, { useState } from "react";

const Sidebar = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleSelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category); // truyền lên ShopPage
  };
  const categories = [
    {
      title: "APPLE",
      subcategories: ["All"],
    },
    {
      title: "IPHONE & MAC",
      subcategories: ["iphone", "ipad", "macbook"],
    },
    {
      title: "WIRELESS",
      subcategories: ["airpod", "watch"],
    },
    {
      title: "OTHER",
      subcategories: ["Mouse", "Keyboard", "Other"],
    },
  ];

  return (
    <div className="w-64 p-4 bg-white shadow-sm border rounded-md">
      <h2 className="font-bold text-lg mb-4">CATEGORIES</h2>

      {categories.map((cat) => (
        <div key={cat.title} className="mb-3">
          <div className="font-semibold text-sm uppercase text-gray-700 mb-1">
            {cat.title}
          </div>
          <ul className="ml-2">
            {cat.subcategories.map((sub,index) => (
              <li key={index}>
                <button
                  onClick={() => handleSelect(sub)} // tại sao lại re-render ?
                  style={{textTransform: "uppercase",background:"none", border:"none"}}
                  className={`text-sm w-full text-left py-1 px-2 rounded hover:bg-gray-200 transition ${
                    selectedCategory === sub
                      ? "bg-black text-white font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {sub}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
