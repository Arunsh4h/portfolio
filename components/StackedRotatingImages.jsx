// components/StackedRotatingImages.js

const StackedRotatingImages = () => {
  return (
    <div className="w-300 h-300 inset">
      {/* <img
        src="/nero.gif" // Relative path to the first image
        alt="First Image"
        className="md:max-w-1/2 rotate-clockwise llll h-auto max-w-full"
      /> */}
      <img
        src="/nero.gif" // Relative path to the second image
        alt="Second Image"
        className="md:max-w-1/2 rotate-anticlockwise absolute top-0 left-0 h-auto max-w-full opacity-50"
      />
    </div>
  )
}

export default StackedRotatingImages
