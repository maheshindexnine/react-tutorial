import React, { useState } from "react";
import { MapPin, Star, Utensils, IndianRupee, Navigation } from "lucide-react";

type HoverImageProps = {
  previewSrc: string; // low-res or placeholder
  actualSrc: string; // heavy image
  alt: string;
};

const RestaurantCard = ({ restaurant }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadImage, setLoadImage] = useState(false);

  return (
    <div
      onMouseEnter={() => setLoadImage(true)}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          // loading="lazy" // load image when card comes into view port
          // src={restaurant.image}
          src={loadImage ? restaurant.image : "/images/image.png"}
          alt={restaurant.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100 blur-0" : "opacity-100 blur-sm"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-semibold text-sm">{restaurant.rating}</span>
        </div>

        {/* Distance Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Navigation className="w-4 h-4" />
          <span className="font-medium text-sm">{restaurant.distance}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Restaurant Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {restaurant.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm">{restaurant.locality}</span>
        </div>

        {/* Address */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {restaurant.address}
        </p>

        {/* Cuisine Tags */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Cuisines</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {restaurant.cuisine.slice(0, 4).map((cuisine, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-200"
              >
                {cuisine}
              </span>
            ))}
            {restaurant.cuisine.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{restaurant.cuisine.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Cost */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-green-600" />
            <span className="text-lg font-bold text-gray-900">
              {restaurant.cost}
            </span>
          </div>

          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Details
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-2xl transition-all duration-300"></div>
    </div>
  );
};

export default RestaurantCard;
