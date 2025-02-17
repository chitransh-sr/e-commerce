import { Carousel } from "@material-tailwind/react";

export default function CarouselApp() {
  return (
    <div className="container mx-auto px-4">
      <Carousel 
        className="rounded-xl w-full h-[500px] my-5"
        autoplay={true} 
        loop={true}
        autoplayDelay={10000} 
      >
        <img
          src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlJTIwc2FsZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="50% off flash sale banner with shopping bags"
          className="h-full w-full  rounded-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ubGluZSUyMHNob3BwaW5nJTIwZGVhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Summer sale promotion with price tags"
          className="h-full w-full  rounded-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb21tZXJjZSUyMGRlYWxzJTIwd2l0aCUyMHRleHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Special offers with text overlay"
          className="h-full w-full  rounded-xl"
        />
      </Carousel>
    </div>
  );
}