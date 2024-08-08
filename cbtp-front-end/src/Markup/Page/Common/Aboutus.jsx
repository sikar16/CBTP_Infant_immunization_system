import React from 'react'
import img1 from '../../../assets/Screenshot (13).png'
import img2 from '../../../assets/Screenshot (15).png'
import img3 from '../../../assets/Screenshot (16).png'
function Aboutus() {
  return (
    <>
       <section class="overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap items-center justify-between">
      <div class="w-full px-4 lg:w-6/12">
        <div class="-mx-3 flex items-center">
          <div class="w-full px-3 xl:w-1/2">
            <div class="py-3">
              <img src={img1} alt="" class="w-full rounded-2xl" />
            </div>
            <div class="py-3">
              <img src={img2} alt="" class="w-full rounded-2xl" />
            </div>
          </div>
          <div class="w-full px-3 xl:w-1/2">
            <div class="relative z-10 my-4">
              <img src={img3} alt="" class="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div class="mt-10 lg:mt-0">
          <span class="mb-4 block text-lg font-semibold text-primary">Why Choose Us</span>
          <h2 class="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
            Make Mother happy by giving services.
          </h2>
          <p class="mb-5 text-base text-body-color">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, culpa? Ducimus molestias rerum commodi inventore,
             porro aspernatur, reprehenderit itaque ut dicta quae dolore molestiae? A, nam. Dolore eius earum tenetur.
          </p>
          <p class="mb-8 text-base text-body-color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia beatae architecto harum ducimus molestiae deserunt voluptatem. 
            Accusamus deserunt vero dolore excepturi vitae dolorum. Et doloremque recusandae autem voluptatem animi!
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Aboutus