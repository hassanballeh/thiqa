const GalleryItem = ({
  src,
  alt,
  text,
  title,
}: {
  src?: string;
  alt: string;
  text?: string;
  title?: string;
}) => {
  return (
    <div className="relative w-full h-full group overflow-hidden">
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full sm:h-[500px] object-cover"
        />
      )}

      {!src && (
        <div className={`w-full h-full  flex items-center justify-center`}>
          {/* Leave empty — overlay comes below */}
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0056B1] bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>

      {/* Text on hover */}
      <div
        className={`absolute inset-0 px-[2px] md:px-4 flex items-center justify-center
    text-white text-start sm:text-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
      >
        <div>
          {title && (
            <h2 className="font-bold text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 text-center">
              {title}
            </h2>
          )}
          {text && (
            <p className="text-xs md:text-lg font-light leading-relaxed max-w-[260px] mx-auto">
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
