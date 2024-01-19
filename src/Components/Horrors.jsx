import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function Horrors() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 1000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>


  <div className="flex gap-10 mt-3 justify-center bg-green-300">
    <div className=" ml-10 mt-3"> 
      <img src="https://th.bing.com/th/id/OIP.fjy0J4oxduE_KEQYBQI6jgHaLY?w=188&h=289&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="" className="w-64 h-100" />
      <p className=" text-center mt-2"><strong>$25</strong></p>
      <p className="border-b border-black mt-2"></p>
    </div>

    <div className="mt-5">
      <img src="https://i5.walmartimages.com/asr/ed27db09-4ba9-45ca-ad61-0674d19f60a9.9b2fbc1bbd4bad70640e21d016072a8a.jpeg" alt="" className="w-64 h-100" />
      <p className=" text-center mt-2"><strong>$17</strong></p>
      <p className="border-b border-black mt-2"></p>
    </div>

    
    <div className="mt-5 mr-10">
      <img src="https://miblart.com/wp-content/uploads/2020/10/Jonathan-Sixtos-scaled.jpg" alt="" className="w-64 h-100" />
      <p className=" text-center mt-2"><strong>$17</strong></p>
      <p className="border-b border-black mt-2"></p>
    </div>


    </div>





      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01  w-full mt-5">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://th.bing.com/th/id/OIP.H1u___cx3otrM_fXOa_wrwAAAA?rs=1&pid=ImgDetMain"
                className="m-auto h-96 w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://redcapepublishing.files.wordpress.com/2021/01/wsm-ebookcover-1.jpg"
                className="m-auto h-96 w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.pinimg.com/originals/ff/e1/a5/ffe1a5a39075f28630f602727632958e.jpg"
                className="m-auto h-96 w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.pinimg.com/originals/f5/1c/cf/f51ccf185e9cca22d207aee2efd91bff.jpg"
                className="m-auto h-96 w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.pinimg.com/736x/cf/bf/aa/cfbfaa0aecfe0ae198675cec6392e74f.jpg"
                className="m-auto h-96 w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}