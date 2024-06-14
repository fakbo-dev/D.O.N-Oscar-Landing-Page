"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
// swiper style
import "swiper/css";
import "swiper/css/pagination"

const Testimonials = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20">
            {/* Container */}
            <div className="container mx-auto bg-accent-secondary rounded-[70px] px-6">
                {/* Slider */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full">
                    <SwiperSlide className="h-[400px] swiper">
                        {/* items */}
                        <div className="w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                            <div className="flex gap-4 mb-6">

                                <div>
                                    <h3>Jeremy Vasquez</h3>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ab.</p>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className="h-[400px] swiper">
                        {/* items */}
                        <div className="w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                            <div className="flex gap-4 mb-6">

                                <div>
                                    <h3>Jeremy Vasquez</h3>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ab.</p>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className="h-[400px] swiper">
                        {/* items */}
                        <div className="w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                            <div className="flex gap-4 mb-6">

                                <div>
                                    <h3>Jeremy Vasquez</h3>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ab.</p>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials